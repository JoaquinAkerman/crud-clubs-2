import { useState } from 'react';

import { NewClubForm } from './NewClubForm';
import { handleResetClubsClick } from '../modules/api';



const Navbar = () => {
  const [showClubForm, setShowClubForm] = useState(false);

  const handleCreateClubClick = () => {
    setShowClubForm(true);
  };

  

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='/'>
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

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <button
                className='nav-link btn btn-link'
                onClick={handleCreateClubClick}
              >
                Create Club
              </button>
            </li>
            <li className='nav-item'>
              <a className='nav-link ' href='#bottom-a'>
                Bottom
              </a>
            </li>
          </ul>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <button
                className='btn btn-info'
                type='button'
                onClick={handleResetClubsClick}
              >
                Reset Clubs
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {showClubForm && <NewClubForm onClose={() => setShowClubForm(false)} />}
    </div>
  );
};

export default Navbar;
