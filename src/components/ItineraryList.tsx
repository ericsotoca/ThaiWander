import { useState, useMemo } from 'react';
import { ItineraryItem, CategoryType } from '../types';
import { 
  MapPin, Tent, Bed, Compass, Utensils, 
  Trash2, ArrowUp, ArrowDown, Search, Plus, 
  ChevronRight, Calendar, Info, Sparkles, Clock, Coins, Check, X
} from 'lucide-react';
import { DEFAULT_ITINERARY } from '../initialData';
import { THAI_TRANSLATIONS, UI_TRANSLATIONS } from '../translations';

interface ItineraryListProps {
  items: ItineraryItem[];
  selectedItemId: string | null;
  startDate: string;
  onItemSelect: (id: string) => void;
  onAddItem: (item: Omit<ItineraryItem, 'id' | 'lat' | 'lng'>) => Promise<void>;
  onDeleteItem: (id: string) => void;
  onUpdateItem: (item: ItineraryItem) => void;
  onReorderItem: (index: number, direction: 'up' | 'down') => void;
  lang?: 'fr' | 'th';
}

const CATEGORY_ICONS: Record<CategoryType, any> = {
  Camping: Tent,
  Lodging: Bed,
  Attraction: Compass,
  Restaurant: Utensils,
  Activity: MapPin
};

const CATEGORY_COLORS: Record<CategoryType, { bg: string; border: string; text: string; bgLight: string }> = {
  Camping: {
    bg: 'bg-emerald-500',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    bgLight: 'bg-emerald-50'
  },
  Lodging: {
    bg: 'bg-indigo-500',
    border: 'border-indigo-200',
    text: 'text-indigo-700',
    bgLight: 'bg-indigo-50'
  },
  Attraction: {
    bg: 'bg-amber-500',
    border: 'border-amber-200',
    text: 'text-amber-700',
    bgLight: 'bg-amber-50'
  },
  Restaurant: {
    bg: 'bg-rose-500',
    border: 'border-rose-200',
    text: 'text-rose-700',
    bgLight: 'bg-rose-50'
  },
  Activity: {
    bg: 'bg-purple-500',
    border: 'border-purple-200',
    text: 'text-purple-700',
    bgLight: 'bg-purple-50'
  }
};

