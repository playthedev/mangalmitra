import type { WisdomEntry, OccasionInfo, PujaGuide } from "@/types";
import { PRODUCTS } from "./catalog-data";

export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.isFeatured);

export const DAILY_WISDOM_ENTRIES: WisdomEntry[] = [
  {
    id: "w1",
    type: "gita_verse",
    title: "Bhagavad Gita — Chapter 2, Verse 47",
    content: {
      sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
      meaning:
        "You have the right to perform your duty, but never to the fruits of your actions.",
    },
  },
  {
    id: "w2",
    type: "affirmation",
    content: {
      text: "May today's actions bring peace, wisdom, and prosperity.",
    },
  },
  {
    id: "w3",
    type: "myth_vs_fact",
    title: "Myth vs Fact: Ringing the Temple Bell",
    content: {
      myth: "The bell is rung only to announce your arrival to the deity.",
      fact: "The sound is believed to align the mind, clearing mental clutter before darshan.",
    },
  },
  {
    id: "w4",
    type: "scripture",
    title: "Upanishad Teaching",
    content: {
      sanskrit: "सत्यमेव जयते",
      meaning: "Truth alone triumphs — from the Mundaka Upanishad.",
    },
  },
  {
    id: "w5",
    type: "myth_vs_fact",
    title: "Myth vs Fact: Fasting on Ekadashi",
    content: {
      myth: "Fasting is only a religious restriction with no other purpose.",
      fact: "Ekadashi fasting is also linked to giving the digestive system rest, aligned with the lunar cycle.",
    },
  },
  {
    id: "w6",
    type: "quote",
    content: {
      text: "The lamp of knowledge dispels the darkness of ignorance.",
    },
  },
  {
    id: "w7",
    type: "affirmation",
    content: {
      text: "I release what I cannot control and trust the path ahead.",
    },
  },
  {
    id: "w8",
    type: "gita_verse",
    title: "Bhagavad Gita — Chapter 4, Verse 7",
    content: {
      sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।",
      meaning: "Whenever there is a decline in righteousness, O Bharata, I manifest myself.",
    },
  },
];

export function getTodaysWisdomEntry(): WisdomEntry {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000,
  );
  return DAILY_WISDOM_ENTRIES[dayOfYear % DAILY_WISDOM_ENTRIES.length];
}

// TODO: replace with real data from the PujaGuides module (M6) once built.
export const OCCASIONS: OccasionInfo[] = [
  {
    id: "housewarming",
    label: "Moving Into a New Home",
    description: "Griha Pravesh — bless a new house before you settle in.",
    icon: "🏠",
  },
  {
    id: "new-job-or-business",
    label: "New Job or Business",
    description: "Seek blessings for a fresh professional beginning.",
    icon: "💼",
  },
  {
    id: "marriage",
    label: "Marriage",
    description: "Rituals for engagement, wedding, and post-wedding blessings.",
    icon: "💍",
  },
  {
    id: "childbirth",
    label: "Childbirth & Naming",
    description: "Namkaran and welcoming a newborn into the family.",
    icon: "👶",
  },
  {
    id: "graha-shanti",
    label: "Planetary Distress (Graha Shanti)",
    description: "When you're going through a difficult phase and need remedies.",
    icon: "🪐",
  },
  {
    id: "ancestral-remembrance",
    label: "Ancestral Remembrance",
    description: "Shraddha and Pitru Paksha rites honoring ancestors.",
    icon: "🕯️",
  },
  {
    id: "festival",
    label: "Festivals",
    description: "Diwali, Navratri, Ganesh Chaturthi, and other festival pujas.",
    icon: "🎉",
  },
  {
    id: "new-vehicle",
    label: "New Vehicle",
    description: "A short puja before you drive a new vehicle for the first time.",
    icon: "🚗",
  },
  {
    id: "moving-in-together",
    label: "New Beginnings Together",
    description: "For couples or roommates starting a new chapter under one roof.",
    icon: "🤝",
  },
  {
    id: "general-wellbeing",
    label: "General Wellbeing & Gratitude",
    description: "No specific occasion — just seeking peace, health, or gratitude.",
    icon: "🙏",
  },
];

