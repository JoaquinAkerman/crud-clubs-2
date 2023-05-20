import { useState } from "react";

import { NewClubForm } from "./NewClubForm";
import { handleResetClubsClick } from "../modules/api";

const Navbar = () => {
  const [showClubForm, setShowClubForm] = useState(false);

  const handleCreateClubClick = () => {
    setShowClubForm(true);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a id="crud-clubs-anchor" className="navbar-brand" href="/">
          CRUD Clubs
        </a>
        <button
          id="navbar-toggler-button"
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <button
                id="create-club-button"
                className="nav-link btn btn-link"
                onClick={handleCreateClubClick}
              >
                Create Club
              </button>
            </li>
            <li className="nav-item">
              <a id="bottom-anchor" className="nav-link " href="#bottom-a">
                Bottom
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                id="reset-clubs-button"
                className="btn btn-info"
                type="button"
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
