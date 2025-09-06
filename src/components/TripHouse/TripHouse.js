import React from 'react';
import './TripHouse.css';

const TripHouse = () => {
  return (
    <section className='triphouse'>
      <div className='triphouse-content'>
        <div className='triphouse__heading'>Discover stays</div>
        <div className='triphouse__heading'>to live, work or just relax</div>

        <form className='search-form'>
          <label
            className='search-form__label search-form__label-1'
            htmlFor='destination'
          >
            Your destination or hotel name
          </label>
          <label
            className='search-form__label search-form__label-2'
            htmlFor='date'
          >
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
                value='New York'
              />
            </div>
            <div className='search-input-md search-input-md-2-in'>
              <label className='search-form__label-md' htmlFor='date-in'>
                Check-in
              </label>
              <input
                className='search-inputs__input-md'
                id='date-in'
                type='date'
                name='date-in'
                value='Tue 15 Sept 2020'
              />
            </div>
            <div className='search-input-md search-input-md-2-out'>
              <label className='search-form__label-md' htmlFor='date-out'>
                Check-out
              </label>
              <input
                className='search-inputs__input-md'
                id='date-out'
                type='date'
                name='date-out'
                value='Sat 19 Sept 2020'
              />
            </div>
            <input
              className='search-inputs__input-2'
              id='date'
              type='date'
              name='date'
              value='Tue 15 Sept — Sat 19 Sept'
            />
            <div className='search-input-md search-inputs__input-3-adults'>
              <label className='search-form__label-md' htmlFor='adults'>
                Adults
              </label>
              <input
                className='search-inputs__input-3 search-inputs__input-md-3 search-inputs__input-md'
                id='adults'
                type='number'
                name='adults'
                value='2'
              />
            </div>
            <div className='search-input-md search-inputs__input-3-children'>
              <label className='search-form__label-md' htmlFor='children'>
                Children
              </label>
              <input
                className='search-inputs__input-3 search-inputs__input-md-3 search-inputs__input-md'
                id='children'
                type='number'
                name='children'
                value='0'
              />
            </div>
            <div className='search-input-md search-inputs__input-3-rooms'>
              <label className='search-form__label-md' htmlFor='rooms'>
                Rooms
              </label>
              <input
                className='search-inputs__input-3 search-inputs__input-md-3 search-inputs__input-md'
                id='rooms'
                type='number'
                name='rooms'
                value='1'
              />
            </div>
            <label className='search-form__label' htmlFor='description'></label>
            <input
              className='search-inputs__input-3'
              id='description'
              type='text'
              name='description'
              value='2 Adults — 0 Children — 1 Room'
            />
            <div className='guests-dropdown' id='guests-dropdown'>
              <div className='guests-row'>
                <label>Adults</label>
                <button type='button' className='guests-btn-decrease'>
                  −
                </button>
                <span id='adults-count'>1</span>
                <button type='button' className='guests-btn-increase'>
                  +
                </button>
              </div>
              <div className='guests-row'>
                <label>Children</label>
                <button
                  type='button'
                  className='guests-btn-decrease guests-btn-disabled'
                >
                  −
                </button>
                <span id='children-count'>0</span>
                <button type='button' className='guests-btn-increase'>
                  +
                </button>
              </div>
              <div className='guests-row'>
                <label>Rooms</label>
                <button
                  type='button'
                  className='guests-btn-decrease guests-btn-disabled'
                >
                  −
                </button>
                <span id='rooms-count'>1</span>
                <button type='button' className='guests-btn-increase'>
                  +
                </button>
              </div>
              <div className='guests-row' id='child-age-container'>
                <label id='child-age-label'>
                  What is the age of the child you&#39;re travelling with?
                </label>
                <div id='child-age-selects'></div>
              </div>
            </div>
            <button className='search-form__button'>Search</button>
          </div>
        </form>
        <div className='triphouse-apps'>
          <img
            src='/icons/google-play-logo.png'
            alt='Get it on Google Play button'
          />
          <img
            src='/icons/app-store-logo.png'
            alt='Get it on App Store button'
          />
        </div>
      </div>
    </section>
  );
};

export default TripHouse;
