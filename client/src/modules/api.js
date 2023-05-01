import { serverBaseUrl } from './serverUrl';

const serverDeleteClubUrl = `${serverBaseUrl}/clubs/delete`;

export const fetchClubs = () => {
  return fetch(serverBaseUrl)
    .then((res) => res.json())
    .then((data) => data.clubs);
};

export const handleDelete = (club) => {
  const confirmed = window.confirm(`Are you sure you want to delete the club "${club.name}"?`);
  if (confirmed) {
    fetch(`${serverDeleteClubUrl}/${club.id}`, {
      method: 'delete',
    })
      .then((res) => {
        if (res.ok) {
          console.log('Club deleted successfully');
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
