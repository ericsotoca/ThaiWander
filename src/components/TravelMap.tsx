import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { ItineraryItem, CategoryType } from '../types';
import { THAI_TRANSLATIONS } from '../translations';
import { DEFAULT_ITINERARY } from '../initialData';
import { estimateRoadTripStats } from '../utils/distance';

interface TravelMapProps {
  items: ItineraryItem[];
  selectedItemId: string | null;
  onItemSelect: (id: string) => void;
  isLeftCollapsed?: boolean;
  isRightCollapsed?: boolean;
  lang?: 'fr' | 'th';
}

// Map categories to Tailwind/CSS colors
const CATEGORY_COLORS: Record<CategoryType, { bg: string; border: string; text: string; hex: string }> = {
  Camping: {
    bg: 'bg-emerald-500',
    border: 'border-emerald-200',
    text: 'text-emerald-950',
    hex: '#10b981'
  },
  Lodging: {
    bg: 'bg-indigo-500',
    border: 'border-indigo-200',
    text: 'text-indigo-950',
    hex: '#6366f1'
  },
  Attraction: {
    bg: 'bg-amber-500',
    border: 'border-amber-200',
    text: 'text-amber-950',
    hex: '#f59e0b'
  },
  Restaurant: {
    bg: 'bg-rose-500',
    border: 'border-rose-200',
    text: 'text-rose-950',
    hex: '#f43f5e'
  },
  Activity: {
    bg: 'bg-purple-500',
    border: 'border-purple-200',
    text: 'text-purple-950',
    hex: '#a855f7'
  }
};

// Create elegant SVG icons based on category
const getCategorySvg = (category: CategoryType) => {
  switch (category) {
    case 'Camping':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m8 22 4-10 4 10"/><path d="M12 12V2"/><path d="M12 5h8l-2 3 2 3h-8"/></svg>`;
    case 'Lodging':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>`;
    case 'Attraction':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    case 'Restaurant':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`;
    case 'Activity':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2 2-2 2-2 2"/><path d="m16.2 7.8-4 4-2 2"/><path d="M16.2 7.8 12 12l-4 4"/></svg>`;
  }
};

