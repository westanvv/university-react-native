import messaging from '@react-native-firebase/messaging';
import {Message} from '@app/redux';

const requestUserPermission = async () => {
  const authorizationStatus = await messaging().requestPermission();

  if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
    console.log('User has notification permissions enabled.');
    return true;
  } else if (authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL) {
    console.log('User has provisional notification permissions.');
    return false;
  } else {
    console.log('User has notification permissions disabled');
    return false;
  }
};

export default async ({addMessage}: {addMessage: (data: Message) => void}) => {
  const isEnabled = await requestUserPermission();

  if (isEnabled) {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log('PN token: ', token);

    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('onNotificationOpenedApp', remoteMessage);
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('getInitialNotification', remoteMessage);
        }
      });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      if (remoteMessage.notification) {
        addMessage({title: remoteMessage.notification.title, message: remoteMessage.notification.body});
      }

      console.log('onMessage', remoteMessage);
    });

    return unsubscribe;
  }
};
