import CartActionTypes from './cart.types';

export const toggleCartHidden = (): ReduxActionType => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: CartItem): ReduxActionType => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item: CartItem): ReduxActionType => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item: CartItem): ReduxActionType => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
