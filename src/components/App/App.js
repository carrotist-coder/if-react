import '../../index.css';
import Advantages from '../Advantages/Advantages';
import HomesGuests from '../HomesGuestsLove/HomesGuests';
import { hotelsData } from '../../utils/hotelsData';

export const App = () => {
  return (
    <>
      <Advantages />
      <HomesGuests hotels={hotelsData} />
    </>
  );
};
