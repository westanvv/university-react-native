import {dispatch} from '../helpers';

import {User} from './types';
import {actions} from './slice';

export const setUser = (user: User) => {
  dispatch(actions.setUser(user));
};
