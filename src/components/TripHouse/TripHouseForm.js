import React, { useState } from 'react';
import { useHotelsSearch } from '../../contexts/HotelsSearchContext';
import DateRangePicker from '../DateRangePicker/DateRangePicker';
import GuestsDropdown from '../Guests/GuestsDropdown';

const TripHouseForm = () => {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState({});
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const { handleSearch } = useHotelsSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dates);
    handleSearch(destination);
  };

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <label
        className='search-form__label search-form__label-1'
        htmlFor='destination'
      >
        Your destination or hotel name
      </label>
      <label className='search-form__label search-form__label-2' htmlFor='date'>
        Check-in — Check-out
      </label>
      <div className='search-inputs'>
        <div className='search-inputs__input-1 search-inputs__input-1--relative'>
          <svg className='search-inputs__search-icon'>
            <use href='src/images/sprite.svg#search-icon'></use>
          </svg>
          <input
            className='search-inputs__input-md-1'
            id='destination'
            type='text'
            name='destination'
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <DateRangePicker onChange={setDates} />
        <GuestsDropdown value={guests} onChange={setGuests} />
        <button className='search-form__button'>Search</button>
      </div>
    </form>
  );
};

export default TripHouseForm;
