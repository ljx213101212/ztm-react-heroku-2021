import React, { FC } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionsOverview: FC<any> = ({ collections }) => (
  <div className="collections-overview">
    {collections.map((collection: any) => (
      <CollectionPreview key={collection.id} {...collection} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector<any, any, any>({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
