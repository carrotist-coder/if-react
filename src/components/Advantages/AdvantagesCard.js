import React from 'react';
import PropTypes from 'prop-types';

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

AdvantagesCard.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AdvantagesCard;
