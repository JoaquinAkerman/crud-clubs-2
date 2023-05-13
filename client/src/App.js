


import React, { Component } from 'react';

import ClubDetails from './Components/ClubDetails';
import ClubList from './Components/ClubList';
import Navbar from './Components/Navbar';
import Title from './Components/Title';

import { handleCloseDetails, handleClubSelect } from './modules/clubHandlers';
import { fetchClubs } from './modules/api';

import './App.css';

class App extends Component {
  // Initializing state
  state = {
    clubs: [],          // An array of club objects
    selectedClub: null, // The currently selected club object
    showDetails: false, // Whether or not to show the details of a selected club
  };

  // Fetching club data from the API when the component mounts
  componentDidMount() {
    fetchClubs()
      .then((clubs) => {
        this.setState({ clubs });
      })
      .catch((err) => console.log(err));
  }

      // Handling the selection of a club
  handleClubSelect = (club) => {
    // Calling the handleClubSelect function from clubHandlers.js
    // and passing it the selected club object and a reference to the setState function
    handleClubSelect(club, this.setState.bind(this));
  };
  
  // Handling the closing of the club details modal
  handleCloseDetails = () => {
    // Calling the handleCloseDetails function from clubHandlers.js
    // and passing it a reference to the setState function
    handleCloseDetails(this.setState.bind(this));
  };


  renderClubDetailsModal() {
    const { selectedClub } = this.state;
  
    return (
      <div className='club-details'>
        <ClubDetails
          club={selectedClub}
          onClose={this.handleCloseDetails}
        />
      </div>
    );
  }
  
  renderClubList() {
    const { clubs } = this.state;
  
    return (
      <ClubList
        clubs={clubs}
        onClubSelect={this.handleClubSelect}
      />
    );
  }
  
  render() {
    const { showDetails } = this.state;
  
    return (
      <div id='app'>
        <Navbar />
        <Title />
  
        {showDetails && this.renderClubDetailsModal()}
        {!showDetails && this.renderClubList()}
      </div>
    );
  }
  
}

export default App;
