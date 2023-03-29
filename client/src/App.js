import React, { Component } from 'react';

class App extends Component {
  state = {
    clubs: [],
  };

  componentDidMount() {
    fetch('http://localhost:3030/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ clubs: data.clubs });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { clubs } = this.state;

    return (
      <div>
        <h1 id='title'>Club List</h1>
        <ul>
          {clubs.map((club) => (
            <li key={club.id}>
              <h2 id={club.tla + '-title'}>{club.name}</h2>
              <p>{club.address}</p>
              <p>{club.phone}</p>
              <p>{club.website}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
