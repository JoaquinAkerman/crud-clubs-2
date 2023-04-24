import { serverBaseUrl } from './serverUrl';

export const fetchClubs = () => {
  return fetch(serverBaseUrl)
    .then((res) => res.json())
    .then((data) => data.clubs);
};
