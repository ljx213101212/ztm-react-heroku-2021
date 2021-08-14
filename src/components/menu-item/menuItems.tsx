import React, { FC, ReactElement } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem: FC<RouteComponentProps & MenuItemProps> = (
  item: RouteComponentProps & MenuItemProps
): ReactElement => {
  return (
    <div
      className="menu-item"
      onClick={() => item.history?.push(`${item.match?.url}${item.linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>
      <div className="content">
        <div className="title">{item.title?.toUpperCase()}</div>
        <span className="subtitle">{item.subtitle}</span>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);
