import React from 'react';

import Map from './Map';
import { serverBaseUrl } from '../modules/serverUrl';

const ClubDetails = ({ club, onClose }) => {
  const { id } = club;
  const imagePath = `${serverBaseUrl}/public/static/images/${id}.png`;
  const [clubDetails, setClubDetails] = React.useState(null);

  React.useEffect(() => {
    fetch(`${serverBaseUrl}/clubs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setClubDetails(data.club);
      })
      .catch((err) => console.log(err));
  }, [id]);
  if (!clubDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='clubDetails-container'>
      <h2>{clubDetails.name}</h2>
      <img
        src={imagePath}
        alt={clubDetails.name}
      />
      <p>ID: {clubDetails.id}</p>
      <p>Shortname: {clubDetails.shortName}</p>
      <p>TLA: {clubDetails.tla}</p>
      <p>Address: {clubDetails.address}</p>
      <p>Phone: {clubDetails.phone}</p>
      <p>
        Website: <a href={clubDetails.website}>{clubDetails.website}</a>
      </p>
      <p>Email: {clubDetails.email}</p>
      <p>Founded: {clubDetails.founded}</p>
      <p>Club colors: {clubDetails.clubColors}</p>
      <p>Venue: {clubDetails.venue}</p>
      <Map
        latitude={clubDetails.latitude}
        longitude={clubDetails.longitude}
      />
      <button
        className='btn btn-danger'
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default ClubDetails;

////////////////////////
