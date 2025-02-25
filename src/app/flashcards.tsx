import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { getFlashcardsForTopic } from '@/services/flashcardService';
import { Flashcard } from '@/types/flashcard';

export default function Flashcards() {
  const params = useLocalSearchParams();
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCards = async () => {
      setLoading(true);
      try {
        setFlashcards(await getFlashcardsForTopic(params.topic));
      } catch (err) {
        console.error(err);
        setFlashcards([]);
      } finally {
        setLoading(false);
      }
    }

    loadCards().catch(console.error);
  }, []);


  return <div>Flashcards</div>;
}