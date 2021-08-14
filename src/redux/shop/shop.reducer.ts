import SHOP_DATA from '../../test/shop.data';

const INITIAL_STATE = {
  collections: SHOP_DATA,
} as ShopReducerType;

const shopReducer = (
  state = INITIAL_STATE,
  action: ReduxActionType
): ShopReducerType => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
