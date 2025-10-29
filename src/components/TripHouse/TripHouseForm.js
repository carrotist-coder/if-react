import React, { memo, useCallback, useState } from 'react';
import { useHotelsSearch } from '../../contexts/HotelsSearchContext';
import DateRangePicker from '../DateRangePicker/DateRangePicker';
import GuestsDropdown from '../Guests/GuestsDropdown';

const TripHouseForm = memo(() => {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState({});
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const { handleSearch } = useHotelsSearch();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handleSearch(destination);
    },
    [dates, destination, handleSearch],
  );

  const handleDestinationChange = useCallback((e) => {
    setDestination(e.target.value);
  }, []);

  const handleDatesChange = useCallback((start, end) => {
    setDates({ start, end });
  }, []);

  const handleGuestsChange = useCallback((newGuests) => {
    setGuests(newGuests);
  }, []);

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
            onChange={handleDestinationChange}
          />
        </div>
        <DateRangePicker onChange={handleDatesChange} />
        <GuestsDropdown value={guests} onChange={handleGuestsChange} />
        <button className='search-form__button'>Search</button>
      </div>
    </form>
  );
});

TripHouseForm.displayName = 'TripHouseForm';

export default TripHouseForm;
