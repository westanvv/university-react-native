import {persistReducer} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {reducer as appReducer} from './app/slice';
import {reducer as userReducer} from './user/slice';

const createRootReducer = (reducers = {}, blacklist: string[] = []) =>
  persistReducer(
    {
      key: 'root',
      storage: AsyncStorage,
      blacklist: [...blacklist],
    },
    combineReducers({
      ...reducers,
      app: appReducer,
      user: userReducer,
    })
  );

export default createRootReducer;
