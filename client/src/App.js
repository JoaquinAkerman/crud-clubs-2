import React, { Component } from 'react';

import ClubList from './Components/Clublist';
import './App.css';
import { serverBaseUrl } from './modules/serverUrl';

class App extends Component {
  state = {
    clubs: [],
  };

  componentDidMount() {
    fetch(serverBaseUrl)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ clubs: data.clubs });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { clubs } = this.state;

    return <ClubList clubs={clubs} />;
  }
}

export default App;
