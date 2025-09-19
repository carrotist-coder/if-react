import React, { Component } from 'react';
import './TripHouse.css';
import TripHouseForm from './TripHouseForm';
import TripHouseApps from './TripHouseApps';
import HomesGuests from '../HomesGuestsLove/HomesGuests';
import axios from 'axios';
import { API_HOTELS_URL } from '../../services';

export class TripHouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredHotels: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = (searchTerm) => {
    axios
      .get(API_HOTELS_URL, {
        params: {
          search: searchTerm.toLowerCase(),
        },
      })
      .then((res) => {
        this.setState({ filteredHotels: res.data });
      });
  };

  render() {
    return (
      <>
        <section className='triphouse'>
          <div className='triphouse-content'>
            <div className='triphouse__heading'>Discover stays</div>
            <div className='triphouse__heading'>
              to live, work or just relax
            </div>
            <TripHouseForm handleSearch={this.handleSearch} />
            <TripHouseApps />
          </div>
        </section>
        <HomesGuests
          hotels={this.state.filteredHotels}
          isAvailableHotels={true}
        />
      </>
    );
  }
}

export default TripHouse;
