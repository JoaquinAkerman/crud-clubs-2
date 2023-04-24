import React from 'react';
import { serverBaseUrl } from '../modules/serverUrl';

const serverImagesBaseUrl = `${serverBaseUrl}/public/static/images/`;

const ClubList = ({ clubs, onClubSelect }) => {
  const handleClick = (club) => {
    onClubSelect(club);
  };
  return (
    <div>
      <div id='clubs-container'>
        <ul>
          {clubs.map((club) => (
            <li
              key={club.id}
              className='club-container'
            >
              <img
                src={serverImagesBaseUrl + club.id + '.png'}
                alt={club.name}
                className='club-image'
              />
              <div className='club-info'>
                <h2 id={club.tla + '-title'}>{club.name}</h2>
                <p>{club.address}</p>
                <p>{club.phone}</p>
                <p>
                  <a href={club.website}>{club.website}</a>
                </p>
              </div>
              <div className='club-buttons'>
                <button
                  className='btn btn-info'
                  onClick={() => handleClick(club)}
                >
                  Details
                </button>{' '}
                <button className='btn btn-warning'>Edit club</button>
                <button className='btn btn-danger'>Delete club</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClubList;
