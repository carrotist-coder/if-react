/* eslint-disable react/prop-types */
import React from 'react';
import HotelsList from './HotelsList';
import './HomesGuests.css';

const HomesGuests = ({ hotels }) => {
  return (
    <section className='homes-guests'>
      <div className='container'>
        <div className='heading'>
          <h1 className='heading__text'>Homes guests loves</h1>
        </div>
        <HotelsList hotels={hotels} />
      </div>
    </section>
  );
};

export default HomesGuests;
