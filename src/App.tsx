import { useState, useEffect } from 'react';
import { ItineraryItem, TripSettings } from './types';
import { DEFAULT_ITINERARY, DEFAULT_TRIP_SETTINGS, PLACE_COORDINATES } from './initialData';
import TripHeader from './components/TripHeader';
import ItineraryList from './components/ItineraryList';
import TravelMap from './components/TravelMap';
import PdfExportModal from './components/PdfExportModal';
import { Compass, RefreshCw, FileDown, Layers, Sparkles, MessageSquare, Map, ListTodo, HelpCircle, ChevronLeft, ChevronRight, Globe } from 'lucide-react';

export default function App() {
  // Global Language state ('fr' | 'th')
  const [lang, setLang] = useState<'fr' | 'th'>(() => {
    const saved = localStorage.getItem('thaiwander_lang');
    return (saved === 'th' || saved === 'fr') ? saved : 'fr';
  });

  // Itinerary and Trip Settings state, loaded from LocalStorage or default values
  // Features auto-healing to merge missing fields like imageUrl/tips if the user had older localStorage state
  const [items, setItems] = useState<ItineraryItem[]>(() => {
    const saved = localStorage.getItem('thaiwander_itinerary');
    if (saved) {
      try {
        const parsed: ItineraryItem[] = JSON.parse(saved);
        return parsed.map(item => {
          const defaultMatch = DEFAULT_ITINERARY.find(d => d.placeName === item.placeName);
          if (defaultMatch) {
            return {
              ...defaultMatch, // get all premium properties
              ...item, // override with user's specific edits
              imageUrl: item.imageUrl || defaultMatch.imageUrl,
              detailedTips: item.detailedTips || defaultMatch.detailedTips,
              maxInfo: item.maxInfo || defaultMatch.maxInfo
            };
          }
          return item;
        });
      } catch (e) {
        return DEFAULT_ITINERARY;
      }
    }
    return DEFAULT_ITINERARY;
  });

  const [settings, setSettings] = useState<TripSettings>(() => {
    const saved = localStorage.getItem('thaiwander_settings');
    return saved ? JSON.parse(saved) : DEFAULT_TRIP_SETTINGS;
  });

  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  // Collapsible Desktop Panels state
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);

  // Mobile View Tabs state: 'list' | 'map'
  const [mobileTab, setMobileTab] = useState<'list' | 'map'>('list');

  // Sync state with LocalStorage on update
  useEffect(() => {
    localStorage.setItem('thaiwander_itinerary', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('thaiwander_settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('thaiwander_lang', lang);
  }, [lang]);

  // Handle adding an itinerary item (with 100% client-side geocoding for static/GitHub hosting)
  const handleAddItem = async (newItem: Omit<ItineraryItem, 'id' | 'lat' | 'lng'>) => {
    try {
      // 1. Check if we already have preset coordinates in our local dictionary
      const presetCoord = PLACE_COORDINATES[newItem.placeName];
      let lat = presetCoord?.lat;
      let lng = presetCoord?.lng;

      if (!lat || !lng) {
        // Query OpenStreetMap Nominatim directly from the client side!
        const searchUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(newItem.placeName + ", Thailand")}&format=json&limit=1`;
        const response = await fetch(searchUrl, {
          headers: { 'Accept-Language': 'fr,en' }
        });
        const data = await response.json();
        if (data && data.length > 0) {
          lat = parseFloat(data[0].lat);
          lng = parseFloat(data[0].lon);
        } else {
          // Default fallback coordinates around Bangkok
          lat = 13.7563 + (Math.random() - 0.5) * 0.3;
          lng = 100.5018 + (Math.random() - 0.5) * 0.3;
        }
      }

      // Check if we can find default images or tips from DEFAULT_ITINERARY matching the name
      const defaultMatch = DEFAULT_ITINERARY.find(
        d => d.placeName.toLowerCase().includes(newItem.placeName.toLowerCase()) || 
             newItem.placeName.toLowerCase().includes(d.placeName.toLowerCase())
      );

      const itemWithId: ItineraryItem = {
        ...newItem,
        id: `item-${Date.now()}`,
        lat,
        lng,
        notes: newItem.notes || (defaultMatch ? defaultMatch.notes : (lang === 'fr' ? "Nouvelle étape ajoutée à l'itinéraire." : "เพิ่มสถานที่ใหม่แล้ว")),
        imageUrl: defaultMatch?.imageUrl || "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80",
        detailedTips: defaultMatch?.detailedTips || (lang === 'fr' ? "Préparez votre équipement et vérifiez la météo locale." : "เตรียมอุปกรณ์และตรวจสอบสภาพอากาศก่อนเดินทาง"),
        maxInfo: defaultMatch?.maxInfo || (lang === 'fr' ? "Profitez de cette étape pour vous ressourcer au cœur de la Thaïlande." : "เพลิดเพลินไปกับธรรมชาติอันสวยงาม")
      };

      // Set items and sort them sequentially by Day
      setItems(prev => {
        const updated = [...prev, itemWithId];
        return updated.sort((a, b) => a.day - b.day);
      });

      // Highlight the newly added destination on map
      setSelectedItemId(itemWithId.id);
    } catch (err) {
      console.error("Geocoding failed. Adding item with default coordinates:", err);
      // Fallback
      const fallbackItem: ItineraryItem = {
        ...newItem,
        id: `item-${Date.now()}`,
        lat: 13.7563 + (Math.random() - 0.5) * 0.3,
        lng: 100.5018 + (Math.random() - 0.5) * 0.3,
        notes: newItem.notes || "Coordonnées par défaut.",
        imageUrl: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80"
      };
      setItems(prev => [...prev, fallbackItem].sort((a, b) => a.day - b.day));
      setSelectedItemId(fallbackItem.id);
    }
  };

  // Handle deleting an item
  const handleDeleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
    if (selectedItemId === id) {
      setSelectedItemId(null);
    }
  };

  // Handle updating details of an item
  const handleUpdateItem = (updatedItem: ItineraryItem) => {
    setItems(prev => {
      const index = prev.findIndex(item => item.id === updatedItem.id);
      if (index === -1) return prev;
      const copy = [...prev];
      copy[index] = updatedItem;
      // Sort in case they edited the day
      return copy.sort((a, b) => a.day - b.day);
    });
  };

  // Handle moving items up/down chronologically
  const handleReorderItem = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === items.length - 1) return;

    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    setItems(prev => {
      const copy = [...prev];
      const temp = copy[index];
      copy[index] = copy[targetIndex];
      copy[targetIndex] = temp;

      // Adjust Day values if needed to stay logical
      const currentDay = copy[targetIndex].day;
      const targetDay = copy[index].day;
      copy[index].day = currentDay;
      copy[targetIndex].day = targetDay;

      return copy;
    });
  };

  // Reset to default trip itinerary
  const handleResetItinerary = () => {
    if (confirm("Voulez-vous réinitialiser l'itinéraire de Thaïlande par défaut ? Toutes vos modifications locales seront écrasées.")) {
      setItems(DEFAULT_ITINERARY);
      setSettings(DEFAULT_TRIP_SETTINGS);
      setSelectedItemId(null);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-50 overflow-hidden font-sans text-slate-800" id="thaiwander-app">
      {/* Brand Top bar */}
      <header className="bg-slate-900 text-white h-14 shrink-0 flex items-center justify-between px-6 border-b border-slate-800 z-30">
        <div className="flex items-center gap-2.5">
          <div className="bg-emerald-500 p-1.5 rounded-lg text-white">
            <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '30s' }} />
          </div>
          <div>
            <h1 className="text-sm font-black uppercase tracking-wider flex items-center gap-1.5 font-serif">
              ThaiWander
              <span className="text-[9px] bg-emerald-500/20 text-emerald-300 font-bold px-1.5 py-0.5 rounded-full border border-emerald-500/30">CAMPING</span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Dual Language Switch Button */}
          <button
            onClick={() => setLang(prev => prev === 'fr' ? 'th' : 'fr')}
            className="text-[10px] bg-slate-800 hover:bg-slate-700 text-white font-extrabold px-3 py-1.5 rounded-lg border border-slate-700 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm hover:border-slate-500"
            title={lang === 'fr' ? "Passer en Thaïlandais (ภาษาไทย)" : "Passer en Français"}
          >
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>{lang === 'fr' ? "FR 🇫🇷" : "TH 🇹🇭"}</span>
          </button>

          <button
            onClick={() => setIsPdfModalOpen(true)}
            className="text-[10px] bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1.5 rounded-lg border border-emerald-500/50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-md shadow-emerald-950/20"
            title={lang === 'fr' ? "Exporter l'itinéraire en PDF" : "ส่งออกกำหนดการเดินทางเป็น PDF"}
          >
            <FileDown className="w-3 h-3" />
            <span>{lang === 'fr' ? "Exporter en PDF" : "ส่งออก PDF"}</span>
          </button>

          <button
            onClick={handleResetItinerary}
            className="text-[10px] bg-slate-800 hover:bg-slate-700 hover:text-emerald-400 text-slate-300 font-bold px-3 py-1.5 rounded-lg border border-slate-700/60 transition-colors flex items-center gap-1 cursor-pointer"
            title={lang === 'fr' ? "Réinitialiser l'itinéraire" : "รีเซ็ตการเดินทาง"}
          >
            <RefreshCw className="w-3 h-3" />
            <span className="hidden sm:inline">{lang === 'fr' ? "Réinitialiser" : "เริ่มใหม่"}</span>
          </button>

        </div>
      </header>

      {/* Main App Layout */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* DESKTOP LAYOUT (2 Pane Layout: Itinerary List + Map) */}
        <div className="hidden lg:flex w-full h-full">
          {/* Left Panel: Itinerary and details (38% width) */}
          <div className={`transition-all duration-300 h-full flex flex-col bg-white overflow-hidden ${
            isLeftCollapsed ? 'w-0 border-none' : 'w-[38%] border-r border-slate-200'
          }`}>
            <TripHeader
              settings={settings}
              items={items}
              onUpdateSettings={setSettings}
              lang={lang}
            />
            <div className="flex-1 overflow-hidden">
              <ItineraryList
                items={items}
                selectedItemId={selectedItemId}
                startDate={settings.startDate}
                onItemSelect={setSelectedItemId}
                onAddItem={handleAddItem}
                onDeleteItem={handleDeleteItem}
                onUpdateItem={handleUpdateItem}
                onReorderItem={handleReorderItem}
                lang={lang}
              />
            </div>
          </div>

          {/* Center Panel: Map (dynamically expanding) */}
          <div className="flex-1 h-full relative">
            {/* Collapse Left Button */}
            <button
              onClick={() => setIsLeftCollapsed(!isLeftCollapsed)}
              className="absolute z-20 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 rounded-lg p-2 shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center"
              style={{ left: '16px', top: '80px' }}
              title={isLeftCollapsed ? "Afficher l'itinéraire" : "Masquer l'itinéraire"}
            >
              {isLeftCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>

            <TravelMap
              items={items}
              selectedItemId={selectedItemId}
              onItemSelect={setSelectedItemId}
              isLeftCollapsed={isLeftCollapsed}
              isRightCollapsed={true}
              lang={lang}
            />
          </div>
        </div>

        {/* MOBILE & TABLET LAYOUT (Togglable Tab Views) */}
        <div className="flex lg:hidden flex-col w-full h-full pb-14">
          {/* Scrollable Main Segment */}
          <div className="flex-1 overflow-hidden relative">
            {mobileTab === 'list' && (
              <div className="h-full flex flex-col bg-white overflow-y-auto">
                <TripHeader
                  settings={settings}
                  items={items}
                  onUpdateSettings={setSettings}
                  lang={lang}
                />
                <div className="flex-1">
                  <ItineraryList
                    items={items}
                    selectedItemId={selectedItemId}
                    startDate={settings.startDate}
                    onItemSelect={setSelectedItemId}
                    onAddItem={handleAddItem}
                    onDeleteItem={handleDeleteItem}
                    onUpdateItem={handleUpdateItem}
                    onReorderItem={handleReorderItem}
                    lang={lang}
                  />
                </div>
              </div>
            )}

            {mobileTab === 'map' && (
              <div className="h-full w-full">
                <TravelMap
                  items={items}
                  selectedItemId={selectedItemId}
                  onItemSelect={setSelectedItemId}
                  lang={lang}
                />
              </div>
            )}
          </div>

          {/* Bottom Navigation bar for mobile viewports */}
          <nav className="absolute bottom-0 left-0 right-0 h-14 bg-white border-t border-slate-200 shadow-lg z-30 flex items-stretch">
            <button
              onClick={() => setMobileTab('list')}
              className={`flex-1 flex flex-col items-center justify-center gap-1 cursor-pointer transition-colors ${
                mobileTab === 'list' ? 'text-emerald-600 font-bold' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <ListTodo className="w-5 h-5" />
              <span className="text-[10px]">Itinéraire</span>
            </button>
            <button
              onClick={() => setMobileTab('map')}
              className={`flex-1 flex flex-col items-center justify-center gap-1 cursor-pointer transition-colors ${
                mobileTab === 'map' ? 'text-emerald-600 font-bold' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Map className="w-5 h-5" />
              <span className="text-[10px]">Carte</span>
            </button>
          </nav>
        </div>
      </div>

      <PdfExportModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        settings={settings}
        items={items}
        defaultLang={lang}
      />
    </div>
  );
}
