import { YMaps, Map } from '@pbe/react-yandex-maps';
import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';

import * as Location from 'expo-location';

function MapYa() {
  const [location, setLocation] = useState(null);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [errorMsg, setErrorMsg] = useState(null);

  let text = 'Карта загружается...';

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('В разрешении на доступ к местоположению было отказано!');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      setLocation(location);
    })();
  }, []);

  if (errorMsg) {
    console.warn(errorMsg);
  } else if (location) {
    console.warn(JSON.stringify(location));
    text = '';
  }

  return (
    <View>
      <Text>{text}</Text>
      <YMaps>
        <Map
          height={914}
          width={412}
          defaultState={{ center: [latitude, longitude], zoom: 18 }}
        />
      </YMaps>
    </View>
  );
}

export { MapYa };
