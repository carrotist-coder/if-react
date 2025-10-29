import React, { memo, useCallback } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

const DateRangeMobile = memo(({ startDate, endDate, onDatesChange }) => {
  const handleStartDateChange = useCallback(
    (date) => {
      onDatesChange(date, endDate);
    },
    [onDatesChange, endDate],
  );

  const handleEndDateChange = useCallback(
    (date) => {
      onDatesChange(startDate, date);
    },
    [onDatesChange, startDate],
  );

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
});

DateRangeMobile.displayName = 'DateRangeMobile';

DateRangeMobile.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  onDatesChange: PropTypes.func.isRequired,
};

export default DateRangeMobile;
