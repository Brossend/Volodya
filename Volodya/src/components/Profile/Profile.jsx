import { Image, View, Text, Pressable } from 'react-native';

import * as Notifications from 'expo-notifications';

import styles from './styles';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function Profile() {
  return (
    <View>
      <Image
        style={styles.photo}
        source={require('../../assets/img/df2875c80c0e806f0862.png')}
      />
      <View style={styles.data}>
        <Text style={styles.text}>Имя: </Text>
        <Text>Володя</Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.text}>Возраст: </Text>
        <Text>40</Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.text}>Телефон: </Text>
        <Text>82152281632</Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.text}>Почта: </Text>
        <Text>vorVolodya@mail.ru</Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.text}>Пароль: </Text>
        <Text>e228</Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={async () => {
          await schedulePushNotification();
        }}
      >
        <Text style={styles.buttonText}>Редактировать профиль</Text>
      </Pressable>
    </View>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: '⚠️ Внимание! Ваш профиль изменен! ⚠️',
      body: 'Пожалуйста, поменяйте пароль или напишите в техподдержку, если вы не изменяли профиль!',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 1 },
  });
}

export { Profile };
