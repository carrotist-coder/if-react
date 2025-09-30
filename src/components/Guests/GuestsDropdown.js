/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Guests.css';
import {
  guestChildrenMaxAge,
  guestsLimits,
  guestsOptions,
} from '../../utils/consts';

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

  const description = `${value.adults} Adult${value.adults !== 1 ? 's' : ''} — ${value.children} Child${value.children !== 1 ? 'ren' : ''} — ${value.rooms} Room${value.rooms !== 1 ? 's' : ''}`;

  return (
    <div className='guests-dropdown-container'>
      <input
        id='guests-description'
        type='text'
        readOnly
        value={description}
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
                {Array.from({ length: value.children }).map((el, i) => (
                  <select key={i} className='child-age-select'>
                    {Array.from({ length: guestChildrenMaxAge + 1 }).map(
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

export default GuestsDropdown;
