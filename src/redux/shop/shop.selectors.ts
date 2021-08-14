import { createSelector } from 'reselect';

const selectShop = (state: RootReducerType): ShopReducerType => {
  console.log('[JX TEST] - selectShop', state);
  return state.shop;
};

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam: any) => {
  console.log(
    '[JX TEST] - selectCollection',
    collectionUrlParam,
    selectCollections
  );
  return createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
};
