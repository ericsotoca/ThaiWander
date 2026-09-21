import { ItineraryItem } from './types';

export interface RouteTemplate {
  id: string;
  nameFr: string;
  nameTh: string;
  descFr: string;
  descTh: string;
  steps: {
    placeName: string;
    category: 'Camping' | 'Lodging' | 'Attraction' | 'Restaurant' | 'Activity';
    notesFr: string;
    notesTh: string;
    lat: number;
    lng: number;
    budgetPerNight: number;
    detailedTipsFr: string;
    detailedTipsTh: string;
    maxInfoFr: string;
    maxInfoTh: string;
  }[];
}

export const ROUTE_TEMPLATES: RouteTemplate[] = [
  {
    id: "route-1",
    nameFr: "⛰️ Le Grand Nord sauvage (Parcs & Sommets)",
    nameTh: "⛰️ เส้นทางลุยดอยภาคเหนือและอ่างเก็บน้ำ",
    descFr: "Un road trip d'altitude reliant les plus hauts sommets et parcs nationaux brumeux de Thaïlande.",
    descTh: "เส้นทางโรดทริปท้าลมหนาว ตะลุยยอดดอยและอุทยานแห่งชาติที่สูงที่สุดในประเทศไทย",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Point de départ - Logement chez l'habitant gratuit",
        notesTh: "จุดเริ่มต้นเดินทาง - ที่พักโฮมสเตย์ฟรีและเช็คอุปกรณ์เตรียมตัว",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "Logement chez l'habitant gratuit à Samut Sakhon. Idéal pour faire les derniers ajustements de réchaud.",
        detailedTipsTh: "ที่พักฟรีเป็นกันเองในสมุทรสาคร เหมาะอย่างยิ่งสำหรับเช็คความพร้อมเตาแก๊สและเสบียงเริ่มต้น",
        maxInfoFr: "Un départ serein et chaleureux pour votre grande aventure.",
        maxInfoTh: "จุดรวมพลแสนอบอุ่นก่อนออกเดินทางสู่การผจญภัยครั้งใหญ่"
      },
      {
        placeName: "Mae Wong National Park (Chong Yen)",
        category: "Camping",
        notesFr: "Bivouac sauvage de Chong Yen et air frais de montagne",
        notesTh: "กางเต็นท์ช่องเย็น สัมผัสลมหนาวและไอหมอกอุทยานแห่งชาติแม่วงก์",
        lat: 16.0384,
        lng: 99.1171,
        budgetPerNight: 100,
        detailedTipsFr: "Altitude 1340m. Les températures y sont fraîches toute l'année. Prévoyez du répulsif contre les puces de sable.",
        detailedTipsTh: "ความสูง 1,340 ม. ลมแรงและอากาศหนาวเย็นตลอดทั้งปี แนะนำพกยาทากันคุ่นสูตรเข้มข้นติดตัว",
        maxInfoFr: "Le point de vue offre des levers de soleil légendaires sur les mers de brume.",
        maxInfoTh: "จุดชมวิวยอดนิยมสำหรับชมทะเลหมอกและแสงแรกของวันท่ามกลางป่าดิบเขา"
      },
      {
        placeName: "Doi Inthanon National Park",
        category: "Camping",
        notesFr: "Camping près du toit de la Thaïlande",
        notesTh: "กางเต็นท์ดอยอินทนนท์ ยอดเขาที่สูงที่สุดในสยาม",
        lat: 18.5880,
        lng: 98.4867,
        budgetPerNight: 120,
        detailedTipsFr: "Nuits très froides pouvant descendre sous les 5°C. Louez des duvets épais supplémentaires à l'accueil.",
        detailedTipsTh: "อากาศหนาวจัดสะท้านดอย (ต่ำสุดถึง 5 องศา) สามารถติดต่อเช่าเครื่องนอนเพิ่มเติมได้ที่อุทยาน",
        maxInfoFr: "Une expérience inoubliable au milieu des forêts moussues d'altitude.",
        maxInfoTh: "ชมกิ่วแม่ปาน ป่าโบราณยุคหิมพานต์และพรรณไม้เมืองหนาวที่งดงาม"
      },
      {
        placeName: "Doi Pha Hom Pok National Park",
        category: "Camping",
        notesFr: "Sources chaudes de Fang et camping d'altitude",
        notesTh: "กางเต็นท์ดอยผ้าห่มปกและแช่น้ำร้อนธรรมชาติฝาง",
        lat: 20.0416,
        lng: 99.1418,
        budgetPerNight: 120,
        detailedTipsFr: "Dégustez un barbecue Mookata chaud sur les sommets. Détendez-vous dans les bains thermaux au pied du parc.",
        detailedTipsTh: "ห้ามพลาดหมูกระทะร้อนๆ บนลานดอย และผ่อนคลายกับบ่อน้ำพุร้อนฝางก่อนขึ้นแคมป์",
        maxInfoFr: "Le deuxième plus haut sommet de Thaïlande avec ses geysers d'eaux thermales bouillonnantes.",
        maxInfoTh: "ยอดดอยสูงอันดับสองของประเทศที่มีบ่อน้ำพุร้อนธรรมชาติพุ่งสูงตระการตา"
      },
      {
        placeName: "Chiang Rai (Wat Rong Khun)",
        category: "Lodging",
        notesFr: "Halte confort à Chiang Rai (Temple Blanc)",
        notesTh: "พักผ่อนอุ่นสบายในเมืองเชียงรายและชมวัดร่องขุ่นอันวิจิตร",
        lat: 19.9101,
        lng: 99.8406,
        budgetPerNight: 500,
        detailedTipsFr: "Faites vos machines de linge et profitez d'une bonne nuit de récupération à l'hôtel.",
        detailedTipsTh: "แวะซักล้างเครื่องนอนและทำความสะอาดอุปกรณ์แคมป์ พร้อมนอนเตียงนุ่มอุ่นๆ ในเมือง",
        maxInfoFr: "Une pause culturelle splendide après deux semaines de bivouac rude.",
        maxInfoTh: "ชมศิลปะปูนปั้นสีขาวบริสุทธิ์ของอาจารย์เฉลิมชัย โฆษิตพิพัฒน์"
      },
      {
        placeName: "Chae Son National Park",
        category: "Camping",
        notesFr: "Camping au bord du ruisseau thermal de Lampang",
        notesTh: "กางเต็นท์อุทยานแห่งชาติแจ้ซ้อน ต้มไข่ในบ่อน้ำร้อนธรรมชาติ",
        lat: 18.8313,
        lng: 99.4711,
        budgetPerNight: 100,
        detailedTipsFr: "Achetez un petit panier d'œufs pour les faire cuire dans l'eau thermale à 80°C du parc.",
        detailedTipsTh: "ซื้อไข่ไก่/ไข่นกกระทามาต้มในน้ำพุร้อนธรรมชาติ 80 องศา อร่อยกลมกล่อมเป็นเอกลักษณ์",
        maxInfoFr: "Une merveilleuse harmonie entre source d'eau chaude naturelle et cascade fraîche.",
        maxInfoTh: "แหล่งท่องเที่ยวทางธรรมชาติระดับท็อปที่ผสมผสานน้ำพุร้อนและน้ำตกเย็นฉ่ำไว้อย่างลงตัว"
      },
      {
        placeName: "Sukhothai Historical Park",
        category: "Lodging",
        notesFr: "Visite des ruines et berceau de l'histoire thaïe",
        notesTh: "ปั่นจักรยานชมอุทยานประวัติศาสตร์สุโขทัย มรดกโลกโบราณ",
        lat: 17.0156,
        lng: 99.7042,
        budgetPerNight: 450,
        detailedTipsFr: "Louez un vélo à l'entrée pour parcourir les grands étangs de lotus au coucher du soleil.",
        detailedTipsTh: "แนะนำให้เช่าจักรยานปั่นเลาะชมเงาสะท้อนเจดีย์เก่าในสระบัวช่วงเย็น แสงทองส่องสวยงามมาก",
        maxInfoFr: "Classé à l'UNESCO, c'est l'un des plus précieux trésors historiques d'Asie.",
        maxInfoTh: "ราชธานีแห่งแรกของไทยที่ได้รับการยกย่องจาก UNESCO ให้เป็นมรดกโลกอันล้ำค่า"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Fin de l'itinéraire, retour et massage traditionnel",
        notesTh: "สิ้นสุดเส้นทางลุยเหนือ เดินทางกลับกรุงเทพฯ และผ่อนคลายสปา",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Terminez ce mémorable voyage par un massage thérapeutique du dos bien mérité.",
        detailedTipsTh: "นวดแผนไทยโบราณเพื่อฟื้นฟูกล้ามเนื้อและหลังจากการเดินทางอันสมบุกสมบันกว่าพันกิโลเมตร",
        maxInfoFr: "Clôture splendide de votre road trip d'altitude.",
        maxInfoTh: "จบทริปทางเหนืออย่างสมบูรณ์แบบด้วยความประทับใจและความทรงจำดีๆ"
      }
    ]
  },
  {
    id: "route-2",
    nameFr: "🐘 L'Isan sauvage & Plateaux de l'Est",
    nameTh: "🐘 เส้นทางอุทยานแห่งชาติภาคอีสานและประวัติศาสตร์",
    descFr: "Un parcours sauvage à la découverte des hauts plateaux de l'Est, de leur faune sauvage et des anciennes cités khmères.",
    descTh: "เส้นทางตะลุยป่าที่ราบสูงอีสาน เฝ้าสังเกตสัตว์ป่าอุทยานมรดกโลกและอารยธรรมขอมโบราณ",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Point de départ - Préparation du voyage vers l'Est",
        notesTh: "จุดเริ่มต้นเดินทาง - ที่พักฟรีโฮมสเตย์และเตรียมลุยภาคอีสาน",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "Faites le plein de denrées de base. L'Isan sauvage offre de grands espaces reculés.",
        detailedTipsTh: "ตุนน้ำดื่มและของใช้จำเป็นให้ครบถ้วน เส้นทางนี้จะพาคุณเข้าสู่ผืนป่าที่ห่างไกล",
        maxInfoFr: "Une nuit tranquille chez l'habitant pour débuter en toute sécurité.",
        maxInfoTh: "พักผ่อนออมแรงให้เต็มที่ก่อนเดินทางสู่แผ่นดินสีน้ำเงินล้ำค่า"
      },
      {
        placeName: "Khao Yai National Park (Lam Ta Khong)",
        category: "Camping",
        notesFr: "Camping forestier au milieu des cerfs et éléphants",
        notesTh: "กางเต็นท์ลานลำตะคอง สังเกตการณ์สัตว์ป่าในผืนป่ามรดกโลกเขาใหญ่",
        lat: 14.4393,
        lng: 101.3725,
        budgetPerNight: 100,
        detailedTipsFr: "Ne stockez pas d'aliments odorants dans la tente. Les cerfs éventrent facilement les sacs pour trouver à manger.",
        detailedTipsTh: "ห้ามเก็บอาหารส่งกลิ่นไว้ในเต็นท์เด็ดขาด กวางและลิงป่าอาจเข้ามาฉีกเต็นท์เพื่อหาของกิน",
        maxInfoFr: "Un parc naturel classé UNESCO abritant une jungle luxuriante et des cascades majestueuses.",
        maxInfoTh: "อุทยanที่อุดมสมบูรณ์ไปด้วยป่าดงพญาเย็น ทิวทัศน์หุบเขาและสัตว์ป่านานาชนิด"
      },
      {
        placeName: "Phimai Historical Park",
        category: "Attraction",
        notesFr: "Exploration des temples khmers antiques",
        notesTh: "ชมปราสาทหินพิมาย ศิลปะขอมโบราณที่ยิ่งใหญ่ที่สุดแห่งหนึ่ง",
        lat: 15.2124,
        lng: 102.4823,
        budgetPerNight: 400,
        detailedTipsFr: "Idéal pour prendre de magnifiques photos d'architecture historique en début d'après-midi.",
        detailedTipsTh: "เดินเที่ยวชมปราสาทหินทรายสีชมพู แนะนำให้พกร่มและแว่นกันแดดไปด้วยเนื่องจากลานกว้างมีแดดจัด",
        maxInfoFr: "Considéré comme l'un des sanctuaires khmers les plus denses et les mieux préservés hors du Cambodge.",
        maxInfoTh: "พุทธสถานลัทธิมหายานที่เก่าแก่และมีความสำคัญทางประวัติศาสตร์อย่างยิ่ง"
      },
      {
        placeName: "Phanom Rung Historical Park",
        category: "Attraction",
        notesFr: "Visite du temple majestueux perché sur un volcan éteint",
        notesTh: "ชมอุทยานประวัติศาสตร์พนมรุ้ง ปราสาทบนยอดภูเขาไฟโบราณ",
        lat: 14.5317,
        lng: 102.9421,
        budgetPerNight: 400,
        detailedTipsFr: "L'ascension des marches offre une vue panoramique incroyable sur les plaines d'Isan.",
        detailedTipsTh: "เดินขึ้นบันไดพญานาคห้าเศียรผ่านสะพานสู่ศาสนสถานโบราณที่ตั้งตระหง่านเหนือทุ่งราบ",
        maxInfoFr: "Une architecture volcanique unique sacrée dédiée au dieu Shiva.",
        maxInfoTh: "ปราสาทหินบนภูเขาไฟที่ดับสนิทแล้ว มรดกทางวัฒนธรรมที่งดงามประณีต"
      },
      {
        placeName: "Phu Kradueng National Park",
        category: "Camping",
        notesFr: "Randonnée intense et bivouac sur le grand plateau d'Isan",
        notesTh: "ปีนพิชิตยอดภูกระดึง กางเต็นท์นอนดูดาวท่ามกลางป่าสนเขา",
        lat: 16.8712,
        lng: 101.7823,
        budgetPerNight: 120,
        detailedTipsFr: "L'ascension à pied fait 5.5 km de montée abrupte. Emportez de bonnes chaussures et louez les services de porteurs locaux.",
        detailedTipsTh: "ทางขึ้นเขาค่อนข้างชัน 5.5 กม. แนะนำจ้างลูกหาบช่วยขนกระเป๋าขึ้นภูเพื่อเซฟกำลังร่างกาย",
        maxInfoFr: "Le plateau sommital offre des couchers de soleil splendides au point de vue de Lom Sak.",
        maxInfoTh: "ลานยอดภูดูกว้างใหญ่ มีทุ่งหญ้าสะวันนา ป่าสน และหน้าผาชมอาทิตย์ตกดินอันลือชื่อ"
      },
      {
        placeName: "Nam Nao National Park",
        category: "Camping",
        notesFr: "Camping sauvage sous une nuit étoilée pure",
        notesTh: "กางเต็นท์อุทยานแห่งชาติน้ำหนาว อากาศเย็นฉ่amใต้หมู่ดาวนับล้าน",
        lat: 16.7411,
        lng: 101.5739,
        budgetPerNight: 100,
        detailedTipsFr: "La forêt de pins de Nam Nao est épargnée par toute pollution lumineuse. Parfait pour l'astrophotographie.",
        detailedTipsTh: "ผืนป่าน้ำหนาวอยู่ห่างไกลความเจริญ ท้องฟ้ากลางคืนมืดสนิท เหมาะอย่างยิ่งสำหรับการถ่ายภาพทางช้างเผือก",
        maxInfoFr: "Un sanctuaire forestier préservé abritant de nombreux éléphants sauvages d'Asie.",
        maxInfoTh: "ป่าสนสองใบและสามใบธรรมชาติที่ร่มรื่น เงียบสงบ และมีอากาศหนาวเย็นสบายตลอดปี"
      },
      {
        placeName: "Phu Hin Rong Kla National Park",
        category: "Camping",
        notesFr: "Camping sur des plaques de grès géantes",
        notesTh: "กางเต็นท์ภูหินร่องกล้า สัมผัสประวัติศาสตร์และลานหินมหัศจรรย์",
        lat: 16.9996,
        lng: 101.1278,
        budgetPerNight: 100,
        detailedTipsFr: "Explorez le sentier de Lan Hin Taek. Portez des chaussures avec une excellente adhérence sur la roche.",
        detailedTipsTh: "เส้นทางเดินชมลานหินปุ่มและลานหินแตก ควรระวังร่องลึกตามซอกหินและพื้นผิวหินที่ลื่นชื้น",
        maxInfoFr: "Un ancien bastion historique des maquisards combinant géologie fantastique et forêts de pins.",
        maxInfoTh: "ดินแดนแห่งยุทธภูมิโบราณที่ธรรมชาติสร้างปฏิติกรรมลานหินรอยแตกเป็นเอกลักษณ์"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Fin du voyage en Isan sauvage, retour à la capitale",
        notesTh: "เดินทางกลับกรุงเทพฯ นำรถส่งคืน และสัมผัสสตรีทฟู้ดส่งท้าย",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Faites nettoyer votre voiture après avoir roulé sur les chemins latéritiques de l'Est.",
        detailedTipsTh: "ล้างทำความสะอาดสีรถและช่วงล่างจากการลุยฝุ่นทรายสีส้มของฝั่งอีสานก่อนส่งคืนรถเช่า",
        maxInfoFr: "Retour en plaine des souvenirs sauvages plein la tête.",
        maxInfoTh: "ปิดทริปอีสานด้วยรอยยิ้ม สุขใจกับธรรมชาติที่อุดมสมบูรณ์ตลอดสัปดาห์"
      }
    ]
  },
  {
    id: "route-3",
    nameFr: "🏖️ Le Sud côtier & Îles karstiques (Mer & Jungle)",
    nameTh: "🏖️ เส้นทางชายทะเลภาคใต้และป่าดิบชื้นเขาสก",
    descFr: "La grande traversée de la péninsule vers les eaux turquoises du Sud et la jungle mystique de Khao Sok.",
    descTh: "เส้นทางล่องใต้เลียบชายฝั่ง สัมผัสหาดทรายขาว ทะเลสาบเขาสก และหน้าผาหินปูนปานสวรรค์",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Départ immédiat vers le littoral du golfe du Sud",
        notesTh: "จุดเริ่มต้นเดินทาง - เตรียมตัวล่องใต้เลียบทะเลอ่าวไทย",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "Emportez du matériel étanche et des sacs étanches étanches pour vos appareils photo.",
        detailedTipsTh: "เตรียมถุงกันน้ำหรือเคสกันน้ำสำหรับโทรศัพท์และกล้อง เพื่อความพร้อมสำหรับการไปลุยน้ำทะเล",
        maxInfoFr: "Une escale confortable chez l'habitant avant la longue route côtière.",
        maxInfoTh: "ออกเดินทางจากสมุทรสาคร มุ่งหน้าลัดเลาะลงสู่ดินแดนคาบสมุทรด้ามขวานทอง"
      },
      {
        placeName: "Kaeng Krachan National Park",
        category: "Camping",
        notesFr: "Bivouac dans la plus grande forêt de Thaïlande",
        notesTh: "กางเต็นท์แก่งกระจาน ผืนป่าดิบชื้นขนาดใหญ่ที่สุดของไทย",
        lat: 12.8806,
        lng: 99.5161,
        budgetPerNight: 100,
        detailedTipsFr: "Montez au point de vue de Phanoen Thung au lever du soleil pour voir la forêt émerger des brumes.",
        detailedTipsTh: "ตื่นเช้าขึ้นจุดชมวิวพะเนินทุ่ง ชมทะเลหมอกคลุมผืนป่าทับซ้อนข้ามพรมแดนเมียนมา",
        maxInfoFr: "Une biodiversité tropicale immense classée au patrimoine mondial de l'UNESCO.",
        maxInfoTh: "ป่าสงวนระดับโลกที่เต็มไปด้วยนกหายากและผีเสื้อหลากสีสันบินอวดโฉม"
      },
      {
        placeName: "Khao Sam Roi Yot National Park",
        category: "Camping",
        notesFr: "Bivouac côtier face aux montagnes de calcaire",
        notesTh: "กางเต็นท์ชายหาดเขาสามร้อยยอด แวดล้อมด้วยขุนเขาหินปูนชัน",
        lat: 12.1667,
        lng: 99.9833,
        budgetPerNight: 100,
        detailedTipsFr: "Randonnez vers la légendaire grotte de Phraya Nakhon. Les rayons de soleil traversent l'arche à 10h30.",
        detailedTipsTh: "เดินลุยขึ้นถ้ำพระยานคร ช่วงเวลา 10.30 น. เป็นช่วงเวลาที่ลำแสงแดดส่องลอดช่องเพดานถ้ำลงสู่พระที่นั่งคูหาคฤหาสน์",
        maxInfoFr: "Un panorama fabuleux de marais salants et de pics de calcaire verticaux.",
        maxInfoTh: "อุทยานแห่งชาติทางทะเลแห่งแรกของไทย โดดเด่นด้วยเขาหินปูนสามร้อยยอดสลับซับซ้อน"
      },
      {
        placeName: "Ao Manao Beach (Prachuap Khiri Khan)",
        category: "Lodging",
        notesFr: "Halte balnéaire tranquille sur une plage militaire sûre",
        notesTh: "พักผ่อนอ่าวมะนาว หาดทรายรูปโค้งพระจันทร์เสี้ยวในเขตกองบิน",
        lat: 11.7889,
        lng: 99.8167,
        budgetPerNight: 600,
        detailedTipsFr: "Allez nourrir les adorables singes languis (singes à lunettes) qui vivent dans les arbres du flanc de falaise.",
        detailedTipsTh: "ร่วมให้อาหารค่างแว่นถิ่นใต้แสนน่ารักและไม่ก้าวร้าวที่อาศัยอยู่บริเวณเขาล้อมหมวก",
        maxInfoFr: "Une baie paradisiaque ultra-propre réputée pour ses eaux calmes.",
        maxInfoTh: "ชายหาดสวยใสที่อยู่ในความดูแลของทหารกองบิน 5 มั่นใจได้ในความปลอดภัยและสะอาดเป็นระเบียบ"
      },
      {
        placeName: "Khao Sok National Park (Cheow Lan Lake)",
        category: "Camping",
        notesFr: "Bivouac et cabanes flottantes sur le grand lac",
        notesTh: "กางเต็นท์ริมน้ำและนอนเรือนแพบนทะเลสาบเชี่ยวหลาน เขาสก",
        lat: 8.9000,
        lng: 98.5333,
        budgetPerNight: 1200,
        detailedTipsFr: "Louez un bateau traditionnel à longue queue pour explorer les immenses aiguilles de calcaire.",
        detailedTipsTh: "ล่องเรือหางยาวกู้ย้ยักษ์สามเกลอ ชมความอัศจรรย์ของกุ้ยหลินเมืองไทยเหนือเขื่อนรัชชประภา",
        maxInfoFr: "La forêt tropicale humide de Khao Sok est une des plus anciennes de notre planète.",
        maxInfoTh: "ผืนป่าโบราณอายุหลายร้อยล้านปีที่มีพรรณไม้หายากอย่าง บัวผุด ดอกไม้ที่ใหญ่ที่สุดในโลก"
      },
      {
        placeName: "Ao Nang Beach (Krabi)",
        category: "Lodging",
        notesFr: "Halte face aux aiguilles calcaires de la mer d'Andaman",
        notesTh: "พักผ่อนอ่าวนาง กระบี่ สัมผัสทรายอุ่น ทะเลสวย และหน้าผาหินปูนสูงใหญ่",
        lat: 8.0326,
        lng: 98.8188,
        budgetPerNight: 800,
        detailedTipsFr: "Louez un bateau taxi pour aller nager sur les plages préservées de Railay inaccessible par la route.",
        detailedTipsTh: "เหมาเรือหางยาวข้ามไปหาดไรเลย์ แหล่งปีนผาระดับโลกที่ไม่มีถนนเข้าถึง ต้องเดินทางด้วยเรือเท่านั้น",
        maxInfoFr: "Le paysage magique de la baie d'Andaman avec ses îles karstiques mythiques.",
        maxInfoTh: "หนึ่งในจุดชมพระอาทิตย์ตกดินทางฝั่งทะเลอันดามันที่สวยงามตราตรึงใจที่สุด"
      },
      {
        placeName: "Laem Son National Park (Ranong)",
        category: "Camping",
        notesFr: "Camping sauvage sous les pins maritimes de la côte Andaman",
        notesTh: "กางเต็นท์อุทยานแห่งชาติแหลมสน ระนอง นอนฟังเสียงคลื่นกระทบหาดสนเขา",
        lat: 9.6124,
        lng: 98.4867,
        budgetPerNight: 100,
        detailedTipsFr: "Le camping est situé sous d'immenses filaos ombragés. C'est l'un des secrets les mieux gardés du Sud.",
        detailedTipsTh: "ลานกางเต็นท์เงียบสงบตั้งอยู่ในดงสนใหญ่ร่มรื่นริมฝั่งทะเล เหมาะแก่การตั้งแคมป์สโลว์ไลฟ์",
        maxInfoFr: "Un parc côtier paisible faisant face à une myriade d'îles désertes.",
        maxInfoTh: "อุทยานชายฝั่งทะเลอันดามันที่ยังคงความธรรมชาติอันพิสุทธิ์ ปราศจากความวุ่นวาย"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Fin de l'expédition Sud, retour à la capitale",
        notesTh: "เดินทางกลับกรุงเทพฯ คืนรถเช่า และนวดแผนโบราณสลายเมื่อยล้า",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Une halte côtière à Samut Songkhram est idéale pour déguster les meilleurs poissons salés du golfe.",
        detailedTipsTh: "แวะซื้อปลาทูหน้างอคอหักและอาหารทะเลตากแห้งแถวสมุทรสงครามเป็นของฝากชั้นดีระหว่างทางกลับ",
        maxInfoFr: "Fin d'un voyage magique mêlant plages de sable blanc et jungles de calcaire.",
        maxInfoTh: "ปิดฉากโรดทริปสายอันดามัน-อ่าวไทย คืนร่างกายที่ผ่อนคลายและสดชื่นพร้อมลุยงานต่อ"
      }
    ]
  },
  {
    id: "route-4",
    nameFr: "🛶 L'Ouest légendaire & Frontière Pilok",
    nameTh: "🛶 เส้นทางผจญภัยแม่น้ำแควและปิล๊อกชายแดนพม่า",
    descFr: "Un road trip historique à travers Kanchanaburi, les rivières sauvages et la mine oubliée de Pilok face au Myanmar.",
    descTh: "เส้นทางตะลุยป่าตะวันตก ย้อนรอยประวัติศาสตร์สะพานข้ามแม่น้ำแคว และผจญภัยหมู่บ้านในสายหมอกปิล๊อก",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Départ pour l'Ouest sauvage et montagneux",
        notesTh: "จุดเริ่มต้นเดินทาง - เตรียมลุยภูเขาสูงชันฝั่งตะวันตกและพรมแดนเมียนมา",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "Assurez-vous que les freins de votre véhicule sont en parfait état pour affronter les pentes raides.",
        detailedTipsTh: "ตรวจเช็คสภาพผ้าเบรคและระบบช่วงล่างให้มั่นใจ รถจะต้องขึ้นทางคดเคี้ยวสู่เหมืองแร่เก่า",
        maxInfoFr: "Une nuit réparatrice chez l'habitant avant le début de l'aventure.",
        maxInfoTh: "ออมแรงนอนหลับฝันดีเตรียมพร้อมขับขี่พิชิต 399 โค้งทองผาภูมิ"
      },
      {
        placeName: "Erawan National Park",
        category: "Camping",
        notesFr: "Camping près des cascades d'eau turquoise",
        notesTh: "กางเต็นท์และเล่นน้ำตกเอราวัณ สระมรกต 7 ชั้นธรรมชาติ",
        lat: 14.3686,
        lng: 99.1436,
        budgetPerNight: 100,
        detailedTipsFr: "Randonnez le matin. Ne montez pas d'eau minérale au-delà du niveau 3 sans payer une caution écologique.",
        detailedTipsTh: "แนะนำให้ขึ้นน้ำตกแต่เช้า เจ้าหน้าที่จะเก็บเงินมัดจำขวดน้ำพลาสติกตั้งแต่ชั้น 3 ขึ้นไปเพื่อป้องกันขยะ",
        maxInfoFr: "Une des plus merveilleuses cascades calcaires d'Asie avec ses bassins bleus.",
        maxInfoTh: "น้ำตกสวยใสสีเขียวอมฟ้าพาดผ่านป่าไผ่ร่มรื่น มหัศจรรย์สระน้ำ calcaire ธรรมชาติ"
      },
      {
        placeName: "Srinakarin Dam National Park",
        category: "Camping",
        notesFr: "Camping paisible au bord du grand lac de barrage",
        notesTh: "กางเต็นท์ริมน้ำเขื่อนศรีนครินทร์ นอนพักรับลมใต้ร่มไม้ใหญ่",
        lat: 14.5000,
        lng: 99.0000,
        budgetPerNight: 100,
        detailedTipsFr: "Profitez du coucher de soleil doré qui se reflète magnifiquement sur la surface lisse du lac.",
        detailedTipsTh: "เลือกทำเลกางเต็นท์ริมตลิ่งหญ้าหนุ่ม สูดอากาศบริสุทธิ์เหนือเขื่อนพร้อมชมพระอาทิตย์ตกสะท้อนน้ำ",
        maxInfoFr: "Un immense réservoir naturel propice aux balades en barque et à la sérénité.",
        maxInfoTh: "อ่างเก็บน้ำขนาดใหญ่โอบล้อมด้วยภูเขา มีบริการล่องแพเปียกและกิจกรรมทางน้ำมากมาย"
      },
      {
        placeName: "Sai Yok National Park",
        category: "Camping",
        notesFr: "Bivouac forestier au son des cascades de la rivière Kwai",
        notesTh: "กางเต็นท์อุทยานแห่งชาติไทรโยคใหญ่ ฟังเสียงน้ำตกไหลลงสู่แม่น้ำแควน้อย",
        lat: 14.4344,
        lng: 98.8546,
        budgetPerNight: 100,
        detailedTipsFr: "Louez un raft en bois pour vous approcher de l'eau rugissante au pied des falaises de bambous.",
        detailedTipsTh: "ล่องแพลากผ่านหน้าผาหินปูนเพื่อเข้าไปสัมผัสละอองน้ำตกไทรโยคใหญ่อย่างใกล้ชิด",
        maxInfoFr: "Un parc historique chanté par les rois de Thaïlande pour sa beauté sauvage.",
        maxInfoTh: "สถานที่ท่องเที่ยวระดับตำนานที่ปรากฏในวรรณคดีไทย โดดเด่นเรื่องถ้ำและป่าดิบตะวันตก"
      },
      {
        placeName: "Sangkhlaburi (Mon Bridge)",
        category: "Lodging",
        notesFr: "Halte culturelle au village frontalier Karen et Mon",
        notesTh: "พักผ่อนสังขละบุรี ตักบาตรมอญยามเช้าข้ามสะพานอุตตมานุสรณ์",
        lat: 15.1436,
        lng: 98.4519,
        budgetPerNight: 700,
        detailedTipsFr: "Réveillez-vous à 6h00 pour traverser le grand pont en bois et faire l'aumône de riz aux moines.",
        detailedTipsTh: "ตื่นเช้า 6 โมงแต่งกายชุดมอญพื้นเมืองร่วมใส่บาตรพระสงฆ์ และเดินเล่นสะพานไม้ที่ยาวที่สุดในประเทศ",
        maxInfoFr: "Une cité spirituelle unique où cohabitent en paix de nombreuses ethnies montagnardes.",
        maxInfoTh: "ชุมชนชายแดนที่เปี่ยมด้วยเสน่ห์และศรัทธาพุทธศาสนาริมแม่น้ำซองกาเลีย"
      },
      {
        placeName: "Pilok Mine (Etong Village)",
        category: "Lodging",
        notesFr: "Séjour dans le village embrumé de la mine d'étain",
        notesTh: "พักผ่อนบ้านอีต่อง-เหมืองปิล๊อก ดินแดนเหมืองเก่าในหุบเขาและสายหมอก",
        lat: 14.6722,
        lng: 98.3617,
        budgetPerNight: 600,
        detailedTipsFr: "Prévoyez des pulls. L'humidité permanente y crée un climat frais et brumeux saisissant.",
        detailedTipsTh: "อากาศมีความชื้นและหนาวตลอดปี แนะนำให้พกเสื้อกันฝนหรือเสื้อกันหนาวกันชื้นขึ้นมาด้วย",
        maxInfoFr: "Un village minier hors du temps accroché aux frontières birmanes.",
        maxInfoTh: "อดีตเหมืองแร่รุ่งเรืองที่ปัจจุบันกลายเป็นหมู่บ้านท่องเที่ยวแสนสงบน่ารัก มีจุดชมวิวเนินช้างศึก"
      },
      {
        placeName: "Thong Pha Phum National Park",
        category: "Camping",
        notesFr: "Bivouac forestier perché sur la cime des arbres",
        notesTh: "กางเต็นท์อุทยานแห่งชาติทองผาภูมิ ส่องทิวทัศน์หุบเขาและเทือกเขาตะนาวศรี",
        lat: 14.6133,
        lng: 98.4111,
        budgetPerNight: 100,
        detailedTipsFr: "Installez votre camp au camping Tarzan perché pour une vue aérienne spectaculaire.",
        detailedTipsTh: "ลองนอนกางเต็นท์ใกล้จุดชมวิวเขาขาด สัมผัสป่าธรรมชาติที่สมบูรณ์และเงียบสงบอย่างแท้จริง",
        maxInfoFr: "Une vue inoubliable sur les chaînes de montagnes sauvages du Tenasserim.",
        maxInfoTh: "ผืนป่าตะวันตกอันเป็นแหล่งที่อยู่ของนกและสัตว์ป่าหายากนานาชนิด"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Fin de l'itinéraire de l'Ouest sauvage, retour",
        notesTh: "เดินทางกลับกรุงเทพฯ คืนรถเช่า และนวดแผนโบราณสลายปวดเมื่อยหลังขับรถ",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Un excellent repas de poissons de rivière à Kanchanaburi marquera une fin de parcours inoubliable.",
        detailedTipsTh: "แวะทานปลาคังหรือปลาแม่น้ำรสจัดจ้านตามแพอาหารในเมืองกาญจนบุรีส่งท้ายความประทับใจ",
        maxInfoFr: "Fin d'une aventure époustouflante entre canyons, voies ferrées de la mort et brume.",
        maxInfoTh: "จบทริปตะวันตกสายลุยพรมแดนอย่างปลอดภัย พร้อมรูปภาพธรรมชาติสวยสะกดใจ"
      }
    ]
  },
  {
    id: "route-5",
    nameFr: "🪵 Les Joyaux secrets du Mékong & Nan",
    nameTh: "🪵 เส้นทางเลียบริมแม่น้ำโขง ดอกชมพูภูคาและจังหวัดน่าน",
    descFr: "Un itinéraire spectaculaire longeant le grand fleuve Mékong avant d'entrer dans la mystique province montagneuse de Nan.",
    descTh: "เส้นทางท่องเที่ยวสโลว์ไลฟ์ริมแม่น้ำโขง ก่อนไต่ระดับความชันเลาะขอบฟ้าสู่หุบเขาน่านสะกดใจ",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Départ pour le voyage secret le long du Mékong",
        notesTh: "จุดเริ่มต้นเดินทาง - วางแผนลัดเลาะริมแม่น้ำโขงและเทือกเขาจังหวัดน่าน",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "Achetez de l'anti-moustique puissant de qualité supérieure pour les bivouacs humides du Mékong.",
        detailedTipsTh: "เตรียมยากันยุงคุณภาพดีสำหรับการนอนแคมป์ปิ้งใกล้แหล่งน้ำและชายป่าดิบริมน้ำโขง",
        maxInfoFr: "Une nuit tranquille chez l'habitant avant le départ vers le Nord-Est.",
        maxInfoTh: "เตรียมกล้องถ่ายภาพแบตสำรองให้พร้อมสำหรับทิวทัศน์ริมฝั่งโขงและน่านลอยฟ้า"
      },
      {
        placeName: "Khao Kho (Phetchabun)",
        category: "Camping",
        notesFr: "Camping au-dessus de la mer de nuages de Khao Kho",
        notesTh: "กางเต็นท์เขาค้อ ชมทะเลหมอกยามเช้าโอบล้อมทุ่งกังหันลม",
        lat: 16.6333,
        lng: 101.0000,
        budgetPerNight: 120,
        detailedTipsFr: "Montez au lever du jour vers les pagodes de Wat Pha Sorn Kaew incrustées de mosaïques colorées.",
        detailedTipsTh: "ตื่นเช้าขึ้นชมพระวิหารวัดพระธาตุผาซ่อนแก้ว เจดีย์ห้าพระองค์ท่ามกลางสายหมอกขาวพัดผ่าน",
        maxInfoFr: "Surnommée la 'Suisse de Thaïlande' pour la fraîcheur constante de ses collines.",
        maxInfoTh: "จุดเช็คอินขึ้นชื่อเรื่องอากาศเย็นสบายตลอดปีและทะเลหมอกหนาตาน่าอัศจรรย์"
      },
      {
        placeName: "Chiang Khan (Loei)",
        category: "Lodging",
        notesFr: "Séjour paisible au bord du grand fleuve Mékong",
        notesTh: "พักผ่อนเชียงคาน เลย สัมผัสสโลว์ไลฟ์ในบ้านไม้เก่าริมน้ำโขง",
        lat: 17.8942,
        lng: 101.6536,
        budgetPerNight: 550,
        detailedTipsFr: "Louez un vélo pour explorer la rue piétonne en bois et déguster des brochettes de crevettes du Mékong.",
        detailedTipsTh: "เช่าจักรยานปั่นเลียบตลิ่งแม่น้ำโขงชมอาทิตย์ลับทิวเขาลาว และเดินถนนคนเดินเชียงคานช่วงเย็น",
        maxInfoFr: "Une bourgade historique réputée pour ses coutumes bouddhistes et ses sourires.",
        maxInfoTh: "ชุมชนริมน้ำวัฒนธรรมอีสาน-ล้านนาที่เปี่ยมด้วยความเป็นมิตรและเรียบง่าย"
      },
      {
        placeName: "Phu Tok Temple (Bueng Kan)",
        category: "Attraction",
        notesFr: "Visite des passerelles sacrées suspendues dans le vide",
        notesTh: "ปีนผาขึ้นภูทอก บันไดไม้เวียนเจ็ดชั้นไต่ขอบหินผาสุดเร้าใจ",
        lat: 18.1311,
        lng: 103.8814,
        budgetPerNight: 400,
        detailedTipsFr: "L'ascension se fait par des escaliers en bois artisanaux accrochés aux falaises rocheuses. Interdit aux personnes ayant le vertige.",
        detailedTipsTh: "การขึ้นบันไดเวียนรอบภูหินทราย ใช้สติและความระมัดระวัง ห้ามส่งเสียงดังในเขตสถานปฏิบัติธรรม",
        maxInfoFr: "Une prouesse de construction artisanale spirituelle représentant les chemins de l'illumination.",
        maxInfoTh: "พุทธสถานปฏิบัติธรรมที่สร้างบันไดขึ้นเขาระดับ 7 ชั้น ท้าทายความมุ่งมั่นและศรัทธา"
      },
      {
        placeName: "Doi Phu Kha National Park",
        category: "Camping",
        notesFr: "Nan profonde - Bivouac d'altitude",
        notesTh: "กางเต็นท์อุทยานแห่งชาติดอยภูคา สัมผัสความบริสุทธิ์ของป่าน่านลึก",
        lat: 19.2014,
        lng: 101.0784,
        budgetPerNight: 100,
        detailedTipsFr: "Conduisez prudemment sur la célèbre route sinueuse 1081. Privilégiez l'utilisation du frein moteur.",
        detailedTipsTh: "เส้นทางขับขี่สาย 1081 โค้งเลข 3 มีความชันสูงมาก ควรใช้เกียร์ต่ำและแตะเบรคเป็นระยะอย่างระมัดระวัง",
        maxInfoFr: "Le parc abrite le rarissime arbre 'Chompoo Phu Kha' aux magnifiques fleurs roses.",
        maxInfoTh: "แหล่งธรรมชาติสุดท้ายที่มีต้นชมพูภูคา พรรณไม้หายากที่ออกดอกสีชมพูสะพรั่งในฤดูหนาว"
      },
      {
        placeName: "Nan Town (Wat Phumin)",
        category: "Lodging",
        notesFr: "Halte culturelle et fresque du 'Chuchotement d'amour'",
        notesTh: "พักผ่อนในเมืองน่าน ชมจิตรกรรมฝาผนังปู่ม่านย่าม่านวัดภูมินทร์อันเลื่องชื่อ",
        lat: 18.7830,
        lng: 100.7830,
        budgetPerNight: 600,
        detailedTipsFr: "Louez un petit vélo pour explorer ce village paisible et admirez l'architecture d'influence Lanna.",
        detailedTipsTh: "ปั่นจักรยานเที่ยวชมวัดและสถาปัตยกรรมสไตล์ล้านนาตะวันออกที่ได้รับการรักษาไว้อย่างงดงาม",
        maxInfoFr: "Un sanctuaire d'art et d'histoire unique au nord-est de la Thaïlande.",
        maxInfoTh: "เมืองกระซิบรักที่รักษาขนบธรรมเนียมล้านนาและประวัติศาสตร์เมืองเก่าไว้อย่างอบอุ่น"
      },
      {
        placeName: "Phu Hin Rong Kla National Park",
        category: "Camping",
        notesFr: "Dernière escale sauvage sur les roches fracturées",
        notesTh: "กางเต็นท์ภูหินร่องกล้า สูดกลิ่นอายป่าสนเขาส่งท้ายเส้นทางธรรมชาติ",
        lat: 16.9996,
        lng: 101.1278,
        budgetPerNight: 100,
        detailedTipsFr: "Portez des vêtements d'extérieur adéquats pour résister au brouillard matinal persistant.",
        detailedTipsTh: "อุณหภูมิค่อนข้างต่ำตลอดปี แนะนำให้เตรียมเสื้อกันหนาวกันชื้นสำหรับการกางเต็นท์ในป่าสน",
        maxInfoFr: "Un parc géologique majestueux mariant grès plissé et histoire révolutionnaire.",
        maxInfoTh: "ลานหินปุ่มและประวัติศาสตร์การเมืองโบราณ คลุมด้วยมอชและเฟิร์นเขียวขจีตลอดปี"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Fin du voyage du Mékong et de Nan lointaine",
        notesTh: "เดินทางกลับกรุงเทพฯ คืนรถเช่า และนวดผ่อนคลายร่างกายเต็มรูปแบบ",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Reposez-vous, faites le tri de vos superbes photos et savourez un dîner le long de la rivière Chao Phraya.",
        detailedTipsTh: "พักผ่อนล้างเหนื่อยหลังเดินทางกว่า 1,500 กิโลเมตร และลิ้มรสอาหารเย็นริมฝั่งแม่น้ำเจ้าพระยาแสนโรแมนติก",
        maxInfoFr: "Retour triomphal après avoir traversé les plus beaux confins secrets de l'Est.",
        maxInfoTh: "ปิดโรดทริปแม่น้ำโขงและเทือกเขาน่านด้วยความสมบูรณ์แบบ ได้สัมผัสครบทุกรสชาติการผจญภัย"
      }
    ]
  },
  {
    id: "route-6",
    nameFr: "🗺️ Boucle Centrale & Cités Royales (Histoire)",
    nameTh: "🗺️ เส้นทางสายประวัติศาสตร์และเมืองหลวงเก่าภาคกลาง",
    descFr: "Un voyage culturel dans les plaines de la Thaïlande centrale, explorant les anciennes capitales d'Ayutthaya et de Sukhothai.",
    descTh: "ย้อนอดีตกลับสู่อาณาจักรสยามโบราณ ลัดเลาะกรุงเก่าอยุธยา ลพบุรี และสุโขทัยมรดกโลก",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Départ pour la boucle culturelle et historique",
        notesTh: "จุดเริ่มต้นเดินทาง - เตรียมตัวเข้าสู่เส้นทางโบราณสถานสยามประเทศ",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "Munissez-vous de vêtements respectueux (épaules et genoux couverts) pour la visite des temples bouddhistes.",
        detailedTipsTh: "เตรียมเครื่องแต่งกายให้สุภาพเรียบร้อย (เสื้อมีแขน กางเกงหรือกระโปรงคลุมเข่า) สำหรับการเข้าชมโบราณสถานสำคัญ",
        maxInfoFr: "Départ d'un pèlerinage historique unique.",
        maxInfoTh: "ออกเดินทางย้อนเวลาหาอดีตสู่ศูนย์กลางสถาปัตยกรรมและมรดกประวัติศาสตร์ชาติไทย"
      },
      {
        placeName: "Ayutthaya Historical Park",
        category: "Lodging",
        notesFr: "Nuit près des temples sacrés de l'ancienne capitale",
        notesTh: "พักผ่อนกรุงเก่าอยุธยา ปั่นจักรยานชมพระราชวังโบราณและเงาเจดีย์ริมน้ำ",
        lat: 14.3532,
        lng: 100.5684,
        budgetPerNight: 500,
        detailedTipsFr: "Faites un tour de bateau traditionnel au coucher de soleil pour observer les ruines illuminées depuis la rivière.",
        detailedTipsTh: "แนะนำให้นั่งเรือหางยาวรอบเกาะเมืองอยุธยาช่วงเย็น ชมพระอาทิตย์ตกสะท้อนองค์พระเจดีย์โบราณเปิดไฟสีทองอร่าม",
        maxInfoFr: "Une immense cité royale détruite au 18ème siècle, riche en temples de briques rouges sacrés.",
        maxInfoTh: "อดีตราชธานีอันยิ่งใหญ่ยาวนานถึง 417 ปี ที่ได้รับการยกย่องเป็นมรดกโลกทางวัฒนธรรมโดย UNESCO"
      },
      {
        placeName: "Lopburi (Phra Prang Sam Yod)",
        category: "Attraction",
        notesFr: "Halte historique dans la cité des singes",
        notesTh: "แวะลพบุรี ชมพระปรางค์สามยอดและทักทายลิงลพบุรีสุดคุ้นเคย",
        lat: 14.7995,
        lng: 100.6534,
        budgetPerNight: 400,
        detailedTipsFr: "Gardez vos objets personnels, chapeaux et lunettes de soleil en sécurité. Les singes de Lopburi sont très malins et rapides.",
        detailedTipsTh: "ระมัดระวังสิ่งของส่วนตัว แว่นตา หมวก และโทรศัพท์มือถือเป็นพิเศษ ลิงที่พระปรางค์สามยอดค่อนข้างไวและคุ้นเคยกับคน",
        maxInfoFr: "Un temple khmer hindouiste antique abritant des centaines de macaques en totale liberté.",
        maxInfoTh: "โบราณสถานขอมแปรรูปทรงขอมโบราณ แหล่งท่องเที่ยวประวัติศาสตร์คู่เมืองลพบุรี"
      },
      {
        placeName: "Ramkhamhaeng National Park",
        category: "Camping",
        notesFr: "Camping d'altitude sauvage sur le mont Khao Luang",
        notesTh: "กางเต็นท์อุทยานแห่งชาติรามคำแหง ปีนพิชิตยอดเขาหลวงสุโขทัย",
        lat: 16.8211,
        lng: 100.2655,
        budgetPerNight: 100,
        detailedTipsFr: "La randonnée vers le mont Khao Luang (1200m d'altitude) est exigeante physiquement. Louez des matelas au sommet.",
        detailedTipsTh: "ยอดเขาหลวงมีความลาดชันสูง ระยะทาง 3.7 กม. ต้องเตรียมกำลังกายและน้ำดื่มระหว่างเดินขึ้นให้พร้อม",
        maxInfoFr: "Le plus haut sommet de la province offrant un panorama vertigineux sur les rizières de Sukhothai.",
        maxInfoTh: "ลานกางเต็นท์บนยอดเขาหลวงอากาศหนาวเย็นจับใจ เหมาะแก่การนอนชมดาวและแสงพระอาทิตย์ขึ้นอันกว้างไกล"
      },
      {
        placeName: "Sukhothai Historical Park",
        category: "Lodging",
        notesFr: "Nuit au berceau de la langue et de la nation thaïe",
        notesTh: "พักผ่อนสุโขทัย ปั่นจักรยานยามเย็นเลาะชมเจดีย์เก่าและสระบัวกว้าง",
        lat: 17.0156,
        lng: 99.7042,
        budgetPerNight: 500,
        detailedTipsFr: "Ne manquez pas de déguster un authentique bol de nouilles sucrées de Sukhothai au marché traditionnel.",
        detailedTipsTh: "ห้ามพลาดชิมก๋วยเตี๋ยวสุโขทัยโบราณ รสชาติกลมกล่อมเปรี้ยวหวานเป็นเอกลักษณ์ตามร้านดั้งเดิม",
        maxInfoFr: "Le joyau architectural d'or du premier royaume de Thaïlande.",
        maxInfoTh: "ราชธานีอันรุ่งเรืองที่เต็มไปด้วยคูเมืองโบราณ พระพุทธรูปปูนปั้นปางลีลาที่งดงามที่สุด"
      },
      {
        placeName: "Kamphaeng Phet Historical Park",
        category: "Attraction",
        notesFr: "Découverte des remparts de latérite oubliés",
        notesTh: "ชมอุทยานประวัติศาสตร์กำแพงเพชร โบราณสถานศิลาแลงโบราณในป่าลึก",
        lat: 16.4831,
        lng: 99.5215,
        budgetPerNight: 400,
        detailedTipsFr: "Ce parc est extrêmement calme et boisé. Vous serez souvent les seuls visiteurs au milieu des structures géantes de latérite.",
        detailedTipsTh: "เป็นอุทยานประวัติศาสตร์ที่ร่มรื่นและเงียบสงบมาก มีจุดเด่นคือโครงสร้างโบราณสถานที่ทำจากศิลาแลงทั้งหลัง",
        maxInfoFr: "Une cité fortifiée qui protégeait jadis l'accès sud du royaume de Sukhothai.",
        maxInfoTh: "เมืองป้อมปราการหน้าด่านที่มีความสำคัญทางยุทธศาสตร์เคียงคู่กับเมืองเก่าสุโขทัย"
      },
      {
        placeName: "Huai Kha Khaeng Wildlife Sanctuary",
        category: "Camping",
        notesFr: "Bivouac sauvage dans le plus grand sanctuaire animalier",
        notesTh: "กางเต็นท์เขตรักษาพันธุ์สัตว์ป่าห้วยขาแข้ง ดินแดนผืนป่าตะวันตกอันอุดมสมบูรณ์",
        lat: 15.3811,
        lng: 100.0245,
        budgetPerNight: 100,
        detailedTipsFr: "C'est un lieu d'observation scientifique préservé. Respectez scrupuleusement le calme et le silence absolu exigé.",
        detailedTipsTh: "เป็นผืนป่ามรดกโลกที่คุมเข้มการท่องเที่ยวเพื่อสงวนป่าไม้และสัตว์ป่า ต้องงดใช้เสียงดังและปฏิบัติตามกฎอย่างเคร่งครัด",
        maxInfoFr: "Le refuge le plus sauvage de Thaïlande abritant des tigres sauvages et des tapirs.",
        maxInfoTh: "อนุสรณ์สถานสืบ นาคะเสถียร แหล่งพำนักของเสือโคร่ง ควายป่า และช้างป่าตามธรรมชาติที่ใหญ่ที่สุด"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Retour à Bangkok, restitution et massage final",
        notesTh: "เดินทางกลับกรุงเทพฯ นำรถส่งคืน และนวดแผนโบราณผ่อนคลายกล้ามเนื้อส่งท้ายทริป",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Profitez d'un dernier massage des pieds relaxant après de longues journées d'exploration à pied des temples antiques.",
        detailedTipsTh: "สัมผัสบริการสปาไทยดั้งเดิม บำบัดอาการปวดเมื่อยจากการเดินทางไกลย้อนอดีตประวัติศาสตร์สยามประเทศ",
        maxInfoFr: "Fin d'un voyage culturel extraordinaire d'une grande valeur historique.",
        maxInfoTh: "จบทริปย้อนรอยโบราณสถานกรุงเก่าอย่างอิ่มอกอิ่มใจ ได้รับความรู้และภาพถ่ายประวัติศาสตร์ล้ำค่า"
      }
    ]
  },
  {
    id: "route-7",
    nameFr: "🍜 Les Secrets culinaires (Gastronomie)",
    nameTh: "🍜 เส้นทางสตรีทฟู้ดและวัฒนธรรมอาหารไทย",
    descFr: "Un road trip gustatif reliant les marchés flottants du centre, les villages de pêcheurs côtiers et la riche gastronomie du littoral.",
    descTh: "เส้นทางนักกินตะลุยตลาดน้ำดั้งเดิม แวะกินอาหารทะเลสดริมฝั่งอ่าวไทย และเรียนรู้เคล็ดลับรสชาติไทยแท้",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Départ du circuit culinaire - Logement chez l'habitant gratuit",
        notesTh: "จุดเริ่มต้นเดินทาง - เตรียมลุยชิมอาหารท้องถิ่นรสเด็ดรอบอ่าวไทย",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "Dégustez au départ un excellent curry de fruits de mer proposé dans les petits villages de pêcheurs de Samut Sakhon.",
        detailedTipsTh: "เริ่มออกเดินทางจากสมุทรสาคร แนะนำให้ลองชิมแกงคั่วส้มไข่ริวกิวหรืออาหารทะเลสดจากประมงชายฝั่ง",
        maxInfoFr: "Départ de votre grand safari culinaire en Thaïlande.",
        maxInfoTh: "เปิดประสบการณ์โรดทริปสายอาหารรสเลิศ สู่ต้นตำรับวัตถุดิบคุณภาพในชุมชน"
      },
      {
        placeName: "Amphawa Floating Market (Samut Songkhram)",
        category: "Lodging",
        notesFr: "Nuit près du marché flottant authentique d'Amphawa",
        notesTh: "พักผ่อนอัมพวา สมุทรสงคราม ล่องเรือชมหิ่งห้อยและตลาดน้ำโบราณยามเย็น",
        lat: 13.4144,
        lng: 100.0034,
        budgetPerNight: 550,
        detailedTipsFr: "Dégustez des coquilles Saint-Jacques grillées à l'ail et du poisson frais cuisinés directement depuis de petites barques en bois.",
        detailedTipsTh: "ลิ้มรสหอยเชลล์ย่างเนยกระเทียม ปลาทูแม่กลองย่าง และขนมไทยโบราณที่พ่อค้าแม่ค้าพายมาขายตามริมคลอง",
        maxInfoFr: "Un marché flottant magique s'animant au crépuscule sous les lumières des lucioles.",
        maxInfoTh: "ตลาดน้ำยามเย็นที่มีเสน่ห์ดึงดูดใจ โดดเด่นด้วยวิถีชีวิตริมคลongและการอนุรักษ์ธรรมชาติหิ่งห้อย"
      },
      {
        placeName: "Ratchaburi (Damnoen Saduak)",
        category: "Attraction",
        notesFr: "Exploration matinale des vergers de fruits tropicaux",
        notesTh: "แวะราชบุรี ชมตลาดน้ำดำเนินสะดวกและลิ้มรสผลไม้สดจากสวนดำเนิน",
        lat: 13.5283,
        lng: 99.8111,
        budgetPerNight: 400,
        detailedTipsFr: "Goutez au sucre de coco frais chauffé de façon artisanale dans les exploitations agricoles locales.",
        detailedTipsTh: "ลองชิมน้ำตาลมะพร้าวแท้เคี่ยวสดๆ ร้อนๆ จากเตาในสวนมะพร้าว และชิมบะหมี่หมูแดงดำเนินสูตรดั้งเดิม",
        maxInfoFr: "Le berceau historique de la culture maraîchère et fruitière du delta.",
        maxInfoTh: "แหล่งเพราะปลูกพืชสวนและเกษตรกรรมชั้นยอดที่หล่อเลี้ยงภาคกลางมาอย่างยาวนาน"
      },
      {
        placeName: "Kaeng Krachan National Park",
        category: "Camping",
        notesFr: "Camping forestier sauvage sous les étoiles d'altitude",
        notesTh: "กางเต็นท์ริมเขื่อนแก่งกระจาน ประกอบอาหารแคมป์ปิ้งจากวัตถุดิบธรรมชาติ",
        lat: 12.8806,
        lng: 99.5161,
        budgetPerNight: 100,
        detailedTipsFr: "C'est l'endroit parfait pour cuisiner un barbecue traditionnel au charbon au milieu de la forêt.",
        detailedTipsTh: "เหมาะสำหรับการจัดบาร์บีคิวแคมป์ปิ้งยามเย็น พกเตาย่างขนาดกะทัดรัดและวัตถุดิบสดแช่เย็นขึ้นไปปรุง",
        maxInfoFr: "Une immense réserve naturelle calme et riche en paysages tropicaux sauvages.",
        maxInfoTh: "เขื่อนเก็บน้ำขนาดใหญ่ที่มีธรรมชาติล้อมรอบ อากาศเย็นสบายในยามค่ำคืนใต้หมู่ดาว"
      },
      {
        placeName: "Hua Hin Night Market",
        category: "Lodging",
        notesFr: "Nuit à Hua Hin et festival de fruits de mer grillés",
        notesTh: "พักผ่อนหัวหิน ตะลุยชิมซีฟู้ดทะเลเผาร้านเด็ดตลาดโต้รุ่งหัวหิน",
        lat: 12.5684,
        lng: 99.9576,
        budgetPerNight: 800,
        detailedTipsFr: "Le marché nocturne est célèbre pour ses langoustes géantes grillées au beurre d'ail servies sur de grandes tables de bois.",
        detailedTipsTh: "ลิ้มลองกุ้งมังกรหัวหินตัวโตย่างเนยสด ปลากะพงทอดน้ำปลา และโรตีมะพร้าวอ่อนเจ้าดังของตลาดโต้รุ่ง",
        maxInfoFr: "Une station balnéaire historique appréciée de la famille royale de Thaïlande.",
        maxInfoTh: "เมืองตากอากาศชายทะเลระดับคลาสสิกที่ผสมผสานไลฟ์สไตล์ทันสมัยและสตรีทฟู้ดโต้รุ่งชื่อดัง"
      },
      {
        placeName: "Prachuap Khiri Khan (Khao Chongกระจก)",
        category: "Attraction",
        notesFr: "Halte culinaire au marché du petit port de pêche",
        notesTh: "แวะเมืองประจวบฯ ทานอาหารใต้อร่อยรสจัดจ้านและปลาหมึกย่างริมทะเล",
        lat: 11.8123,
        lng: 99.7963,
        budgetPerNight: 500,
        detailedTipsFr: "Achetez de savoureux calmars séchés au soleil et grillés au charbon de bois directement sur le quai du port de pêche.",
        detailedTipsTh: "ลองทานแกงไตปลารสชาติเข้มข้นถึงใจสูตรปักษ์ใต้แท้ๆ หรือเลือกซื้อหมึกแดดเดียวทอดแสนอร่อยริมหาด",
        maxInfoFr: "Un adorable port de pêche préservé, célèbre pour son calme et ses produits frais de la mer.",
        maxInfoTh: "อ่าวสามอ่าวที่เงียบสงบและเต็มไปด้วยประมงพื้นบ้านที่นำสัตว์ทะเลขึ้นบกสดๆ ทุกวัน"
      },
      {
        placeName: "Khao Sam Roi Yot National Park",
        category: "Camping",
        notesFr: "Dernier bivouac côtier sauvage sur le sable blanc",
        notesTh: "กางเต็นท์หาดสามพระยา สามร้อยยอด ปรุงปิ้งย่างริมหาดใต้ดงสน",
        lat: 12.1667,
        lng: 99.9833,
        budgetPerNight: 100,
        detailedTipsFr: "Préparez un savoureux Som Tum (salade de papaye verte) épicé près des vagues pour un pique-nique mémorable.",
        detailedTipsTh: "กางเต็นท์ในแนวทิวสนธรรมชาติริมหาดกว้างขวาง ปิ้งย่างซีฟู้ดสดท่ามกลางลมทะเลพัดเบาๆ เย็นสบาย",
        maxInfoFr: "Un décor fantastique mariant montagne, mer tropicale et sérénité absolue.",
        maxInfoTh: "จุดตั้งแคมป์ริมหาดอุทยานที่เงียบสงบ หลีกหนีความวุ่นวาย โอบล้อมด้วยภูเขา calcaire สวยงาม"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Retour à Bangkok, festival de street food final",
        notesTh: "เดินทางกลับกรุงเทพฯ ตะลุยชิมสตรีทฟู้ดย่านเยาวราชและนวดแผนโบราณส่งท้าย",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Terminez en beauté par les meilleurs stands de cuisine de rue de Yaowarat (Chinatown) recommandés par le guide Michelin.",
        detailedTipsTh: "ปิดทริปอย่างสมบูรณ์แบบด้วยของหวานรังนก บัวลอยน้ำขิง และก๋วยจั๊บร้านดังระดับมิชลินย่านเยาวราช",
        maxInfoFr: "La capitale mondiale de la Street Food clôture magnifiquement votre safari culinaire.",
        maxInfoTh: "จบทริปสายกินสุดฟิน ได้ลิ้มรสชาติตั้งแต่ประมงพื้นบ้าน ตลาดน้ำ ไปจนถึงระดับสากลสตรีทฟู้ด"
      }
    ]
  },
  {
    id: "route-8",
    nameFr: "🧘‍♀️ Retraite Spirituelle & Temples Secrets",
    nameTh: "🧘‍♀️ เส้นทางพุทธสถานและอารยธรรมโบราณล้านนา",
    descFr: "Un pèlerinage paisible à travers les plus majestueux temples d'art bouddhiste et les forêts sacrées de méditation.",
    descTh: "เส้นทางแสวงบุญและสมาธิ ชมพุทธศิลป์ล้ำค่าและอารามป่าโบราณเพื่อความสงบจิตใจ",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Départ pour l'itinéraire spirituel et de recueillement",
        notesTh: "จุดเริ่มต้นเดินทาง - เตรียมกายและใจเข้าสู่เส้นทางพุทธสถานโบราณ",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "L'esprit de ce voyage repose sur le calme, l'introspection et le respect des rituels bouddhistes sacrés.",
        detailedTipsTh: "ทริปเน้นศึกษาศิลปะ พุทธศาสนา และฝึกฝนจิตใจให้สงบ แนะนำเตรียมเสื้อผ้าสีขาวสุภาพไปด้วย",
        maxInfoFr: "Un départ harmonieux chez l'habitant pour débuter votre méditation.",
        maxInfoTh: "พร้อมออกเดินทางแสวงความสงบและสติปัญญาผ่านความงามทางสถาปัตยกรรมไทย"
      },
      {
        placeName: "Phra Pathom Chedi (Nakhon Pathom)",
        category: "Attraction",
        notesFr: "Visite du plus grand dôme bouddhiste au monde",
        notesTh: "ชมพระปฐมเจดีย์ มหาเจดีย์ที่สูงที่สุดในประเทศและดินแดนทวารวดีโบราณ",
        lat: 13.8196,
        lng: 100.0603,
        budgetPerNight: 400,
        detailedTipsFr: "Faites trois fois le tour de la terrasse circulaire dorée en faisant une prière silencieuse au coucher du soleil.",
        detailedTipsTh: "ร่วมเวียนเทียนรอบองค์พระปฐมเจดีย์สีทองเหลืองอร่าม และสักการะพระร่วงโรจนฤทธิ์ปางห้ามญาติโบราณ",
        maxInfoFr: "Le berceau historique de l'introduction du bouddhisme en Thaïlande il y a 2000 ans.",
        maxInfoTh: "ศาสนสถานสำคัญคู่บ้านคู่เมืองที่มีประวัติศาสตร์ยาวนานตั้งแต่สมัยอาณาจักรทวารวดี"
      },
      {
        placeName: "Wat Muang (Ang Thong)",
        category: "Attraction",
        notesFr: "Visite du bouddha assis géant en or",
        notesTh: "สักการะหลวงพ่อใหญ่ วัดม่วง อ่างทอง พระพุทธรูปนั่งที่ใหญ่ที่สุดในโลก",
        lat: 14.5925,
        lng: 100.3812,
        budgetPerNight: 400,
        detailedTipsFr: "Le rituel traditionnel consiste à toucher le bout des doigts de la main géante du Bouddha pour recevoir ses bénédictions.",
        detailedTipsTh: "ตามความเชื่อให้เดินทางไปแตะที่ปลายเนื้อนิ้วกลางขวาขององค์พระพุทธรูปยักษ์เพื่อขอพรเป็นมงคลแก่ชีวิต",
        maxInfoFr: "Un chef-d'œuvre de sculpture sacrée s'élevant majestueusement au-dessus des rizières.",
        maxInfoTh: "พุทธศิลป์อลังการงานสร้างปูนปั้นสีทองสง่างาม ตั้งโดดเด่นกลางทุ่งนาเขียวขจี"
      },
      {
        placeName: "Phra Phutthabat Temple (Saraburi)",
        category: "Lodging",
        notesFr: "Nuit près du temple de l'empreinte sacrée du Bouddha",
        notesTh: "พักผ่อนสระบุรี สักการะรอยพระพุทธบาทศักดิ์สิทธิ์และชมสถาปัตยกรรมมณฑปโบราณ",
        lat: 14.7214,
        lng: 100.7884,
        budgetPerNight: 500,
        detailedTipsFr: "Visitez le musée de l'art sacré bouddhiste au sein du complexe royal du temple.",
        detailedTipsTh: "เข้าชมสถาปัตยกรรมหลังคามณฑปซ้อนห้าชั้นที่ประดับกระจกสีวิจิตรบรรจง และกราบรอยพระพุทธบาทจำลอง",
        maxInfoFr: "Découverte par des chasseurs au 17ème siècle, l'empreinte fait l'objet d'un culte royal précieux.",
        maxInfoTh: "โบราณสถานที่ได้รับความเคารพบูชาสูงสุดจากพุทธศาสนิกชนมาตั้งแต่สมัยกรุงศรีอยุธยา"
      },
      {
        placeName: "Khao Yai National Park",
        category: "Camping",
        notesFr: "Camping de méditation sauvage dans les bois de Khao Yai",
        notesTh: "กางเต็นท์เขาใหญ่ ปฏิบัติจิตภาวนารับความสงบจากป่าธรรมชาติเงียบสงบ",
        lat: 14.4393,
        lng: 101.3725,
        budgetPerNight: 100,
        detailedTipsFr: "Asseyez-vous en silence près des ruisseaux forestiers au lever du jour pour observer la vie sauvage s'éveiller.",
        detailedTipsTh: "หาทำเลสงบเงียบใต้เงาร่มไม้ใหญ่ริมห้วย ทำสมาธิสลับกับการฟังเสียงนกร้องธรรมชาติบำบัดจิตใจ",
        maxInfoFr: "Un havre de paix idéal pour se reconnecter à la puissance sauvage de la nature.",
        maxInfoTh: "ผืนป่าสงบที่ช่วยชะล้างความวุ่นวาย เติมเต็มพลังบวกและสติสัมปชัญญะให้กับตัวเอง"
      },
      {
        placeName: "Wat Sothon Wararam (Chachoengsao)",
        category: "Lodging",
        notesFr: "Nuit près du majestueux temple de marbre blanc",
        notesTh: "พักผ่อนฉะเชิงเทรา สักการะหลวงพ่อโสธร พระพุทธรูปทองสัมฤทธิ์ในวิหารหินอ่อน",
        lat: 13.6833,
        lng: 101.0667,
        budgetPerNight: 500,
        detailedTipsFr: "Admirez les superbes fresques d'astronomie peintes au plafond de l'immense salle principale en marbre.",
        detailedTipsTh: "เข้ากราบสักการะองค์หลวงพ่อพระพุทธโสธรในโบสถ์หลังใหม่ที่สร้างด้วยหินอ่อนคาร์ราราอิตาลีสุดหรูหรา",
        maxInfoFr: "L'un des temples bouddhistes les plus vénérés du pays, abritant la statue miraculeuse du Bouddha Sothon.",
        maxInfoTh: "พระอารามหลวงชั้นโทริมแม่น้ำบางปะกง ศูนย์รวมจิตใจของชาวแปดริ้วและชาวไทยทั่วประเทศ"
      },
      {
        placeName: "Kaeng Krachan National Park",
        category: "Camping",
        notesFr: "Dernier bivouac sauvage de méditation près des lacs",
        notesTh: "กางเต็นท์ริมน้ำแก่งกระจาน ปล่อยวางทุกความคิด สดับเสียงสายน้ำพัดผ่าน",
        lat: 12.8806,
        lng: 99.5161,
        budgetPerNight: 100,
        detailedTipsFr: "Offrez-vous une journée sans écrans pour savourer pleinement le silence et la beauté de la canopée tropicale.",
        detailedTipsTh: "ลองปิดโทรศัพท์มือถือหนึ่งวัน ฝึกสติจดจ่อกับการเดินจงกรมใต้เงาไม้ใหญ่และสูดโอโซนบริสุทธิ์",
        maxInfoFr: "Un sanctuaire forestier grandiose propice au repos de l'esprit.",
        maxInfoTh: "ป่าธรรมชาติผืนใหญ่ที่โอบล้อมให้เราได้กลับมาอยู่กับปัจจุบันขณะอย่างแท้จริง"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Fin de l'itinéraire, méditation au Wat Pho et massage",
        notesTh: "เดินทางกลับกรุงเทพฯ นมัสการพระพุทธไสยาสน์วัดโพธิ์ และนวดสปาสิ้นสุดทริปสงบใจ",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Clôturez votre pèlerinage par la visite du Bouddha couché géant en or du Wat Pho et un massage traditionnel.",
        detailedTipsTh: "ปิดทริปแสวงบุญด้วยการสักการะพระนอนวัดโพธิ์ และรับบริการนวดจับเส้นผ่อนคลายกล้ามเนื้ออย่างเป็นทางการ",
        maxInfoFr: "Fin d'une aventure spirituelle paisible, ressourçante et d'une grande sérénité.",
        maxInfoTh: "สิ้นสุดเส้นทางแห่งสติปัญญาและพุทธศิลป์ล้ำค่า ได้ทั้งบุญกุศล ความอิ่มใจ และจิตที่ตื่นรู้"
      }
    ]
  },
  {
    id: "route-9",
    nameFr: "🐒 Parcs nationaux cachés & Vie sauvage",
    nameTh: "🐒 เส้นทางสำรวจผืนป่าตะวันตกและอุทยานแห่งชาติ",
    descFr: "Une expédition naturaliste hors des sentiers battus à la rencontre des espèces protégées de la faune thaïlandaise.",
    descTh: "เส้นทางนักสำรวจธรรมชาติ เจาะลึกผืนป่าตะวันตกและอุทยานแห่งชาติที่ยังคงความลึกลับและอุดมสมบูรณ์",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Départ de l'expédition nature et faune sauvage",
        notesTh: "จุดเริ่มต้นเดินทาง - เตรียมกล้องส่องทางไกลและเลนส์ซูมสำหรับส่องสัตว์ป่าพบนอกพรมแดน",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "Munissez-vous d'une paire de jumelles puissantes et d'un vêtement de couleur neutre (kaki, vert forêt).",
        detailedTipsTh: "เตรียมกล้องส่องทางไกลคู่ใจและสวมเสื้อผ้าโทนสีกลมกลืนกับป่า (เช่น สีเขียวมะกอก สีน้ำตาล สีดิน) เพื่อไม่ให้สัตว์ป่าตื่นกลัว",
        maxInfoFr: "Départ pour une expédition inoubliable au cœur du sauvage.",
        maxInfoTh: "ทริปเจาะลึกผืนป่าตะวันตกและอุทยานแห่งชาติ แหล่งรวมของสัตว์สงวนล้ำค่าของประเทศ"
      },
      {
        placeName: "Khao Chamao - Khao Wong National Park",
        category: "Camping",
        notesFr: "Bivouac près des grottes de calcaire secrètes",
        notesTh: "กางเต็นท์อุทยานแห่งชาติเขาชะเมา-เขาวง เดินเที่ยวชมถ้ำหินปูนธรรมชาติกว่า 80 ถ้ำ",
        lat: 12.9167,
        lng: 101.7167,
        budgetPerNight: 100,
        detailedTipsFr: "Munissez-vous d'une lampe de poche étanche puissante pour explorer les impressionnantes grottes de calcaire.",
        detailedTipsTh: "ต้องพกไฟฉายสว่างๆ และสวมรองเท้ากีฬาหุ้มส้นสำหรับความปลอดภัยในการมุดลอดถ้ำหินปูนที่มีความชื้น",
        maxInfoFr: "Un parc sauvage et boisé célèbre pour ses grottes calcaires ornées de stalactites géantes.",
        maxInfoTh: "ความอัศจรรย์ของธรรมชาติหินงอกหินย้อย ร่องลึก และฝูงค้างคาวธรรมชาติที่อลังการ"
      },
      {
        placeName: "Khao Khitchakut National Park",
        category: "Camping",
        notesFr: "Pèlerinage forestier au sommet de la montagne sacrée",
        notesTh: "กางเต็นท์เขาคิชฌกูฏ ขึ้นนมัสการรอยพระพุทธบาทพลวง และศึกษาธรรมชาติในป่าดงดิบเขา",
        lat: 12.8393,
        lng: 102.1325,
        budgetPerNight: 100,
        detailedTipsFr: "Gravissez la montagne pour ressentir la ferveur spirituelle et observez les orchidées sauvages rares.",
        detailedTipsTh: "นมัสการรอยพระพุทธบาทบนยอดเขาเพื่อเป็นสิริมงคล และชมทิวทัศน์ธรรมชาติของเทือกเขาสูงแบบพาโนรามา",
        maxInfoFr: "Un haut lieu de pèlerinage au cœur d'une forêt de montagne luxuriante et préservée.",
        maxInfoTh: "แหล่งธรรมชาติศักดิ์สิทธิ์ที่มีชื่อเสียงที่สุดแห่งหนึ่งในภาคตะวันออก โดดเด่นด้วยวิถีวัฒนธรรมและป่าเขาอุดมสมบูรณ์"
      },
      {
        placeName: "Khao Sip Chan National Park (Chanthaburi)",
        category: "Camping",
        notesFr: "Camping d'aventure au milieu de la forêt vierge",
        notesTh: "กางเต็นท์อุทยานแห่งชาติเขาสิบชั้น จันทบุรี นอนป่าธรรมชาติหนาทึบเงียบกริบ",
        lat: 12.9333,
        lng: 102.2500,
        budgetPerNight: 100,
        detailedTipsFr: "Un parc secret et confidentiel parfait pour écouter en silence les bruits et battements de la jungle vierge.",
        detailedTipsTh: "เป็นอุทยานป่าดิบชื้นที่ยังไม่เป็นที่นิยมมากนัก จึงมีความสงบสงัดอย่างมาก เหมาะสำหรับกางเต็นท์ฟังเสียงป่าแท้ๆ",
        maxInfoFr: "Un trésor forestier d'une grande sérénité ignoré de la majorité des touristes.",
        maxInfoTh: "น้ำตกและป่าไม้เบญจพรรณธรรมชาติที่ซ่อนตัวอยู่ทางตะวันออกของประเทศ"
      },
      {
        placeName: "Pang Sida National Park (Sa Kaeo)",
        category: "Camping",
        notesFr: "Camping au royaume des milliers de papillons multicolores",
        notesTh: "กางเต็นท์ปางสีดา ชมเทศกาลผีเสื้อป่าบินอวดโฉมกว่า 400 สายพันธุ์",
        lat: 13.9833,
        lng: 102.2167,
        budgetPerNight: 100,
        detailedTipsFr: "Visitez les berges du ruisseau vers 10h00 quand le soleil frappe l'argile pour observer des nuées de papillons colorés.",
        detailedTipsTh: "ช่วง 10.00-11.00 น. เป็นช่วงทองที่ฝูงผีเสื้อป่าจะลงมากินดินโป่งตามริมห้วยน้ำตกปางสีดา สวยงามมหัศจรรย์มาก",
        maxInfoFr: "Surnommé le 'Royaume des papillons de l'Est' pour sa richesse entomologique.",
        maxInfoTh: "อุทยานผืนป่าอนุรักษ์ธรรมชาติที่เป็นแหล่งเพาะพันธุ์ผีเสื้อที่หลากหลายที่สุดในไทย"
      },
      {
        placeName: "Thap Lan National Park (Prachin Buri)",
        category: "Camping",
        notesFr: "Bivouac au milieu des antiques forêts de palmiers talipot",
        notesTh: "กางเต็นท์อุทยานแห่งชาติทับลาน ชมดงลาน ผืนป่าต้นลานธรรมชาติผืนสุดท้าย",
        lat: 14.2167,
        lng: 101.9167,
        budgetPerNight: 100,
        detailedTipsFr: "Ce parc abrite la dernière grande forêt primaire de palmiers Talipot, dont les feuilles servaient jadis à écrire les textes bouddhistes sacrés.",
        detailedTipsTh: "เป็นป่าดงลานโบราณกว้างขวาง ต้นลานจะออกดอกเพียงครั้งเดียวในชีวิตเมื่ออายุ 60 ปี แล้วยืนต้นตายไปอย่างสง่างาม",
        maxInfoFr: "Un écosystème unique et grandiose inscrit au patrimoine mondial de l'humanité.",
        maxInfoTh: "ป่าสงวนธรรมชาติที่มีความสมบูรณ์สูง เชื่อมต่อผืนป่าดงพญาเย็นและทับลานเข้าด้วยกัน"
      },
      {
        placeName: "Khao Yai National Park (Lam Ta Khong)",
        category: "Camping",
        notesFr: "Observation des éléphants sauvages et oiseaux calaos",
        notesTh: "กางเต็นท์ลานลำตะคอง ชมฝูงลิง นกเงือกขนาดใหญ่ และตามรอยช้างป่าเขาใหญ่",
        lat: 14.4393,
        lng: 101.3725,
        budgetPerNight: 100,
        detailedTipsFr: "Écoutez les cris des gibbons au sommet de la canopée tropicale vers 7h00. Ne les nourrissez en aucun cas.",
        detailedTipsTh: "ตื่นเช้าฟังเสียงชะนีร้องขับขานทั่วหุบเขาช่วงเจ็ดโมง และห้ามป้อนอาหารลิงป่าข้ามถนนเด็ดขาด",
        maxInfoFr: "L'un des plus riches sanctuaires de grands mammifères protégés d'Asie.",
        maxInfoTh: "ผืนป่ามรดกโลกที่ได้รับการปกป้องอย่างดีเยี่ยม เต็มไปด้วยระบบนิเวศป่าฝนที่สมบูรณ์แบบ"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Fin de l'expédition vie sauvage, retour et massage",
        notesTh: "เดินทางกลับกรุงเทพฯ คืนรถเช่า และนวดผ่อนคลายร่างกายส่งท้ายทริปสำรวจป่าดิบ",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Profitez d'un repos bien mérité à l'hôtel et triez vos clichés d'oiseaux migrateurs et d'éléphants.",
        detailedTipsTh: "พักผ่อนออมแรงนอนหลับสบายในเมืองหลวง พร้อมโอนย้ายไฟล์รูปภาพสัตว์ป่าประทับใจลงคอมพิวเตอร์เก็บไว้",
        maxInfoFr: "Retour à la civilisation l'esprit imprégné du chant de la jungle.",
        maxInfoTh: "ปิดม่านการผจญภัยในสายหมอกและพงไพร ได้สัมผัสคุณค่าของป่าไม้และสิ่งแวดล้อมที่ได้รับการดูแล"
      }
    ]
  },
  {
    id: "route-10",
    nameFr: "🌊 Côte du golfe & Villages de pêcheurs",
    nameTh: "🌊 เส้นทางเลียบชายฝั่งทะเลอ่าวไทยและวิถีชาวประมง",
    descFr: "Un road trip maritime et rafraîchissant le long des plages sablonneuses du golfe de Thaïlande et de ses ports de pêche en bois traditionnels.",
    descTh: "เส้นทางเลียบทางรถไฟสายทะเลภาคตะวันออก ชมวิถีชาวประมง ทานปูย่าง และกางเต็นท์หาดทรายขาว",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Départ immédiat vers les marais salants et la côte du golfe",
        notesTh: "จุดเริ่มต้นเดินทาง - เตรียมตัวขับรถลัดเลาะเลียบชายฝั่งภาคตะวันออกอ่าวไทย",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "Un départ idéal à Samut Sakhon, berceau des plus grandes salines de Thaïlande.",
        detailedTipsTh: "สมุทรสาครเป็นเมืองอุตสาหกรรมประมงและนาเกลือที่ใหญ่ที่สุด แนะนำแวะชมลานเกลือขาวโพลนระหว่างทางออก",
        maxInfoFr: "Départ pour un voyage salé et maritime.",
        maxInfoTh: "มุ่งหน้าสู่เลียบชายฝั่งอ่าวไทยผ่านสมุทรปราการ ชลบุรี ระยอง จันทบุรี"
      },
      {
        placeName: "Bang Pu Recreation Center (Samut Prakan)",
        category: "Attraction",
        notesFr: "Halte pour observer l'envol des milliers de mouettes",
        notesTh: "แวะสถานตากอากาศบางปู ชมและให้อาหารฝูงนกนางนวลอพยพกว่าหมื่นตัว",
        lat: 13.5383,
        lng: 100.6053,
        budgetPerNight: 400,
        detailedTipsFr: "Achetez de petits cubes de couennes de porc frites à lancer aux mouettes gourmandes depuis le grand pont en bois.",
        detailedTipsTh: "กาลานกจะโผบินมากินกากหมูจากมือของเราบนสะพานสุขตา ช่วงพฤศจิกายนถึงเมษายนนกจะเยอะเป็นพิเศษ",
        maxInfoFr: "Une zone côtière protégée de mangrove abritant une faune aviaire spectaculaire.",
        maxInfoTh: "แหล่งพักผ่อนหย่อนใจและเรียนรู้ระบบนิเวศป่าชายเลนริมปากแม่น้ำเจ้าพระยา"
      },
      {
        placeName: "Bang Saen Beach (Chonburi)",
        category: "Lodging",
        notesFr: "Nuit près de la plage animée de Bang Saen",
        notesTh: "พักผ่อนหาดบางแสน ชลบุรี ทานส้มตำไก่ย่างริมหาดทรายใต้ร่มผ้าใบใบใหญ่",
        lat: 13.2911,
        lng: 100.9113,
        budgetPerNight: 600,
        detailedTipsFr: "Dégustez un délicieux riz frit aux crabes frais et profitez de l'ambiance chaleureuse étudiante de la plage.",
        detailedTipsTh: "ลิ้มลองข้าวผัดปูจานด่วน หรือส้มตำถาดรสแซ่บราคามิตรภาพริมทะเลบางแสนตอนบ่ายแก่ๆ",
        maxInfoFr: "La plage historique la plus appréciée des résidents locaux pour sa douceur de vivre.",
        maxInfoTh: "ชายหาดยอดนิยมดั้งเดิมของไทยที่เต็มไปด้วยคาเฟ่ริมเลและร้านอาหารทะเลสดใหม่เกลื่อนหาด"
      },
      {
        placeName: "Sattahip (Nang Ram Beach)",
        category: "Camping",
        notesFr: "Camping côtier de sable blanc géré par la marine royale",
        notesTh: "กางเต็นท์หาดนางรำ สัตหีบ ทะเลน้ำใสสะอาดหาดทรายขาวในเขตกองทัพเรือ",
        lat: 12.6664,
        lng: 100.9004,
        budgetPerNight: 100,
        detailedTipsFr: "Un site géré de façon très stricte et sécurisée par l'armée. Le sable blanc y est d'une propreté exemplaire.",
        detailedTipsTh: "น้ำทะเลใสแจ๋วราวกับเกาะแดนใต้ เนื่องจากเป็นพื้นที่ปิดอนุรักษ์ดูแลของทหารเรือสัตหีบ",
        maxInfoFr: "Une plage paradisiaque d'eaux turquoises d'une propreté et sécurité parfaites.",
        maxInfoTh: "ลานหาดทรายยาวขนานไปกับแนวน้ำตื้นร่มรื่นด้วยต้นสนและศาลานั่งพักริมทะเล"
      },
      {
        placeName: "Rayong Coast (Khao Laem Ya)",
        category: "Camping",
        notesFr: "Camping sur les falaises rocheuses face à l'île de Koh Samet",
        notesTh: "กางเต็นท์อุทยานแห่งชาติเขาแหลมหญ้า ระยอง เดินชมวิวสะพานไม้เลียบโขดหิน",
        lat: 12.5934,
        lng: 101.4425,
        budgetPerNight: 100,
        detailedTipsFr: "Installez votre tente sur la colline d'herbe face au vent marin. Le coucher de soleil y est fantastique.",
        detailedTipsTh: "กางเต็นท์ใกล้หน้าผาฝั่งชมอาทิตย์ตก แสงยามเย็นตัดกับทิวโขดหินและมีลมเลพัดโชยระบายความร้อนได้ดีเยี่ยม",
        maxInfoFr: "Une péninsule rocheuse sauvage faisant face aux eaux bleues transparentes de Koh Samet.",
        maxInfoTh: "จุดชมวิวแลนด์มาร์คสำคัญของระยองที่มีสะพานไม้ทางเดินยื่นออกไปในทะเลสำหรับถ่ายภาพขอบฟ้า"
      },
      {
        placeName: "Kung Krabaen Bay (Chanthaburi)",
        category: "Lodging",
        notesFr: "Nuit près de la baie des mangroves et dugongs",
        notesTh: "พักผ่อนจันทบุรี เดินป่าชายเลนอ่าวคุ้งกระเบน และสะพานกระจกส่องทะเล",
        lat: 12.5734,
        lng: 101.8943,
        budgetPerNight: 600,
        detailedTipsFr: "Visitez le centre d'étude de la nature et traversez le grand pont suspendu en bois au-dessus de la forêt de palétuviers.",
        detailedTipsTh: "เดินศึกษาเส้นทางเดินสะพานไม้ระยะทาง 1.6 กม. สังเกตปลาตีน ปูแสม และสัมผัสความเย็นสบายของอุโมงค์ต้นโกงกาง",
        maxInfoFr: "Un écosystème de mangrove protégé et précieux initié par les projets de développement royaux.",
        maxInfoTh: "โครงการศูนย์ศึกษาการพัฒนาอ่าวคุ้งกระเบนอันเนื่องมาจากพระราชดำริ แหล่งอนุรักษ์พันธุ์สัตว์น้ำ"
      },
      {
        placeName: "Khao Khitchakut National Park",
        category: "Camping",
        notesFr: "Dernier bivouac près de la cascade d'altitude de Chanthaburi",
        notesTh: "กางเต็นท์อุทยานแห่งชาติเขาคิชฌกูฏ เล่นน้ำตกกระทิงธรรมชาติเจ็ดชั้น",
        lat: 12.8333,
        lng: 102.1333,
        budgetPerNight: 100,
        detailedTipsFr: "Randonnez vers la cascade Krathing. Les bassins de roche sont parfaits pour une baignade rafraîchissante au milieu des arbres.",
        detailedTipsTh: "ตื่นเช้าขึ้นชมน้ำตกกระทิง เล่นน้ำตกเย็นสดชื่นที่มีปลาพลวงหินธรรมชาติอาศัยอยู่อย่างชุกชุมตามโขดหิน",
        maxInfoFr: "Un parc montagneux sauvage réputé pour sa cascade géante et son climat forestier rafraîchissant.",
        maxInfoTh: "อุทยานยอดนิยมฝั่งตะวันออก อุดมไปด้วยพันธุ์ไม้ป่าดิบแล้งและสัตว์ป่าหลากหลายพรรณ"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Retour à la capitale, fin du road trip côtier",
        notesTh: "เดินทางกลับกรุงเทพฯ คืนรถเช่า และนวดแผนโบราณสปาสลายปวดคอหลังขับเลียบเล",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Faites halte pour déguster un dernier repas de poissons frais le long des quais de la rivière Chao Phraya.",
        detailedTipsTh: "แวะคืนเต็นท์อุปกรณ์พร้อมเช็คอินไฟลท์บินกลับ หรือลิ้มรสซีฟู้ดบาร์บีคิวมื้อค่ำฉลองความสำเร็จริมเจ้าพระยา",
        maxInfoFr: "Fin de votre aventure côtière exceptionnelle autour du golfe oriental.",
        maxInfoTh: "จบทริปเลียบเลตะวันออก ท่องเที่ยววิถีชาวประมง ทรายขาว คลื่นใส สะสมภาพความสุขเต็มกระเป๋า"
      }
    ]
  }
];

