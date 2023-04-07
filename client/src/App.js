import React, { Component } from 'react';
import ClubList from './Components/Clublist';
import ClubDetails from './Components/ClubDetails';
import './App.css';
import { fetchClubs } from './modules/api';

class App extends Component {
  state = {
    clubs: [],
    selectedClub: null,
  };

  componentDidMount() {
    fetchClubs()
      .then((clubs) => {
        this.setState({ clubs });
      })
      .catch((err) => console.log(err));
  }

  handleClubSelect = (club) => {
    this.setState({ selectedClub: club });
  };

  render() {
    const { clubs, selectedClub } = this.state;

    return (
      <div id='app'>
        <ClubList
          clubs={clubs}
          onClubSelect={this.handleClubSelect}
        />
        {selectedClub && (
          <ClubDetails
            club={selectedClub}
            onClose={() => this.setState({ selectedClub: null })}
          />
        )}
      </div>
    );
  }
}

export default App;
