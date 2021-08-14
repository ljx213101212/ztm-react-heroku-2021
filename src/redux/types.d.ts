interface ReduxActionType {
  type: string | null;
  payload?: any;
}

interface RootReducerType {
  user: userReducer;
  cart: cartReducer;
  directory: directoryReducer;
  shop: shopReducer;
}