export function generatePresetItinerary(
  routeId: string,
  durationWeeks: 2 | 4 | 6,
  lang: 'fr' | 'th'
): { items: ItineraryItem[]; title: string; description: string } {
  const template = ROUTE_TEMPLATES.find(r => r.id === routeId) || ROUTE_TEMPLATES[0];
  const totalDays = durationWeeks * 7;
  const rawSteps = template.steps;

  // We want to scale these steps to span exactly totalDays.
  // Day 1 is always the starting point: Samut Sakhon.
  // Last Day (totalDays) is always Bangkok.
  // Intermediate steps will be spaced out evenly.
  const items: ItineraryItem[] = [];

  // 1. Point de départ (Samut Sakhon)
  const startStep = rawSteps[0];
  items.push({
    id: `${routeId}-step-1`,
    placeName: startStep.placeName,
    day: 1,
    category: startStep.category,
    notes: lang === 'fr' ? startStep.notesFr : startStep.notesTh,
    lat: startStep.lat,
    lng: startStep.lng,
    duration: lang === 'fr' ? "1 nuit" : "1 คืน",
    budget: startStep.budgetPerNight,
    detailedTips: lang === 'fr' ? startStep.detailedTipsFr : startStep.detailedTipsTh,
    maxInfo: lang === 'fr' ? startStep.maxInfoFr : startStep.maxInfoTh
  });

  // Intermediate steps (excluding start and end)
  const midSteps = rawSteps.slice(1, rawSteps.length - 1);
  const endStep = rawSteps[rawSteps.length - 1];

  // Depending on weeks, we select a subset of intermediate steps to keep it organic
  let selectedMidSteps = [...midSteps];
  if (durationWeeks === 2) {
    // Keep 3 intermediate steps for a 2-week trip
    selectedMidSteps = [midSteps[0], midSteps[Math.floor(midSteps.length / 2)], midSteps[midSteps.length - 1]];
  } else if (durationWeeks === 4) {
    // Keep 5 intermediate steps
    selectedMidSteps = midSteps.slice(0, 5);
  } else {
    // Keep all intermediate steps for 6 weeks
    selectedMidSteps = midSteps;
  }

  // Calculate day numbers evenly spaced between Day 1 and Last Day (totalDays)
  // For instance, if we have N intermediate steps, we want day numbers ranging between 2 and totalDays - 1.
  const stepCount = selectedMidSteps.length;
  for (let i = 0; i < stepCount; i++) {
    const step = selectedMidSteps[i];
    // Linearly distribute day numbers between Day 4 and Day (totalDays - 4)
    const dayProgress = stepCount > 1 ? i / (stepCount - 1) : 0.5;
    const minDay = 4;
    const maxDay = totalDays - 4;
    const calculatedDay = Math.round(minDay + dayProgress * (maxDay - minDay));
    
    // Estimate stay duration based on gap or preset weeks
    const calculatedNights: number = durationWeeks === 2 ? 2 : durationWeeks === 4 ? 4 : 5;
    const durString = calculatedNights === 1 
      ? (lang === 'fr' ? "1 nuit" : "1 คืน")
      : (lang === 'fr' ? `${calculatedNights} nuits` : `${calculatedNights} คืน`);

    const calculatedBudget = step.budgetPerNight * calculatedNights;

    items.push({
      id: `${routeId}-step-mid-${i}`,
      placeName: step.placeName,
      day: calculatedDay,
      category: step.category,
      notes: lang === 'fr' ? step.notesFr : step.notesTh,
      lat: step.lat,
      lng: step.lng,
      duration: step.category === 'Attraction' || step.category === 'Activity' || step.category === 'Restaurant' 
        ? (lang === 'fr' ? "1 journée" : "1 วัน") 
        : durString,
      budget: calculatedBudget || undefined,
      detailedTips: lang === 'fr' ? step.detailedTipsFr : step.detailedTipsTh,
      maxInfo: lang === 'fr' ? step.maxInfoFr : step.maxInfoTh
    });
  }

  // 3. Point d'arrivée (Bangkok)
  items.push({
    id: `${routeId}-step-end`,
    placeName: endStep.placeName,
    day: totalDays,
    category: endStep.category,
    notes: lang === 'fr' ? endStep.notesFr : endStep.notesTh,
    lat: endStep.lat,
    lng: endStep.lng,
    duration: lang === 'fr' ? "1 nuit" : "1 คืน",
    budget: endStep.budgetPerNight,
    detailedTips: lang === 'fr' ? endStep.detailedTipsFr : endStep.detailedTipsTh,
    maxInfo: lang === 'fr' ? endStep.maxInfoFr : endStep.maxInfoTh
  });

  // Sort items by day just to be fully safe
  items.sort((a, b) => a.day - b.day);

  // Return generated object
  const routeName = lang === 'fr' ? template.nameFr : template.nameTh;
  const durationText = lang === 'fr' ? `${durationWeeks} semaines` : `${durationWeeks} สัปดาห์`;
  
  return {
    items,
    title: `${routeName} - ${durationText}`,
    description: lang === 'fr' 
      ? `${template.descFr} (Itinéraire optimisé de ${durationWeeks} semaines au départ de Samut Sakhon).`
      : `${template.descTh} (เส้นทางที่แนะนำ ${durationWeeks} สัปดาห์ เริ่มต้นจากสมุทรสาคร)`
  };
}
