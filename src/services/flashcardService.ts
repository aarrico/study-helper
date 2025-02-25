import { Flashcard } from '@/types/flashcard';

export const getFlashcardsForTopic =
  async (topic: string | string[]): Promise<Flashcard[]> => {
    if (typeof topic === 'string') {
      return await importData(topic);
    }

    const cards = await Promise.all(topic.map(importData));
    return cards.flat();
  };

const importData =
  async (topic: string) => {
    const data = await import(`./data/${topic}.json`);
    return data.default as Flashcard[];
  };