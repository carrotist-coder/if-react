import React from 'react';
import './TripHouse.css';
import TripHouseForm from './TripHouseForm';
import TripHouseApps from './TripHouseApps';

const TripHouse = () => {
  return (
    <section className='triphouse'>
      <div className='triphouse-content'>
        <div className='triphouse__heading'>Discover stays</div>
        <div className='triphouse__heading'>to live, work or just relax</div>
        <TripHouseForm />
        <TripHouseApps />
      </div>
    </section>
  );
};

export default TripHouse;
