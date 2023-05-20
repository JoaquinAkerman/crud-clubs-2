import React from "react";

import { serverBaseUrl } from "../modules/serverUrl";

export const NewClubForm = () => {
  const serverNewClubBaseUrl = `${serverBaseUrl}/new`;
  const serverImagesBaseUrl = `${serverBaseUrl}/public/static/images/`;
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="new-club-form"
      style={{
        backgroundImage: `url("${serverImagesBaseUrl}newClubBackground.jpg")`,
      }}
    >
      <h1 style={{ color: "whitesmoke" }}>New club</h1>

      <form action={serverNewClubBaseUrl} method="POST">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="E.g. Club Atlético Independiente"
          />
        </div>
        <div className="form-group">
          <label htmlFor="shortName">Shortname:</label>
          <input
            type="text"
            id="shortName"
            name="shortName"
            placeholder="Club Shortname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="tla">TLA:</label>
          <input type="text" id="tla" name="tla" placeholder="Club TLA" />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Club address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Club phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website:</label>
          <input
            type="text"
            id="website"
            name="website"
            placeholder="www.clubexample.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="eg@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="founded">Founded:</label>
          <input
            type="number"
            id="founded"
            name="founded"
            min="0"
            max={toString(currentYear)}
            placeholder="1882"
          />
        </div>
        <div className="form-group">
          <label htmlFor="clubColors">Club colors:</label>
          <input
            type="text"
            id="clubColors"
            name="clubColors"
            placeholder="Club colors"
          />
        </div>
        <div className="form-group">
          <label htmlFor="venue">Venue:</label>
          <input type="text" id="venue" name="venue" placeholder="Club Venue" />
        </div>
        <div className="location-group">
          <div className="form-group">
            <label htmlFor="latitude">Latitude:</label>
            <input
              type="number"
              id="latitude"
              name="latitude"
              min="-90"
              max="90"
              step="any"
              defaultValue={-34.670267}
            />
          </div>
          <div className="form-group">
            <label htmlFor="longitude">Longitude:</label>
            <input
              type="number"
              id="longitude"
              name="longitude"
              min="-180"
              max="180"
              step="any"
              defaultValue={-58.370969}
            />
          </div>
        </div>
        <div className="new-club-form-buttons">
          <button
            id="save-button"
            type="submit"
            className="btn btn-primary save-button"
          >
            Save
          </button>
        </div>
      </form>
      <button
        id="cancel-button"
        onClick={() => {
          window.location.href = "/";
        }}
        className="btn btn-secondary cancel-button"
      >
        Cancel
      </button>
    </div>
  );
};
