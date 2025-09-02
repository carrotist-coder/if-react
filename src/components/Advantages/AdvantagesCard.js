/* eslint-disable react/prop-types */
import React from 'react';
import Icon from '../Icon/Icon';

const AdvantagesCard = ({ icon, text }) => {
  return (
    <div className='advantages-card col-lg-3 col-md-6 col-sm-6'>
      <Icon icon={icon}></Icon>
      <p className='advantages-card__text'>{text}</p>
    </div>
  );
};

export default AdvantagesCard;
