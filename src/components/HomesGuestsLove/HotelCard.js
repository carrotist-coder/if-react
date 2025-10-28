import React from 'react';
import PropTypes from 'prop-types';

const HotelCard = ({ hotel }) => {
  return (
    <div className='homes-guests-card'>
      <figure>
        <img src={hotel.imageUrl} alt={`${hotel.name}`} />
        <figcaption>
          <p>{hotel.name}</p>
          <p>
            {hotel.city}, {hotel.country}
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

HotelCard.propTypes = {
  hotel: PropTypes.object.isRequired,
};

export default HotelCard;
