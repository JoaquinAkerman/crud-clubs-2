import React, { Component } from 'react';

import ClubList from './Components/Clublist';
import ClubDetails from './Components/ClubDetails';
import './App.css';
import { fetchClubs } from './modules/api';
import Navbar from './Components/Navbar';
import Title from './Components/Title';
import { handleClubSelect, handleCloseDetails } from './modules/clubHandlers';

class App extends Component {
  state = {
    clubs: [],
    selectedClub: null,
    showDetails: false,
  };

  componentDidMount() {
    fetchClubs()
      .then((clubs) => {
        this.setState({ clubs });
      })
      .catch((err) => console.log(err));
  }

  handleClubSelect = (club) => {
    handleClubSelect(club, this.setState.bind(this));
  };

  handleCloseDetails = () => {
    handleCloseDetails(this.setState.bind(this));
  };

  render() {
    const { clubs, selectedClub, showDetails } = this.state;

    return (
      <div id='app'>
        <Navbar />
        <Title />
        {showDetails && selectedClub && (
          <div className='club-details'>
            <ClubDetails
              club={selectedClub}
              onClose={this.handleCloseDetails}
            />
          </div>
        )}
        {!showDetails && (
          <ClubList
            clubs={clubs}
            onClubSelect={this.handleClubSelect}
          />
        )}
      </div>
    );
  }
}

export default App;
