import { useState, useEffect } from 'react';
import { getTopics } from '@/services/topicService';


const useTopics = () => {
  const [topics, setTopics] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      setLoading(true);
      try {
        const data = getTopics();
        setTopics(data);
      } catch (err: any) {
        console.error('Failed to fetch topics: ', err.message || '');
        setTopics([]);
      } finally {
        setLoading(false);
      }

      setLoading(false);
    };

    fetchTopics().catch(console.error);
  }, []);

  return { topics, loading };
};

export default useTopics;