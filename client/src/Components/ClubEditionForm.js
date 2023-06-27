import React from "react";

const ClubEditionForm = ({ editClub, handleUpdateClub, handleCancelUpdate }) => {
  return (
    <div className="edit-club-form">
      <h3>Edit Club</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdateClub({
                  ...editClub,
                  name: e.target.name.value,
                  shortName: e.target.shortName.value,
                  tla: e.target.tla.value,
                  address: e.target.address.value,
                  phone: e.target.phone.value,
                  website: e.target.website.value,
                  email: e.target.email.value,
                  founded: e.target.founded.value,
                  clubColors: e.target.clubColors.value,
                  venue: e.target.venue.value,
                  latitude: e.target.latitude.value,
                  longitude: e.target.longitude.value,
                });
              }}
            >
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" defaultValue={editClub.name} />
              </div>
              <div>
                <label htmlFor="shortName">Shortname:</label>
                <input
                  type="text"
                  id="shortName"
                  defaultValue={editClub.shortName}
                />
              </div>
              <div>
                <label htmlFor="tla">TLA:</label>
                <input type="text" id="tla" defaultValue={editClub.tla} />
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
                <input type="text" id="phone" defaultValue={editClub.phone} />
              </div>
              <div>
                <label htmlFor="website">Website:</label>
                <input
                  type="text"
                  id="website"
                  defaultValue={editClub.website}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" defaultValue={editClub.email} />
              </div>
              <div>
                <label htmlFor="founded">Founded:</label>
                <input
                  type="number"
                  id="founded"
                  defaultValue={editClub.founded}
                  min={0}
                />
              </div>
              <div>
                <label htmlFor="latitude">Latitude:</label>
                <input
                  type="number"
                  id="latitude"
                  defaultValue={editClub.latitude}
                  min={-90}
                  max={90}
                  step="any"
                />
              </div>
              <div>
                <label htmlFor="longitude">Longitude:</label>
                <input
                  type="number"
                  id="longitude"
                  defaultValue={editClub.longitude}
                  min={-180}
                  max={180}
                  step="any"
                />
              </div>

              <div>
                <label htmlFor="clubColors">Club colors:</label>
                <input
                  type="text"
                  id="clubColors"
                  defaultValue={editClub.clubColors}
                />
              </div>
              <div>
                <label htmlFor="venue">Venue:</label>
                <input type="text" id="venue" defaultValue={editClub.venue} />
              </div>

              <div className="form-buttons">
                <button className="btn btn-primary" type="submit">
                  Update
                </button>
                <button className="btn btn-danger" onClick={handleCancelUpdate}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
  );
};

export {ClubEditionForm}