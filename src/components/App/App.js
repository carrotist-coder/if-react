import '../../index.css';
import Advantages from '../Advantages/Advantages';
import HomesGuests from '../HomesGuestsLove/HomesGuests';
import TripHouse from '../TripHouse/TripHouse';
import axios from 'axios';
import { API_HOTELS_POPULAR_URL } from '../../services';
import { useEffect, useState } from 'react';
import { HotelsSearchProvider } from '../../contexts/HotelsSearchContext';

export const App = () => {
  const [homesGuestsHotels, setHomesGuestsHotels] = useState([]);

  const fetchHotels = () => {
    axios.get(API_HOTELS_POPULAR_URL, {}).then((res) => {
      setHomesGuestsHotels(res.data);
    });
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <HotelsSearchProvider>
      <TripHouse />
      <Advantages />
      <HomesGuests hotels={homesGuestsHotels} />
    </HotelsSearchProvider>
  );
};