export default function TravelMap({ 
  items, 
  selectedItemId, 
  onItemSelect, 
  isLeftCollapsed = false, 
  isRightCollapsed = false,
  lang = 'fr' 
}: TravelMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});
  const polylinesRef = useRef<L.Polyline[]>([]);

  // Translate single item for map popups
  const getTranslatedItem = (item: ItineraryItem) => {
    if (lang === 'fr') return item;

    const match = Object.keys(THAI_TRANSLATIONS).find(
      key => item.placeName.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(item.placeName.toLowerCase())
    );

    if (match) {
      const trans = THAI_TRANSLATIONS[match];
      const defaultMatch = DEFAULT_ITINERARY.find(d => d.placeName === item.placeName);
      return {
        ...item,
        placeName: trans.placeName,
        notes: item.notes === defaultMatch?.notes ? trans.notes : item.notes,
        detailedTips: trans.detailedTips,
        maxInfo: trans.maxInfo
      };
    }
    return item;
  };

  // Initialize the map once
  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      // Thailand Center focus with zoom constraints and boundary restrictions
      const bounds = L.latLngBounds([5.0, 97.0], [21.5, 106.0]);
      mapRef.current = L.map(mapContainerRef.current, {
        zoomControl: false,
        attributionControl: false,
        minZoom: 5,
        maxZoom: 18,
        maxBounds: bounds,
        maxBoundsViscosity: 1.0
      }).setView([13.7563, 100.5018], 6);

      // Add elegant standard OpenStreetMap layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      // Custom zoom control placement (bottom-right)
      L.control.zoom({
        position: 'bottomright'
      }).addTo(mapRef.current);

      // Add minimal attribution
      L.control.attribution({
        position: 'bottomleft',
        prefix: 'ThaiWander'
      }).addTo(mapRef.current);

      // Ensure Leaflet calculates sizes properly after DOM mount
      setTimeout(() => {
        if (mapRef.current) {
          mapRef.current.invalidateSize();
          mapRef.current.setView([13.7563, 100.5018], 6);
        }
      }, 300);
    }

    return () => {
      // Cleanup map on unmount
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Trigger map invalidateSize when panels are toggled to prevent grey map zones
  useEffect(() => {
    if (mapRef.current) {
      setTimeout(() => {
        mapRef.current?.invalidateSize({ animate: true });
      }, 300);
    }
  }, [isLeftCollapsed, isRightCollapsed]);

  // Update markers, lines, and viewport bounds when itinerary items or language updates
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach(marker => {
      marker.remove();
    });
    markersRef.current = {};

     // Clear existing polylines
     polylinesRef.current.forEach(p => p.remove());
     polylinesRef.current = [];

    if (items.length === 0) return;

    const latLngs: L.LatLngExpression[] = [];

    // Filter items that have valid lat/lng coordinates
    const validItems = items.filter(item => item.lat && item.lng);

    validItems.forEach((item, index) => {
      const colorSet = CATEGORY_COLORS[item.category] || CATEGORY_COLORS.Camping;
      const isSelected = item.id === selectedItemId;

      // Translate item
      const displayItem = getTranslatedItem(item);

      // Define custom divIcon to represent marker
      const markerHtml = `
        <div class="relative flex items-center justify-center">
          <!-- Pulse shadow if selected -->
          ${isSelected ? `
            <div class="absolute w-12 h-12 rounded-full bg-slate-900/15 animate-ping duration-1000"></div>
            <div class="absolute -inset-2 rounded-full border-2 border-dashed border-slate-700 animate-spin" style="animation-duration: 8s;"></div>
          ` : ''}
          
          <!-- Outer Ring -->
          <div class="flex h-9 w-9 items-center justify-center rounded-full border-2 bg-white shadow-md transition-all duration-200 ${isSelected ? 'border-slate-800 scale-110 z-50' : 'border-slate-200 hover:scale-105'}">
            <!-- Solid Colored Core -->
            <div class="flex h-7 w-7 items-center justify-center rounded-full text-white ${colorSet.bg}">
              ${getCategorySvg(item.category)}
            </div>
          </div>
          
          <!-- Small Day badge on top of marker -->
          <div class="absolute -top-3.5 bg-slate-800 text-[10px] font-bold text-white px-1.5 py-0.5 rounded-full border border-white shadow-sm whitespace-nowrap z-40">
            ${lang === 'fr' ? 'J' : 'วันที'}${item.day}
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: markerHtml,
        className: 'custom-leaflet-marker',
        iconSize: [36, 36],
        iconAnchor: [18, 18]
      });

      const marker = L.marker([item.lat, item.lng], { icon: customIcon })
        .addTo(map)
        .on('click', () => {
          onItemSelect(item.id);
        });

      // Localized labels for popup
      const durationLabel = lang === 'fr' ? 'Durée' : 'ระยะเวลา';
      const budgetLabel = lang === 'fr' ? 'Budget' : 'งบประมาณ';
      const dayLabel = lang === 'fr' ? `Jour ${item.day}` : `วันที่ ${item.day}`;
      const expertLabel = lang === 'fr' ? "💡 CONSEIL D'EXPERT" : "💡 คำแนะนำพิเศษ";
      const descLabel = lang === 'fr' ? "ℹ️ DESCRIPTION" : "ℹ️ ข้อมูลสถานที่";
      const gpsLabel = lang === 'fr' ? "🚗 GPS (Ouvrir dans Google Maps)" : "🚗 นำทาง (เปิด Google Maps)";

      // Bind a nice popup with photos, advice, and detailed info
      const popupContent = `
        <div class="p-1 font-sans max-w-[270px]">
          ${displayItem.imageUrl ? `
            <div class="relative w-full h-[110px] rounded-lg overflow-hidden mb-2 bg-slate-100">
              <img 
                src="${displayItem.imageUrl}" 
                alt="${displayItem.placeName}" 
                class="w-full h-full object-cover" 
                style="display: block; border-radius: 8px;" 
                referrerpolicy="no-referrer" 
              />
            </div>
          ` : ''}
          <div class="flex items-center gap-1.5 mb-1.5">
            <span class="text-[9px] tracking-wider font-extrabold uppercase px-1.5 py-0.5 rounded ${colorSet.bg} text-white">
              ${displayItem.category}
            </span>
            <span class="text-[10px] font-bold text-slate-400">${dayLabel}</span>
          </div>
          <h3 class="font-extrabold text-xs text-slate-800 leading-snug mb-1">${displayItem.placeName}</h3>
          
          <div class="space-y-1.5 text-[11px] text-slate-600">
            ${displayItem.duration ? `<p class="m-0 leading-tight">⏱️ <strong>${durationLabel} :</strong> ${displayItem.duration}</p>` : ''}
            ${displayItem.budget !== undefined ? `<p class="m-0 leading-tight">🪙 <strong>${budgetLabel} :</strong> ${displayItem.budget} THB</p>` : ''}
            ${displayItem.notes ? `<p class="m-0 leading-tight italic bg-slate-50 p-1.5 rounded border-l-2 border-slate-300">${displayItem.notes}</p>` : ''}
            
            ${displayItem.detailedTips ? `
              <div class="mt-2 pt-1.5 border-t border-slate-100">
                <span class="text-[9px] font-extrabold text-emerald-600 block mb-0.5">${expertLabel} :</span>
                <p class="m-0 text-[10px] leading-snug text-slate-600 bg-emerald-50/50 p-1.5 rounded border-l-2 border-emerald-400">${displayItem.detailedTips}</p>
              </div>
            ` : ''}
            
            ${displayItem.maxInfo ? `
              <div class="mt-1.5 pt-1.5 border-t border-slate-100">
                <span class="text-[9px] font-extrabold text-sky-600 block mb-0.5">${descLabel} :</span>
                <p class="m-0 text-[10px] leading-snug text-slate-600">${displayItem.maxInfo}</p>
              </div>
            ` : ''}
            
            <div class="mt-2.5 pt-2 border-t border-slate-100">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=${item.lat},${item.lng}" 
                target="_blank" 
                rel="noreferrer" 
                class="flex items-center justify-center gap-1.5 text-center bg-slate-800 hover:bg-slate-900 text-white text-[10px] font-extrabold py-1.5 px-2.5 rounded-lg transition-all"
                style="display: flex; text-decoration: none;"
              >
                <span>${gpsLabel}</span>
              </a>
            </div>
          </div>
        </div>
      `;
      marker.bindPopup(popupContent, { offset: [0, -10], maxWidth: 280 });

      markersRef.current[item.id] = marker;
      latLngs.push([item.lat, item.lng]);
    });

    // Draw route connecting points in sequence with dual layer driving aesthetic
    if (validItems.length > 1) {
      for (let i = 0; i < validItems.length - 1; i++) {
        const origin = validItems[i];
        const dest = validItems[i + 1];
        if (origin.lat && origin.lng && dest.lat && dest.lng) {
          const coords: L.LatLngExpression[] = [
            [origin.lat, origin.lng],
            [dest.lat, dest.lng]
          ];
          const stats = estimateRoadTripStats(origin.lat, origin.lng, dest.lat, dest.lng);
          const gmapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${dest.lat},${dest.lng}&travelmode=driving`;

          // Translated step names for popup
          const transOrigin = getTranslatedItem(origin);
          const transDest = getTranslatedItem(dest);

          // 1. Solid background road path
          const segmentBg = L.polyline(coords, {
            color: '#059669', // Emerald 600
            weight: 7,
            opacity: 0.45,
            lineCap: 'round',
            lineJoin: 'round',
            className: 'cursor-pointer hover:opacity-80 transition-all'
          }).addTo(map);

          // 2. Dashed inner GPS styling
          const segmentFg = L.polyline(coords, {
            color: '#1e293b', // Slate 800
            weight: 2.5,
            opacity: 0.85,
            dashArray: '8, 8',
            lineCap: 'round',
            lineJoin: 'round',
            className: 'cursor-pointer'
          }).addTo(map);

          // Popup content
          const popupContent = `
            <div class="p-2 font-sans text-center max-w-[220px]">
              <h4 class="font-extrabold text-[11px] text-slate-800 mb-1 leading-snug">
                🚗 ${transOrigin.placeName} <br/>➔ ${transDest.placeName}
              </h4>
              <p class="text-[10px] text-slate-500 mb-2.5">
                <strong>${stats.km} km</strong> • <strong>${stats.hours}h ${lang === 'fr' ? 'de route' : 'ขับรถ'}</strong>
              </p>
              <a href="${gmapsUrl}" 
                 target="_blank" 
                 rel="noreferrer" 
                 class="inline-flex items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-extrabold py-1.5 px-3 rounded-lg transition-all"
                 style="display: inline-flex; text-decoration: none; color: white;"
              >
                <span>${lang === 'fr' ? "Voir l'itinéraire Google Maps" : "ดูเส้นทาง Google Maps"} ➔</span>
              </a>
            </div>
          `;

          segmentBg.bindPopup(popupContent, { closeButton: false, offset: [0, 0] });
          segmentFg.bindPopup(popupContent, { closeButton: false, offset: [0, 0] });

          // Add subtle hover animations
          segmentFg.on('mouseover', () => {
            segmentBg.setStyle({ color: '#10b981', weight: 11, opacity: 0.7 });
          });
          segmentFg.on('mouseout', () => {
            segmentBg.setStyle({ color: '#059669', weight: 7, opacity: 0.45 });
          });

          polylinesRef.current.push(segmentBg, segmentFg);
        }
      }
    }

    // Auto fit bounds to show all markers with proper padding, if not manually looking at an item
    if (validItems.length > 0 && !selectedItemId) {
      setTimeout(() => {
        if (!mapRef.current) return;
        mapRef.current.invalidateSize();
        const group = L.featureGroup(Object.values(markersRef.current));
        if (group.getLayers().length > 0) {
          mapRef.current.fitBounds(group.getBounds().pad(0.12), { animate: true });
        }
      }, 350);
    }
  }, [items, selectedItemId, onItemSelect, lang]);

  // Fly to selected marker when selectedItemId changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !selectedItemId) return;

    const selectedItem = items.find(item => item.id === selectedItemId);
    if (selectedItem && selectedItem.lat && selectedItem.lng) {
      map.setView([selectedItem.lat, selectedItem.lng], 11, {
        animate: true,
        duration: 1.2
      });

      // Open its popup after a small delay to let transition finish
      setTimeout(() => {
        const marker = markersRef.current[selectedItemId];
        if (marker) {
          marker.openPopup();
        }
      }, 350);
    }
  }, [selectedItemId, items]);

  return (
    <div className="relative w-full h-full bg-slate-50 overflow-hidden" id="thai-map-canvas">
      {/* Container for the Leaflet Map */}
      <div ref={mapContainerRef} className="w-full h-full z-10" />

      {/* Floating Info Overlay about Road Trip Loop */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-100 shadow-lg z-20 pointer-events-none max-w-xs transition-opacity duration-300">
        <h4 className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
          <span className="flex h-2 w-2 rounded-full bg-slate-900"></span>
          {lang === 'fr' ? "Itinéraire de Thaïlande" : "เส้นทางเดินทางในประเทศไทย"}
        </h4>
        <p className="text-[10px] text-slate-500 mt-1">
          {lang === 'fr' 
            ? `${items.length} étapes de Bangkok au grand Nord de Chiang Rai.` 
            : `${items.length} จุดแวะพัก เดินทางจากกรุงเทพฯ สู่เชียงรายสุดงดงาม`}
        </p>
      </div>

      {/* Quick category legend in bottom-left */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl border border-slate-100 shadow-md z-20 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-slate-600 max-w-[260px] md:max-w-xs pointer-events-auto">
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white shadow-sm"></span>
          <span>{lang === 'fr' ? "Camping" : "กางเต็นท์"}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 border border-white shadow-sm"></span>
          <span>{lang === 'fr' ? "Hébergement" : "ที่พักแรม"}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 border border-white shadow-sm"></span>
          <span>{lang === 'fr' ? "Attraction" : "สถานที่ท่องเที่ยว"}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 border border-white shadow-sm"></span>
          <span>{lang === 'fr' ? "Resto" : "ร้านอาหาร"}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500 border border-white shadow-sm"></span>
          <span>{lang === 'fr' ? "Activité" : "กิจกรรม"}</span>
        </div>
      </div>
    </div>
  );
}
