import {Linking} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNavigationContainerRef, DrawerActions, CommonActions, NavigationState} from '@react-navigation/native';

import {RootParamList} from './types';

const PERSISTENCE_KEY = '@NAVIGATION_STATE';
const LOG_COLOR = '#17a2b8';

export const cleanState = () => {
  // AsyncStorage.removeItem(PERSISTENCE_KEY);
};

export const initState = async ({isLogged}: {isLogged: boolean}) => {
  if (!isLogged) {
    return {
      default: 'closed',
      index: 0,
      routes: [
        {
          name: 'Login',
        },
      ],
    };
  }

  const initialUrl = await Linking.getInitialURL();

  // Only restore state if there's no deep link, and we're not on web
  if (initialUrl) {
    // const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
    // const navigationState = savedStateString ? JSON.parse(savedStateString) : undefined;
    //
    // console.log({
    //   title: 'Navigation: init',
    //   data: navigationState,
    //   color: LOG_COLOR,
    // });
    // return navigationState;
  }

  return undefined;
};

export const saveState = (state: NavigationState | undefined) => {
  console.log({
    title: 'Navigation',
    data: state,
    color: LOG_COLOR,
  });

  // AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
};

export const navigationRef = createNavigationContainerRef<RootParamList>();

export const navigate = (screen: keyof RootParamList, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screen, params);
  }
};

export const reset = (state: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.reset(state));
  }
};

export const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.goBack());
  }
};

export const openDrawer = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.openDrawer());
  }
};

export const closeDrawer = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.closeDrawer());
  }
};
