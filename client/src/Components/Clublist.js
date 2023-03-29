import React from 'react';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <a
        class='navbar-brand'
        href='/'
      >
        CRUD Clubs
      </a>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span class='navbar-toggler-icon'></span>
      </button>

      <div
        class='collapse navbar-collapse'
        id='navbarNav'
      >
        <ul class='navbar-nav mr-auto'>
          <li class='nav-item'>
            <a
              class='nav-link'
              href='/'
            >
              Home
            </a>
          </li>
          <li class='nav-item'>
            <a
              class='nav-link'
              href='/clubs/new'
            >
              Create Club
            </a>
          </li>
        </ul>
        <ul class='navbar-nav'>
          <li class='nav-item'>
            <form
              method='post'
              action='/reset-clubs'
            >
              <button
                class='btn btn-info'
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

const ClubList = ({ clubs }) => {
  return (
    <div id='app'>
      <Navbar />
      <h1 id='title'>Club List</h1>
      <ul>
        {clubs.map((club) => (
          <li
            key={club.id}
            className='club-container'
          >
            <img
              src={club.image}
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
              <button class='btn btn-info'>Ver club</button>
              <button class='btn btn-warning'>Editar club</button>
              <button class='btn btn-danger'>Borrar club</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClubList;
