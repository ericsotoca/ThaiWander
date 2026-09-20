import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Standard Thailand default place dictionary containing real photos, detailed tips, and maximum info
const STANDARD_THAI_PLACES: Record<string, { lat: number; lng: number; notes: string; imageUrl: string; detailedTips: string; maxInfo: string }> = {
  "Bangkok": {
    lat: 13.7563,
    lng: 100.5018,
    notes: "Départ du road trip - Achat gaz Decathlon",
    imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Achetez impérativement vos cartouches de gaz à vis (230g ou 450g) chez Decathlon Rama IV avant de quitter Bangkok. Prévoyez suffisamment d'espèces (bahts thaïlandais) car les accueils des parcs nationaux n'acceptent pas les cartes bancaires.",
    maxInfo: "Capitale vibrante et point de départ idéal. Profitez-en pour louer votre véhicule de camping (un pick-up 4x4 ou SUV est vivement recommandé pour les routes de montagne du Nord)."
  },
  "Wat Sangkat Rattanakhiri Uthai Thani": {
    lat: 15.3857,
    lng: 100.0232,
    notes: "Événement Tak Bat Devo et nuit au bord de la rivière",
    imageUrl: "https://images.unsplash.com/photo-1608958416719-74e6c38daef0?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Montez les 449 marches menant au temple sacré au sommet du mont Sakaekrang pour admirer le lever du soleil sur la province d'Uthai Thani.",
    maxInfo: "Ce temple est mondialement célèbre pour l'événement spectaculaire du Tak Bat Devo, célébré à la fin de la retraite bouddhiste des pluies (Ok Phansa), où plus de 500 moines descendent le mont pour recevoir les offrandes des fidèles."
  },
  "Mae Wong National Park": {
    lat: 16.0384,
    lng: 99.1171,
    notes: "Camping Khun Nam Yen - Chong Yen et cascade Khlong Lan",
    imageUrl: "https://images.unsplash.com/photo-1500627869374-13cd993b1115?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Prévoyez des vêtements très chauds pour la nuit. Chong Yen est réputé pour son vent constant et ses températures fraîches (parfois 12°C). Pensez également à emporter du répulsif contre les petits moucherons de sable de montagne.",
    maxInfo: "L'un des parcs de jungle de montagne les plus sauvages du pays. Le point de vue de Chong Yen est situé à 1 340 mètres d'altitude, offrant des mers de nuages matinales à couper le souffle. Ne manquez pas la cascade de Khlong Lan, un mur d'eau titanesque de 100 mètres de haut."
  },
  "Si Satchanalai National Park": {
    lat: 17.5516,
    lng: 99.4795,
    notes: "Camping rivière - Cascades Tad Dao et ruines jungle",
    imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Louez un vélo à l'entrée du parc historique pour environ 30 THB. Cela vous permettra de découvrir l'ensemble des ruines à votre rythme, à l'ombre d'arbres séculaires géants.",
    maxInfo: "Classé au patrimoine mondial de l'UNESCO, ce site abrite les ruines de l'ancienne cité sœur de Sukhothai. Entouré par une jungle sauvage et des collines préservées, il est incroyablement paisible, authentique, et beaucoup moins fréquenté par les touristes."
  },
  "Chae Son National Park": {
    lat: 18.8354,
    lng: 99.4716,
    notes: "Camping ombragé - Bains chauds naturels et cascades",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Achetez un petit panier d'œufs de caille ou de poule vendus à l'entrée par les locaux et plongez-le dans les sources bouillonnantes à 82°C pour déguster des œufs mollets parfaits cuits par la Terre !",
    maxInfo: "Un joyau caché qui combine des sources chaudes minérales et d'eau douce fraîche. Vous pouvez louer de superbes cabines de bains thermaux privés pour seulement 50 THB. Le camping est ombragé, plat et situé au bord d'une agréable rivière de montagne."
  },
  "Doi Inthanon National Park": {
    lat: 18.5880,
    lng: 98.4867,
    notes: "Camping Dong Son - Sentier Ang Ka et cascade Mae Ya",
    imageUrl: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Les nuits au camping de Dong Son (1 300m) peuvent descendre sous les 5°C de novembre à janvier. Louez ou apportez un bon sac de couchage thermique et une veste de montagne.",
    maxInfo: "Le toit de la Thaïlande, culminant à 2 565 mètres. Explorez le sentier de brume moussue Ang Ka, visitez les majestueuses pagodes royales jumelles, et admirez la cascade Mae Ya, l'une des plus spectaculaires d'Asie du Sud-Est."
  },
  "Chiang Dao": {
    lat: 19.3667,
    lng: 98.9667,
    notes: "Vue falaises calcaires - Grottes et sources Pong Ar-nong",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Pour visiter les grottes non éclairées de Chiang Dao, engagez obligatoirement l'un des guides locaux équipés d'une lanterne à gaz de camping traditionnelle à l'entrée (environ 150 THB).",
    maxInfo: "Dominé par le Doi Luang Chiang Dao, le troisième plus haut sommet calcaire du pays (2 175 mètres). Le village propose de magnifiques sources chaudes publiques en plein air."
  },
  "Doi Pha Hom Pok National Park": {
    lat: 20.0416,
    lng: 99.1418,
    notes: "Camping altitude - Geysers et sources de Fang",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Commandez un brûleur Mookata traditionnel (barbecue/fondue thaïlandaise) à l'accueil du parc pour votre dîner sous les étoiles au camping d'altitude de Kiew Lom.",
    maxInfo: "Le deuxième plus haut sommet de Thaïlande (2 285m). Connu pour ses geysers d'eau thermale jaillissants à plus de 50 mètres de haut et ses sentiers escarpés offrant un superbe lever de soleil."
  },
  "Chiang Rai Immigration Office": {
    lat: 19.9101,
    lng: 99.8406,
    notes: "HÔTEL : Formalités Extension Visa 24h + Lessives",
    imageUrl: "https://images.unsplash.com/photo-1543157148-f411b994793a?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Arrivez au bureau d'immigration dès 8h15 pour faire partie des premiers numéros d'attente. Apportez votre formulaire TM30 imprimé de votre hôtel pour obtenir votre extension de visa de 30 jours.",
    maxInfo: "Une halte stratégique indispensable à la fin de vos 3 premiers jours de séjour. Profitez d'un hôtel douillet avec piscine à Chiang Rai, faites vos lessives dans les laveries automatiques, et visitez les célèbres temples."
  },
  "Doi Phu Kha National Park": {
    lat: 19.2014,
    lng: 101.0784,
    notes: "Camping sommet - Route panoramique 1081 et mer de nuages",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
    detailedTips: "La route 1081 (route du sel historique de Bo Kluea) est sinueuse et très inclinée par endroits. Utilisez impérativement le frein moteur en descente.",
    maxInfo: "Situé dans la province reculée de Nan, ce parc abrite la rare plante Chomphu Phu Kha aux fleurs roses et de superbes campings perchés au-dessus de brumes denses."
  },
  "Phu Hin Rong Kla National Park": {
    lat: 16.9996,
    lng: 101.1278,
    notes: "Camping plateau - Rochers Lan Hin Taek et brumes",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Portez de bonnes chaussures de marche adhérentes. Le climat y est humide et les formations rocheuses plates peuvent être glissantes au milieu de la brume.",
    maxInfo: "Un plateau gréseux spectaculaire avec des crevasses géantes (Lan Hin Taek), chargé d'histoire car il servait de base stratégique retranchée dans les années 1970."
  },
  "Nam Nao National Park": {
    lat: 16.7412,
    lng: 101.5714,
    notes: "Camping forêt - Éléphants sauvages et pinèdes",
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Ne stockez jamais de fruits (bananes, ananas) ou de nourriture parfumée dans votre tente ! Les animaux sauvages (cerfs aboyeurs, éléphants) ont un odorat puissant. Rangez tout dans votre coffre de voiture.",
    maxInfo: "Une forêt de pins d'altitude et de jungle traversée par les éléphants d'Asie sauvages. Le parc offre un climat frais toute l'année et un magnifique ciel étoilé dénué de pollution lumineuse."
  },
  "Khao Yai National Park": {
    lat: 14.4389,
    lng: 101.3722,
    notes: "Camping Lam Ta Khong - Cascades Heo Suwat et singes",
    imageUrl: "https://images.unsplash.com/photo-1580013545434-2e2912440b8a?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Fermez impérativement toutes les fermetures éclair de votre tente, y compris le double-toit. Les macaques du parc sont extrêmement malins et fouilleront vos affaires au moindre relâchement !",
    maxInfo: "Le plus ancien et célèbre parc national du pays, classé à l'UNESCO. Abrite la cascade de Heo Suwat (rendue célèbre par le film 'La Plage') et d'incroyables sentiers d'observation de calaos géants."
  },
  "Ayutthaya": {
    lat: 14.3532,
    lng: 100.5681,
    notes: "Dernière étape - Couché de soleil sur les temples en ruine",
    imageUrl: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Rendez-vous au Wat Chaiwatthanaram en fin d'après-midi (vers 17h00). Admirez le coucher de soleil s'embraser sur les tours de style khmer depuis l'autre rive de la rivière Chao Phraya.",
    maxInfo: "L'ancienne capitale royale majestueuse du royaume de Siam. Une conclusion culturelle sublime et apaisante pour clore ce road trip inoubliable avant votre retour sur Bangkok."
  }
};

