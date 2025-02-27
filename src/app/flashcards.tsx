import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { getFlashcardSet } from '@/services/flashcardService';
import { Flashcard, FlashcardSetMetadata } from '@/types/flashcard';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function Flashcards() {
  const params = useLocalSearchParams<{ topic: keyof FlashcardSetMetadata }>();
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showSideB, setShowSideB] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCards = async () => {
      setLoading(true);
      try {
        const cards = await getFlashcardSet(params.topic);
        if (!cards) {
          throw new Error('No flashcards found');
        }
        
        setFlashcards(cards);
      } catch (err) {
        console.error(err);
        setFlashcards([]);
      } finally {
        setLoading(false);
      }
    };

    loadCards();
    setCurrentIdx(0);
    setShowSideB(false);
  }, [params.topic]);

  const handleFlipCard = () => {
    setShowSideB(!showSideB);
  };

  const handleNextCard = () => {
    if (flashcards && currentIdx < flashcards.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setShowSideB(false);
    } else {
      setCurrentIdx(0);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>{loading ? 'Loading...' : 'Loaded!'}</Text>
      </View>
    );
  }

  if (!flashcards || flashcards.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No flashcards found for this topic.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={handleFlipCard}>
        <Text style={styles.cardText}>
          {showSideB ? flashcards[currentIdx].sideB : flashcards[currentIdx].sideA}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleNextCard}>
        <Text style={styles.buttonText}>Next Card</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: 300,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  subtopicText: {
    marginTop: 10,
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
  topicSelection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  topicButton: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    margin: 5,
  },
  topicButtonText: {
    fontSize: 14,
  },
  selectedTopicButton: {
    backgroundColor: 'lightblue',
  },
});