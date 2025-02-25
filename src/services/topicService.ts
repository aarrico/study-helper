import { flashCardSets } from '@/data';
import { FlashcardSetMetadata } from '@/types/flashcard';

export const getTopics = async (): Promise<FlashcardSetMetadata[]> => {
  return flashCardSets;
};