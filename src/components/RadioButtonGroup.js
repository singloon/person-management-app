import React from 'react';
import PropTypes from 'prop-types';

const RadioButtonGroup = props => {
  const { title, name, options, selectedOption, onChange, required } = props;

  return (
    <div className="form-input">
      <div className="input-label">
        <label className={required ? 'required' : null} htmlFor={name}>
          {title}
        </label>
      </div>
      <div className="radioGroup">
        {options.map(option => {
          return (
            <label className="labelRadio" key={option}>
              <input
                name={name}
                onChange={onChange}
                value={option}
                checked={selectedOption.indexOf(option) > -1}
                required={required}
                type="radio"
              />{' '}
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};

RadioButtonGroup.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOptions: PropTypes.array,
  onChange: PropTypes.func.isRequired
};

export default RadioButtonGroup;
