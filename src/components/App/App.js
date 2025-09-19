import '../../index.css';
import { Component } from 'react';
import Advantages from '../Advantages/Advantages';
import HomesGuests from '../HomesGuestsLove/HomesGuests';
import TripHouse from '../TripHouse/TripHouse';
import axios from 'axios';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homesGuestsHotels: [],
    };
    this.fetchHotels = this.fetchHotels.bind(this);
  }

  componentDidMount() {
    this.fetchHotels();
  }

  fetchHotels() {
    axios
      .get('https://if-student-api.onrender.com/api/hotels/popular', {})
      .then((res) => {
        this.setState({ homesGuestsHotels: res.data });
      });
  }

  render() {
    return (
      <>
        <TripHouse />
        <Advantages />
        <HomesGuests hotels={this.state.homesGuestsHotels} />
      </>
    );
  }
}
