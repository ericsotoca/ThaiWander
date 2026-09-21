import { useState, useRef, useEffect } from 'react';
import { ItineraryItem, TripSettings } from '../types';
import { Printer, X, Check, FileDown, Globe, Eye, MapPin, Calendar, Clock, DollarSign, Quote } from 'lucide-react';
import { THAI_TRANSLATIONS } from '../translations';
import { calculateTotalItineraryStats } from '../utils/distance';

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: TripSettings;
  items: ItineraryItem[];
  defaultLang?: 'fr' | 'th';
}

export default function PdfExportModal({ isOpen, onClose, settings, items, defaultLang = 'fr' }: PdfExportModalProps) {
  const [lang, setLang] = useState<'fr' | 'th'>(defaultLang);
  const printAreaRef = useRef<HTMLDivElement>(null);

  // Sync selected export language whenever modal is opened
  useEffect(() => {
    if (isOpen) {
      setLang(defaultLang);
    }
  }, [isOpen, defaultLang]);

  if (!isOpen) return null;

  const lodgingBudget = items.reduce((sum, item) => sum + (item.budget || 0), 0);
  const { totalKm } = calculateTotalItineraryStats(items);
  const fuelCost = Math.round(totalKm * 3.0);
  const tollCost = Math.round(totalKm * 0.5);
  const grandTotalBudget = lodgingBudget + fuelCost + tollCost;

  // Translate categories
  const getCategoryLabel = (category: string) => {
    if (lang === 'th') {
      switch (category) {
        case 'Camping': return '⛺ ลานกางเต็นท์';
        case 'Lodging': return '🏨 ที่พัก/โรงแรม';
        case 'Attraction': return '🏛️ สถานที่ท่องเที่ยว';
        default: return '📍 จุดแวะ';
      }
    } else {
      switch (category) {
        case 'Camping': return '⛺ Camping';
        case 'Lodging': return '🏨 Logement';
        case 'Attraction': return '🏛️ Attraction';
        default: return '📍 Étape';
      }
    }
  };

  // Helper to translate single items dynamically
  const getTranslatedItem = (item: ItineraryItem) => {
    if (lang === 'fr') return item;
    
    // Look up in Thai dictionary
    const match = Object.keys(THAI_TRANSLATIONS).find(
      key => item.placeName.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(item.placeName.toLowerCase())
    );

    if (match) {
      const trans = THAI_TRANSLATIONS[match];
      return {
        ...item,
        placeName: trans.placeName,
        notes: trans.notes,
        detailedTips: trans.detailedTips,
        maxInfo: trans.maxInfo
      };
    }

    // Default generic translations for custom added items
    return {
      ...item,
      placeName: item.placeName, // keep original or translate if matches
      notes: item.notes ? `[แปลจากฝรั่งเศส] ${item.notes}` : undefined,
      detailedTips: item.detailedTips ? `[คำแนะนำ] ${item.detailedTips}` : undefined,
      maxInfo: item.maxInfo ? `[ข้อมูลเพิ่มเติม] ${item.maxInfo}` : undefined
    };
  };

  // Handle printing
  const handlePrint = () => {
    const printContent = printAreaRef.current?.innerHTML;
    const originalContent = document.body.innerHTML;

    if (!printContent) return;

    // Create a new window to isolate printing style perfectly
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${lang === 'fr' ? 'Itinéraire de Camping - Thaïlande' : 'แผนการเดินทางแคมป์ปิ้ง - ประเทศไทย'}</title>
            <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
              body {
                font-family: 'Sarabun', 'Plus Jakarta Sans', sans-serif;
                background-color: white;
                color: #1e293b;
                padding: 20px;
              }
              @media print {
                body {
                  padding: 0;
                  margin: 0;
                }
                .no-print {
                  display: none;
                }
                .page-break {
                  page-break-after: always;
                }
              }
            </style>
          </head>
          <body>
            <div class="max-w-[800px] mx-auto">
              ${printContent}
            </div>
            <script>
              window.onload = function() {
                setTimeout(function() {
                  window.print();
                  window.close();
                }, 500);
              };
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  // Static translations of PDF general sections
  const texts = {
    fr: {
      docTitle: "PLAN DE ROUTE & CAMPING - THAÏLANDE",
      docSubtitle: "Généré par ThaiWander - Planificateur Expert",
      settingsTitle: "Détails du Road Trip",
      period: "Période estimée",
      totalSteps: "Nombre d'étapes",
      totalBudget: "Budget Total Estimé",
      disclaimer: "Ce carnet de route contient des photos réelles, des informations logistiques indispensables et des conseils d'expert de camping pour chaque étape.",
      expertTitle: "💡 CONSEIL DE CAMPING",
      descTitle: "ℹ️ DESCRIPTION DE L'ÉTAPE",
      duration: "Durée",
      budget: "Budget",
      createdOn: "Document généré le 20 septembre 2026",
      langSelector: "Choisir la langue d'export",
      downloadBtn: "Exporter & Imprimer (PDF)",
      closeBtn: "Fermer",
      previewTitle: "Aperçu du document PDF (A4)"
    },
    th: {
      docTitle: "แผนการเดินทางและคู่มือแคมป์ปิ้งประเทศไทย",
      docSubtitle: "สร้างโดย ThaiWander - แพลนเนอร์ผู้เชี่ยวชาญ",
      settingsTitle: "รายละเอียดโรดทริป",
      period: "ช่วงเวลาเดินทาง",
      totalSteps: "จำนวนจุดจอดทั้งหมด",
      totalBudget: "งบประมาณทั้งหมดโดยประมาณ",
      disclaimer: "คู่มือนี้ประกอบด้วยภาพถ่ายจริง ข้อมูลการขนส่งและเดินทางที่จำเป็น และคำแนะนำการตั้งแคมป์จากผู้เชี่ยวชาญสำหรับทุกขั้นตอน",
      expertTitle: "💡 คำแนะนำในการกางเต็นท์",
      descTitle: "ℹ️ ข้อมูลรายละเอียดสถานที่",
      duration: "ระยะเวลาพัก",
      budget: "งบประมาณ",
      createdOn: "เอกสารสร้างเมื่อวันที่ 20 กันยายน พ.ศ. 2569",
      langSelector: "เลือกภาษาสำหรับพิมพ์เอกสาร PDF",
      downloadBtn: "ส่งออกและพิมพ์เอกสาร (PDF)",
      closeBtn: "ปิดหน้าต่าง",
      previewTitle: "ตัวอย่างหน้าเอกสาร PDF (ขนาด A4)"
    }
  }[lang];

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden">
      <div className="bg-white rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl border border-slate-100 overflow-hidden animate-scaleIn">
        
        {/* Modal Header */}
        <div className="bg-slate-900 px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500 text-white p-1.5 rounded-lg">
              <FileDown className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-white font-serif font-black tracking-wider text-sm sm:text-base uppercase">
                {lang === 'fr' ? 'EXPORTER LE CARNET DE ROUTE' : 'ส่งออกสมุดบันทึกการเดินทาง'}
              </h2>
              <p className="text-slate-400 text-[10px]">{texts.docSubtitle}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white hover:bg-slate-800 p-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-slate-50">
          
          {/* Left panel: Controls */}
          <div className="w-full md:w-[320px] p-6 bg-white border-r border-slate-200 shrink-0 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Language Selector */}
              <div>
                <label className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider flex items-center gap-1.5 mb-2.5">
                  <Globe className="w-3.5 h-3.5 text-emerald-500" />
                  {texts.langSelector}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setLang('fr')}
                    className={`px-3 py-2.5 rounded-xl border font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      lang === 'fr' 
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-800 shadow-sm' 
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>🇫🇷</span> Français
                    {lang === 'fr' && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                  </button>
                  <button
                    onClick={() => setLang('th')}
                    className={`px-3 py-2.5 rounded-xl border font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      lang === 'th' 
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-800 shadow-sm' 
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>🇹🇭</span> ภาษาไทย
                    {lang === 'th' && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                  </button>
                </div>
              </div>

              {/* Guide notes */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <span className="text-[10px] font-black uppercase text-slate-500 block mb-1">ℹ️ Format Impression PDF</span>
                <p className="text-[11px] leading-relaxed text-slate-600">
                  {lang === 'fr'
                    ? "L'exportateur génère un fichier PDF A4 parfaitement mis en page. Assurez-vous de sélectionner l'option 'Enregistrer au format PDF' dans la fenêtre d'impression."
                    : "ระบบจะสร้างไฟล์ PDF ขนาด A4 ที่มีรูปแบบสวยงาม กรุณาเลือกตัวเลือก 'บันทึกเป็น PDF' ในกล่องโต้ตอบการพิมพ์"}
                </p>
              </div>

            </div>

            {/* Action buttons */}
            <div className="pt-6 border-t border-slate-100 space-y-2">
              <button
                onClick={handlePrint}
                className="w-full bg-slate-900 hover:bg-emerald-600 hover:shadow-emerald-200/50 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                {texts.downloadBtn}
              </button>
              
              <button
                onClick={onClose}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors cursor-pointer"
              >
                {texts.closeBtn}
              </button>
            </div>

          </div>

          {/* Right panel: Live Preview of Document */}
          <div className="flex-1 p-6 overflow-y-auto flex flex-col items-center">
            <h3 className="text-slate-400 font-bold uppercase tracking-widest text-[10px] self-start mb-3 flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              {texts.previewTitle}
            </h3>

            {/* Simulated Paper Sheets */}
            <div 
              ref={printAreaRef}
              className="bg-white p-12 border border-slate-200 rounded-lg shadow-sm w-full max-w-[760px] font-sans text-slate-800"
              style={{ minHeight: '1000px' }}
            >
              
              {/* Document Header */}
              <div className="border-b-4 border-slate-900 pb-5 mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold uppercase bg-slate-900 text-white px-2.5 py-1 rounded">
                    THAILAND OUTDOOR EXPERT
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">{texts.createdOn}</span>
                </div>
                
                <h1 className="text-2xl font-serif font-black text-slate-900 tracking-wide uppercase leading-tight">
                  {lang === 'fr' ? settings.title : texts.docTitle}
                </h1>
                <p className="text-xs text-slate-500 mt-1">{texts.docSubtitle}</p>
                
                {/* Descriptive card */}
                <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs italic text-slate-600 flex items-start gap-2.5">
                  <Quote className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="m-0 leading-relaxed">
                    {lang === 'fr' ? settings.description : 'สัมผัสประสบการณ์โรดทริปผจญภัยกางเต็นท์ในป่าใหญ่และยอดดอยที่โอบล้อมด้วยธรรมชาติบริสุทธิ์ของเมืองไทย'}
                  </p>
                </div>
              </div>

              {/* Trip stats grid */}
              <div className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100/60 mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <span className="text-[10px] font-extrabold text-emerald-800 uppercase block mb-0.5">{texts.period}</span>
                  <span className="text-xs font-bold text-slate-700">{settings.startDate}</span>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-emerald-800 uppercase block mb-0.5">{texts.totalSteps}</span>
                  <span className="text-xs font-bold text-slate-700">{items.length} {lang === 'fr' ? 'étapes' : 'จุดจอด'}</span>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-emerald-800 uppercase block mb-0.5">{texts.totalBudget}</span>
                  <span className="text-xs font-bold text-emerald-600 block">
                    {grandTotalBudget.toLocaleString()} THB
                  </span>
                  <span className="text-[9px] text-slate-400 block mt-0.5 leading-none font-semibold">
                    {lang === 'fr'
                      ? `Héb. : ${lodgingBudget.toLocaleString()} ฿ • Ess. : ${fuelCost.toLocaleString()} ฿ • Péages : ${tollCost.toLocaleString()} ฿`
                      : `ที่พัก : ${lodgingBudget.toLocaleString()} ฿ • น้ำมัน : ${fuelCost.toLocaleString()} ฿ • ค่าผ่านทาง : ${tollCost.toLocaleString()} ฿`}
                  </span>
                </div>
              </div>

              {/* Itinerary items rendering */}
              <div className="space-y-8">
                {items.map((rawItem, idx) => {
                  const item = getTranslatedItem(rawItem);
                  return (
                    <div key={item.id} className="border-b border-slate-100 pb-8 last:border-none last:pb-0">
                      
                      {/* Step Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-extrabold">
                            {idx + 1}
                          </span>
                          <h3 className="font-extrabold text-sm text-slate-900">{item.placeName}</h3>
                        </div>
                        
                        <div className="flex items-center gap-1.5 self-start sm:self-center">
                          <span className="text-[10px] font-extrabold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                            {getCategoryLabel(item.category)}
                          </span>
                          <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                            {lang === 'fr' ? `Jour ${item.day}` : `วันที่ ${item.day}`}
                          </span>
                        </div>
                      </div>

                      {/* Info bar */}
                      <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-3 bg-slate-50 p-2 rounded-lg border border-slate-100">
                        {item.duration && (
                          <span className="flex items-center gap-1">
                            <strong>{texts.duration} :</strong> {item.duration}
                          </span>
                        )}
                        {item.budget !== undefined && (
                          <span className="flex items-center gap-1">
                            <strong>{texts.budget} :</strong> {item.budget} THB
                          </span>
                        )}
                      </div>

                      {/* Render Photo if exists */}
                      {item.imageUrl && (
                        <div className="w-full h-[180px] rounded-lg overflow-hidden mb-3 shadow-sm">
                          <img 
                            src={item.imageUrl} 
                            alt={item.placeName} 
                            className="w-full h-full object-cover" 
                            style={{ display: 'block' }}
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}

                      {/* Main Notes */}
                      {item.notes && (
                        <p className="text-xs text-slate-600 bg-slate-50/50 p-2.5 rounded border-l-3 border-slate-400 leading-relaxed mb-3">
                          {item.notes}
                        </p>
                      )}

                      {/* Expert tips */}
                      {item.detailedTips && (
                        <div className="bg-emerald-50/60 p-3 rounded-lg border-l-3 border-emerald-500 text-xs text-slate-700 leading-relaxed mb-2.5">
                          <span className="font-black text-emerald-900 block mb-0.5 uppercase tracking-wide text-[10px]">
                            {texts.expertTitle} :
                          </span>
                          {item.detailedTips}
                        </div>
                      )}

                      {/* Detailed description info */}
                      {item.maxInfo && (
                        <div className="bg-sky-50/40 p-3 rounded-lg border-l-3 border-sky-400 text-xs text-slate-700 leading-relaxed">
                          <span className="font-black text-sky-900 block mb-0.5 uppercase tracking-wide text-[10px]">
                            {texts.descTitle} :
                          </span>
                          {item.maxInfo}
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>

              {/* Document Footer */}
              <div className="border-t border-slate-200 pt-6 mt-12 text-center text-[10px] text-slate-400 leading-normal">
                <p className="font-bold">{lang === 'fr' ? 'Bon voyage en toute sécurité !' : 'ขอให้เดินทางโดยสวัสดิภาพและมีความสุขกับการตั้งแคมป์ !'}</p>
                <p className="mt-0.5">{texts.createdOn} - Powered by ThaiWander Camping App</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
