import { ItineraryItem, CategoryType } from './types';

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
        placeName: "Lopburi (Phra Prang Sam Yod)",
        category: "Lodging",
        notesFr: "Halte historique dans la cité des singes",
        notesTh: "แวะพักเมืองลพบุรี ชมพระปรางค์สามยอดและทุ่งทานตะวัน",
        lat: 14.7995,
        lng: 100.6534,
        budgetPerNight: 400,
        detailedTipsFr: "Explorez les temples d'influence khmère et observez les célèbres macaques. Gardez vos affaires en sécurité.",
        detailedTipsTh: "ชมสถาปัตยกรรมพระปรางค์ขอมโบราณ ทักทายฝูงลิงป่า แนะนำเก็บสัมภาระส่วนตัวให้ดี",
        maxInfoFr: "Une ville historique charmante à mi-chemin du grand Nord.",
        maxInfoTh: "เมืองโบราณที่เป็นจุดแวะพักพักครึ่งทางเพื่อเซฟเวลาและผ่อนคลายร่างกาย"
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
        placeName: "Sukhothai Historical Park",
        category: "Lodging",
        notesFr: "Halte au berceau de l'histoire thaïe",
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
        notesTh: "พักผ่อนอุ่นสบายในเมืองเชียงราย et ชมวัดร่องขุ่นอันวิจิตร",
        lat: 19.9101,
        lng: 99.8406,
        budgetPerNight: 500,
        detailedTipsFr: "Faites vos machines de linge et profitez d'une bonne nuit de récupération à l'hôtel.",
        detailedTipsTh: "แวะซักล้างเครื่องนอนและทำความสะอาดอุปกรณ์แคมป์ พร้อมนอนเตียงนุ่มอุ่นๆ ในเมือง",
        maxInfoFr: "Une pause culturelle splendide après deux semaines de bivouac rude.",
        maxInfoTh: "ชมศิลปะปูนปั้นสีขาวบริสุทธิ์ของอาจารย์เฉลิมชัย โฆษิตพิพัฒน์"
      },
      {
        placeName: "Kwan Phayao (Phayao Lake)",
        category: "Lodging",
        notesFr: "Halte paisible face au grand lac de Phayao",
        notesTh: "พักผ่อนชิวริมกว๊านพะเยา ชมพระอาทิตย์ตกสะท้อนผิวน้ำที่งดงาม",
        lat: 19.1623,
        lng: 99.9024,
        budgetPerNight: 450,
        detailedTipsFr: "Dégustez du poisson grillé frais de lac sur les rives animées en admirant le coucher du soleil.",
        detailedTipsTh: "ลิ้มลองเมนูปลาย่างสดๆ จากกว๊านพะเยา และดื่มด่ำกับพระอาทิตย์ดวงกลมโตตกดินสุดโรแมนติก",
        maxInfoFr: "Un lac d'eau douce grandiose et mystique entouré de montagnes douces.",
        maxInfoTh: "กว๊านพะเยา แหล่งน้ำจืดที่ใหญ่ที่สุดในภาคเหนือและเป็นศูนย์รวมวิถีชีวิตคนพะเยา"
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
        detailedTipsTh: "ซื้อไข่ไก่/ไข่นกกระทามาต้ม in น้ำพุร้อนธรรมชาติ 80 องศา อร่อยกลมกล่อมเป็นเอกลักษณ์",
        maxInfoFr: "Une merveilleuse harmonie entre source d'eau chaude naturelle et cascade fraîche.",
        maxInfoTh: "แหล่งท่องเที่ยวทางธรรมชาติระดับท็อปที่ผสมผสานน้ำพุร้อนและน้ำตกเย็นฉ่ำไว้อย่างลงตัว"
      },
      {
        placeName: "Phitsanulok (Wat Phra Si Rattana Mahathat)",
        category: "Lodging",
        notesFr: "Halte historique majeure au bord de la rivière Nan",
        notesTh: "แวะนอนพิษณุโลก นมัสการพระพุทธชินราชคู่บ้านคู่เมืองริมแม่น้ำน่าน",
        lat: 16.8294,
        lng: 100.2625,
        budgetPerNight: 500,
        detailedTipsFr: "Admirez le magnifique Bouddha doré Phra Phuttha Chinnarat, l'un des plus vénérés de Thaïlande.",
        detailedTipsTh: "สักการะพระพุทธชินราช พระพุทธรูปหล่อด้วยทองสัมฤทธิ์ที่มีพุทธลักษณะงดงามที่สุดในประเทศ",
        maxInfoFr: "Une ville historique calme et authentique, idéale pour couper la route du Nord.",
        maxInfoTh: "เมืองสองแควศูนย์กลางอารยธรรมโบราณริมแม่น้ำน่านที่เปี่ยมด้วยความสงบร่มรื่น"
      },
      {
        placeName: "Nakhon Sawan (Bueng Boraphet)",
        category: "Lodging",
        notesFr: "Halte confort à Nakhon Sawan",
        notesTh: "แวะพักผ่อนนครสวรรค์ ชมบึงบอระเพ็ดและชมอุโมงค์สัตว์น้ำบึงบอระเพ็ด",
        lat: 15.7058,
        lng: 100.1246,
        budgetPerNight: 400,
        detailedTipsFr: "Faites un tour de bateau sur le plus grand marais d'eau douce pour observer les lotus sauvages et oiseaux migrateurs.",
        detailedTipsTh: "แนะนำให้นั่งเรือชมบัวแดงนับพันดอกและฝูงนกน้ำนานาชนิดตามธรรมชาติรอบบึงบอระเพ็ด",
        maxInfoFr: "La porte d'accès au Nord, célèbre pour ses nénuphars et sa faune ornithologique.",
        maxInfoTh: "ดินแดนแห่งปากน้ำโพ แหล่งกำเนิดแม่น้ำเจ้าพระยาและบึงบอระเพ็ดแสนสงบ"
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
        placeName: "Chaiyaphum (Tat Ton National Park)",
        category: "Camping",
        notesFr: "Bivouac au milieu des cascades sauvages",
        notesTh: "กางเต็นท์อุทยานแห่งชาติตาดโตน ชื่นชมน้ำตกตาดโตนแสนเย็นสบาย",
        lat: 15.9811,
        lng: 102.0334,
        budgetPerNight: 100,
        detailedTipsFr: "Idéal pour camper dans la forêt et écouter le bruit de la grande cascade de Tat Ton.",
        detailedTipsTh: "น้ำตกตาดโตนมีน้ำไหลตลอดปี กางเต็นท์ท่ามกลางไม้ใหญ่อันร่มรื่นและปลอดภัยมาก",
        maxInfoFr: "Un parc naturel splendide réputé pour ses cascades d'eau pure et ses forêts verdoyantes.",
        maxInfoTh: "อุทยานแห่งชาติทางตอนเหนือของชัยภูมิที่มีธรรมชาติที่สวยงามเงียบสงบ"
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
        notesTh: "กางเต็นท์อุทยานแห่งชาติน้ำหนาว อากาศเย็นฉ่ำใต้หมู่ดาวนับล้าน",
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
        placeName: "Nakhon Sawan (Bueng Boraphet)",
        category: "Lodging",
        notesFr: "Halte confort à Nakhon Sawan",
        notesTh: "แวะพักผ่อนนครสวรรค์ ชมบึงบอระเพ็ดและชมอุโมงค์สัตว์น้ำบึงบอระเพ็ด",
        lat: 15.7058,
        lng: 100.1246,
        budgetPerNight: 400,
        detailedTipsFr: "Faites un tour de bateau sur le plus grand marais d'eau douce pour observer les lotus sauvages et oiseaux migrateurs.",
        detailedTipsTh: "แนะนำให้นั่งเรือชมบัวแดงนับพันดอกและฝูงนกน้ำนานาชนิดตามธรรมชาติรอบบึงบอระเพ็ด",
        maxInfoFr: "La porte d'accès au Nord, célèbre pour ses nénuphars et sa faune ornithologique.",
        maxInfoTh: "ดินแดนแห่งปากน้ำโพ แหล่งกำเนิดแม่น้ำเจ้าพระยาและบึงบอระเพ็ดแสนสงบ"
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
        detailedTipsFr: "Emportez du matériel étanche et des sacs étanches pour vos appareils photo.",
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
        placeName: "Chumphon (Thung Wua Laen Beach)",
        category: "Lodging",
        notesFr: "Escale côtière sur les plages de sable blanc de Chumphon",
        notesTh: "พักผ่อนริมหาดทุ่งวัวแล่น ชุมพร สวรรค์หาดทรายขาวละเอียดแสนสงบ",
        lat: 10.5634,
        lng: 99.2731,
        budgetPerNight: 500,
        detailedTipsFr: "Une plage magique réputée pour ses fruits de mer frais cuisinés sur la plage et son coucher de soleil somptueux.",
        detailedTipsTh: "ลองลิ้มรสหมึกย่างน้ำจิ้มซีฟู้ดรสเผ็ดร้อน และเดินเล่นรับลมโชยบนทรายขาวนุ่มเท้ายามพลบค่ำ",
        maxInfoFr: "Le paradis préservé du Sud côtier, berceau des récifs coralliens protégés.",
        maxInfoTh: "ประตูสู่ภาคใต้ที่มีแนวชายหาดยาว ทะเลน้ำตื้นคลื่นสงบสำหรับครอบครัว"
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
        placeName: "Chumphon (Thung Wua Laen Return)",
        category: "Lodging",
        notesFr: "Halte de retour confortable à Chumphon",
        notesTh: "แวะพักค้างคืนที่ชุมพรฝั่งขากลับ ชิมสตรีทฟู้ดปักษ์ใต้แท้ๆ",
        lat: 10.5634,
        lng: 99.2731,
        budgetPerNight: 500,
        detailedTipsFr: "Idéal pour rompre la longue route de retour depuis la côte d'Andaman vers le golfe de Thaïlande.",
        detailedTipsTh: "แวะนอนเพื่อเซฟร่างกายก่อนจะยิงยาวขากลับ แนะนำลองแกงส้มปักษ์ใต้รสเข้มข้นจัดจ้าน",
        maxInfoFr: "Une ville paisible réputée pour sa cuisine locale authentique.",
        maxInfoTh: "จุดแวะพักครึ่งทางของขาล่องใต้-กรุงเทพฯ ที่ดีที่สุดริมหาดแสนรัก"
      },
      {
        placeName: "Hua Hin Night Market",
        category: "Lodging",
        notesFr: "Nuit confortable à Hua Hin avant le retour",
        notesTh: "พักผ่อนหัวหิน ตะลุยชิมซีฟู้ดริมทะเลและเดินเที่ยวตลาดโต้รุ่งหัวหิน",
        lat: 12.5684,
        lng: 99.9576,
        budgetPerNight: 800,
        detailedTipsFr: "Délicieux repas final de crustacés grillés face à l'océan.",
        detailedTipsTh: "ฉลองมื้อค่ำก่อนสิ้นสุดทริปด้วยอาหารทะเลปิ้งย่างสดใหม่ที่ตลาดโต้รุ่งชื่อดัง",
        maxInfoFr: "La station balnéaire historique favorite pour clore le voyage de la péninsule.",
        maxInfoTh: "เมืองตากอากาศชายทะเลสุดชิคที่เป็นจุดเชื่อมความอุ่นใจก่อนถึงกรุงเทพฯ"
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
        placeName: "Thong Pha Phum Town",
        category: "Lodging",
        notesFr: "Halte au pied des montagnes de l'Ouest",
        notesTh: "แวะพักเมืองทองผาภูมิ ผ่อนคลายร่างกายก่อนขึ้นเขาสูงชัน",
        lat: 14.7411,
        lng: 98.6421,
        budgetPerNight: 500,
        detailedTipsFr: "Une étape parfaite pour vérifier la pression des pneus et faire le plein d'essence avant d'entamer les routes de montagne.",
        detailedTipsTh: "แวะพักนอนเติมพลังและตรวจสอบเครื่องยนต์ระดับน้ำมันก่อนไต่เส้นทางคดเคี้ยวพังพอนปิล๊อก",
        maxInfoFr: "Un adorable petit bourg de montagne traversé par la rivière Kwai Noi.",
        maxInfoTh: "เมืองเล็กแสนสงบริมแม่น้ำแควน้อยที่เต็มไปด้วยอากาศบริสุทธิ์และป่าไม้หนาทึบ"
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
        placeName: "Kanchanaburi Town (River Kwai)",
        category: "Lodging",
        notesFr: "Halte historique près du pont de la rivière Kwai",
        notesTh: "พักผ่อนเมืองกาญจนบุรี ย้อนรอยประวัติศาสตร์สะพานข้ามแม่น้ำแคว",
        lat: 14.0411,
        lng: 99.5034,
        budgetPerNight: 600,
        detailedTipsFr: "Profitez d'un dîner au bord de l'eau en admirant le célèbre pont historique illuminé le soir.",
        detailedTipsTh: "เดินถ่ายรูปบนสะพานรถไฟสายมรณะโบราณ และลิ้มรสแกงป่ารสเด็ดในร้านอาหารริมน้ำ",
        maxInfoFr: "La cité historique majeure de l'Ouest, riche en émotions et en paysages fluviaux.",
        maxInfoTh: "เมืองประวัติศาสตร์และแหล่งท่องเที่ยวเชิงอนุรักษ์ระดับโลกที่ใครๆ ก็ต้องหลงรัก"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Fin de l'itinéraire de l'Ouest sauvage, retour",
        notesTh: "เดินทางกลับกรุงเทพฯ คืนรถเช่า และนวดแผนโบราณสลายปวดเมื่อยหลังขับรถ",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Profitez d'un dernier massage thaï traditionnel pour détendre vos muscles fatigués par la route.",
        detailedTipsTh: "จบทริปตะวันตกแสนสุขใจด้วยการนวดเท้าผ่อนคลายและเก็บภาพความทรงจำที่สวยงามเต็มกระเป๋า",
        maxInfoFr: "Fin de votre fantastique aventure fluviale et historique.",
        maxInfoTh: "ปิดฉากการเดินทางย้อนประวัติศาสตร์ป่าตะวันตกและขุนเขาปิล๊อกแสนวิเศษ"
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
        placeName: "Lopburi (Monkey Temple)",
        category: "Lodging",
        notesFr: "Halte historique à la cité des singes de Lopburi",
        notesTh: "พักผ่อนลพบุรี ย้อนรอยประวัติศาสตร์นารายณ์ราชนิเวศน์และฝูงลิงแสนซน",
        lat: 14.7972,
        lng: 100.6534,
        budgetPerNight: 500,
        detailedTipsFr: "Faites attention à vos affaires près du Phra Prang Sam Yod, car les singes adorent les objets brillants et la nourriture.",
        detailedTipsTh: "ระมัดระวังแว่นตา กล้องถ่ายรูป และสัมภาระต่างๆ ขณะเข้าชมโบราณสถานสามยอดเนื่องจากลิงเยอะและว่องไวมาก",
        maxInfoFr: "Une ancienne cité khmère puis capitale secondaire sous le règne du roi Narai au 17ème siècle.",
        maxInfoTh: "เมืองประวัติศาสตร์เก่าแก่ที่มีหลักฐานศิลปะทวารวดี ขอม ละโว้ จนถึงอยุธยา"
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
        detailedTipsFr: "Louez un vélo pour explorer la rue piétonne en bois et dégustez des brochettes de crevettes du Mékong.",
        detailedTipsTh: "เช่าจักรยานปั่นเลียบตลิ่งแม่น้ำโขงชมอาทิตย์ลับทิวเขาลาว และเดินถนนคนเดินเชียงคานช่วงเย็น",
        maxInfoFr: "Une bourgade historique réputée pour ses coutumes bouddhistes et ses sourires.",
        maxInfoTh: "ชุมชนริมน้ำวัฒนธรรมอีสาน-ล้านนาที่เปี่ยมด้วยความเป็นมิตรและเรียบง่าย"
      },
      {
        placeName: "Nong Khai (Mekong Promenade)",
        category: "Lodging",
        notesFr: "Escale relaxante le long de la promenade du Mékong",
        notesTh: "พักผ่อนริมโขงหนองคาย เดินเล่นชมสะพานมิตรภาพไทย-ลาว",
        lat: 17.8785,
        lng: 102.7420,
        budgetPerNight: 600,
        detailedTipsFr: "Ne manquez pas le curieux parc de sculptures mystiques de Sala Keoku et ses statues monumentales.",
        detailedTipsTh: "เที่ยวชมศาลาแก้วกู่ สวนประติมากรรมคอนกรีตขนาดมหึมาแฝงแนวคิดทางศาสนาและปรัชญาชวนทึ่ง",
        maxInfoFr: "Une cité frontalière chaleureuse offrant une vue imprenable sur le fleuve majestueux.",
        maxInfoTh: "จังหวัดท่องเที่ยวริมฝั่งแม่น้ำโขงที่มีวัฒนธรรมงดงามและอาหารท้องถิ่นรสชาติดี"
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
        placeName: "Nong Khai (Mekong Return)",
        category: "Lodging",
        notesFr: "Halte de retour sur la rive du Mékong",
        notesTh: "แวะนอนผ่อนคลายที่หนองคาย ชิมแหนมเนืองต้นตำรับ",
        lat: 17.8785,
        lng: 102.7420,
        budgetPerNight: 600,
        detailedTipsFr: "Idéal pour déguster le célèbre Daeng Namnuang traditionnel et se détendre avant les étapes de montagne.",
        detailedTipsTh: "ลิ้มลองแดงแหนมเนืองเจ้าดังแสนอร่อย เดินเล่นริมเขื่อนโขงรับลมเย็นๆ สลายความเมื่อยล้า",
        maxInfoFr: "Une halte commode et paisible sur le trajet de retour vers l'Ouest.",
        maxInfoTh: "เมืองริมโขng แสนสงบที่เหมาะแก่การแวะพักสะสมพลังงานสำรอง"
      },
      {
        placeName: "Dan Sai (Loei)",
        category: "Lodging",
        notesFr: "Halte culturelle au pays du festival Phi Ta Khon",
        notesTh: "พักผ่อนด่านซ้าย เลย เยี่ยมเยือนพิพิธภัณฑ์ผีตาโขนอันลือชื่อ",
        lat: 17.2713,
        lng: 101.1478,
        budgetPerNight: 500,
        detailedTipsFr: "Visitez le Wat Neramit Wipatsana, un magnifique temple en latérite rouge et son jardin zen.",
        detailedTipsTh: "เข้ากราบสักการะพระธาตุศรีสองรักและชมวัดเนรมิตวิปัสสนา วัดศิลาแลงโบราณอันเงียบสงบ",
        maxInfoFr: "Une paisible vallée montagneuse imprégnée de légendes et de traditions colorées.",
        maxInfoTh: "เมืองเล็กกลางหุบเขาดินแดนสัจจะและไมตรี แหล่งกำเนิดเทศกาลหน้ากากผีตาโขนดั้งเดิม"
      },
      {
        placeName: "Phrae (Old Town Teak Mansion)",
        category: "Lodging",
        notesFr: "Nuit dans la cité authentique du teck de Phrae",
        notesTh: "พักผ่อนเมืองแพร่ ชมคุ้มเจ้าหลวงและบ้านขนมปังขิงเรือนไม้สักโบราณ",
        lat: 18.1444,
        lng: 100.1417,
        budgetPerNight: 500,
        detailedTipsFr: "Explorez la majestueuse maison en teck de Khum Vongburi et admirez ses fines dentelles de bois roses.",
        detailedTipsTh: "แวะชมคุ้มวงศ์บุรี อาคารไม้สักสีชมพูสไตล์ล้านนาผสมยุโรปที่มีลวดลายฉลุไม้อ่อนช้อยงดงามตา",
        maxInfoFr: "L'une des plus anciennes cités du Nord de la Thaïlande, restée à l'écart du tourisme de masse.",
        maxInfoTh: "เมืองทางผ่านมรดกป่าไม้สักทองสยามที่รักษารากเหง้าสถาปัตยกรรมแป้นเกล็ดไว้สมบูรณ์"
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
        placeName: "Phrae (Return Escale)",
        category: "Lodging",
        notesFr: "Escale de retour confortable à Phrae",
        notesTh: "แวะพักค้างคืนที่แพร่ขากลับ เติมพลังร้านกาแฟใต้ต้นไม้ใหญ่",
        lat: 18.1444,
        lng: 100.1417,
        budgetPerNight: 500,
        detailedTipsFr: "Une étape pratique pour casser la longue descente des montagnes de Nan.",
        detailedTipsTh: "นอนพักผ่อนเซฟหัวใจและสายตาจากการขับรถขึ้นลงทางคดเคี้ยว ชิมข้าวกั้นจิ้นอาหารเหนือพื้นเมืองแท้ๆ",
        maxInfoFr: "Une charmante cité offrant des haltes calmes et bon marché.",
        maxInfoTh: "เมืองไม้สักแสนอบอุ่นที่เป็นรอยเชื่อมต่อระหว่างภูเขาน่านและที่ราบภาคกลาง"
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
        maxInfoTh: "ลานหินปุ่มและประวัติศาสตร์การเมืองโบราณ คลุมด้วยมอสและเฟิร์นเขียวขจีตลอดปี"
      },
      {
        placeName: "Nakhon Sawan",
        category: "Lodging",
        notesFr: "Halte historique au confluent du fleuve Chao Phraya",
        notesTh: "พักผ่อนนครสวรรค์ ชมต้นกำเนิดแม่น้ำเจ้าพระยาที่สองสีสบกัน",
        lat: 15.7000,
        lng: 100.1167,
        budgetPerNight: 550,
        detailedTipsFr: "Allez admirer la spectaculaire pagode d'or de Wat Khiriwong nichée au sommet de la colline offrant une vue à 360° sur la ville.",
        detailedTipsTh: "กราบไหว้พระจุฬามณีเจดีย์บนยอดเขาคีรีวงศ์ ส่องวิวเมืองปากน้ำโพและลำน้ำสองสีที่ตัดกันงดงาม",
        maxInfoFr: "La porte du Nord, là où les rivières Ping, Wang, Yom et Nan s'unissent pour donner naissance à la Chao Phraya.",
        maxInfoTh: "เมืองสี่แควปากน้ำโพ ชุมชนการค้าโบราณที่มีสีสันวัฒนธรรมจีนผสมผสานอย่างงดงาม"
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
        placeName: "Nakhon Sawan (Chao Phraya Source)",
        category: "Lodging",
        notesFr: "Halte relaxante au confluent des rivières",
        notesTh: "แวะนอนนครสวรรค์ ชมจุดกำเนิดแม่น้ำสายหลักของสยามประเทศ",
        lat: 15.7000,
        lng: 100.1167,
        budgetPerNight: 500,
        detailedTipsFr: "Profitez-en pour déguster les excellents desserts locaux traditionnels aux haricots mungo.",
        detailedTipsTh: "ลองชิมโมจินครสวรรค์และลูกชิ้นปลากรายของดีเมืองปากน้ำโพแสนเหนียวนุ่มรสอร่อยเลิศ",
        maxInfoFr: "La porte fluviale d'accès au Nord, parfaite pour se reposer sans conduire de longues heures.",
        maxInfoTh: "เมืองปากน้ำโพจุดแบ่งแม่น้ำสี่สาย ปิง วัง ยม น่าน มารวมกันเป็นแม่น้ำเจ้าพระยา"
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
        placeName: "Suphan Buri Town (Wat Pa Lelai)",
        category: "Lodging",
        notesFr: "Halte culturelle dans les plaines de Suphan Buri",
        notesTh: "พักผ่อนเมืองสุพรรณบุรี นมัสการหลวงพ่อโตวัดป่าเลไลยก์ชื่อดัง",
        lat: 14.4744,
        lng: 100.1167,
        budgetPerNight: 500,
        detailedTipsFr: "Explorez la rue piétonne du vieux marché centenaire de Sam Chuk pour déguster des en-cas ancestraux délicieux.",
        detailedTipsTh: "แวะเดินเล่นตลาดสามชุกร้อยปี ย้อนอดีตบรรยากาศห้องแถวไม้ดั้งเดิมและชิมลูกชิ้นยักษ์แสนเลื่องชื่อ",
        maxInfoFr: "Une cité riche d'art, de musique traditionnelle et d'histoire littéraire légendaire.",
        maxInfoTh: "เมืองอู่ข้าวอู่น้ำภาคกลางที่มีวัดเก่าแก่อันเป็นต้นกำเนidวรรณคดีขุนช้างขุนแผน"
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
    descTh: "Snack-bar d'autoroute d'antan, lèche-doigt de rue à Chinatown, dégustation de crevettes de rivière et d'épices côtières.",
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
        detailedTipsTh: "เริ่มออกเดินทาง from สมุทรสาคร แนะนำให้ลองชิมแกงคั่วส้มไข่ริวกิวหรืออาหารทะเลสดจากประมงชายฝั่ง",
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
        placeName: "Phetchaburi Town (Local Desserts)",
        category: "Lodging",
        notesFr: "Halte gourmande au pays des desserts artisanaux",
        notesTh: "แวะเมืองเพชรบุรี ชิมขนมหม้อแกงไข่ทองคำสูตรดั้งเดิมหวานมันเข้มข้น",
        lat: 13.1111,
        lng: 99.9411,
        budgetPerNight: 500,
        detailedTipsFr: "Goutez au célèbre Khanom Mo Gaeng traditionnel au sucre de palme sauvage et gousses de tamarin frit.",
        detailedTipsTh: "เลือกซื้อขนมหม้อแกงเผือก ทองหยิบ ทองหยอด เม็ดขนุน คุ้มค่าและรสชาติเข้มข้นนุ่มนวลจากกะทิสดแท้ๆ",
        maxInfoFr: "La capitale nationale des confiseries thaïes traditionnelles cuisinées au sucre de palme pur.",
        maxInfoTh: "สวรรค์แห่งขนมหวานโบราณ แหล่งวัตถุดิบน้ำตาลโตนดชั้นเยี่ยมประวัติศาสตร์"
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
        placeName: "Amphawa Riverside (Samut Songkhram)",
        category: "Lodging",
        notesFr: "Escale spirituelle au bord des canaux paisibles d'Amphawa",
        notesTh: "แวะนอนอัมพวา พักฟื้นสมาธิท่ามกลางสายน้ำและวัดเก่าริมคลองอันเงียบสงบ",
        lat: 13.4144,
        lng: 100.0034,
        budgetPerNight: 500,
        detailedTipsFr: "Profitez de cette escale paisible pour faire l'aumône aux moines itinérants qui rament le long des canaux le matin.",
        detailedTipsTh: "ตื่นเช้าทำบุญตักบาตรริมท่าน้ำกับพระสงฆ์ที่พายเรือบิณฑบาต สัมผัสวิถีพุทธดั้งเดิมแสนอบอุ่นใจ",
        maxInfoFr: "Un sanctuaire de paix au bord de l'eau, idéal pour conserver son état d'esprit calme et détendu.",
        maxInfoTh: "ชุมชนริมคลองที่มีรอยต่อธรรมชาติอันสมบูรณ์ เหมาะแก่การนั่งทำสมาธิพักกายใจ"
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
        placeName: "Bang Khla Town (Mangoes & River)",
        category: "Lodging",
        notesFr: "Escale paisible le long de la rivière Bang Pakong",
        notesTh: "แวะพักบางคล้า ฉะเชิงเทรา ชิมมะม่วงน้ำดอกไม้แสนอร่อยและชมวัดโพธิ์บางคล้าค้างคาวแม่ไก่ยักษ์",
        lat: 13.7225,
        lng: 101.2081,
        budgetPerNight: 500,
        detailedTipsFr: "Prenez un petit bateau pour observer les milliers de chauves-souris géantes (renards volants) suspendues aux arbres centenaires du temple Wat Pho Bang Khla.",
        detailedTipsTh: "เช่าเรือล่องชมทัศนียภาพรอบเกาะลัด ชมค้างคาวแม่ไก่ตัวโตเกาะเต็มต้นไม้ใหญ่อายุหลายร้อยปีที่วัดโพธิ์บางคล้าอย่างอัศจรรย์",
        maxInfoFr: "Un charmant village fluvial connu pour ses mangues de renommée mondiale et son atmosphère surannée.",
        maxInfoTh: "เมืองเกษตรกรรมและริมแม่น้ำบางปะกงอันเงียบสงบ แหล่งผลิตมะม่วงส่งออกระดับพรีเมียมของประเทศ"
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

function getLocalHaversineDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  if (!lat1 || !lng1 || !lat2 || !lng2) return 0;
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function getLocalDrivingHours(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const geoDist = getLocalHaversineDistance(lat1, lng1, lat2, lng2);
  if (geoDist === 0) return 0;
  const roadKm = Math.round(geoDist * 1.3);
  const minutes = Math.round((roadKm / 75) * 60);
  return parseFloat((minutes / 60).toFixed(1));
}

function getDynamicRelayStep(lat1: number, lng1: number, lat2: number, lng2: number, lang: 'fr' | 'th') {
  const midLat = (lat1 + lat2) / 2;
  const midLng = (lng1 + lng2) / 2;
  
  let nameFr = "Escale de Sécurité (Relais)";
  let nameTh = "จุดแวะพักระหว่างทาง (เพื่อความปลอดภัย)";
  let descFr = "Une halte agréable pour couper le trajet de conduite et se reposer conformément à notre charte de sécurité (Maximum 3h de route par jour).";
  let descTh = "จุดแวะพักที่จัดเตรียมขึ้นตามเกณฑ์ความปลอดภัยเพื่อลดความเหนื่อยล้าในการขับขี่ (ขับรถไม่เกิน 3 ชั่วโมงต่อวัน)";
  let detailedTipsFr = "Profitez-en pour vous étirer, faire le plein d'essence et déguster des fruits frais locaux.";
  let detailedTipsTh = "จอดพักยืดเส้นยืดสาย เติมน้ำมันให้เต็มถัง และเพลิดเพลินกับอาหารท้องถิ่นรสเลิศ";
  let maxInfoFr = "Une étape indispensable pour garantir votre confort et votre sécurité sur la route.";
  let maxInfoTh = "จุดพักรถและแคมป์ปิ้งที่ปลอดภัยตามมาตรฐานสากลเพื่อสุขอนามัยที่ดีในการเดินทาง";

  if (midLat > 18.2) {
    nameFr = "Phrae - Escale de Sécurité";
    nameTh = "จังหวัดแพร่ - จุดแวะพักเพื่อความปลอดภัย";
    descFr = "Halte charmante dans la province de Phrae pour savourer un café local et diviser le temps de conduite de moitié.";
    descTh = "จุดแวะพักผ่อนจิบกาแฟในจังหวัดแพร่ เพื่อแบ่งครึ่งระยะเวลาการขับรถและพักผ่อนร่างกาย";
  } else if (midLat > 16.5) {
    nameFr = "Phitsanulok - Escale Historique";
    nameTh = "จังหวัดพิษณุโลก - จุดแวะพักประวัติศาสตร์";
    descFr = "Visitez le magnifique temple Wat Phra Si Rattana Mahathat au bord de la rivière Nan pour couper votre trajet.";
    descTh = "แวะไหว้พระพุทธชินราชวัดพระศรีรัตนมหาธาตุวรมหาวิหารริมแม่น้ำน่าน ช่วยพักผ่อนลดความเหนื่อยล้า";
  } else if (midLat > 14.8) {
    nameFr = "Nakhon Sawan - Relais Confluent";
    nameTh = "จังหวัดนครสวรรค์ - จุดแวะพักปากน้ำโพ";
    descFr = "Faites une halte relaxante au confluent des rivières Ping et Nan formant le fleuve Chao Phraya.";
    descTh = "จุดพักผ่อนชมต้นกำเนิดแม่น้ำเจ้าพระยาปากน้ำโพนครสวรรค์ พักกายพักสมองก่อนลุยต่อ";
  } else if (midLat < 12.0 && midLat > 9.5) {
    nameFr = "Chumphon - Escale du Littoral";
    nameTh = "จังหวัดชุมพร - จุดแวะพักริมหาด";
    descFr = "Halte côtière rafraîchissante pour diviser la longue route du Sud vers les plages turquoises.";
    descTh = "จุดพักผ่อนเลาะริมชายหาดชุมพร ช่วยแบ่งครึ่งเส้นทางขับรถล่องใต้ที่แสนยาวไกลให้ผ่อนคลายขึ้น";
  } else if (midLat <= 9.5) {
    nameFr = "Surat Thani - Relais du Sud";
    nameTh = "จังหวัดสุราษฎร์ธานี - จุดแวะพักภาคใต้";
    descFr = "Une halte paisible dans la province de Surat Thani pour déguster d'excellents fruits tropicaux frais.";
    descTh = "จุดแวะพักผ่อนในจังหวัดสุราษฎร์ธานี ลิ้มลองผลไม้เมืองใต้แสนอร่อยเพื่อเติมพลังก่อนเดินทาง";
  }

  return {
    placeName: nameFr,
    category: "Lodging" as CategoryType,
    notesFr: descFr,
    notesTh: descTh,
    lat: midLat,
    lng: midLng,
    budgetPerNight: 400,
    detailedTipsFr,
    detailedTipsTh,
    maxInfoFr,
    maxInfoTh
  };
}

export function generatePresetItinerary(
  routeId: string,
  durationWeeks: 2 | 4 | 6,
  lang: 'fr' | 'th'
): { items: ItineraryItem[]; title: string; description: string } {
  const template = ROUTE_TEMPLATES.find(r => r.id === routeId) || ROUTE_TEMPLATES[0];
  const totalDays = durationWeeks * 7;
  const rawSteps = template.steps;

  // We initially select step indices based on target weeks
  const initialIndices: number[] = [0];
  const midCount = rawSteps.length - 2;

  if (durationWeeks === 2) {
    // Propose up to 3 intermediate indices
    if (midCount > 0) {
      const idx1 = 1;
      const idx3 = rawSteps.length - 2;
      const idx2 = Math.floor(rawSteps.length / 2);
      const mids = Array.from(new Set([idx1, idx2, idx3])).sort((a, b) => a - b);
      initialIndices.push(...mids);
    }
  } else if (durationWeeks === 4) {
    // Propose up to 5 intermediate indices
    if (midCount > 0) {
      if (midCount <= 5) {
        for (let i = 1; i <= midCount; i++) {
          initialIndices.push(i);
        }
      } else {
        for (let i = 0; i < 5; i++) {
          const idx = 1 + Math.floor((i / 4) * (midCount - 1));
          initialIndices.push(idx);
        }
      }
    }
  } else {
    // 6 weeks: keep all intermediate steps
    for (let i = 1; i < rawSteps.length - 1; i++) {
      initialIndices.push(i);
    }
  }

  // Ensure last step index is included
  if (!initialIndices.includes(rawSteps.length - 1)) {
    initialIndices.push(rawSteps.length - 1);
  }

  // Unique and sorted indices
  const selectedIndices = Array.from(new Set(initialIndices)).sort((a, b) => a - b);

  // Dynamic Safety Filter: If any consecutive steps have > 3.0h of driving,
  // we must insert their bypassed intermediate steps from the template to act as relays!
  let idx = 0;
  while (idx < selectedIndices.length - 1) {
    const idxA = selectedIndices[idx];
    const idxB = selectedIndices[idx + 1];
    const stepA = rawSteps[idxA];
    const stepB = rawSteps[idxB];

    const hours = getLocalDrivingHours(stepA.lat, stepA.lng, stepB.lat, stepB.lng);

    if (hours > 3.0 && idxB - idxA > 1) {
      // Find the middle index to split the long driving leg
      const midIdx = Math.floor((idxA + idxB) / 2);
      selectedIndices.splice(idx + 1, 0, midIdx);
      // Recheck from current index to ensure the first half is also safe
    } else {
      idx++;
    }
  }

  // Construct initial list of raw steps
  let finalSteps = selectedIndices.map(index => ({ ...rawSteps[index] }));

  // Second level filter: If ANY consecutive steps in finalSteps STILL have > 3.0h of driving
  // (e.g. consecutive steps in the template itself), we inject a dynamic geographic relay stop!
  let fIdx = 0;
  while (fIdx < finalSteps.length - 1) {
    const stepA = finalSteps[fIdx];
    const stepB = finalSteps[fIdx + 1];
    const hours = getLocalDrivingHours(stepA.lat, stepA.lng, stepB.lat, stepB.lng);

    if (hours > 3.0) {
      const relay = getDynamicRelayStep(stepA.lat, stepA.lng, stepB.lat, stepB.lng, lang);
      finalSteps.splice(fIdx + 1, 0, {
        placeName: relay.placeName,
        category: relay.category,
        notesFr: relay.notesFr,
        notesTh: relay.notesTh,
        lat: relay.lat,
        lng: relay.lng,
        budgetPerNight: relay.budgetPerNight,
        detailedTipsFr: relay.detailedTipsFr,
        detailedTipsTh: relay.detailedTipsTh,
        maxInfoFr: relay.maxInfoFr,
        maxInfoTh: relay.maxInfoTh
      });
      // Do not increment fIdx to recheck the new link (stepA -> relay)
    } else {
      fIdx++;
    }
  }

  const items: ItineraryItem[] = [];
  const stepCount = finalSteps.length;

  for (let i = 0; i < stepCount; i++) {
    const step = finalSteps[i];

    // Day calculation linearly distributed
    let calculatedDay = 1;
    if (i === 0) {
      calculatedDay = 1;
    } else if (i === stepCount - 1) {
      calculatedDay = totalDays;
    } else {
      const dayProgress = stepCount > 2 ? (i - 1) / (stepCount - 2) : 0.5;
      const minDay = 4;
      const maxDay = totalDays - 4;
      calculatedDay = Math.round(minDay + dayProgress * (maxDay - minDay));
    }

    // Estimate stay duration based on gap or preset weeks
    const calculatedNights: number = durationWeeks === 2 ? 2 : durationWeeks === 4 ? 4 : 5;
    const durString = calculatedNights === 1 
      ? (lang === 'fr' ? "1 nuit" : "1 คืน")
      : (lang === 'fr' ? `${calculatedNights} nuits` : `${calculatedNights} คืน`);

    const isStart = i === 0;
    const isEnd = i === stepCount - 1;

    let itemDuration = "";
    if (isStart || isEnd) {
      itemDuration = lang === 'fr' ? "1 nuit" : "1 คืน";
    } else {
      itemDuration = step.category === 'Attraction' || step.category === 'Activity' || step.category === 'Restaurant' 
        ? (lang === 'fr' ? "1 journée" : "1 วัน") 
        : durString;
    }

    const itemBudget = isStart || isEnd 
      ? step.budgetPerNight 
      : step.budgetPerNight * calculatedNights;

    items.push({
      id: isStart ? `${routeId}-step-1` : isEnd ? `${routeId}-step-end` : `${routeId}-step-mid-${i}`,
      placeName: step.placeName,
      day: calculatedDay,
      category: step.category,
      notes: lang === 'fr' ? step.notesFr : step.notesTh,
      lat: step.lat,
      lng: step.lng,
      duration: itemDuration,
      budget: itemBudget || undefined,
      detailedTips: lang === 'fr' ? step.detailedTipsFr : step.detailedTipsTh,
      maxInfo: lang === 'fr' ? step.maxInfoFr : step.maxInfoTh
    });
  }

  // Sort items by day
  items.sort((a, b) => a.day - b.day);

  const routeName = lang === 'fr' ? template.nameFr : template.nameTh;
  const durationText = lang === 'fr' ? `${durationWeeks} semaines` : `${durationWeeks} สัปดาห์`;

  return {
    items,
    title: `${routeName} - ${durationText}`,
    description: lang === 'fr' 
      ? `${template.descFr} (Itinéraire de ${durationWeeks} semaines optimisé au départ de Samut Sakhon).`
      : `${template.descTh} (เส้นทางที่แนะนำ ${durationWeeks} สัปดาห์ เริ่มต้นจากสมุทรสาคร)`
  };
}
