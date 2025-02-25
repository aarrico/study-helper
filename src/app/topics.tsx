import { Button, ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useState } from 'react';
import useTopics from '@/hooks/useTopics';
import { useRouter } from 'expo-router';

export default function TopicSelectScreen() {
  const { topics, loading } = useTopics();
  const [selectedTopic, setSelectedTopic] = useState('');
  const router = useRouter();

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    router.push({
      pathname: '/flashcards',
      params: { topic }
    })
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Topic</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView contentContainerStyle={styles.buttonContainer}>
        {topics.map((topic, index) => (
          <Button key={index} title={topic} onPress={() => handleTopicSelect(topic)} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    gap: 10, // Added spacing between buttons
  },
});
