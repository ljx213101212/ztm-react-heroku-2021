import React, { FC, ReactElement } from 'react';
import './form-input.styles.scss';

const FormInput: FC<any> = ({
  handleChange,
  label,
  ...otherProps
}): ReactElement => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps?.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default FormInput;
