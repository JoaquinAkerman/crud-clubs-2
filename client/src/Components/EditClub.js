import React, { useState } from "react";
import ClubForm from "./ClubForm";
import { serverBaseUrl } from "../modules/serverUrl";

const ClubEdit = ({ club, onClose, onUpdate }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUpdate = async (updatedClub) => {
    try {
      setIsSubmitting(true);
      const response = await fetch(`${serverBaseUrl}/clubs/edit/${club.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedClub),
      });
      if (response.ok) {
        onUpdate(updatedClub);
        onClose();
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error);
      }
    } catch (error) {
      setErrorMessage(error.toString());
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Edit Club</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <ClubForm club={club} onSubmit={handleUpdate} isSubmitting={isSubmitting} />
      <button className="btn btn-danger" onClick={onClose}>
        Cancel
      </button>
    </div>
  );
};

export default ClubEdit;

