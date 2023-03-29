import React, { Component } from 'react';

import ClubList from './Components/Clublist';
import './App.css';

class App extends Component {
  state = {
    clubs: [],
  };

  componentDidMount() {
    fetch('http://localhost:3030/')
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
