import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppReducer, Message, User} from './types';

const initialState: AppReducer = {
  user: undefined,
  messages: [],
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
  },
});

export const {reducer, actions} = appSlice;