// 1. API Route: Geocoding (Surgical fallback strategy returning coordinated, photo, and customized info)
app.post('/api/geocode', async (req, res) => {
  const { placeName } = req.body;
  if (!placeName) {
    return res.status(400).json({ error: 'placeName parameter is required' });
  }

  // Exact Match or partial lookup in our high-fidelity places
  const trimmed = placeName.trim();
  const matchedKey = Object.keys(STANDARD_THAI_PLACES).find(
    key => key.toLowerCase().includes(trimmed.toLowerCase()) || trimmed.toLowerCase().includes(key.toLowerCase())
  );

  const defaultData = matchedKey ? STANDARD_THAI_PLACES[matchedKey] : null;

  try {
    // Completely FREE OpenStreetMap Nominatim geocoding proxy - NO API KEYS required!
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(trimmed + ", Thailand")}&format=json&limit=1`, {
      headers: {
        'User-Agent': 'ThaiWanderCampingApp/1.0 (eric.sotoca@gmail.com)'
      }
    });

    const data = await response.json();
    if (data && data.length > 0) {
      const result = data[0];
      return res.json({
        lat: parseFloat(result.lat),
        lng: parseFloat(result.lon),
        notes: `Localisé via OpenStreetMap : ${result.display_name.split(',')[0] || trimmed}.`,
        imageUrl: defaultData?.imageUrl,
        detailedTips: defaultData?.detailedTips,
        maxInfo: defaultData?.maxInfo
      });
    }

  } catch (error: any) {
    console.error("Geocoding failed. Using fallback strategy:", error?.message || error);
  }

  // Fallback coordinate mapping
  if (defaultData) {
    return res.json({
      lat: defaultData.lat,
      lng: defaultData.lng,
      notes: defaultData.notes,
      imageUrl: defaultData.imageUrl,
      detailedTips: defaultData.detailedTips,
      maxInfo: defaultData.maxInfo
    });
  }

  // Default to Bangkok with slight random offset to avoid exact stacking
  const randOffsetLat = (Math.random() - 0.5) * 0.4;
  const randOffsetLng = (Math.random() - 0.5) * 0.4;
  return res.json({
    lat: 13.7563 + randOffsetLat,
    lng: 100.5018 + randOffsetLng,
    notes: `Ajouté (Position estimée en Thaïlande) - Étape prête pour votre itinéraire.`
  });
});

// 2. API Route: AI Travel Assistant Chat (100% Free & Fast Local Rule-Based Expert Engine with Bilingual Support)
app.post('/api/travel-assistant', async (req, res) => {
  const { messages, items, lang = 'fr' } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  const recentMessage = (messages[messages.length - 1]?.content || "").toLowerCase();
  const stepCount = items && Array.isArray(items) ? items.length : 14;

  let responseText = "";

  if (lang === 'th') {
    if (recentMessage.includes("gaz") || recentMessage.includes("bouteille") || recentMessage.includes("cartouche") || recentMessage.includes("decathlon") || recentMessage.includes("recharge") || recentMessage.includes("แก๊ส") || recentMessage.includes("กระป๋อง")) {
      responseText = `### ⛽ หาซื้อแก๊สกระป๋องตั้งแคมป์ในประเทศไทยได้ที่ไหน?

นี่คือสิ่งที่สำคัญที่สุดในด้านโลจิสติกส์!

1. **ในกรุงเทพฯ (แนะนำ)**:
   - วิธีที่ง่ายที่สุดคือไปที่ร้าน **Decathlon** (*Decathlon พระราม 4* หรือ *Decathlon บางนา*) ซึ่งมีแก๊สกระป๋องแบบเกลียวมาตรฐาน (230 กรัม / 450 กรัม) ที่เข้ากันได้กับเตาแคมป์ปิ้งของคุณ
   - แผนกแคมป์ปิ้งในห้างสรรพสินค้าชั้นนำ (*SuperSports* ที่ CentralWorld) ก็มีในบางครั้ง

2. **นอกกรุงเทพฯ**:
   - ร้านขายเครื่องมือช่างในพื้นที่หรือร้าน **MR.DIY** มีถังแก๊สแบบเขี้ยว (แก๊สกระป๋องยาวสีน้ำเงิน) หากเตาของคุณต้องใช้แบบเกลียว ควรซื้อ**หัวแปลงข้อต่อแบบเกลียว**ล่วงหน้า!

⚠️ *คำเตือนที่สำคัญ: ห้ามนำแก๊สกระป๋องขึ้นเครื่องบินโดยเด็ดขาด (ไม่ว่าจะเป็นกระเป๋าถือหรือใต้ท้องเครื่อง)*`;
    }
    else if (recentMessage.includes("visa") || recentMessage.includes("immigration") || recentMessage.includes("formalité") || recentMessage.includes("extension") || recentMessage.includes("séjour") || recentMessage.includes("วีซ่า") || recentMessage.includes("พาสปอร์ต")) {
      responseText = `### 🛂 ขั้นตอนการต่อวีซ่าท่องเที่ยวในไทย

สำหรับทริป ${stepCount} จุดแวะพักของคุณ นี่คือกฎเกณฑ์หลัก:

1. **ยกเว้นวีซ่า (Visa Exemption)**:
   - นักท่องเที่ยวต่างชาติส่วนใหญ่จะได้รับการยกเว้นวีซ่า **30 วัน** ฟรีเมื่อเดินทางมาถึง

2. **การต่ออายุวีซ่า (ต่อเพิ่ม 30 วัน)**:
   - สามารถเดินทางไปที่สำนักงานตรวจคนเข้าเมืองในพื้นที่ (เช่น **สำนักงานตรวจคนเข้าเมืองเชียงราย** ในทริปของคุณ)
   - **สิ่งที่ต้องเตรียม**:
     - หนังสือเดินทางตัวจริง + สำเนา (หน้าแรกและหน้าประทับตราเข้าเมือง)
     - รูปถ่ายขนาด 2 นิ้ว 1 รูป
     - แบบฟอร์มคำขอต่ออายุวีซ่า
     - ค่าธรรมเนียม **1,900 บาท** (ชำระด้วยเงินสด)
     - แบบฟอร์ม TM30 (ใบแจ้งที่พักอาศัย สามารถขอจากลานกางเต็นท์หรือโรงแรมได้)`;
    }
    else if (recentMessage.includes("vêtement") || recentMessage.includes("froid") || recentMessage.includes("altitude") || recentMessage.includes("inthanon") || recentMessage.includes("température") || recentMessage.includes("météo") || recentMessage.includes("เสื้อผ้า") || recentMessage.includes("หนาว")) {
      responseText = `### 🧥 การเตรียมเสื้อผ้าและสภาพอากาศในพื้นที่สูง

อุทยานแห่งชาติทางภาคเหนือของไทย (เช่น ดอยอินทนนท์, ดอยผ้าห่มปก) อาจมีอากาศหนาวเย็นอย่างน่าประหลาดใจในช่วงเดือนพฤศจิกายนถึงกุมภาพันธ์:

1. **อุณหภูมิในพื้นที่สูง**:
   - บนยอด**ดอยอินทนนท์** (2,565 เมตร) อุณหภูมิยามค่ำคืนอาจลดลงต่ำกว่า **5°C ถึง 10°C**!
   - ในอุทยานแห่งชาติบนเขาทั่วไป (แม่วงก์, ดอยภูคา) ตอนกลางคืนจะอยู่ที่ประมาณ 12°C ถึง 15°C

2. **เสื้อผ้าที่ควรเตรียม**:
   - **ถุงนอนอุ่นๆ** (ระดับอุณหภูมิสบายอย่างน้อย 10°C)
   - เสื้อหนาว เสื้อกันลม กางเกงขายาว และถุงเท้าหนาๆ สำหรับใส่นอน
   - เสื้อผ้าสำหรับเดินป่าที่มีน้ำหนักเบาและระบายอากาศได้ดีในตอนกลางวัน`;
    }
    else if (recentMessage.includes("éléphant") || recentMessage.includes("nam nao") || recentMessage.includes("sauvage") || recentMessage.includes("animal") || recentMessage.includes("animaux") || recentMessage.includes("sécurité") || recentMessage.includes("ช้าง") || recentMessage.includes("สัตว์ป่า")) {
      responseText = `### 🐘 การปฏิบัติตัวเมื่อพบช้างป่า (น้ำหนาว และ เขาใหญ่)

อุทยานแห่งชาติน้ำหนาวและเขาใหญ่มีช้างป่าอาศัยอยู่ตามธรรมชาติ นี่คือข้อควรปฏิบัติเพื่อความปลอดภัย:

1. **เมื่อพบช้างป่าบนถนน**:
   - ควรรักษาระยะห่างจากช้างอย่างน้อย **30 ถึง 50 เมตร**
   - อย่าดับเครื่องยนต์เด็ดขาด เพื่อให้สามารถถอยรถได้ทันทีหากจำเป็น
   - ห้ามบีบแตรหรือเปิดไฟสูงใส่ช้างเพราะอาจทำให้ช้างหงุดหงิดและตื่นตกใจได้

2. **เมื่ออยู่ในลานกางเต็นท์**:
   - ห้ามเก็บ**อาหารที่มีกลิ่นหอม**หรือเปิดทิ้งไว้ในเต็นท์เด็ดขาด (ลิง กวาง และช้างป่ามีประสาทสัมผัสในการรับกลิ่นที่ไวมาก) ควรเก็บอาหารทั้งหมดไว้ในรถยนต์หรือในภาชนะที่ปิดมิดชิด`;
    }
    else if (recentMessage.includes("budget") || recentMessage.includes("prix") || recentMessage.includes("coût") || recentMessage.includes("thb") || recentMessage.includes("argent") || recentMessage.includes("tarifs") || recentMessage.includes("ราคา") || recentMessage.includes("เงิน")) {
      responseText = `### 🪙 อัตราค่าบริการและงบประมาณการแคมป์ปิ้งในไทย

การแคมป์ปิ้งเป็นทางเลือกที่ประหยัดที่สุดในการเดินทางท่องเที่ยวในประเทศไทย:

1. **ค่าเข้าอุทยานแห่งชาติ**:
   - สำหรับชาวต่างชาติประมาณ **100 ถึง 300 บาท** ต่อคน
   - ค่าพื้นที่กางเต็นท์: เพียง **30 บาท ต่อคนต่อคืน** เท่านั้น!

2. **บริการเช่าอุปกรณ์ที่อุทยาน (ไม่ต้องจองล่วงหน้า)**:
   - เต็นท์สำหรับ 2-3 คน: **150 ถึง 225 บาท / คืน**
   - ถุงนอน: **30 บาท / คืน**
   - แผ่นรองนอน: **20 บาท / คืน**

3. **ค่าอาหาร**:
   - ร้านสวัสดิการของอุทยานมีอาหารตามสั่งราคาประหยัดและอร่อยมาก เพียงจานละ **50 ถึง 80 บาท** เท่านั้น (โดยปกติจะปิดให้บริการเวลาประมาณ 18:00 น.)`;
    }
    else if (recentMessage.includes("route") || recentMessage.includes("moto") || recentMessage.includes("conduite") || recentMessage.includes("permis") || recentMessage.includes("sécurité") || recentMessage.includes("voiture") || recentMessage.includes("ขับรถ") || recentMessage.includes("มอเตอร์ไซค์")) {
      responseText = `### 🏍️ การขับขี่บนทางเขาและใบอนุญาตขับขี่

การขับรถท่องเที่ยวในประเทศไทยให้ความอิสระสูง แต่ต้องการความระมัดระวังเป็นพิเศษ:

1. **ใบอนุญาตขับขี่สากล (IDP) เป็นสิ่งจำเป็น**:
   - คุณต้องมีใบขับขี่ของประเทศตนเองควบคู่กับใบขับขี่สากลที่มีตราประทับประเภทรถที่ถูกต้อง (ประเภท A สำหรับมอเตอร์ไซค์ และประเภท B สำหรับรถยนต์) เพื่อให้ได้รับความคุ้มครองจากประกันภัย

2. **กฎการขับขี่**:
   - **ขับรถชิดซ้าย**!
   - บีบแตรสั้นๆ ในช่วงโค้งหักศอกที่ไม่มีทัศนวิสัยเพื่อเตือนรถที่ขับสวนมา
   - การขับขี่บนทางลาดชัน: ควรใช้เกียร์ต่ำเพื่อใช้แรงฉุดของเครื่องยนต์ช่วยเบรก (Engine Brake) ป้องกันเบรกไหม้`;
    }
    else if (recentMessage.includes("camping") || recentMessage.includes("tente") || recentMessage.includes("sauvage") || recentMessage.includes("parc") || recentMessage.includes("bivouac") || recentMessage.includes("แคมป์") || recentMessage.includes("กางเต็นท์")) {
      responseText = `### 🏕️ กฎระเบียบเกี่ยวกับการตั้งแคมป์ในประเทศไทย

การตั้งแคมป์ป่าลึกหรือแคมป์ปิ้งในที่สาธารณะนอกพื้นที่ที่กำหนดเป็นเรื่องต้องห้ามเพื่อความปลอดภัยและอนุรักษ์สิ่งแวดล้อม

อย่างไรก็ตาม อุทยานแห่งชาติในประเทศไทยมีเครือข่ายลานกางเต็นท์ที่มีการจัดสรรพื้นที่อย่างยอดเยี่ยม:

1. **สิ่งอำนวยความสะดวก**:
   - มีห้องน้ำและฝักบัวอาบน้ำ จุดบริการชาร์จไฟ และระบบความปลอดภัยจากเจ้าหน้าที่พิทักษ์ป่าตลอด 24 ชั่วโมง

2. **ความสะดวกรวดเร็ว**:
   - ไม่จำเป็นต้องจองล่วงหน้า สามารถลงทะเบียนที่ศูนย์บริการนักท่องเที่ยวของอุทยานในวันเดินทางเพื่อชำระค่าพื้นที่ (30 บาท) และเช่าอุปกรณ์แคมป์ปิ้งได้เลย`;
    }
    else {
      responseText = `### 🌴 ผู้เชี่ยวชาญด้านแคมป์ปิ้ง ThaiWander 🏕️

สวัสดีครับ! ผมคือเพื่อนร่วมทางส่วนตัวของคุณสำหรับทริป **${stepCount} จุดแวะพัก** นี้

เพื่อเตรียมความพร้อมที่ดีที่สุดสำหรับคุณ:

- ⛽ **แก๊สกระป๋อง**: ควรซื้อที่ Decathlon ในกรุงเทพฯ ตั้งแต่เริ่มเดินทาง (สาขาพระราม 4)
- 🧥 **เสื้อผ้ากันหนาว**: อย่าลืมเสื้อกันหนาวหนาๆ สำหรับคืนที่อากาศหนาวเย็นในภูเขาทางภาคเหนือ (เช่น ดอยอินทนนท์, ดอยผ้าห่มปก)
- 🛂 **ต่อวีซ่า**: ทริปของคุณใช้เวลานาน แนะนำให้ไปต่อวีซ่าท่องเที่ยว 30 วัน (ค่าธรรมเนียม 1,900 บาท) ที่ด่านตรวจคนเข้าเมืองเชียงราย (จุดแวะพักที่ 9)

*สอบถามข้อมูลเพิ่มเติมกับผมเรื่อง **แก๊ส**, **วีซ่า**, **อากาศหนาว**, **ช้างป่า** หรือ **งบประมาณแคมป์ปิ้ง** ได้เลยครับ!*`;
    }
  } else {
    // Default French
    if (recentMessage.includes("gaz") || recentMessage.includes("bouteille") || recentMessage.includes("cartouche") || recentMessage.includes("decathlon") || recentMessage.includes("recharge")) {
      responseText = `### ⛽ Où acheter du gaz de camping en Thaïlande ?\n\nC'est la question logistique la plus importante ! \n\n1. **À Bangkok (Recommandé)** :\n   - Le plus simple est de vous rendre dans un magasin **Decathlon** (*Decathlon Rama IV* ou *Decathlon Bangna*). Vous y trouverez des cartouches de gaz à vis standards (230g / 450g) compatibles avec vos réchauds de camping.\n   - Les rayons camping des grands magasins de sport (*SuperSports* au CentralWorld) en ont parfois.\n\n2. **Hors de Bangkok** :\n   - Les quincailleries locales ou les magasins **MR.DIY** vendent des bouteilles de gaz de type "baïonnette" (longues bouteilles bleues). Si votre réchaud nécessite des vis, achetez un **adaptateur** de bouteille de gaz à l'avance !\n\n⚠️ *Rappel important : Il est strictement interdit de transporter des cartouches de gaz dans les avions (cabine ou soute).*`;
    }
    else if (recentMessage.includes("visa") || recentMessage.includes("immigration") || recentMessage.includes("formalité") || recentMessage.includes("extension") || recentMessage.includes("séjour")) {
      responseText = `### 🛂 Formalités de Visa & Extension\n\nPour un voyage de ${stepCount} étapes comme le vôtre, voici les règles :\n\n1. **Exemption de Visa** :\n   - Les ressortissants européens bénéficient d'une exemption gratuite de **30 jours** à l'arrivée.\n\n2. **Extension de Visa (30 jours de plus)** :\n   - Rendez-vous dans un bureau d'immigration local (par exemple, le **Chiang Rai Immigration Office** à l'étape de votre road trip).\n   - **Fournir** :\n     - Votre passeport + copies (page photo et tampon d'entrée).\n     - Une photo d'identité.\n     - Le formulaire rempli sur place.\n     - Les frais de **1 900 THB** en espèces.\n     - Le formulaire TM30 (justificatif d'adresse, à demander à votre camping ou hôtel).`;
    }
    else if (recentMessage.includes("vêtement") || recentMessage.includes("froid") || recentMessage.includes("altitude") || recentMessage.includes("inthanon") || recentMessage.includes("température") || recentMessage.includes("météo")) {
      responseText = `### 🧥 Vêtements & Météo pour le camping en altitude\n\nLa Thaïlande peut être surprenante de fraîcheur dans les parcs nationaux du Nord (Doi Inthanon, Doi Pha Hom Pok) de novembre à février :\n\n1. **Températures en altitude** :\n   - Au sommet du **Doi Inthanon** (2 565m), les nuits chutent régulièrement sous les **5°C à 10°C** !\n   - Dans les parcs montagneux (Mae Wong, Doi Phu Kha), prévoyez 12°C à 15°C la nuit.\n\n2. **Vêtements à prévoir** :\n   - Un **duvet chaud** (confort 10°C minimum).\n   - Un pull polaire, un coupe-vent imperméable, un pantalon long et des chaussettes chaudes pour dormir.\n   - Des vêtements de randonnée légers et aérés pour la journée.`;
    }
    else if (recentMessage.includes("éléphant") || recentMessage.includes("nam nao") || recentMessage.includes("sauvage") || recentMessage.includes("animal") || recentMessage.includes("animaux") || recentMessage.includes("sécurité")) {
      responseText = `### 🐘 Rencontre avec les Éléphants Sauvages (Nam Nao & Khao Yai)\n\nLes parcs de **Nam Nao** et **Khao Yai** comptent des éléphants sauvages en liberté. Voici les consignes de sécurité :\n\n1. **Sur la route** :\n   - Gardez une **distance minimale de 30 à 50 mètres**.\n   - Laissez toujours le moteur tourner pour reculer rapidement si nécessaire.\n   - Ne klaxonnez pas et n'utilisez pas de phares pleins pour ne pas l'irriter.\n\n2. **Au camping** :\n   - Ne laissez **aucune nourriture parfumée** ou ouverte dans votre tente (singes, cerfs et éléphants ont un odorat très aiguisé). Rangez tout dans votre véhicule ou dans des contenants hermétiques.`;
    }
    else if (recentMessage.includes("budget") || recentMessage.includes("prix") || recentMessage.includes("coût") || recentMessage.includes("thb") || recentMessage.includes("argent") || recentMessage.includes("tarifs")) {
      responseText = `### 🪙 Tarifs et Budget Camping en Thaïlande\n\nLe camping est la façon la plus économique de visiter la Thaïlande :\n\n1. **Entrées des Parcs Nationaux** :\n   - De **100 à 300 THB** (environ 3 à 8 €) par personne.\n   - Emplacement de tente : seulement **30 THB par nuit et par personne** !\n\n2. **Location sur place (pas besoin de réserver)** :\n   - Tente pour 2-3 personnes : **150 à 225 THB / nuit**.\n   - Sac de couchage : **30 THB / nuit**.\n   - Matelas en mousse : **20 THB / nuit**.\n\n3. **Repas** :\n   - Les petites cantines des parcs nationaux servent d'excellents plats locaux pour seulement **50 à 80 THB** par assiette ! (Elles ferment généralement vers 18h).`;
    }
    else if (recentMessage.includes("route") || recentMessage.includes("moto") || recentMessage.includes("conduite") || recentMessage.includes("permis") || recentMessage.includes("sécurité") || recentMessage.includes("voiture")) {
      responseText = `### 🏍️ Conduite de Montagne & Permis de Conduire\n\nLa conduite en Thaïlande est idéale pour les amoureux de liberté mais demande du soin :\n\n1. **Permis International (PCI) Obligatoire** :\n   - Vous devez obligatoirement posséder votre permis national + permis international tamponné pour la catégorie correspondante (A pour moto, B pour voiture) pour être couvert par les assurances.\n\n2. **Règles de route** :\n   - **Conduite à gauche** !\n   - Klaxonnez brièvement dans les virages de montagne très serrés sans visibilité pour avertir les véhicules d'en face.\n   - Pente de montagne : Utilisez le frein moteur dans les descentes abruptes pour soulager les freins.`;
    }
    else if (recentMessage.includes("camping") || recentMessage.includes("tente") || recentMessage.includes("sauvage") || recentMessage.includes("parc") || recentMessage.includes("bivouac")) {
      responseText = `### 🏕️ Réglementation sur le camping en Thaïlande\n\nLe camping sauvage libre en pleine nature est interdit en Thaïlande pour des raisons écologiques et de sécurité.\n\nCependant, les parcs nationaux disposent d'un réseau incroyable de campings aménagés :\n\n1. **Infrastructures de qualité** :\n   - Douches gratuites, sanitaires propres, branchements de charge électrique et sécurité des rangers 24h/24.\n\n2. **Simplicité d'accès** :\n   - Inutile de réserver, présentez-vous simplement à l'accueil du parc national le jour même pour payer votre nuitée (30 THB) et louer votre matériel si besoin.`;
    }
    else {
      responseText = `### 🌴 Expert ThaiWander - Planificateur de Voyage Camping 🏕️\n\nSawatdee khrap ! Je suis votre compagnon de route local pour ce road trip de **${stepCount} étapes**.\n\nPour préparer au mieux votre départ :\n\n- ⛽ **Bouteilles de Gaz** : Achetez-les chez Decathlon à Bangkok à l'arrivée (Rama IV).\n- 🧥 **Vêtements Chauds** : N'oubliez pas une veste polaire pour les nuits fraîches dans les montagnes du Nord (Doi Inthanon, Doi Pha Hom Pok).\n- 🛂 **Visa** : Votre voyage dépasse 30 jours, pensez à faire une extension de visa de 30 jours pour 1900 THB au bureau de Chiang Rai (étape 9).\n\n*Posez-moi des questions précises sur le **gaz**, le **visa**, le **froid**, les **éléphants** ou le **budget** de camping !*`;
    }
  }

  return res.json({ content: responseText });
});

