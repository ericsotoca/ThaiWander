import { useState } from 'react';
import { TripSettings, ItineraryItem } from '../types';
import { Calendar, Edit3, Save, MapPin, Compass, Wallet, Tent, Car } from 'lucide-react';
import { ROUTE_TEMPLATES } from '../presetsData';

interface TripHeaderProps {
  settings: TripSettings;
  items: ItineraryItem[];
  onUpdateSettings: (settings: TripSettings) => void;
  lang?: 'fr' | 'th';
  selectedRouteId: string;
  selectedWeeks: 2 | 4 | 6;
  onSelectRoute: (routeId: string) => void;
  onSelectWeeks: (weeks: 2 | 4 | 6) => void;
}

export default function TripHeader({ 
  settings, 
  items, 
  onUpdateSettings, 
  lang = 'fr',
  selectedRouteId,
  selectedWeeks,
  onSelectRoute,
  onSelectWeeks
}: TripHeaderProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(settings.title);
  const [description, setDescription] = useState(settings.description);
  const [startDate, setStartDate] = useState(settings.startDate);

  const handleSave = () => {
    onUpdateSettings({
      title,
      description,
      startDate
    });
    setIsEditing(false);
  };

  // Generate turn-by-turn driving Google Maps route linking all steps in sequence
  const getGoogleMapsDirectionsLink = () => {
    if (items.length === 0) return '#';
    const sortedItems = [...items].sort((a, b) => a.day - b.day);
    const validItems = sortedItems.filter(item => item.lat && item.lng);
    if (validItems.length === 0) return '#';
    
    const origin = `${validItems[0].lat},${validItems[0].lng}`;
    const destination = `${validItems[validItems.length - 1].lat},${validItems[validItems.length - 1].lng}`;
    
    if (validItems.length <= 2) {
      return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
    }
    
    const waypoints = validItems.slice(1, -1).map(item => `${item.lat},${item.lng}`).join('|');
    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&waypoints=${encodeURIComponent(waypoints)}&travelmode=driving`;
  };

  // Compute statistics
  const totalDays = items.length > 0 ? Math.max(...items.map(it => it.day)) : 0;
  const campingCount = items.filter(it => it.category === 'Camping').length;
  const lodgingCount = items.filter(it => it.category === 'Lodging').length;
  const totalBudget = items.reduce((sum, it) => sum + (it.budget || 0), 0);

  // Fallback default translations
  const displayTitle = lang === 'th' && settings.title === "Road Trip Camping en Thaïlande"
    ? "โรดทริปแคมป์ปิ้งในประเทศไทย"
    : settings.title;

  const displayDescription = lang === 'th' && settings.description === "Un road trip nature exceptionnel à travers les parcs nationaux, les montagnes et les temples sacrés de Thaïlande."
    ? "โรดทริปธรรมชาติสุดพิเศษผ่านอุทยานแห่งชาติ ภูเขา และวัดศักดิ์สิทธิ์ของประเทศไทย"
    : settings.description;

  return (
    <div className="relative bg-white border-b border-slate-100 shadow-sm" id="trip-header">
      {/* Visual Top Accent - Warm Thailand mountain/forest aesthetic */}
      <div className="h-44 w-full bg-slate-900 relative overflow-hidden flex items-end">
        {/* Beautiful high-quality fallback visual background gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-800 opacity-90"></div>
        
        {/* Abstract Thai mountain graphic styling */}
        <div className="absolute bottom-0 right-0 left-0 h-24 bg-gradient-to-t from-white/10 to-transparent"></div>
        <div className="absolute top-6 right-8 text-white/5 font-serif text-8xl font-bold select-none pointer-events-none">
          {lang === 'fr' ? "THAÏLANDE" : "ประเทศไทย"}
        </div>

        {/* Content overlaid on banner */}
        <div className="relative z-10 w-full px-6 pb-5 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-2 mb-2 text-emerald-400 font-medium text-xs tracking-wider uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>{lang === 'fr' ? "Planificateur Road Trip & Camping" : "เครื่องมือวางแผนโรดทริปและแคมป์ปิ้ง"}</span>
            </div>
            
            {isEditing ? (
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="text-2xl md:text-3xl font-extrabold bg-white/10 border border-white/20 rounded px-2.5 py-1 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 w-full font-serif"
              />
            ) : (
              <h1 className="text-2xl md:text-3xl font-extrabold text-white font-serif tracking-tight drop-shadow-sm">
                {displayTitle}
              </h1>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {!isEditing && items.length > 0 && (
              <a
                href={getGoogleMapsDirectionsLink()}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all border border-emerald-500 cursor-pointer text-center whitespace-nowrap"
              >
                <Car className="w-4 h-4 text-emerald-100" />
                <span>{lang === 'fr' ? "🚗 Itinéraire GPS Voiture" : "🚗 นำทาง GPS ขับรถ"}</span>
              </a>
            )}
            
            {isEditing ? (
              <button
                onClick={handleSave}
                className="bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-md cursor-pointer transition-colors"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{lang === 'fr' ? "Enregistrer" : "บันทึก"}</span>
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-white/10 hover:bg-white/20 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 backdrop-blur-sm border border-white/10 cursor-pointer transition-all"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{lang === 'fr' ? "Modifier le voyage" : "แก้ไขการเดินทาง"}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Stats and Settings Row */}
      <div className="px-6 py-5">
        {/* Preset Selector Dropdowns */}
        <div className="mb-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/5 border border-emerald-100 p-3.5 rounded-xl flex flex-col gap-3 shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-emerald-600 rounded-lg text-white">
              <Compass className="w-4 h-4 text-emerald-100" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider">
                {lang === 'fr' ? "🗺️ CONFIGURATEUR DE ROAD TRIP" : "🗺️ ปรับแต่งเส้นทางโรดทริป"}
              </div>
              <p className="text-[10px] text-slate-500 font-medium leading-none">
                {lang === 'fr' 
                  ? "10 parcours × 3 durées possibles au choix" 
                  : "มีเส้นทางให้เลือก 10 เส้นทาง × 3 ระยะเวลาตามสไตล์คุณ"}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="sm:col-span-2">
              <label className="block text-[9px] font-black text-slate-400 uppercase mb-0.5">
                {lang === 'fr' ? "Région & Thématique" : "เลือกธีมเส้นทางและภาค"}
              </label>
              <select
                value={selectedRouteId}
                onChange={(e) => onSelectRoute(e.target.value)}
                className="w-full bg-white text-slate-800 font-bold border border-slate-200 rounded-lg text-[11px] py-1.5 px-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm cursor-pointer"
              >
                {ROUTE_TEMPLATES.map(route => (
                  <option key={route.id} value={route.id}>
                    {lang === 'fr' ? route.nameFr : route.nameTh}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[9px] font-black text-slate-400 uppercase mb-0.5">
                {lang === 'fr' ? "Durée" : "ระยะเวลา"}
              </label>
              <select
                value={selectedWeeks}
                onChange={(e) => onSelectWeeks(Number(e.target.value) as 2 | 4 | 6)}
                className="w-full bg-white text-slate-800 font-bold border border-slate-200 rounded-lg text-[11px] py-1.5 px-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm cursor-pointer"
              >
                <option value={2}>{lang === 'fr' ? "⏱️ 2 Semaines" : "⏱️ 2 สัปดาห์"}</option>
                <option value={4}>{lang === 'fr' ? "⏱️ 4 Semaines" : "⏱️ 4 สัปดาห์"}</option>
                <option value={6}>{lang === 'fr' ? "⏱️ 6 Semaines" : "⏱️ 6 สัปดาห์"}</option>
              </select>
            </div>
          </div>
        </div>

        {isEditing ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                {lang === 'fr' ? "Description" : "คำอธิบาย"}
              </label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={2}
                className="w-full text-sm bg-white border border-slate-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-700"
                placeholder={lang === 'fr' ? "Racontez le but de votre road trip..." : "จุดประสงค์การเดินทางของคุณ..."}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                {lang === 'fr' ? "Date de départ" : "วันที่เริ่มต้นเดินทาง"}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="date"
                  value={startDate}
                  onChange={e => setStartDate(e.target.value)}
                  className="w-full text-sm bg-white border border-slate-200 rounded-lg p-2.5 pl-10 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-700 font-mono"
                />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-slate-600 text-sm max-w-3xl leading-relaxed mb-5">
            {displayDescription}
          </p>
        )}

        {/* Dashboard Indicators Card */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50/70 rounded-xl p-3.5 border border-slate-100">
          <div className="flex items-center gap-3 px-2 py-1">
            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                {lang === 'fr' ? "Dates & Durée" : "วันเดินทางและระยะเวลา"}
              </div>
              <div className="text-xs font-bold text-slate-700">
                {startDate ? new Date(startDate).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'th-TH', { day: 'numeric', month: 'short', year: 'numeric' }) : (lang === 'fr' ? 'Non configuré' : 'ยังไม่ได้ระบุ')}
                <span className="text-emerald-600 ml-1">({totalDays}{lang === 'fr' ? 'j' : 'วัน'})</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-2 py-1">
            <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
              <Tent className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                {lang === 'fr' ? "Hébergements" : "ที่พักแรม"}
              </div>
              <div className="text-xs font-bold text-slate-700">
                {campingCount} <span className="text-slate-400 font-normal">{lang === 'fr' ? 'Campings' : 'ลานกางเต็นท์'}</span> • {lodgingCount} <span className="text-slate-400 font-normal">{lang === 'fr' ? 'Hôtels' : 'โรงแรม'}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-2 py-1">
            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                {lang === 'fr' ? "Étape du voyage" : "จำนวนจุดแวะพัก"}
              </div>
              <div className="text-xs font-bold text-slate-700">
                {items.length} <span className="text-slate-400 font-normal">{lang === 'fr' ? 'destinations' : 'จุดจอด'}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-2 py-1">
            <div className="p-2 bg-rose-50 rounded-lg text-rose-600">
              <Wallet className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                {lang === 'fr' ? "Budget estimé" : "งบประมาณประมาณการ"}
              </div>
              <div className="text-xs font-bold text-slate-700 font-mono">
                {totalBudget.toLocaleString(lang === 'fr' ? 'fr-FR' : 'th-TH')} THB <span className="text-slate-400 font-normal text-[10px]">({Math.round(totalBudget / 38).toLocaleString('fr-FR')} €)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
