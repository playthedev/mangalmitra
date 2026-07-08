export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  categoryName: string;
  basePrice: number;
  compareAtPrice?: number;
  images: string[];
  isFeatured?: boolean;
}

export interface WisdomEntry {
  id: string;
  type:
    | "gita_verse"
    | "scripture"
    | "myth_vs_fact"
    | "quote"
    | "festival"
    | "panchang"
    | "affirmation";
  title?: string;
  content: Record<string, string>;
}

export type Occasion =
  | "housewarming"
  | "new-job-or-business"
  | "marriage"
  | "childbirth"
  | "graha-shanti"
  | "ancestral-remembrance"
  | "festival"
  | "new-vehicle"
  | "moving-in-together"
  | "general-wellbeing";

export interface OccasionInfo {
  id: Occasion;
  label: string;
  description: string;
  icon: string;
}

export interface Mantra {
  sanskrit: string;
  transliteration: string;
  meaning: string;
}

export interface PreparationStep {
  title: string;
  description: string;
}

export interface SamagriItem {
  name: string;
  quantity: string;
  productSlug?: string;
}

export interface PujaGuide {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  occasions: Occasion[];
  duration: string;
  difficulty: "Simple" | "Moderate" | "Elaborate — priest recommended";
  whyThisPuja: string;
  samagri: SamagriItem[];
  preparationSteps: PreparationStep[];
  mantras: Mantra[];
  videoUrl?: string;
  pdfUrl?: string;
}