// 3. API Route: Optimize & Summarize (Local Deterministic Expert Diagnostic with Zero API Key with Bilingual Support)
app.post('/api/optimize', async (req, res) => {
  const { items, lang = 'fr' } = req.body;

  if (!items || !Array.isArray(items)) {
    return res.status(400).json({ error: 'items array is required' });
  }

  const totalSteps = items.length;
  const campingCount = items.filter((it: any) => it.category === 'Camping').length;
  const hotelCount = items.filter((it: any) => it.category === 'Lodging').length;
  const attractionsCount = items.filter((it: any) => it.category === 'Attraction').length;

  const hasInthanon = items.some((it: any) => it.placeName.toLowerCase().includes("inthanon"));
  const hasPhaHomPok = items.some((it: any) => it.placeName.toLowerCase().includes("pha hom pok"));
  const hasBangkok = items.some((it: any) => it.placeName.toLowerCase().includes("bangkok"));

  let suggestions: string[] = [];

  if (lang === 'th') {
    if (hasBangkok) {
      suggestions.push("**การซื้อแก๊สสำรอง** : ทริปของคุณเริ่มต้นหรือผ่านกรุงเทพฯ แนะนำให้แวะซื้อแก๊สกระป๋องแบบเกลียวมาตรฐานที่ Decathlon (สาขาพระราม 4) เพื่อความสะดวกก่อนออกเดินทางเข้าป่า");
    }

    if (hasInthanon || hasPhaHomPok) {
      suggestions.push("**อากาศหนาวในภาคเหนือ** : ตรวจพบการเดินทางสู่ดอยสูงชัน (ดอยอินทนนท์ หรือ ดอยผ้าห่มปก) ควรเตรียมเสื้อกันหนาวหนาๆ และถุงนอนที่มีความอบอุ่นระดับ 10°C เพื่อรับมือกับอากาศยามค่ำคืน");
    }

    if (campingCount > totalSteps / 2) {
      suggestions.push("**การสำรองพลังงานไฟ** : ทริปของคุณเน้นการกางเต็นท์ในอุทยานแห่งชาติเป็นหลัก แนะนำให้เตรียมแบตเตอรี่สำรอง (Powerbank) ไปด้วย เนื่องจากพื้นที่อุทยานบางแห่งอาจมีการตัดไฟในเวลา 22:00 น.");
    }

    const analysisMarkdown = `### 🌲 วิเคราะห์โครงสร้างเส้นทางทริปแคมป์ปิ้งของคุณ

โรดทริปแคมป์ปิ้งในประเทศไทยของคุณประกอบด้วย **${totalSteps} จุดแวะพัก** ตามลำดับเส้นทาง

#### 📊 สรุปประเภทของที่พัก :
- 🏕️ **ลานกางเต็นท์อุทยานแห่งชาติ** : ${campingCount} แห่ง
- 🏨 **โรงแรมและที่พักสะดวกสบาย** : ${hotelCount} แห่ง
- 🏛️ **สถานที่ท่องเที่ยวและอุทยานธรรมชาติ** : ${attractionsCount} แห่ง

#### ⛺ การประเมินความสมดุลของทริป :
- **จังหวะโดยรวม** : **ยอดเยี่ยมมาก**. การสลับระหว่างลานกางเต็นท์ธรรมชาติในอุทยาน และการแวะพักโรงแรมในเมืองใหญ่ (เช่น เชียงราย หรือ กรุงเทพฯ) เป็นการวางแผนที่ดีเยี่ยมในการซักเสื้อผ้า พักผ่อนร่างกาย และจัดการเรื่องวีซ่า
- **ช่วงเวลาที่แนะนำ** : ตั้งแต่ **พฤศจิกายน ถึง กุมภาพันธ์** (ฤดูหนาว) ถือเป็นช่วงเวลาที่สมบูรณ์แบบที่สุด ท้องฟ้าแจ่มใส ปริมาณฝนน้อยมาก และอากาศบนภูเขาเย็นสบายบริสุทธิ์

#### 💡 คำแนะนำด้านโลจิสติกส์ส่วนบุคคล :
${suggestions.map(s => `- ${s}`).join('\n')}
- **น้ำดื่ม**: น้ำในอุทยานแห่งชาติปลอดภัยสำหรับการล้างจาน แต่อย่านำมาดื่มโดยตรง ควรซื้อน้ำดื่มถังใหญ่ (5 ลิตร) ก่อนเดินทางเข้าสู่พื้นที่อุทยานที่ห่างไกล (เช่น แม่วงก์)
- **ข้อควรระวังความปลอดภัย**: ในอุทยานแห่งชาติเขาใหญ่หรือน้ำหนาว ห้ามเก็บอาหารที่มีกลิ่นแรงหรือผลไม้ไว้ในเต็นท์ เพื่อความปลอดภัยยามค่ำคืนจากสัตว์ป่าในพื้นที่`;

    return res.json({
      analysis: analysisMarkdown
    });

  } else {
    // Default French
    if (hasBangkok) {
      suggestions.push("**Ravitaillement de Gaz** : Votre voyage commence ou passe par Bangkok. Profitez-en pour acheter vos cartouches de gaz à vis standards chez Decathlon (Rama IV). C'est le moyen le plus simple de s'équiper avant de prendre les routes sauvages.");
    }

    if (hasInthanon || hasPhaHomPok) {
      suggestions.push("**Nuits fraîches dans le Nord** : Des étapes en altitude (*Doi Inthanon* ou *Doi Pha Hom Pok*) sont détectées dans votre trajet. Prévoyez un duvet chaud (confort 10°C) et un vêtement polaire pour les nuits en montagne.");
    }

    if (campingCount > totalSteps / 2) {
      suggestions.push("**Autonomie électrique** : Vous avez programmé une majorité d'étapes de camping. Prévoyez une bonne batterie externe (*Powerbank*) pour vos téléphones, car l'électricité peut être coupée dans les campings de parcs après 22h.");
    }

    const analysisMarkdown = `### 🌲 Analyse de votre Itinéraire de Camping

Votre road trip de camping en Thaïlande comprend **${totalSteps} étapes** réparties sur le trajet.

#### 📊 Synthèse des types d'hébergement :
- 🏕️ **Emplacements Camping sauvage/aménagé** : ${campingCount} étapes
- 🏨 **Hôtels & Logements confort** : ${hotelCount} étapes
- 🏛️ **Visites & Parcs Naturels** : ${attractionsCount} étapes

#### ⛺ Diagnostic de Cohérence :
- **Rythme général** : **Excellent**. L'alternance entre nature sauvage dans les parcs nationaux et étapes de confort en ville (comme Chiang Rai ou Bangkok) est très bien pensée pour les lessives et le repos.
- **Saison recommandée** : De **novembre à février** (Saison fraîche). C'est la période idéale : les pluies sont rares et l'air de montagne est extrêmement pur.

#### 💡 Conseils logistiques personnalisés :
${suggestions.map(s => `- ${s}`).join('\n')}
- **Eau potable** : L'eau des parcs nationaux est parfaite pour la vaisselle mais non potable. Prévoyez l'achat d'un grand bidon d'eau de 5L avant d'entrer dans les parcs plus reculés (Mae Wong).
- **Consignes de sécurité** : Dans les parcs de Khao Yai ou Nam Nao, veillez à ne laisser aucune nourriture odorante dans votre tente pour passer des nuits sereines sans visite d'animaux sauvages.`;

    return res.json({
      analysis: analysisMarkdown
    });
  }
});

// Integrate Vite middleware for development or serve built files in production
async function startServer() {
  const appInstanceWithRoutes = app;

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    appInstanceWithRoutes.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    appInstanceWithRoutes.use(express.static(distPath));
    appInstanceWithRoutes.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  appInstanceWithRoutes.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
