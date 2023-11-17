import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppReducer, User} from './types';

const initialState: AppReducer = {
  user: undefined,
};

export const appSlice = createSlice({
  name: 'APP',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const {reducer, actions} = appSlice;
