import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon }) => {
  return (
    <svg className='advantages-card__svg'>
      <use xlinkHref={`/icons/sprite.svg#${icon}`} />
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
