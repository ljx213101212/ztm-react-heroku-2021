import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import './directory.styles.scss';
import MenuItem from '../menu-item/menuItems';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory: FC<DirectoryProps> = (
  directoryProps: DirectoryProps
): ReactElement => {
  return (
    <div className="directory-menu">
      {directoryProps.sections.map(({ ...otherSectionProps }) => {
        return <MenuItem {...otherSectionProps}></MenuItem>;
      })}
    </div>
  );
};
const mapStateToProps = createStructuredSelector<any, any, any>({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