export const PUJA_GUIDES: PujaGuide[] = [
  {
    id: "p1",
    name: "Griha Pravesh Puja",
    slug: "griha-pravesh-puja",
    shortDescription: "The traditional housewarming ritual performed before moving into a new home.",
    occasions: ["housewarming", "moving-in-together"],
    duration: "1.5–2 hours",
    difficulty: "Moderate",
    whyThisPuja:
      "Griha Pravesh purifies a new home's energy and seeks blessings from Vastu Purush (the deity of the dwelling) before you begin living there. It's traditionally done before or shortly after moving in, on an auspicious date.",
    samagri: [
      { name: "Kalash with coconut", quantity: "1", productSlug: "copper-kalash-coconut" },
      { name: "Mango leaves", quantity: "1 bunch" },
      { name: "Turmeric & kumkum", quantity: "1 set" },
      { name: "Cotton wicks", quantity: "1 pack" },
      { name: "Ghee", quantity: "250g" },
      { name: "Havan samagri", quantity: "1 kit" },
      { name: "Brass diya", quantity: "2", productSlug: "brass-diya-set" },
    ],
    preparationSteps: [
      {
        title: "Choose an auspicious date",
        description: "Consult a panchang or priest for a Shubh Muhurat, ideally avoiding inauspicious periods.",
      },
      {
        title: "Clean the home",
        description: "Thoroughly clean the house, especially the entrance, before the ritual begins.",
      },
      {
        title: "Kalash Sthapana",
        description: "Place the kalash at the entrance and invoke the presiding deities.",
      },
      {
        title: "Havan (fire ritual)",
        description: "Perform havan in the main living area, offering samagri while chanting mantras.",
      },
      {
        title: "Boil milk to overflow",
        description: "Boil milk on the kitchen stove and let it overflow, symbolizing abundance, before cooking anything else.",
      },
    ],
    mantras: [
      {
        sanskrit: "ॐ वास्तोष्पते प्रति जानीह्यस्मान् स्वावेशो अनमीवो भवा नः।",
        transliteration: "Om Vastoshpate Prati Janihyasman Swavesho Animevo Bhava Nah",
        meaning: "O Lord of the dwelling, grant us a safe and peaceful home free of affliction.",
      },
    ],
  },
  {
    id: "p2",
    name: "Satyanarayan Puja",
    slug: "satyanarayan-puja",
    shortDescription: "A puja for prosperity and fulfillment of wishes, performed for many occasions.",
    occasions: ["general-wellbeing", "new-job-or-business", "housewarming", "festival"],
    duration: "2–3 hours",
    difficulty: "Elaborate — priest recommended",
    whyThisPuja:
      "Satyanarayan Puja is dedicated to Lord Vishnu in his form as Satyanarayan (the God of Truth). It's performed to seek prosperity and fulfillment of a wish, or simply out of gratitude, and can be done on any full moon or auspicious day.",
    samagri: [
      { name: "Panchamrit ingredients", quantity: "1 set" },
      { name: "Banana leaves", quantity: "5" },
      { name: "Betel nuts & leaves", quantity: "11 each" },
      { name: "Roli & chawal (rice)", quantity: "1 set" },
      { name: "Sacred thread (Kalava)", quantity: "1 roll" },
      { name: "Prasad ingredients (sooji halwa)", quantity: "1 kg" },
    ],
    preparationSteps: [
      { title: "Set up the altar", description: "Place a photo/idol of Satyanarayan on a raised platform with a red cloth." },
      { title: "Sankalp (intention)", description: "State your name, gotra, and intention for performing the puja." },
      { title: "Kalash puja", description: "Worship the kalash representing all deities." },
      { title: "Katha (story recitation)", description: "Listen to or recite the five chapters of the Satyanarayan Katha." },
      { title: "Aarti & prasad", description: "Perform aarti and distribute prasad to all present." },
    ],
    mantras: [
      {
        sanskrit: "ॐ नमो भगवते वासुदेवाय",
        transliteration: "Om Namo Bhagavate Vasudevaya",
        meaning: "Salutations to Lord Vasudeva (Vishnu), the all-pervading one.",
      },
    ],
  },
  {
    id: "p3",
    name: "Namkaran Sanskar",
    slug: "namkaran-sanskar",
    shortDescription: "The naming ceremony for a newborn, usually held on the 11th or 12th day after birth.",
    occasions: ["childbirth"],
    duration: "45–60 minutes",
    difficulty: "Simple",
    whyThisPuja:
      "Namkaran formally welcomes the baby into the family and community, and is one of the sixteen traditional Hindu sanskars (rites of passage). The name is often chosen based on the child's birth nakshatra.",
    samagri: [
      { name: "Honey", quantity: "small bowl" },
      { name: "Ghee", quantity: "small bowl" },
      { name: "New clothes for the baby", quantity: "1 set" },
      { name: "Betel leaves", quantity: "5" },
      { name: "Rice grains", quantity: "1 bowl" },
    ],
    preparationSteps: [
      { title: "Purify the space", description: "Clean and decorate the room where the ceremony will be held." },
      { title: "Invoke blessings", description: "The priest or elder chants mantras invoking blessings for the child." },
      { title: "Whisper the name", description: "The chosen name is whispered into the baby's right ear four times." },
      { title: "Family blessings", description: "Elders bless the baby and gifts are exchanged." },
    ],
    mantras: [
      {
        sanskrit: "ॐ आयुष्मान् भव",
        transliteration: "Om Ayushman Bhava",
        meaning: "May you be blessed with a long life.",
      },
    ],
  },
  {
    id: "p4",
    name: "Vahan Puja",
    slug: "vahan-puja",
    shortDescription: "A short puja to bless a new vehicle before its first drive.",
    occasions: ["new-vehicle"],
    duration: "20–30 minutes",
    difficulty: "Simple",
    whyThisPuja:
      "Vahan Puja seeks protection and safe travels for a new vehicle and its passengers, invoking Lord Ganesha to remove obstacles on the road ahead.",
    samagri: [
      { name: "Coconut", quantity: "1" },
      { name: "Lemons", quantity: "5" },
      { name: "Flower garland", quantity: "1" },
      { name: "Kumkum & rice", quantity: "1 set" },
      { name: "Camphor", quantity: "1 pack" },
    ],
    preparationSteps: [
      { title: "Clean the vehicle", description: "Wash the vehicle thoroughly before the ritual." },
      { title: "Apply tilak", description: "Apply kumkum tilak on the vehicle, especially near the number plate and steering." },
      { title: "Break the coconut", description: "Break a coconut in front of the vehicle's wheel (away from people)." },
      { title: "Perform aarti", description: "Circle a lit camphor aarti around the vehicle three times." },
    ],
    mantras: [
      {
        sanskrit: "ॐ गं गणपतये नमः",
        transliteration: "Om Gam Ganapataye Namah",
        meaning: "Salutations to Lord Ganesha, remover of obstacles.",
      },
    ],
  },
  {
    id: "p5",
    name: "Pitru Paksha Shraddha",
    slug: "pitru-paksha-shraddha",
    shortDescription: "Rites performed to honor and pay respects to one's ancestors.",
    occasions: ["ancestral-remembrance"],
    duration: "1–2 hours",
    difficulty: "Elaborate — priest recommended",
    whyThisPuja:
      "Shraddha rituals are performed to express gratitude to ancestors and seek their blessings, most commonly during Pitru Paksha (a fortnight in the Hindu calendar dedicated to ancestor worship).",
    samagri: [
      { name: "Black sesame seeds", quantity: "200g" },
      { name: "Kusha grass", quantity: "1 bundle" },
      { name: "Rice & barley", quantity: "1 kg each" },
      { name: "White flowers", quantity: "1 bunch" },
    ],
    preparationSteps: [
      { title: "Choose the tithi", description: "Perform on the ancestor's death anniversary tithi during Pitru Paksha." },
      { title: "Pind Daan", description: "Offer rice ball (pind) mixtures to ancestors near a water body or with a priest." },
      { title: "Tarpan", description: "Offer water mixed with sesame seeds to ancestors." },
      { title: "Feed and donate", description: "Feed crows, cows, and Brahmins, and donate to those in need." },
    ],
    mantras: [
      {
        sanskrit: "ॐ पितृभ्यः स्वधायै नमः",
        transliteration: "Om Pitrubhyah Swadhaayai Namah",
        meaning: "Salutations and offerings to our ancestors.",
      },
    ],
  },
  {
    id: "p6",
    name: "Ganesh Chaturthi Puja",
    slug: "ganesh-chaturthi-puja",
    shortDescription: "Annual worship of Lord Ganesha celebrating his birth, with idol installation and visarjan.",
    occasions: ["festival"],
    duration: "1 hour daily (across the festival)",
    difficulty: "Moderate",
    whyThisPuja:
      "Ganesh Chaturthi celebrates the birth of Lord Ganesha, remover of obstacles. Families install an idol at home for 1.5, 5, 7, or 11 days, worship it daily, and then immerse it in water (visarjan).",
    samagri: [
      { name: "Ganesha idol", quantity: "1", productSlug: "panchdhatu-ganesha-idol" },
      { name: "Modak", quantity: "21 pieces" },
      { name: "Durva grass", quantity: "1 bunch" },
      { name: "Red flowers/hibiscus", quantity: "1 bunch" },
      { name: "Incense sticks", quantity: "1 box", productSlug: "sandalwood-incense-box" },
    ],
    preparationSteps: [
      { title: "Idol installation (Pranapratishtha)", description: "Install the idol and invoke life-force into it with mantras." },
      { title: "Shodashopachara puja", description: "Perform the 16-step traditional worship ritual daily." },
      { title: "Offer modak", description: "Offer modak, Ganesha's favorite sweet, each day." },
      { title: "Visarjan", description: "Immerse the idol in water at the end of the festival with a procession." },
    ],
    mantras: [
      {
        sanskrit: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
        transliteration: "Vakratunda Mahakaya Suryakoti Samaprabha, Nirvighnam Kuru Me Deva Sarva-Karyeshu Sarvada",
        meaning: "O curved-trunk, mighty-bodied one, radiant as a million suns — remove all obstacles from my endeavors, always.",
      },
    ],
  },
];

export function getOccasionInfo(id: string): OccasionInfo | undefined {
  return OCCASIONS.find((o) => o.id === id);
}

export function getGuidesForOccasion(occasion: string): PujaGuide[] {
  return PUJA_GUIDES.filter((g) => g.occasions.includes(occasion as PujaGuide["occasions"][number]));
}

export function searchPujaGuides(query: string): PujaGuide[] {
  const q = query.trim().toLowerCase();
  if (!q) return PUJA_GUIDES;
  return PUJA_GUIDES.filter(
    (g) =>
      g.name.toLowerCase().includes(q) ||
      g.shortDescription.toLowerCase().includes(q) ||
      g.occasions.some((o) => o.includes(q)),
  );
}

export function getPujaGuideBySlug(slug: string): PujaGuide | undefined {
  return PUJA_GUIDES.find((g) => g.slug === slug);
}
