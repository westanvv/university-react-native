import {AnyAction, configureStore, Dispatch, Middleware, Store} from '@reduxjs/toolkit';
import {persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, Persistor} from 'redux-persist';
import {createLogger} from 'redux-logger';

import configureReducers from './configureReducers';

const rootReducer = configureReducers();
const middleware: Middleware<object, any, Dispatch<AnyAction>>[] = [];

let store: Store | undefined;
let persistor: Persistor | undefined;

if (!!__DEV__) {
  middleware.push(
    createLogger({
      level: 'info',
      collapsed: true,
    })
  );
}

export const getStore = (
  reducers?: object
): {
  store: Store;
  persistor: Persistor;
} => {
  const _store =
    store ??
    configureStore({
      reducer: configureReducers(reducers),
      middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }).concat(...middleware),
    });

  const _persistor = persistor ?? persistStore(_store);

  // Create the store once in the client
  if (!store) {
    store = _store;
  }
  if (!persistor) {
    persistor = _persistor;
  }

  return {
    store,
    persistor,
  };
};

export type RootState = ReturnType<typeof rootReducer>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export type AppDispatch = typeof store.dispatch;
