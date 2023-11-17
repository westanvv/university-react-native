import {TypedUseSelectorHook, useDispatch as useBaseDispatch, useSelector as useBaseSelector} from 'react-redux';

import {AppDispatch, getStore, RootState} from './configureStore';

export const dispatch = (action: {payload: any; type: string}): void => {
  const {store} = getStore();

  store.dispatch(action);
};

export const useDispatch = () => useBaseDispatch<AppDispatch>();

export const useSelector: TypedUseSelectorHook<RootState> = useBaseSelector;
