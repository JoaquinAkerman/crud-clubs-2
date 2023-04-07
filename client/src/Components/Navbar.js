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

export default Navbar;