export interface FlashcardData {
  version: number;
  lastUpdated: string;
  categories: Category[];
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  name: string;
  description?: string;
  subtopics: Subtopic[];
}

export interface Subtopic {
  id: string;
  name: string;
  description?: string;
  cards: FlashCard[];
}

export interface FlashCard {
  id: string;
  front: string;
  back: string;
  confidenceLevel?: 'low' | 'medium' | 'high';
  tags?: string[];
  lastReviewed?: string;
  reviewCount?: number;
}
