import '../../index.css';
import Advantages from '../Advantages/Advantages';
import HomesGuests from '../HomesGuestsLove/HomesGuests';
import { hotelsData } from '../../utils/hotelsData';
import TripHouse from '../TripHouse/TripHouse';

export const App = () => {
  return (
    <>
      <TripHouse />
      <Advantages />
      <HomesGuests hotels={hotelsData} />
    </>
  );
};
