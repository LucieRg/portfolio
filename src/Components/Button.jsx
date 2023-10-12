import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label,  className }) => (
  <button className={className} >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
