import React, { FC, ReactElement } from 'react';
import './custom-buttom.styles.scss';

const CustomButton: FC<any> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}): ReactElement => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
