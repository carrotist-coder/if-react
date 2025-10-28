import React from 'react';
import HotelCard from './HotelCard';
import { isNotEmptyArray } from '../../utils/helpers';
import PropTypes from 'prop-types';

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

HotelsList.propTypes = {
  hotels: PropTypes.array,
};

export default HotelsList;
