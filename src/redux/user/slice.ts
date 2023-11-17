import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User, UserReducer} from './types';

const initialState: UserReducer = {
  user: {id: '2', name: 'test user'},
};

export const appSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const {reducer, actions} = appSlice;
