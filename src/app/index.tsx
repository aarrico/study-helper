import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Prepare to learn!!!</Text>
      <Link href="/topics" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Topic Selection</Text>
        </Pressable>
      </Link>
      <Text>more content coming soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});