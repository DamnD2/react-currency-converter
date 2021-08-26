import React from 'react';
import PropTypes from 'prop-types';
import './ConverterItem.scss';

const ConverterItem = ({ type, value, rate, onChange }) => (
  <div className='converter__item'>
    <span className='converter__item-type'>{type}</span>
    <input
      type='number'
      value={value * rate}
      className='converter__item-field'
      onChange={(element) => onChange(element.target.value, rate)}
    />
  </div>
);

ConverterItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ConverterItem;
