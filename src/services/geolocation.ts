import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';

let isEnabled = false;
type Methods = {
  setPosition(data: GeoPosition): void;
};

const methods: Methods = {
  setPosition: () => {},
};

const requestUserPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    ]);
    if (
      granted[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION] === PermissionsAndroid.RESULTS.GRANTED &&
      granted[PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION] === PermissionsAndroid.RESULTS.GRANTED
    ) {
      console.log('Permissions for geolocation are granted');
      return true;
    }

    return false;
  }
  if (Platform.OS === 'ios') {
    const granted = await Geolocation.requestAuthorization('always');
    if (granted === 'granted') {
      console.log('Permissions for geolocation are granted');
      return true;
    }
    return false;
  }
  return false;
};

export const init = async (sourceMethods: Methods) => {
  isEnabled = await requestUserPermission();

  methods.setPosition = sourceMethods.setPosition;
};

export const getCurrentPosition = () => {
  if (isEnabled) {
    Geolocation.getCurrentPosition(
      data => {
        methods.setPosition(data);
      },
      data => {
        console.log(data);
      },
      {
        timeout: 1000,
        maximumAge: 0,
        // accuracy: {
        //   android: 'high',
        //   ios: 'bestForNavigation',
        // },
        enableHighAccuracy: true,
        distanceFilter: 0,
        showLocationDialog: true, // Android-only
        forceRequestLocation: false, // Android-only
      }
    );
  }
};
