import '../../index.css';
import Advantages from '../Advantages/Advantages';
import HomesGuests from '../HomesGuestsLove/HomesGuests';
import { hotelsData } from '../../utils/hotelsData';
import TripHouse from '../TripHouse/TripHouse';
import AvailableHotels from '../HomesGuestsLove/AvailableHotels';

export const App = () => {
  return (
    <>
      <TripHouse />
      <AvailableHotels />
      <Advantages />
      <HomesGuests hotels={hotelsData} />
    </>
  );
};
