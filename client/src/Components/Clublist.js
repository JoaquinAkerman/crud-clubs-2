import React from "react";

import { handleDelete } from "../modules/api";
import { serverBaseUrl } from "../modules/serverUrl";

const ClubList = ({ clubs, onClubSelect }) => {
  const serverImagesBaseUrl = `${serverBaseUrl}/public/static/images/`;
  const handleClick = (club) => {
    onClubSelect(club);
  };

  return (
    <div>
      <div id="clubs-container">
        <ul>
          {clubs.map((club) => (
            <li key={club.id} className="club-container">
              <img
                src={serverImagesBaseUrl+club.id+".png"}
                alt={club.name+" logo"}
                className="club-image"
              />
              <div className="club-info">
                <h2 id={club.tla + "-title"}>{club.name}</h2>
                <p>{club.address}</p>
                <p>{club.phone}</p>
                <p>
                  <a href={club.website}>{club.website}</a>
                </p>
              </div>
              <div className="club-buttons">
                <button
                  className="btn btn-info"
                  onClick={() => handleClick(club)}
                >
                  Details
                </button>{" "}
                <button className="btn btn-warning">Edit club</button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(club)}
                >
                  Delete club
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <a className="bottom-anchor" href="/">
        Home
      </a>
    </div>
  );
};

export default ClubList;
