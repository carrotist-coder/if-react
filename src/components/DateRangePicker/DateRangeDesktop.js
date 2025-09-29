/* eslint-disable react/prop-types */
import React from 'react';
import DatePicker from 'react-datepicker';

const DateRangeDesktop = ({ startDate, endDate, onDatesChange }) => {
  const handleChange = (dates) => {
    const [start, end] = dates;
    onDatesChange(start, end);
  };

  return (
    <DatePicker
      selectsRange
      startDate={startDate}
      endDate={endDate}
      onChange={handleChange}
      dateFormat='EEE dd MMM'
      placeholderText='Check-in — Check-out'
      className='search-inputs__input-2'
    />
  );
};

export default DateRangeDesktop;
