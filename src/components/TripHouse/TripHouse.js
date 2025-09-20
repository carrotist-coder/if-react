import React, { useState } from 'react';
import './TripHouse.css';
import TripHouseForm from './TripHouseForm';
import TripHouseApps from './TripHouseApps';
import HomesGuests from '../HomesGuestsLove/HomesGuests';
import axios from 'axios';
import { API_HOTELS_URL } from '../../services';

export const TripHouse = () => {
  const [filteredHotels, setFilteredHotels] = useState([]);

  const handleSearch = (searchTerm) => {
    axios
      .get(API_HOTELS_URL, {
        params: {
          search: searchTerm.toLowerCase(),
        },
      })
      .then((res) => {
        setFilteredHotels(res.data);
      });
  };

  return (
    <>
      <section className='triphouse'>
        <div className='triphouse-content'>
          <div className='triphouse__heading'>Discover stays</div>
          <div className='triphouse__heading'>to live, work or just relax</div>
          <TripHouseForm handleSearch={handleSearch} />
          <TripHouseApps />
        </div>
      </section>
      <HomesGuests hotels={filteredHotels} isAvailableHotels={true} />
    </>
  );
};

export default TripHouse;
