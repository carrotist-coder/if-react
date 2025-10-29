import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const AdvantagesCard = ({ icon, text }) => {
  return (
    <div className='advantages-card col-lg-3 col-md-6 col-sm-6'>
      <Icon icon={icon}></Icon>
      <p className='advantages-card__text'>{text}</p>
    </div>
  );
};

AdvantagesCard.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AdvantagesCard;
