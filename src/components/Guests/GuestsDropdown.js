import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Guests.css';
import {
  guestChildrenMaxAge,
  guestsLimits,
  guestsOptions,
} from '../../utils/consts';
import { getEmptyArray } from '../../utils/helpers';
import PropTypes from 'prop-types';

const GuestsDropdown = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = useCallback((e) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      e.target.id !== 'guests-description'
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleChange = (key, delta) => {
    const newValue = {
      ...value,
      [key]: Math.min(
        guestsLimits[key].max,
        Math.max(guestsLimits[key].min, value[key] + delta),
      ),
    };

    onChange(newValue);
  };

  const getDescriptionForAdults = (adults, children, rooms) => {
    const adultsText = `${adults} Adult${adults !== 1 ? 's' : ''}`;
    const childrenText = `${children} Child${children !== 1 ? 'ren' : ''}`;
    const roomsText = `${rooms} Room${rooms !== 1 ? 's' : ''}`;

    return `${adultsText} — ${childrenText} — ${roomsText}`;
  };

  return (
    <div className='guests-dropdown-container'>
      <input
        id='guests-description'
        type='text'
        readOnly
        value={getDescriptionForAdults(
          value.adults,
          value.children,
          value.rooms,
        )}
        onClick={() => setIsOpen(true)}
        className='search-inputs__input-3'
      />

      {isOpen && (
        <div className='guests-dropdown' id='guests-dropdown' ref={dropdownRef}>
          {guestsOptions.map((key) => (
            <div className='guests-row' key={key}>
              <label>{key[0].toUpperCase() + key.slice(1)}</label>
              <button
                type='button'
                className={`guests-btn-decrease ${
                  value[key] <= guestsLimits[key].min
                    ? 'guests-btn-disabled'
                    : ''
                }`}
                onClick={() => handleChange(key, -1)}
                disabled={value[key] <= guestsLimits[key].min}
              >
                −
              </button>
              <span>{value[key]}</span>
              <button
                type='button'
                className={`guests-btn-increase ${
                  value[key] >= guestsLimits[key].max
                    ? 'guests-btn-disabled'
                    : ''
                }`}
                onClick={() => handleChange(key, +1)}
                disabled={value[key] >= guestsLimits[key].max}
              >
                +
              </button>
            </div>
          ))}

          {value.children > 0 && (
            <div className='guests-row' id='child-age-container'>
              <label id='child-age-label'>
                What is the age of the child you&apos;re travelling with?
              </label>
              <div id='child-age-selects'>
                {getEmptyArray(value.children).map((el, i) => (
                  <select key={i} className='child-age-select'>
                    {getEmptyArray(guestChildrenMaxAge + 1).map(
                      (ageEl, age) => (
                        <option key={age} value={age}>
                          {age} years old
                        </option>
                      ),
                    )}
                  </select>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

GuestsDropdown.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GuestsDropdown;
