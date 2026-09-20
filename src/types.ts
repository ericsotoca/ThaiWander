export type CategoryType = 'Lodging' | 'Camping' | 'Attraction' | 'Restaurant' | 'Activity';

export interface ItineraryItem {
  id: string;
  placeName: string;
  day: number;
  category: CategoryType;
  notes: string;
  lat: number;
  lng: number;
  duration?: string; // e.g., "2h", "1 nuit"
  budget?: number; // in THB
  imageUrl?: string;
  detailedTips?: string;
  maxInfo?: string;
}

export interface TripSettings {
  title: string;
  description: string;
  startDate: string;
}

export interface AIRecommendation {
  placeName: string;
  recommendations: string[];
  tips: string;
  bestTime: string;
}

export interface TravelChat {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
