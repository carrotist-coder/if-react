/* eslint-disable react/prop-types */
import React from 'react';

const HotelCard = ({ hotel }) => {
  return (
    <div className='homes-guests-card'>
      <figure>
        <img src={hotel.imageUrl} alt={`${hotel.name} picture`} />
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

export default HotelCard;
