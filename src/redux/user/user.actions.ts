import { UserActionTypes } from './user.types';

export const setCurrentUser = (user: any): ReduxActionType => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
