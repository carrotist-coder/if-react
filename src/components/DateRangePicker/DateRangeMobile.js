/* eslint-disable react/prop-types */
import React from 'react';
import DatePicker from 'react-datepicker';

const DateRangeMobile = ({ startDate, endDate, onDatesChange }) => {
  const handleStartDateChange = (date) => {
    onDatesChange(date, endDate);
  };

  const handleEndDateChange = (date) => {
    onDatesChange(startDate, date);
  };

  return (
    <>
      <div className='search-input-md search-input-md-2-in'>
        <label className='search-form__label-md' htmlFor='date-in'>
          Check-in
        </label>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat='EEE dd MMM'
          placeholderText='Check-in'
          className='search-inputs__input-md'
          id='date-in'
        />
      </div>

      <div className='search-input-md search-input-md-2-out'>
        <label className='search-form__label-md' htmlFor='date-out'>
          Check-out
        </label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat='EEE dd MMM'
          placeholderText='Check-out'
          className='search-inputs__input-md'
          id='date-out'
        />
      </div>
    </>
  );
};

export default DateRangeMobile;
