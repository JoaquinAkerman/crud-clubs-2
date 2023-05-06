

import React, { useState } from "react";

import { handleDelete, handleUpdate } from "../modules/api";
import { serverBaseUrl } from "../modules/serverUrl";
const serverImagesBaseUrl = `${serverBaseUrl}/public/static/images/`;

const ClubList = ({ clubs, onClubSelect }) => {
  const [editClub, setEditClub] = useState(null);

  const handleClick = (club) => {
    onClubSelect(club);
  };

  const handleEdit = (club) => {
    setEditClub(club);
  };

  const handleCancel = () => {
    setEditClub(null);
  };

  const handleUpdateClub = (updatedClub) => {
    console.log(updatedClub);
    handleUpdate(updatedClub)
      .then(() => {
        setEditClub(null);
      })
      .catch((err) => console.error(err));
  };

  const renderClubItem = (club) => {
    return (
      <li key={club.id} className="club-container">
        <div className="club-logo-container">
          <img
            src={`${serverImagesBaseUrl}${club.id}.png`}
            alt={`${club.name} logo`}
            className="club-image"
          />
        </div>
        <div className="club-info">
          <h2 id={`${club.tla}-title`}>{club.name}</h2>
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
          <button className="btn btn-warning" onClick={() => handleEdit(club)}>
            Edit club
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(club)}
          >
            Delete club
          </button>
        </div>

        {editClub && editClub.id === club.id && (
          <div className="edit-club-form">
            <h3>Edit Club</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleUpdateClub({
                ...editClub,
                name: e.target.name.value,
                address: e.target.address.value,
                phone: e.target.phone.value,
                website: e.target.website.value,
              });
            }}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  defaultValue={editClub.name}
                />
              </div>
              <div>
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  defaultValue={editClub.address}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  id="phone"
                  defaultValue={editClub.phone}
                />
              </div>
              <div>
                <label htmlFor="website">Website:</label>
                <input
                  type="text"
                  id="website"
                  defaultValue={editClub.website}
                />
              </div>
              <div className="form-buttons">
                <button className="btn btn-primary" type="submit">
                  Update
                </button>
                <button className="btn btn-danger" onClick={handleCancel}>
                Cancel
                </button>
              </div>
            </form>
          </div>
        )}
            <div className="upload-image-container">
      <span className="upload-label">Upload club logo</span>
      <form
        action={`${serverBaseUrl}/clubs/upload/${club.id}`}
        method="POST"
        encType="multipart/form-data"
      >
        <input
          className="upload-input"
          type="file"
          name="clubLogo"
          accept=".png"
        />
        <button className="btn btn-primary" type="submit">
          Upload image
        </button>
      </form>
    </div>
  </li>
);
};

return (
<div>
<div id="clubs-container">
<ul>{clubs.map((club) => renderClubItem(club))}</ul>
</div>
<a id="bottom-a" className="bottom-anchor" href="#app">
Top
</a>
</div>
);
};

export default ClubList;