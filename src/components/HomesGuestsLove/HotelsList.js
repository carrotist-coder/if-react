/* eslint-disable react/prop-types */
import React from 'react';
import HotelCard from './HotelCard';

const HotelsList = ({ hotels }) => {
  return (
    <div className='cards'>
      {hotels && hotels.length > 0 ? (
        hotels.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)
      ) : (
        <div className='nothing-found'>Nothing found...</div>
      )}
    </div>
  );
};

export default HotelsList;
