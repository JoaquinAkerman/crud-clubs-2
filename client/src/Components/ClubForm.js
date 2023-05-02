import React, { useState } from "react";

const ClubForm = ({ club, onUpdate }) => {
  const [name, setName] = useState(club.name);
  const [address, setAddress] = useState(club.address);
  const [phone, setPhone] = useState(club.phone);
  const [website, setWebsite] = useState(club.website);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedClub = {
      ...club,
      name,
      address,
      phone,
      website,
    };
    onUpdate(updatedClub);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="website">Website:</label>
        <input
          type="text"
          id="website"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default ClubForm;
