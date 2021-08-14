import { createSelector } from 'reselect';

const selectDirectory = (state: RootReducerType): DirectoryReducer =>
  state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
