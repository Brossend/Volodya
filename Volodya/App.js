import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MapScreen } from './src/screen/MapScreen/MapScreen';
import { PersonalArea } from './src/screen/PersonalArea/PersonalArea';
import { Cats } from './src/screen/Cats/Cats';

const Map = () => <MapScreen />;

const Personal = () => <PersonalArea />;

const Cat = () => <Cats />;

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Личный кабинет" component={Personal} />
          <Tab.Screen
            name="Котики"
            component={Cat}
            options={{ tabBarBadge: 1 }}
          />
          <Tab.Screen name="Карта" component={Map} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
