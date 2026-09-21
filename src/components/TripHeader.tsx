import { useState } from 'react';
import { TripSettings, ItineraryItem } from '../types';
import { Calendar, Edit3, Save, MapPin, Compass, Wallet, Tent, Car, ArrowUpDown, SlidersHorizontal, Search, X, Bed, Sparkles } from 'lucide-react';
import { ROUTE_TEMPLATES, generatePresetItinerary } from '../presetsData';
import { calculateTotalItineraryStats, estimateRoadTripStats } from '../utils/distance';
import { getLodgingSuggestions } from './ItineraryList';

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

  // Sorting, searching and duration filtering state for the 30 preset routes comparative table
  const [isTableOpen, setIsTableOpen] = useState(false);
  const [sortField, setSortField] = useState<'budget' | 'distance' | 'weeks' | 'name'>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterWeeks, setFilterWeeks] = useState<'All' | 2 | 4 | 6>('All');

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
  const lodgingBudget = items.reduce((sum, it) => sum + (it.budget || 0), 0);
  const { totalKm, totalHours } = calculateTotalItineraryStats(items);

  // Real-world Thailand travel road trip estimates: Fuel = 3.0 THB/km, Tolls = 0.5 THB/km
  const fuelCost = Math.round(totalKm * 3.0);
  const tollCost = Math.round(totalKm * 0.5);
  const grandTotalBudget = lodgingBudget + fuelCost + tollCost;

  // Fallback default translations
  const displayTitle = lang === 'th' && settings.title === "Road Trip Camping en Thaïlande"
    ? "โรดทริปแคมป์ปิ้งในประเทศไทย"
    : settings.title;

  const displayDescription = lang === 'th' && settings.description === "Un road trip nature exceptionnel à travers les parcs nationaux, les montagnes et les temples sacrés de Thaïlande."
    ? "โรดทริปธรรมชาติสุดพิเศษผ่านอุทยานแห่งชาติ ภูเขา และวัดศักดิ์สิทธิ์ของประเทศไทย"
    : settings.description;

  // 1. Compile all 30 itinerary combinations (10 route templates * 3 durations) on-the-fly
  const allProposals = ROUTE_TEMPLATES.flatMap(route => {
    return ([2, 4, 6] as const).map(weeks => {
      const generated = generatePresetItinerary(route.id, weeks, lang);
      const itemsList = generated.items;
      
      const stats = calculateTotalItineraryStats(itemsList);
      const campingCount = itemsList.filter(it => it.category === 'Camping').length;
      const lodgingCount = itemsList.filter(it => it.category === 'Lodging').length;
      const lodgingBudget = itemsList.reduce((sum, it) => sum + (it.budget || 0), 0);
      const fuelCost = Math.round(stats.totalKm * 3.0);
      const tollCost = Math.round(stats.totalKm * 0.5);
      const grandTotalBudget = lodgingBudget + fuelCost + tollCost;
      
      return {
        routeId: route.id,
        weeks,
        name: lang === 'fr' ? route.nameFr : route.nameTh,
        desc: lang === 'fr' ? route.descFr : route.descTh,
        title: generated.title,
        itemsCount: itemsList.length,
        campingCount,
        lodgingCount,
        totalKm: stats.totalKm,
        totalHours: stats.totalHours,
        lodgingBudget,
        fuelCost,
        tollCost,
        grandTotalBudget
      };
    });
  });

  // 2. Filter the proposals list by search query and duration
  const filteredProposals = allProposals.filter(prop => {
    const matchesSearch = 
      prop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.desc.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesWeeks = 
      filterWeeks === 'All' || 
      prop.weeks === filterWeeks;
      
    return matchesSearch && matchesWeeks;
  });

  // 3. Sort the filtered proposals list
  const sortedProposals = [...filteredProposals].sort((a, b) => {
    let factor = sortDirection === 'asc' ? 1 : -1;
    if (sortField === 'budget') {
      return (a.grandTotalBudget - b.grandTotalBudget) * factor;
    } else if (sortField === 'distance') {
      return (a.totalKm - b.totalKm) * factor;
    } else if (sortField === 'weeks') {
      return (a.weeks - b.weeks) * factor;
    } else {
      return a.name.localeCompare(b.name) * factor;
    }
  });

  const toggleSort = (field: 'budget' | 'distance' | 'weeks' | 'name') => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

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
              <div className="flex items-center justify-between mb-0.5">
                <label className="block text-[9px] font-black text-slate-400 uppercase">
                  {lang === 'fr' ? "Durée" : "ระยะเวลา"}
                </label>
                <button
                  type="button"
                  onClick={() => setIsTableOpen(true)}
                  className="text-[8px] sm:text-[9px] text-emerald-700 bg-emerald-50 hover:bg-emerald-100 font-extrabold px-1.5 py-0.5 rounded border border-emerald-200/50 flex items-center gap-1 cursor-pointer transition-colors shadow-sm"
                  title={lang === 'fr' ? "Comparer les 30 itinéraires et budgets" : "เปรียบเทียบ 30 เส้นทางและงบประมาณ"}
                >
                  <Sparkles className="w-2.5 h-2.5 text-emerald-600 animate-bounce" style={{ animationDuration: '3s' }} />
                  <span>{lang === 'fr' ? "30 Comparatif" : "เปรียบเทียบ 30"}</span>
                </button>
              </div>
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 bg-slate-50/70 rounded-xl p-3.5 border border-slate-100">
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

          <div className="flex items-center gap-3 px-2 py-1 relative group/budget">
            <div className="p-2 bg-rose-50 rounded-lg text-rose-600">
              <Wallet className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                {lang === 'fr' ? "Budget estimé" : "งบประมาณประมาณการ"}
              </div>
              <div className="text-xs font-bold text-slate-700 font-mono">
                {grandTotalBudget.toLocaleString(lang === 'fr' ? 'fr-FR' : 'th-TH')} THB <span className="text-slate-400 font-normal text-[10px]">({Math.round(grandTotalBudget / 38).toLocaleString('fr-FR')} €)</span>
              </div>
              <div className="text-[9px] text-slate-400 mt-0.5 leading-none font-semibold">
                {lang === 'fr' 
                  ? `Essence : ${fuelCost.toLocaleString('fr-FR')} ฿ • Péages : ${tollCost.toLocaleString('fr-FR')} ฿`
                  : `น้ำมัน : ${fuelCost.toLocaleString('th-TH')} ฿ • ค่าผ่านทาง : ${tollCost.toLocaleString('th-TH')} ฿`}
              </div>
              
              {/* Detailed Breakdown Tooltip */}
              <div className="absolute left-0 top-full mt-2 w-56 hidden group-hover/budget:block bg-slate-900 text-slate-100 rounded-xl p-3 shadow-xl border border-slate-800 z-50 text-[10px] space-y-1.5 transition-all">
                <div className="font-extrabold text-white pb-1 border-b border-slate-800 uppercase tracking-wider text-[9px]">
                  {lang === 'fr' ? "Détail du Budget" : "รายละเอียดงบประมาณ"}
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{lang === 'fr' ? "Hébergements :" : "ค่าที่พักแรม :"}</span>
                  <span className="font-mono font-bold text-slate-200">{lodgingBudget.toLocaleString()} THB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{lang === 'fr' ? "Essence (3 ฿/km) :" : "ค่าน้ำมัน (3 ฿/กม.) :"}</span>
                  <span className="font-mono font-bold text-emerald-400">+{fuelCost.toLocaleString()} THB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{lang === 'fr' ? "Péages (0.5 ฿/km) :" : "ค่าผ่านทาง (0.5 ฿/กม.) :"}</span>
                  <span className="font-mono font-bold text-emerald-400">+{tollCost.toLocaleString()} THB</span>
                </div>
                <div className="flex justify-between pt-1.5 border-t border-slate-800 font-bold text-xs text-white">
                  <span>Total :</span>
                  <span className="font-mono text-emerald-300">{grandTotalBudget.toLocaleString()} THB</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-2 py-1 col-span-2 md:col-span-1">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                {lang === 'fr' ? "Distance Totale" : "ระยะทางทั้งหมด"}
              </div>
              <div className="text-xs font-bold text-slate-700">
                {totalKm.toLocaleString(lang === 'fr' ? 'fr-FR' : 'th-TH')} km <span className="text-blue-600 ml-1">({totalHours}h)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 30 Preset Itineraries Comparison Table Modal Overlay */}
      {isTableOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-6xl h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-emerald-600 rounded-lg text-white">
                  <Compass className="w-4 h-4 text-emerald-100" />
                </div>
                <div>
                  <h2 className="text-sm font-extrabold uppercase tracking-wider">
                    {lang === 'fr' ? "📊 Tableau Comparatif des 30 Parcours de Thaïlande" : "📊 ตารางเปรียบเทียบ 30 เส้นทางท่องเที่ยวในไทย"}
                  </h2>
                  <p className="text-[10px] text-slate-400 font-medium">
                    {lang === 'fr' 
                      ? "Comparez toutes les combinaisons d'itinéraires, de durées, de budgets et de distances d'un seul coup d'œil !" 
                      : "เปรียบเทียบข้อมูลเส้นทางทั้งหมด ทั้งระยะเวลา งบประมาณ และระยะทางได้ในหน้าเดียว!"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsTableOpen(false)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white p-2 rounded-lg cursor-pointer transition-colors border border-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Controls Bar: Search and Duration Filter */}
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row items-center justify-between gap-3 shrink-0">
              {/* Search input */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder={lang === 'fr' ? "Rechercher par région, thème..." : "ค้นหาตามภาค, ธีม..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg py-1.5 pl-9 pr-3 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-slate-700 shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2 w-4 h-4 text-slate-400 hover:text-slate-600 font-bold font-sans text-xs"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Filters & Statistics */}
              <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
                <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider">
                  {lang === 'fr' ? "Filtrer par Durée :" : "กรองตามระยะเวลา :"}
                </span>
                <div className="flex bg-slate-200/60 p-0.5 rounded-lg border border-slate-200/50">
                  <button
                    onClick={() => setFilterWeeks('All')}
                    className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
                      filterWeeks === 'All' 
                        ? 'bg-white text-slate-800 shadow-sm border border-slate-300/10' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {lang === 'fr' ? "Toutes" : "ทั้งหมด"}
                  </button>
                  <button
                    onClick={() => setFilterWeeks(2)}
                    className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
                      filterWeeks === 2 
                        ? 'bg-white text-emerald-700 shadow-sm border border-slate-300/10' 
                        : 'text-slate-500 hover:text-emerald-700'
                    }`}
                  >
                    ⏱️ {lang === 'fr' ? "2 s." : "2 สัปดาห์"}
                  </button>
                  <button
                    onClick={() => setFilterWeeks(4)}
                    className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
                      filterWeeks === 4 
                        ? 'bg-white text-emerald-700 shadow-sm border border-slate-300/10' 
                        : 'text-slate-500 hover:text-emerald-700'
                    }`}
                  >
                    ⏱️ {lang === 'fr' ? "4 s." : "4 สัปดาห์"}
                  </button>
                  <button
                    onClick={() => setFilterWeeks(6)}
                    className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
                      filterWeeks === 6 
                        ? 'bg-white text-emerald-700 shadow-sm border border-slate-300/10' 
                        : 'text-slate-500 hover:text-emerald-700'
                    }`}
                  >
                    ⏱️ {lang === 'fr' ? "6 s." : "6 สัปดาห์"}
                  </button>
                </div>

                <div className="text-[10px] text-slate-500 font-extrabold px-3 py-1 bg-slate-100 rounded-lg border border-slate-200">
                  {sortedProposals.length} {lang === 'fr' ? "itinéraires correspondants" : "เส้นทางที่พบ"}
                </div>
              </div>
            </div>

            {/* Table Content Container */}
            <div className="flex-1 overflow-auto p-4">
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[10px] uppercase font-black tracking-wider text-slate-500">
                      <th 
                        onClick={() => toggleSort('name')}
                        className="py-3 px-4 cursor-pointer hover:bg-slate-100 select-none transition-colors"
                      >
                        <div className="flex items-center gap-1">
                          <span>{lang === 'fr' ? "Région & Thématique" : "ภาคและธีมเส้นทาง"}</span>
                          <ArrowUpDown className="w-3 h-3 text-slate-400" />
                          {sortField === 'name' && <span className="text-emerald-600 font-bold">{sortDirection === 'asc' ? '▲' : '▼'}</span>}
                        </div>
                      </th>
                      <th 
                        onClick={() => toggleSort('weeks')}
                        className="py-3 px-4 cursor-pointer hover:bg-slate-100 select-none transition-colors"
                      >
                        <div className="flex items-center gap-1">
                          <span>{lang === 'fr' ? "Durée" : "ระยะเวลา"}</span>
                          <ArrowUpDown className="w-3 h-3 text-slate-400" />
                          {sortField === 'weeks' && <span className="text-emerald-600 font-bold">{sortDirection === 'asc' ? '▲' : '▼'}</span>}
                        </div>
                      </th>
                      <th className="py-3 px-4">
                        {lang === 'fr' ? "Hébergements" : "ที่พักแรม"}
                      </th>
                      <th 
                        onClick={() => toggleSort('distance')}
                        className="py-3 px-4 cursor-pointer hover:bg-slate-100 select-none transition-colors"
                      >
                        <div className="flex items-center gap-1">
                          <span>{lang === 'fr' ? "Distance & Route" : "ระยะทาง & ขับรถ"}</span>
                          <ArrowUpDown className="w-3 h-3 text-slate-400" />
                          {sortField === 'distance' && <span className="text-emerald-600 font-bold">{sortDirection === 'asc' ? '▲' : '▼'}</span>}
                        </div>
                      </th>
                      <th 
                        onClick={() => toggleSort('budget')}
                        className="py-3 px-4 cursor-pointer hover:bg-slate-100 select-none transition-colors"
                      >
                        <div className="flex items-center gap-1">
                          <span>{lang === 'fr' ? "Budget Estimé (Total)" : "งบประมาณรวม"}</span>
                          <ArrowUpDown className="w-3 h-3 text-slate-400" />
                          {sortField === 'budget' && <span className="text-emerald-600 font-bold">{sortDirection === 'asc' ? '▲' : '▼'}</span>}
                        </div>
                      </th>
                      <th className="py-3 px-4 text-center">
                        {lang === 'fr' ? "Action" : "เลือกใช้งาน"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {sortedProposals.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-xs text-slate-400 font-medium">
                          {lang === 'fr' ? "Aucun itinéraire ne correspond à vos critères." : "ไม่พบเส้นทางที่ตรงตามเงื่อนไขของคุณ"}
                        </td>
                      </tr>
                    ) : (
                      sortedProposals.map((prop, idx) => {
                        const isActive = prop.routeId === selectedRouteId && prop.weeks === selectedWeeks;
                        return (
                          <tr 
                            key={idx} 
                            className={`hover:bg-slate-50/50 transition-colors text-xs ${isActive ? 'bg-emerald-50/20' : ''}`}
                          >
                            {/* Region & Theme */}
                            <td className="py-4 px-4 max-w-sm">
                              <div className="space-y-1">
                                <span className="font-extrabold text-slate-950 text-xs flex items-center gap-1.5">
                                  {prop.name}
                                  {isActive && (
                                    <span className="bg-emerald-500/15 text-emerald-700 text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full border border-emerald-500/10">
                                      {lang === 'fr' ? "Actif" : "ใช้งานอยู่"}
                                    </span>
                                  )}
                                </span>
                                <p className="text-[10px] text-slate-400 leading-normal line-clamp-2">{prop.desc}</p>
                              </div>
                            </td>

                            {/* Duration Weeks */}
                            <td className="py-4 px-4">
                              <span className="font-extrabold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg">
                                {lang === 'fr' ? `${prop.weeks} Semaines` : `${prop.weeks} สัปดาห์`}
                              </span>
                            </td>

                            {/* Lodgings & Steps */}
                            <td className="py-4 px-4">
                              <div className="space-y-1 text-slate-600">
                                <div className="font-bold text-slate-800">
                                  {prop.itemsCount} {lang === 'fr' ? "destinations" : "จุดแวะพัก"}
                                </div>
                                <div className="text-[10px] text-slate-400 font-semibold flex items-center gap-2">
                                  <span className="flex items-center gap-0.5">⛺ {prop.campingCount}</span>
                                  <span>•</span>
                                  <span className="flex items-center gap-0.5">🏨 {prop.lodgingCount}</span>
                                </div>
                              </div>
                            </td>

                            {/* Distance & Route hours */}
                            <td className="py-4 px-4 font-medium text-slate-600">
                              <div className="font-mono font-bold text-slate-800">
                                {prop.totalKm.toLocaleString()} km
                              </div>
                              <div className="text-[10px] text-slate-400 font-bold font-mono">
                                ~{prop.totalHours}h {lang === 'fr' ? "de conduite" : "ชั่วโมงขับรถ"}
                              </div>
                            </td>

                            {/* Budget total */}
                            <td className="py-4 px-4">
                              <div className="font-mono font-black text-rose-600 text-[13px]">
                                {prop.grandTotalBudget.toLocaleString()} THB
                              </div>
                              <div className="text-[10px] text-slate-400 font-bold font-mono leading-tight">
                                ~{Math.round(prop.grandTotalBudget / 38).toLocaleString('fr-FR')} EUR
                              </div>
                              <div className="text-[9px] text-slate-400 leading-none mt-1">
                                {lang === 'fr' 
                                  ? `Essence : ${prop.fuelCost.toLocaleString()} ฿ • Péages : ${prop.tollCost.toLocaleString()} ฿`
                                  : `น้ำมัน : ${prop.fuelCost.toLocaleString()} ฿ • ค่าผ่านทาง : ${prop.tollCost.toLocaleString()} ฿`}
                              </div>
                            </td>

                            {/* Action Button */}
                            <td className="py-4 px-4 text-center whitespace-nowrap">
                              {isActive ? (
                                <div className="text-emerald-600 font-extrabold text-[10px] uppercase flex items-center justify-center gap-1 bg-emerald-50 border border-emerald-200/50 px-3 py-1.5 rounded-lg w-28 mx-auto shadow-sm">
                                  <span>{lang === 'fr' ? "Actif ✨" : "ใช้งานอยู่ ✨"}</span>
                                </div>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => {
                                    onSelectRoute(prop.routeId);
                                    onSelectWeeks(prop.weeks);
                                    setIsTableOpen(false);
                                  }}
                                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[10px] uppercase px-3.5 py-1.5 rounded-lg transition-all cursor-pointer shadow-sm shadow-emerald-950/10 border border-emerald-500 w-28 mx-auto block hover:scale-102"
                                >
                                  {lang === 'fr' ? "Activer ⚡" : "เลือกใช้ ⚡"}
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between shrink-0 text-[10px] text-slate-500 font-semibold gap-2">
              <span>
                {lang === 'fr' 
                  ? "* Les coûts incluent les estimations d'hébergement + carburant (3 ฿/km) + péages (0.5 ฿/km)." 
                  : "* ค่าใช้จ่ายรวมการประมาณการค่าที่พัก + ค่าน้ำมัน (3 ฿/กม.) + ค่าผ่านทาง (0.5 ฿/กม.)"}
              </span>
              <span>
                {lang === 'fr' ? "Moteur de comparaison de routes ThaiWander" : "ระบบวิเคราะห์เปรียบเทียบแผนที่โดย ThaiWander"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
