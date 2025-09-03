/* eslint-disable react/prop-types */
import React from 'react';

const Icon = ({ icon }) => {
  return (
    <svg className='advantages-card__svg'>
      <use xlinkHref={`/icons/sprite.svg#${icon}`} />
    </svg>
  );
};

export default Icon;
