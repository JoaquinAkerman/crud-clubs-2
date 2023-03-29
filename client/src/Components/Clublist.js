import React from 'react';
import { serverBaseUrl } from '../modules/serverUrl';

const serverImagesBaseUrl = `${serverBaseUrl}public/static/images/`;

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a
        className='navbar-brand'
        href='/'
      >
        CRUD Clubs
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div
        className='collapse navbar-collapse'
        id='navbarNav'
      >
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <a
              className='nav-link'
              href='/'
            >
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='nav-link'
              href='/clubs/new'
            >
              Create Club
            </a>
          </li>
        </ul>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <form
              method='post'
              action='/reset-clubs'
            >
              <button
                className='btn btn-info'
                type='submit'
              >
                Reset Clubs
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Title = () => {
  return (
    <div className='title-container'>
      <h1 id='title'>Club List</h1>
      <img
        src={serverImagesBaseUrl + 'soccer-ball.png'}
        alt='Soccer ball'
        className='soccer-ball-img'
      />
    </div>
  );
};

const ClubList = ({ clubs }) => {
  return (
    <div id='app'>
      <Navbar />
      <Title />
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
              <button className='btn btn-info'>Ver club</button>
              <button className='btn btn-warning'>Editar club</button>
              <button className='btn btn-danger'>Borrar club</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClubList;
