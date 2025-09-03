/* eslint-disable react/prop-types */
import React from 'react';
import HotelCard from './HotelCard';

const HotelsList = ({ hotels }) => {
  return (
    <div className='cards'>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelsList;
