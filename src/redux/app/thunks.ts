import {GeoPosition} from 'react-native-geolocation-service';
import {dispatch} from '../helpers';

import {User, Message} from './types';
import {actions} from './slice';

export const setUser = (user: User) => {
  dispatch(actions.setUser(user));
};

export const addMessage = (data: Message) => {
  dispatch(actions.addMessage(data));
};

export const setGeoPosition = (data: GeoPosition) => {
  dispatch(actions.setGeoPosition(data));
};
