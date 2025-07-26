/* eslint-disable react/prop-types */
import React from 'react';

const AdvantagesCard = ({ icon, text }) => {
  return (
    <div className='advantages-card col-lg-3 col-md-6 col-sm-6'>
      <svg className='advantages-card__svg'>
        <use href={`src/icons/sprite.svg#${icon}`}></use>
      </svg>
      <p className='advantages-card__text'>{text}</p>
    </div>
  );
};

export default AdvantagesCard;
