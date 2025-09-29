/* eslint-disable react/prop-types */
import React from 'react';
import HotelCard from './HotelCard';
import { isNotEmptyArray } from '../../utils/helpers';

const HotelsList = ({ hotels }) => {
  const hasHotels = isNotEmptyArray(hotels);
  return (
    <div className='cards'>
      {hasHotels ? (
        hotels.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)
      ) : (
        <div className='nothing-found'>Nothing found...</div>
      )}
    </div>
  );
};

export default HotelsList;
