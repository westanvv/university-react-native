import {GeoPosition} from 'react-native-geolocation-service';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppReducer, Message, User} from './types';

const initialState: AppReducer = {
  user: undefined,
  messages: [],
  currentPosition: undefined,
};

export const appSlice = createSlice({
  name: 'APP',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    setGeoPosition: (state, action: PayloadAction<GeoPosition>) => {
      state.currentPosition = action.payload;
    },
  },
});

export const {reducer, actions} = appSlice;
