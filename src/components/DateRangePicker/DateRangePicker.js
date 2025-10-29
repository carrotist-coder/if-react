import React, { useState, useEffect, useCallback, memo } from 'react';
import DateRangeDesktop from './DateRangeDesktop';
import DateRangeMobile from './DateRangeMobile';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';

const DateRangePicker = memo(({ onChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const handleDatesChange = useCallback(
    (start, end) => {
      setStartDate(start);
      setEndDate(end);
      if (onChange) onChange(start, end);
    },
    [onChange],
  );

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

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
});

DateRangePicker.displayName = 'DateRangePicker';

DateRangePicker.propTypes = {
  onChange: PropTypes.func,
};

export default DateRangePicker;
