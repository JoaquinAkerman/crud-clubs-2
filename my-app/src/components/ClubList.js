import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ClubList() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    axios
      .get('/api/clubs')
      .then((response) => {
        setClubs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Clubes</h1>
      <ul>
        {clubs.map((club) => (
          <li key={club.id}>
            <a href={`/clubs/${club.id}`}>{club.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClubList;
