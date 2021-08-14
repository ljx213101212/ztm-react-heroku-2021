import { createSelector, OutputSelector } from 'reselect';

const selectUser = (state: RootReducerType): UserReducerType => state.user;

export const selectCurrentUser: OutputSelector<RootReducerType, any, any> =
  createSelector([selectUser], (user) => user.currentUser);
