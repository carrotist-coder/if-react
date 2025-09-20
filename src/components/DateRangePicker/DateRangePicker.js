/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = ({ onChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (onChange) onChange(start, end);
  };

  return (
    <>
      {!isMobile && (
        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={handleChange}
          dateFormat='EEE dd MMM'
          placeholderText='Check-in — Check-out'
          className='search-inputs__input-2'
        />
      )}
      {isMobile && (
        <>
          <div className='search-input-md search-input-md-2-in'>
            <label className='search-form__label-md' htmlFor='date-in'>
              Check-in
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                if (onChange) onChange({ start: date, end: endDate });
              }}
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
              onChange={(date) => {
                setEndDate(date);
                if (onChange) onChange({ start: startDate, end: date });
              }}
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
      )}
    </>
  );
};

export default DateRangePicker;
