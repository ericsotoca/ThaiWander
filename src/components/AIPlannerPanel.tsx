import { useState, useRef, useEffect } from 'react';
import { ItineraryItem, TravelChat } from '../types';
import { Sparkles, Send, Bot, User, RefreshCw, Zap, Compass, ShieldAlert } from 'lucide-react';

interface AIPlannerPanelProps {
  items: ItineraryItem[];
  lang?: 'fr' | 'th';
}

const PRESET_QUESTIONS_FR = [
  "Où acheter des cartouches de gaz à Bangkok ?",
  "Quelles formalités pour l'extension de Visa 24h ?",
  "Quels vêtements pour Doi Inthanon en altitude ?",
  "Y a-t-il des éléphants sauvages à Nam Nao ?"
];

const PRESET_QUESTIONS_TH = [
  "หาซื้อแก๊สกระป๋องในกรุงเทพฯ ได้ที่ไหน?",
  "ขั้นตอนต่อวีซ่าท่องเที่ยวในไทยทำอย่างไร?",
  "เตรียมตัวเรื่องเสื้อผ้าไปดอยอินทนนท์อย่างไร?",
  "มีช้างป่าที่อุทยานแห่งชาติน้ำหนาวจริงไหม?"
];

export default function AIPlannerPanel({ items, lang = 'fr' }: AIPlannerPanelProps) {
  const [activeTab, setActiveTab] = useState<'chat' | 'optimize'>('chat');
  
  // Chat state
  const [chatInput, setChatInput] = useState('');
  const [chats, setChats] = useState<TravelChat[]>([]);
  const [isChatLoading, setIsChatLoading] = useState(false);

  // Optimizer state
  const [optimization, setOptimization] = useState<string>('');
  const [isOptimizeLoading, setIsOptimizeLoading] = useState(false);

  const chatsEndRef = useRef<HTMLDivElement>(null);

  const getInitialMessage = (len: number, l: 'fr' | 'th') => {
    if (l === 'th') {
      return "สวัสดีครับ! 🌴 ผมคือ **ThaiWander** ผู้ช่วย AI ผู้เชี่ยวชาญด้านโรดทริปและแคมป์ปิ้งในประเทศไทย\n\nผมได้วิเคราะห์กำหนดการเดินทาง **" + len + " ขั้นตอน** ของคุณแล้ว วันนี้มีอะไรให้ผมช่วยเหลือในการผจญภัยของคุณไหมครับ?";
    }
    return "Sawatdee khrap ! 🌴 Je suis **ThaiWander**, votre assistant IA expert du road trip et du camping en Thaïlande. \n\nJ'ai analysé votre itinéraire de **" + len + " étapes**. Comment puis-je vous aider à préparer votre aventure aujourd'hui ?";
  };

  // Sync / Toggle welcome message language on change
  useEffect(() => {
    if (chats.length === 0) {
      setChats([
        {
          role: 'assistant',
          content: getInitialMessage(items.length, lang),
          timestamp: new Date().toLocaleTimeString(lang === 'fr' ? 'fr-FR' : 'th-TH', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } else {
      setChats(prev => {
        if (prev.length === 1 && prev[0].role === 'assistant') {
          return [
            {
              ...prev[0],
              content: getInitialMessage(items.length, lang),
              timestamp: new Date().toLocaleTimeString(lang === 'fr' ? 'fr-FR' : 'th-TH', { hour: '2-digit', minute: '2-digit' })
            }
          ];
        }
        return prev;
      });
    }
  }, [lang, items.length]);

  // Auto scroll chat to bottom
  useEffect(() => {
    chatsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats]);

  // Handle asking a chat question
  const handleAskQuestion = async (questionText: string) => {
    if (!questionText.trim() || isChatLoading) return;

    const userMsg: TravelChat = {
      role: 'user',
      content: questionText,
      timestamp: new Date().toLocaleTimeString(lang === 'fr' ? 'fr-FR' : 'th-TH', { hour: '2-digit', minute: '2-digit' })
    };

    setChats(prev => [...prev, userMsg]);
    setChatInput('');
    setIsChatLoading(true);

    try {
      const response = await fetch('/api/travel-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...chats, userMsg].map(c => ({ role: c.role, content: c.content })),
          items,
          lang // Send active language to API
        })
      });

      const data = await response.json();
      
      setChats(prev => [...prev, {
        role: 'assistant',
        content: data.content || (lang === 'fr' ? "Désolé, je n'ai pas pu obtenir de conseils." : "ขออภัยด้วยครับ ไม่สามารถดึงคำแนะนำได้ในขณะนี้"),
        timestamp: new Date().toLocaleTimeString(lang === 'fr' ? 'fr-FR' : 'th-TH', { hour: '2-digit', minute: '2-digit' })
      }]);
    } catch (err) {
      console.error(err);
      setChats(prev => [...prev, {
        role: 'assistant',
        content: lang === 'fr' 
          ? "Erreur lors de la connexion à l'assistant. Veuillez vous assurer que le serveur fonctionne correctement." 
          : "เกิดข้อผิดพลาดในการเชื่อมต่อกับผู้ช่วยโปรดตรวจสอบว่าเซิร์ฟเวอร์เปิดใช้งานอยู่",
        timestamp: new Date().toLocaleTimeString(lang === 'fr' ? 'fr-FR' : 'th-TH', { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  // Run Route Optimization
  const handleOptimize = async () => {
    setIsOptimizeLoading(true);
    setOptimization('');
    try {
      const response = await fetch('/api/optimize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, lang }) // send active language
      });
      const data = await response.json();
      setOptimization(data.analysis || (lang === 'fr' ? "Impossible d'obtenir une analyse." : "ไม่สามารถรับการวิเคราะห์ลอจิสติกส์ได้"));
    } catch (err) {
      console.error(err);
      setOptimization(lang === 'fr' 
        ? "Erreur lors du calcul d'optimisation de l'itinéraire." 
        : "เกิดข้อผิดพลาดในการวิเคราะห์และจัดลำดับทริป");
    } finally {
      setIsOptimizeLoading(false);
    }
  };

  // Run automatically on mount or tab select if empty
  useEffect(() => {
    if (activeTab === 'optimize' && !optimization && !isOptimizeLoading) {
      handleOptimize();
    }
  }, [activeTab]);

  const presets = lang === 'fr' ? PRESET_QUESTIONS_FR : PRESET_QUESTIONS_TH;

  return (
    <div className="flex flex-col h-full bg-white border-l border-slate-100" id="ai-planner-panel">
      {/* Sidebar Top Header */}
      <div className="p-4 border-b border-slate-100 bg-white">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <div className="bg-slate-900 p-1.5 rounded-lg text-white">
              <Bot className="w-4.5 h-4.5" />
            </div>
            <div>
              <h2 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                {lang === 'fr' ? "Compagnon de Route IA" : "เพื่อนร่วมทาง AI"}
              </h2>
              <p className="text-[10px] text-slate-400">
                {lang === 'fr' ? "Conseils de voyage en temps réel" : "คำแนะนำการเดินทางแบบเรียลไทม์"}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-1 bg-emerald-50 text-[10px] text-emerald-700 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
            <Zap className="w-2.5 h-2.5 fill-emerald-500 text-emerald-500" />
            <span>{lang === 'fr' ? "Mode IA Actif" : "โหมด AI พร้อมใช้งาน"}</span>
          </div>
        </div>

        {/* Inner Switch Tabs */}
        <div className="flex bg-slate-100 rounded-lg p-1 text-xs">
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex-1 py-1.5 rounded-md font-semibold cursor-pointer text-center transition-all ${
              activeTab === 'chat'
                ? 'bg-white text-slate-800 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {lang === 'fr' ? "Assistant Expert (Chat)" : "แชทผู้เชี่ยวชาญ AI"}
          </button>
          <button
            onClick={() => setActiveTab('optimize')}
            className={`flex-1 py-1.5 rounded-md font-semibold cursor-pointer text-center transition-all ${
              activeTab === 'optimize'
                ? 'bg-white text-slate-800 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {lang === 'fr' ? "Analyse Logistique" : "วิเคราะห์ลอจิสติกส์"}
          </button>
        </div>
      </div>

      {/* Primary Section Body */}
      <div className="flex-1 overflow-y-auto bg-slate-50/50 p-4">
        {activeTab === 'chat' ? (
          /* Chat Tab Interface */
          <div className="flex flex-col h-full gap-4">
            {/* Scrollable messages box */}
            <div className="flex-1 space-y-4 pr-1 min-h-[220px]">
              {chats.map((chat, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2.5 max-w-[85%] ${
                    chat.role === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                  }`}
                >
                  {/* Bubble avatar */}
                  <div className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 border shadow-sm ${
                    chat.role === 'user' 
                      ? 'bg-slate-800 text-white border-slate-700' 
                      : 'bg-emerald-500 text-white border-emerald-400'
                  }`}>
                    {chat.role === 'user' ? (
                      <User className="w-3.5 h-3.5" />
                    ) : (
                      <Bot className="w-3.5 h-3.5" />
                    )}
                  </div>

                  {/* Chat core body */}
                  <div className="space-y-1">
                    <div className={`p-3 rounded-2xl text-xs leading-relaxed shadow-sm ${
                      chat.role === 'user'
                        ? 'bg-slate-800 text-white rounded-tr-none'
                        : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                    }`}>
                      {/* Very simple markdown paragraph renderer */}
                      {chat.content.split('\n\n').map((para, pIdx) => {
                        return (
                          <p key={pIdx} className="mb-2 last:mb-0">
                            {para.split('\n').map((line, lIdx) => {
                              // Handle bold strings **text**
                              let renderedLine = line;
                              const boldRegex = /\*\*(.*?)\*\*/g;
                              let match;
                              const parts = [];
                              let lastIdx = 0;
                              
                              while ((match = boldRegex.exec(line)) !== null) {
                                parts.push(renderedLine.substring(lastIdx, match.index));
                                parts.push(<strong key={match.index} className="font-bold text-slate-900 dark:text-emerald-400">{match[1]}</strong>);
                                lastIdx = boldRegex.lastIndex;
                              }
                              parts.push(renderedLine.substring(lastIdx));

                              return (
                                <span key={lIdx} className="block">
                                  {parts.length > 1 ? parts : line}
                                </span>
                              );
                            })}
                          </p>
                        );
                      })}
                    </div>
                    <span className="text-[9px] text-slate-400 block px-1 text-right">
                      {chat.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {isChatLoading && (
                <div className="flex gap-2.5 mr-auto max-w-[85%]">
                  <div className="h-7 w-7 rounded-full bg-emerald-500 text-white flex items-center justify-center border border-emerald-400 shadow-sm animate-pulse">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white text-slate-500 border border-slate-100 p-3.5 rounded-2xl rounded-tl-none text-xs flex items-center gap-2 shadow-sm">
                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                      <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                    <span>{lang === 'fr' ? "Rédaction des conseils..." : "กำลังค้นหาและเรียบเรียงข้อมูล..."}</span>
                  </div>
                </div>
              )}
              <div ref={chatsEndRef} />
            </div>

            {/* Quick interactive suggestions */}
            <div className="space-y-1.5">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">
                {lang === 'fr' ? "Questions fréquentes" : "คำถามยอดนิยม"}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {presets.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAskQuestion(q)}
                    disabled={isChatLoading}
                    className="text-[10px] bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 font-medium px-2.5 py-1.5 rounded-lg text-left shadow-sm transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Message input bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAskQuestion(chatInput);
              }}
              className="flex gap-1.5 pt-2"
            >
              <input
                type="text"
                placeholder={lang === 'fr' ? "Posez votre question sur la Thaïlande..." : "พิมพ์คำถามของคุณเกี่ยวกับประเทศไทยและแคมป์ปิ้ง..."}
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                className="flex-1 text-xs px-3 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              />
              <button
                type="submit"
                disabled={!chatInput.trim() || isChatLoading}
                className="bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white p-2.5 rounded-xl cursor-pointer shadow-sm transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          /* Optimize Tab Interface */
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-indigo-500" />
                  <h3 className="text-xs font-bold text-slate-800">
                    {lang === 'fr' ? "Rythme & Cohérence" : "ประเมินจังหวะและความลงตัวทริป"}
                  </h3>
                </div>
                <button
                  onClick={handleOptimize}
                  disabled={isOptimizeLoading}
                  className="text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold px-2 py-1 rounded-md flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className={`w-3 h-3 ${isOptimizeLoading ? 'animate-spin' : ''}`} />
                  <span>{lang === 'fr' ? "Analyser à nouveau" : "วิเคราะห์ใหม่อีกครั้ง"}</span>
                </button>
              </div>

              {isOptimizeLoading ? (
                <div className="py-12 flex flex-col items-center justify-center gap-2 text-slate-400">
                  <RefreshCw className="w-6 h-6 animate-spin text-emerald-500" />
                  <span className="text-xs font-semibold">
                    {lang === 'fr' ? "Analyse du parcours en cours..." : "กำลังวิเคราะห์โครงสร้างเส้นทาง..."}
                  </span>
                </div>
              ) : (
                <div className="text-xs text-slate-600 leading-relaxed space-y-3 prose">
                  {optimization ? (
                    optimization.split('\n').map((line, idx) => {
                      if (line.startsWith('###')) {
                        return <h4 key={idx} className="font-extrabold text-slate-800 text-xs uppercase tracking-wider mt-4 mb-2">{line.replace('###', '')}</h4>;
                      }
                      if (line.startsWith('-')) {
                        return <li key={idx} className="ml-3.5 list-disc mt-1">{line.substring(1).trim()}</li>;
                      }
                      return <p key={idx} className="mb-2">{line}</p>;
                    })
                  ) : (
                    <p>{lang === 'fr' ? "Aucune optimisation générée." : "ไม่สามารถแสดงข้อเสนอการเพิ่มประสิทธิภาพได้"}</p>
                  )}
                </div>
              )}
            </div>

            {/* Camping Safety Advisories Card */}
            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200/60 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 text-amber-800">
                <ShieldAlert className="w-4.5 h-4.5" />
                <h3 className="text-xs font-bold uppercase tracking-wider">
                  {lang === 'fr' ? "Règles d'or du camping sauvage" : "กฎเหล็กกางเต็นท์ในไทย"}
                </h3>
              </div>
              <ul className="text-[10px] text-amber-800/90 leading-relaxed space-y-1.5 list-disc pl-4 font-medium">
                {lang === 'fr' ? (
                  <>
                    <li>Le camping sauvage strict est généralement interdit en Thaïlande, privilégiez toujours les emplacements officiels (National Parks) qui disposent de sanitaires et de gardes forestiers.</li>
                    <li>Le coût d'un emplacement officiel de camping est dérisoire (30 THB / nuit par personne).</li>
                    <li>Méfiez-vous de la saison des pluies (mai à octobre) car les crues soudaines (flash floods) à proximité des rivières sont très dangereuses.</li>
                    <li>Certains parcs du nord descendent sous les 10°C la nuit de novembre à février (Doi Inthanon). Prévoyez un duvet chaud !</li>
                  </>
                ) : (
                  <>
                    <li>การตั้งแคมป์ป่าลึกโดยไม่มีเจ้าหน้าที่นำทางเป็นสิ่งที่พึงหลีกเลี่ยง แนะนำให้ใช้จุดกางเต็นท์ทางการของอุทยานแห่งชาติที่มีความปลอดภัย มีห้องน้ำ และมีเจ้าหน้าที่ดูแลอย่างทั่วถึง</li>
                    <li>ค่าธรรมเนียมกางเต็นท์ในพื้นที่อุทยานแห่งชาติอย่างเป็นทางการมีราคาที่ประหยัดมาก เพียงประมาณ 30 บาทต่อคนต่อคืนเท่านั้น</li>
                    <li>โปรดใช้ความระมัดระวังเป็นพิเศษในช่วงฤดูฝน (พฤษภาคม ถึง ตุลาคม) เนื่องจากมีความเสี่ยงต่อน้ำป่าไหลหลากที่เกิดได้อย่างรวดเร็วและเป็นอันตรายอย่างยิ่ง</li>
                    <li>ยอดเขาทางภาคเหนือ เช่น อุทยานแห่งชาติดอยอินทนนท์ ในช่วงเดือนพฤศจิกายนถึงกุมภาพันธ์ อุณหภูมิอาจลดต่ำลงกว่า 10 องศาเซลเซียส ควรเตรียมถุงนอนที่ให้ความอบอุ่นเพียงพอ</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