export default function ItineraryList({
  items,
  selectedItemId,
  startDate,
  onItemSelect,
  onAddItem,
  onDeleteItem,
  onUpdateItem,
  onReorderItem,
  lang = 'fr'
}: ItineraryListProps) {
  // Translate terms
  const t = UI_TRANSLATIONS[lang];

  // Filters & Search
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Add item form state
  const [newPlace, setNewPlace] = useState('');
  const [newDay, setNewDay] = useState<number>(1);
  const [newCategory, setNewCategory] = useState<CategoryType>('Camping');
  const [newNotes, setNewNotes] = useState('');
  const [newDuration, setNewDuration] = useState('');
  const [newBudget, setNewBudget] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [isApiLoading, setIsApiLoading] = useState(false);

  // Inline edit state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editDay, setEditDay] = useState<number>(1);
  const [editCategory, setEditCategory] = useState<CategoryType>('Camping');
  const [editNotes, setEditNotes] = useState('');
  const [editDuration, setEditDuration] = useState('');
  const [editBudget, setEditBudget] = useState('');

  // Handle adding an item
  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPlace.trim()) return;

    setIsApiLoading(true);
    try {
      await onAddItem({
        placeName: newPlace,
        day: Number(newDay),
        category: newCategory,
        notes: newNotes,
        duration: newDuration || undefined,
        budget: newBudget ? Number(newBudget) : undefined
      });

      // Clear Form
      setNewPlace('');
      setNewNotes('');
      setNewDuration('');
      setNewBudget('');
      setIsAdding(false);
    } catch (err) {
      console.error(err);
    } finally {
      setIsApiLoading(false);
    }
  };

  // Start inline editing
  const startEdit = (item: ItineraryItem) => {
    setEditingId(item.id);
    setEditName(item.placeName);
    setEditDay(item.day);
    setEditCategory(item.category);
    setEditNotes(item.notes);
    setEditDuration(item.duration || '');
    setEditBudget(item.budget ? String(item.budget) : '');
  };

  const handleSaveEdit = (item: ItineraryItem) => {
    onUpdateItem({
      ...item,
      placeName: editName,
      day: Number(editDay),
      category: editCategory,
      notes: editNotes,
      duration: editDuration || undefined,
      budget: editBudget ? Number(editBudget) : undefined
    });
    setEditingId(null);
  };

  // Translate a single item
  const getTranslatedItem = (item: ItineraryItem) => {
    if (lang === 'fr') return item;

    // Look up default matches
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

  // Convert Day number to formatted date based on trip start date
  const formatDayDate = (dayNum: number) => {
    if (!startDate) return '';
    try {
      const baseDate = new Date(startDate);
      // Add days (day - 1) to start date
      baseDate.setDate(baseDate.getDate() + (dayNum - 1));
      
      return baseDate.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'th-TH', { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'short' 
      });
    } catch (e) {
      return '';
    }
  };

  // Filter items based on search and selected category
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const transItem = getTranslatedItem(item);
      const matchesSearch = 
        transItem.placeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transItem.notes.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.placeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.notes.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'All' || 
        item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [items, searchTerm, selectedCategory, lang]);

  // Group filtered items by Day
  const groupedItems = useMemo(() => {
    const groups: Record<number, ItineraryItem[]> = {};
    filteredItems.forEach(item => {
      if (!groups[item.day]) {
        groups[item.day] = [];
      }
      groups[item.day].push(item);
    });
    
    // Sort groups by Day ascending
    return Object.keys(groups)
      .map(Number)
      .sort((a, b) => a - b)
      .map(dayNum => ({
        day: dayNum,
        dateStr: formatDayDate(dayNum),
        items: groups[dayNum]
      }));
  }, [filteredItems, startDate, lang]);

  const categoryLabels = {
    All: t.all,
    Camping: t.camping,
    Lodging: t.lodging,
    Attraction: t.attraction,
    Restaurant: t.restaurant,
    Activity: t.activity
  };

  return (
    <div className="flex flex-col h-full" id="itinerary-list">
      {/* Search and Filter Row */}
      <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-2.5 items-center bg-white sticky top-0 z-20 shadow-sm">
        <div className="relative w-full sm:flex-1">
          <Search className="absolute left-3 top-2.5 w-4.5 h-4.5 text-slate-400" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full text-xs pl-9 pr-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
          />
        </div>

        <div className="flex w-full sm:w-auto gap-2 overflow-x-auto py-1 scrollbar-none">
          {['All', 'Camping', 'Lodging', 'Attraction', 'Restaurant', 'Activity'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-[11px] font-medium px-3 py-1.5 rounded-full cursor-pointer border whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-800 border-slate-800 text-white shadow-sm'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {(categoryLabels as any)[cat] || cat}
            </button>
          ))}
        </div>
      </div>

      {/* Primary Scrollable List container */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        {/* Empty State */}
        {groupedItems.length === 0 && (
          <div className="text-center py-12 px-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
            <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-700">{t.noItemFound}</p>
            <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
              {t.noItemFoundDesc}
            </p>
          </div>
        )}

        {/* Grouped Day Sections */}
        {groupedItems.map(group => (
          <div key={group.day} className="space-y-3">
            {/* Day Title and Calendar Date Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
              <h2 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-slate-100 text-slate-700 text-xs font-black">
                  {group.day}
                </span>
                {t.day} {group.day}
              </h2>
              {group.dateStr && (
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="capitalize">{group.dateStr}</span>
                </div>
              )}
            </div>

            {/* List of items inside this Day */}
            <div className="space-y-3">
              {group.items.map((item, itemIdx) => {
                const isSelected = item.id === selectedItemId;
                const isEditing = item.id === editingId;
                const CatIcon = CATEGORY_ICONS[item.category] || MapPin;
                const colorSet = CATEGORY_COLORS[item.category] || CATEGORY_COLORS.Camping;

                // Find global index of this item in the items list for up/down reordering
                const globalIndex = items.findIndex(it => it.id === item.id);

                // Apply dynamic translation helper
                const displayItem = getTranslatedItem(item);

                return (
                  <div
                    key={item.id}
                    onClick={() => !isEditing && onItemSelect(item.id)}
                    className={`group/card border rounded-xl bg-white shadow-sm transition-all duration-200 overflow-hidden ${
                      isSelected 
                        ? 'ring-2 ring-slate-800 border-transparent shadow-md' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {isEditing ? (
                      /* Inline Edit Form */
                      <div className="p-4 space-y-3 bg-slate-50/50" onClick={e => e.stopPropagation()}>
                        <div className="grid grid-cols-2 gap-2.5">
                          <div className="col-span-2">
                            <label className="block text-[10px] font-semibold text-slate-400 uppercase">{t.placeNameLabel}</label>
                            <input
                              type="text"
                              value={editName}
                              onChange={e => setEditName(e.target.value)}
                              className="w-full text-xs p-2 border border-slate-200 bg-white rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-semibold text-slate-400 uppercase">{t.day}</label>
                            <input
                              type="number"
                              min={1}
                              value={editDay}
                              onChange={e => setEditDay(Number(e.target.value))}
                              className="w-full text-xs p-2 border border-slate-200 bg-white rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-semibold text-slate-400 uppercase">{t.newCategoryLabel}</label>
                            <select
                              value={editCategory}
                              onChange={e => setEditCategory(e.target.value as CategoryType)}
                              className="w-full text-xs p-2 border border-slate-200 bg-white rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            >
                              <option value="Camping">🏕️ {t.camping}</option>
                              <option value="Lodging">🏨 {t.lodging}</option>
                              <option value="Attraction">🎡 {t.attraction}</option>
                              <option value="Restaurant">🍜 {t.restaurant}</option>
                              <option value="Activity">🧭 {t.activity}</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[10px] font-semibold text-slate-400 uppercase">{t.newDurationLabel}</label>
                            <input
                              type="text"
                              value={editDuration}
                              onChange={e => setEditDuration(e.target.value)}
                              className="w-full text-xs p-2 border border-slate-200 bg-white rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                              placeholder={t.newDurationPlaceholder}
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-semibold text-slate-400 uppercase">{t.newBudgetLabel}</label>
                            <input
                              type="number"
                              value={editBudget}
                              onChange={e => setEditBudget(e.target.value)}
                              className="w-full text-xs p-2 border border-slate-200 bg-white rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                              placeholder={t.newBudgetPlaceholder}
                            />
                          </div>
                          <div className="col-span-2">
                            <label className="block text-[10px] font-semibold text-slate-400 uppercase">{t.newNotesLabel}</label>
                            <textarea
                              value={editNotes}
                              onChange={e => setEditNotes(e.target.value)}
                              rows={2}
                              className="w-full text-xs p-2 border border-slate-200 bg-white rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                              placeholder={t.newNotesPlaceholder}
                            />
                          </div>
                        </div>
                        <div className="flex justify-end gap-1.5 pt-2">
                          <button
                            onClick={() => setEditingId(null)}
                            className="px-2.5 py-1 text-[11px] text-slate-500 hover:bg-slate-200 rounded cursor-pointer transition-colors"
                          >
                            {t.cancel}
                          </button>
                          <button
                            onClick={() => handleSaveEdit(item)}
                            className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-semibold rounded flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            <Check className="w-3 h-3" />
                            <span>{t.save}</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Display Card */
                      <div className="flex items-stretch cursor-pointer">
                        {/* Side category visual band with icon */}
                        <div className={`w-12 ${colorSet.bgLight} flex flex-col items-center justify-center text-slate-500 border-r border-slate-100 gap-1.5 py-4`}>
                          <div className={`p-1.5 rounded-full ${colorSet.bg} text-white`}>
                            <CatIcon className="w-4 h-4" />
                          </div>
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">
                            {item.category === 'Lodging' ? (lang === 'fr' ? 'HÔTEL' : 'ที่พัก') : item.category === 'Restaurant' ? (lang === 'fr' ? 'RESTO' : 'ร้านอาหาร') : (categoryLabels as any)[item.category]}
                          </span>
                        </div>

                        {/* Core text details */}
                        <div className="flex-1 p-3.5 space-y-1.5">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="text-xs font-bold text-slate-800 group-hover/card:text-slate-900 leading-tight">
                                {displayItem.placeName}
                              </h3>
                              
                              {/* Metadata chips (Duration, Budget) */}
                              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-1 text-[10px] text-slate-400 font-medium">
                                {displayItem.duration && (
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3 text-slate-400" />
                                    {displayItem.duration}
                                  </span>
                                )}
                                {displayItem.budget !== undefined && (
                                  <span className="flex items-center gap-1 text-slate-500 font-semibold">
                                    <Coins className="w-3 h-3 text-slate-400" />
                                    {displayItem.budget.toLocaleString(lang === 'fr' ? 'fr-FR' : 'th-TH')} THB
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Floating control buttons visible on hover or selection */}
                            <div className="flex items-center gap-0.5 opacity-60 group-hover/card:opacity-100 transition-opacity ml-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onReorderItem(globalIndex, 'up');
                                }}
                                disabled={globalIndex === 0}
                                title={lang === 'fr' ? "Monter" : "เลื่อนขึ้น"}
                                className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded disabled:opacity-30 cursor-pointer"
                              >
                                <ArrowUp className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onReorderItem(globalIndex, 'down');
                                }}
                                disabled={globalIndex === items.length - 1}
                                title={lang === 'fr' ? "Descendre" : "เลื่อนลง"}
                                className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded disabled:opacity-30 cursor-pointer"
                              >
                                <ArrowDown className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  startEdit(item);
                                }}
                                title={lang === 'fr' ? "Éditer" : "แก้ไข"}
                                className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded cursor-pointer"
                              >
                                <Info className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (confirm(lang === 'fr' ? 'Voulez-vous vraiment supprimer cette étape ?' : 'คุณต้องการลบสถานที่นี้ใช่หรือไม่?')) {
                                    onDeleteItem(item.id);
                                  }
                                }}
                                title={lang === 'fr' ? "Supprimer" : "ลบออก"}
                                className="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          {/* Notes body with italic style */}
                          {displayItem.notes && (
                            <p className="text-[11px] text-slate-500 leading-relaxed italic bg-slate-50 p-2 rounded-lg border-l-2 border-slate-200">
                              {displayItem.notes}
                            </p>
                          )}

                          {/* Expanded high-fidelity details (photos, expert tips, max info) if item is selected */}
                          {isSelected && (
                            <div className="mt-2.5 space-y-2.5 pt-2.5 border-t border-slate-100 animate-fadeIn">
                              {displayItem.imageUrl && (
                                <div className="rounded-lg overflow-hidden border border-slate-100 shadow-sm aspect-video w-full bg-slate-100 relative">
                                  <img 
                                    src={displayItem.imageUrl} 
                                    alt={displayItem.placeName} 
                                    className="w-full h-full object-cover" 
                                    referrerPolicy="no-referrer" 
                                  />
                                </div>
                              )}

                              {displayItem.detailedTips && (
                                <div className="text-[11px] leading-relaxed text-slate-600 bg-emerald-50/60 p-2.5 rounded-lg border-l-2 border-emerald-400">
                                  <span className="font-extrabold text-emerald-800 flex items-center gap-1 mb-0.5">
                                    {t.expertTips} :
                                  </span>
                                  {displayItem.detailedTips}
                                </div>
                              )}

                              {displayItem.maxInfo && (
                                <div className="text-[11px] leading-relaxed text-slate-600 bg-sky-50/50 p-2.5 rounded-lg border-l-2 border-sky-400">
                                  <span className="font-extrabold text-sky-800 flex items-center gap-1 mb-0.5">
                                    {t.maxInfo} :
                                  </span>
                                  {displayItem.maxInfo}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Adding Stage Drawer Form */}
      <div className="p-4 bg-white border-t border-slate-100 sticky bottom-0 z-30 shadow-md">
        {isAdding ? (
          <form onSubmit={handleAddSubmit} className="space-y-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            <div className="flex justify-between items-center pb-1">
              <h3 className="text-xs font-bold text-slate-800 flex items-center gap-1">
                <Plus className="w-3.5 h-3.5 text-emerald-500" />
                {t.newStep}
              </h3>
              <button 
                type="button" 
                onClick={() => setIsAdding(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="col-span-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase">{t.newPlaceLabel}</label>
                <input
                  type="text"
                  required
                  placeholder={t.newPlacePlaceholder}
                  value={newPlace}
                  onChange={e => setNewPlace(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase">{t.newDayLabel}</label>
                <input
                  type="number"
                  min={1}
                  required
                  value={newDay}
                  onChange={e => setNewDay(Number(e.target.value))}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase">{t.newCategoryLabel}</label>
                <select
                  value={newCategory}
                  onChange={e => setNewCategory(e.target.value as CategoryType)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Camping">🏕️ {t.camping}</option>
                  <option value="Lodging">🏨 {t.lodging}</option>
                  <option value="Attraction">🎡 {t.attraction}</option>
                  <option value="Restaurant">🍜 {t.restaurant}</option>
                  <option value="Activity">🧭 {t.activity}</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase">{t.newDurationLabel}</label>
                <input
                  type="text"
                  placeholder={t.newDurationPlaceholder}
                  value={newDuration}
                  onChange={e => setNewDuration(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase">{t.newBudgetLabel}</label>
                <input
                  type="number"
                  placeholder={t.newBudgetPlaceholder}
                  value={newBudget}
                  onChange={e => setNewBudget(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase">{t.newNotesLabel}</label>
                <input
                  type="text"
                  placeholder={t.newNotesPlaceholder}
                  value={newNotes}
                  onChange={e => setNewNotes(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isApiLoading}
              className="w-full mt-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs py-2.5 rounded-lg flex items-center justify-center gap-1.5 shadow-md cursor-pointer disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
            >
              {isApiLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{t.addingBtn}</span>
                </div>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.addBtn}</span>
                </>
              )}
            </button>
          </form>
        ) : (
          <button
            onClick={() => setIsAdding(true)}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>{t.addBtn}</span>
          </button>
        )}
      </div>
    </div>
  );
}
