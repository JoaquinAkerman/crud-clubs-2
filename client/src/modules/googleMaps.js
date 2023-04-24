const API_KEY = 'AIzaSyA30HqABmcJSuK0SDTJh4Y6aZHj3LyQCKI';

const loadMapScript = () => {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps) {
      resolve();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        console.log('map script loaded successfully');
        resolve();
      };
      script.onerror = () => {
        reject(new Error('Failed to load Google Maps API'));
      };
      document.head.appendChild(script);

      // Set a timeout to reject the promise if the script doesn't load within a reasonable amount of time
      const timeoutId = setTimeout(() => {
        reject(new Error('Timed out while loading Google Maps API'));
      }, 10000); // 10 seconds

      // Clear the timeout when the script loads successfully
      script.onload = () => {
        clearTimeout(timeoutId);
        resolve();
      };
    }
  });
};

export { loadMapScript, API_KEY };
