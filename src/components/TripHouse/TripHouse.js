import React, { useState } from 'react';
import './TripHouse.css';
import TripHouseForm from './TripHouseForm';
import TripHouseApps from './TripHouseApps';
import HomesGuests from '../HomesGuestsLove/HomesGuests';
import { hotelsData } from '../../utils/hotelsData';

const TripHouse = () => {
  const [filteredHotels, setFilteredHotels] = useState(hotelsData);

  const handleSearch = (searchTerm) => {
    const filtered = hotelsData.filter((hotel) =>
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredHotels(filtered);
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
