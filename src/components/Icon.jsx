import React from 'react';
import sprite from '../assets/sprite.svg';

const Icon = ({ children, className }) => {
  return (
    <svg className={className}>
      <use href={`${sprite}#${children}`}></use>
    </svg>
  );
};

export default Icon;
