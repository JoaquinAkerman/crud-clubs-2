import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ClubDetail(props) {
  const [club, setClub] = useState({});

  useEffect(() => {
    const { id } = props.match.params;
    axios
      .get(`/api/clubs/${id}`)
      .then((response) => {
        setClub(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.match.params]);

  return (
    <div>
      <h1>{club.name}</h1>
      <p>{club.description}</p>
      <p>Última actualización: {club.lastUpdated}</p>
    </div>
  );
}

export default ClubDetail;
