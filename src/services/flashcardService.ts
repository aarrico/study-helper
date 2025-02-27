import { Flashcard, FlashcardSetMetadata } from '@/types/flashcard';

export const getFlashcardSet =
  async (setName: keyof FlashcardSetMetadata): Promise<Flashcard[]> => {
      return await importData(setName);
  };

const importData =
  async (topic: keyof FlashcardSetMetadata) => {
    const data = await import('../data/bones.json');
    return data.default as Flashcard[];
}