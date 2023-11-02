import React from 'react';
import PropTypes from 'prop-types';

export const ButtonTypes = {
  NUMBER: 'NUMBER',
  OPERATOR: 'OPERATOR',
};

const ButtonColors = {
  NUMBER: ['#71717a', '#3f3f46'],
  OPERATOR: ['#e1be33', '#c69b51'],
};

const Button = ({ title, onPress, buttonStyle, buttonType }) => {
  return (
    <button
      className={`button ${buttonStyle}`}
      style={{
        backgroundColor: ButtonColors[buttonType][0],
        color: 'white',
        fontSize: 50,
        borderRadius: 25,
      }}
      onClick={onPress}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  buttonType: PropTypes.oneOf(Object.values(ButtonTypes)),
};

export default Button;
