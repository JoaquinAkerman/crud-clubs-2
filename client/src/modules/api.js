import { serverBaseUrl } from "./serverUrl";

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
  const serverDeleteClubUrl = `${serverBaseUrl}/delete`;
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

  // check that the club object has the required properties
  const requiredProperties = ["name", "shortName"];
  const missingProperties = requiredProperties.filter((prop) => !(prop in club));
  if (missingProperties.length > 0) {
    throw new Error(`Missing properties: ${missingProperties.join(", ")}`);
  }

  return fetch(`${serverBaseUrl}/edit/${club.id}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(club),
  })
    .then((res) => {
      if (res.status === 200) {
        window.location.reload();
      } else {
        return res.json().then((error) => {
          console.log(error);
          throw new Error(error.message);
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};


export const handleResetClubsClick = () => {
  const confirmed = window.confirm("Are you sure you want to reset the clubs?");
  if (confirmed) {
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
  }
};
