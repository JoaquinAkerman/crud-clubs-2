import { loadMapScript, API_KEY } from '../modules/googleMaps';
describe('loadMapScript', () => {
  jest.setTimeout(10000);
  test('loads Google Maps API', async () => {
    const script = document.createElement('script');
    script.onload = jest.fn(() => {
      expect(script.src).toBe(`https://maps.googleapis.com/maps/api/js?key=${API_KEY}`);
      expect(window.google && window.google.maps).toBeDefined();
    });
    jest.spyOn(document.head, 'appendChild').mockImplementationOnce(() => {
      document.head.appendChild(script);
    });
  });

  test('resolves promise if Google Maps API is already loaded', async () => {
    window.google = {
      maps: {},
    };

    const promise = loadMapScript();
    const result = await promise;

    expect(result).toBeUndefined();
  });

  test('rejects promise if Google Maps API fails to load', async () => {
    delete window.google;
    jest.spyOn(document.head, 'appendChild').mockImplementationOnce(() => {
      throw new Error('Failed to load Google Maps API');
    });

    await expect(loadMapScript()).rejects.toThrow('Failed to load Google Maps API');
  });
});
