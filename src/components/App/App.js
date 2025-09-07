import '../../index.css';
import Advantages from '../Advantages/Advantages';
import HomesGuests from '../HomesGuestsLove/HomesGuests';
import { hotelsData } from '../../utils/hotelsData';
import TripHouse from '../TripHouse/TripHouse';

export const App = () => {
  return (
    <>
      <TripHouse />
      <HomesGuests hotels={hotelsData} isAvailableHotels={true} />
      <Advantages />
      <HomesGuests hotels={hotelsData} />
    </>
  );
};
