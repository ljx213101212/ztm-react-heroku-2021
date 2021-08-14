import { UserActionTypes } from './user.types';

const INITIAL_STATE: UserReducerType = {
  id: null,
  currentUser: null,
};

const userReducer = (
  state = INITIAL_STATE,
  action: ReduxActionType
): UserReducerType => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
