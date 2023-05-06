import { serverBaseUrl } from "./serverUrl";

const serverDeleteClubUrl = `${serverBaseUrl}/clubs/delete`;

export const fetchClubs = () => {
  return fetch(serverBaseUrl)
    .then((res) => res.json())
    .then((data) => data.clubs)
    .catch((error) => {
      console.error("Error fetching clubs:", error);
      throw error;
    });
};

export const handleDelete = (club) => {
  const confirmed = window.confirm(
    `Are you sure you want to delete the club "${club.name}"?`
  );
  if (confirmed) {
    fetch(`${serverDeleteClubUrl}/${club.id}`, {
      method: "delete",
    })
      .then((res) => {
        if (res.ok) {
          // Reload the club list after deletion
          window.location.reload();
        } else {
          return res.json().then((error) => {
            throw new Error(error.message);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export const handleUpdate = (club) => {
  console.log(club);
  return fetch(`${serverBaseUrl}/clubs/update/${club.id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(club),
  })
    .then((res) => {
      if (res.ok) {
      } else {
        return res.json().then((error) => {
          console.log(error);
          throw new Error(error.message);
        });
      }
    })
    .catch((error) => {
      console.log("paso esto " + error);
      console.log("club que causa el error " + club.name);
    });
};

export const handleResetClubsClick = () => {
  fetch(`${serverBaseUrl}/reset-clubs`, {
    method: "POST",
  })
    .then((response) => {
      if (response.ok) {
        window.location.reload();
      } else {
        console.log("Failed to reset clubs");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
