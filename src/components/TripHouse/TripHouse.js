import React from 'react';
import './TripHouse.css';
import TripHouseForm from './TripHouseForm';
import TripHouseApps from './TripHouseApps';
import HomesGuests from '../HomesGuestsLove/HomesGuests';
import { useHotelsSearch } from '../../contexts/HotelsSearchContext';

export const TripHouse = () => {
  const { filteredHotels } = useHotelsSearch();

  return (
    <>
      <section className='triphouse'>
        <div className='triphouse-content'>
          <div className='triphouse__heading'>Discover stays</div>
          <div className='triphouse__heading'>to live, work or just relax</div>
          <TripHouseForm />
          <TripHouseApps />
        </div>
      </section>
      <HomesGuests hotels={filteredHotels} isAvailableHotels={true} />
    </>
  );
};

export default TripHouse;
