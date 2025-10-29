import React, { memo, useCallback } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

const DateRangeDesktop = memo(({ startDate, endDate, onDatesChange }) => {
  const handleChange = useCallback(
    (dates) => {
      const [start, end] = dates;
      onDatesChange(start, end);
    },
    [onDatesChange],
  );

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
});

DateRangeDesktop.displayName = 'DateRangeDesktop';

DateRangeDesktop.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  onDatesChange: PropTypes.func.isRequired,
};

export default DateRangeDesktop;
