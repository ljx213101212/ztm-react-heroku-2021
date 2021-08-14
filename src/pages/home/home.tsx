import React, { FC, ReactElement } from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory';
import { sections } from '../../test/directory.data';

const Home: FC<void> = (): ReactElement => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};
export default Home;
