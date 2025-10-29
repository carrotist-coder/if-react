import React from 'react';
import HotelsList from './HotelsList';
import './HomesGuests.css';
import PropTypes from 'prop-types';

const HomesGuests = ({ hotels, isAvailableHotels = false }) => {
  if (isAvailableHotels && hotels?.length === 0) return;
  return (
    <section
      className='homes-guests'
      id={isAvailableHotels ? 'available-hotels' : 'homes-guests'}
    >
      <div className='container'>
        <div className='heading'>
          <h1 className='heading__text'>
            {isAvailableHotels ? 'Available hotels' : 'Homes guests loves'}
          </h1>
        </div>
        <HotelsList hotels={hotels} />
      </div>
    </section>
  );
};

HomesGuests.propTypes = {
  hotels: PropTypes.array,
  isAvailableHotels: PropTypes.bool,
};

export default HomesGuests;
