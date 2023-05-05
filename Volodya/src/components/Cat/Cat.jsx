import { useState, useEffect } from 'react';
import { View, Image } from 'react-native';

const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10';

function Cat() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(API_URL);
      const props = await res.json();
      setQuotes(props);
    };
    fetchData();
  }, []);

  return (
    <View>
      {quotes.map((prop) => (
        <Image
          key={prop.url}
          style={{ width: '100%', height: 100 }}
          source={prop.url}
        />
      ))}
    </View>
  );
}

export { Cat };
