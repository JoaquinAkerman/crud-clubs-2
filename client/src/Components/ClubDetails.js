import React from "react";

import Map from "./Map";
import { serverBaseUrl } from "../modules/serverUrl";
import { fetchClubs } from "../modules/api";

const ClubDetails = ({
  club: {
    id,
    name,
    shortName,
    tla,
    address,
    phone,
    website,
    email,
    founded,
    clubColors,
    venue,
    latitude,
    longitude,
  },
  onClose,
}) => {
  const serverImagesBaseUrl = `${serverBaseUrl}/public/static/images/`;
  const clubImagePath = `${serverImagesBaseUrl}${id}.png`;
  // eslint-disable-next-line no-unused-vars
  const [clubDetails, setClubDetails] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    fetchClubs()
      .then((data) => {
        setClubDetails(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div
      className="club-details-container"
      style={{
        backgroundImage: `url("${serverImagesBaseUrl}backgroundSoccer3.jpg")`,
      }}
    >
      
      <h2 id={`clubName${tla}`}>{name}</h2>
      <img
        className="club-image-details"
        src={clubImagePath}
        alt={`${name} logo`}
      />

      <div className="club-info">
      <p>ID: {id}</p>
      <p>Shortname: {shortName}</p>
      <p>TLA: {tla}</p>
      <p>Address: {address}</p>
      <p>Phone: {phone}</p>
      <p>
        Website: <a href={website}>{website}</a>
      </p>
      <p>Email: {email}</p>
      <p>Founded: {founded}</p>
      <p>Club colors: {clubColors}</p>
      <p>Venue: {venue}</p>
      <Map latitude={parseFloat(latitude)} longitude={parseFloat(longitude)} />
      </div>
      <button className="btn btn-danger close-details-button" onClick={onClose}>
        Close
      </button>
      {loading ? <div>Loading...</div> : null}
    </div>
  );
};

export default ClubDetails;
