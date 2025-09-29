/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from 'react';
import DateRangeDesktop from './DateRangeDesktop';
import DateRangeMobile from './DateRangeMobile';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = ({ onChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const handleDatesChange = useCallback((start, end) => {
    setStartDate(start);
    setEndDate(end);
    if (onChange) onChange(start, end);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {!isMobile ? (
        <DateRangeDesktop
          startDate={startDate}
          endDate={endDate}
          onDatesChange={handleDatesChange}
        />
      ) : (
        <DateRangeMobile
          startDate={startDate}
          endDate={endDate}
          onDatesChange={handleDatesChange}
        />
      )}
    </>
  );
};

export default DateRangePicker;
