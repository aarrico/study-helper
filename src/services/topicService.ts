import { flashCardSets } from '@/data';

export const getTopics = (): string[] => {
  return Object.keys(flashCardSets);
};