/**
 * Calculates the Haversine (straight line) distance between two sets of coordinates.
 */
export function getHaversineDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  if (!lat1 || !lng1 || !lat2 || !lng2) return 0;
  
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}

/**
 * Estimates the real road distance in kilometers (usually ~1.3x straight-line distance due to curves)
 * and the driving duration in hours/minutes.
 */
export function estimateRoadTripStats(lat1: number, lng1: number, lat2: number, lng2: number) {
  const geoDist = getHaversineDistance(lat1, lng1, lat2, lng2);
  if (geoDist === 0) {
    return { km: 0, hours: 0, minutes: 0 };
  }
  
  // Road winding factor in Thailand is typically ~1.3x the straight line distance
  const roadKm = Math.round(geoDist * 1.3);
  
  // Average road trip speed in Thailand (mix of highways, local roads, and mountain trails) is ~75 km/h
  const minutes = Math.round((roadKm / 75) * 60);
  const hours = parseFloat((minutes / 60).toFixed(1));
  
  return {
    km: roadKm,
    hours: hours,
    minutes: minutes
  };
}

/**
 * Calculates the total cumulative road distance and travel time for an entire list of itinerary items.
 */
export function calculateTotalItineraryStats(items: { lat?: number; lng?: number }[]) {
  let totalKm = 0;
  let totalMinutes = 0;
  
  const validItems = items.filter(item => item.lat && item.lng);
  
  for (let i = 0; i < validItems.length - 1; i++) {
    const p1 = validItems[i];
    const p2 = validItems[i + 1];
    if (p1.lat && p1.lng && p2.lat && p2.lng) {
      const stats = estimateRoadTripStats(p1.lat, p1.lng, p2.lat, p2.lng);
      totalKm += stats.km;
      totalMinutes += stats.minutes;
    }
  }
  
  const totalHours = parseFloat((totalMinutes / 60).toFixed(1));
  
  return {
    totalKm,
    totalHours,
    totalMinutes
  };
}
