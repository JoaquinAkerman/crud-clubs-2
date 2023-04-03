const API_KEY = 'AIzaSyA30HqABmcJSuK0SDTJh4Y6aZHj3LyQCKI';

export const loadMapScript = () => {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps) {
      resolve();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
      console.log(script.src);
      script.async = true;
      script.defer = true;
      script.onload = () => {
        resolve();
      };
      script.onerror = () => {
        reject(new Error('Failed to load Google Maps API'));
      };
      document.head.appendChild(script);
    }
  });
};
