import React from 'react';
import './HomesGuests.css';

const AvailableHotels = () => {
  return (
    <section className='available-hotels'>
      <div className='container'>
        <div className='heading'>
          <h1 className='heading__text'>Available hotels</h1>
        </div>
        <div className='cards'></div>
        <div className='homes-guests-arrow-button'>
          <div className='homes-guests-arrow-button__circle'></div>
          <svg className='homes-guests-arrow-button__icon'>
            <use href='src/images/sprite.svg#arrow-icon'></use>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AvailableHotels;
