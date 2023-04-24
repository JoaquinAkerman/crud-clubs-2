import { fetchClubs } from '../modules/api';

describe('fetchClubs', () => {
  test('returns clubs from API', async () => {
    const mockResponse = {
      clubs: [
        { id: 1, name: 'Club A' },
        { id: 2, name: 'Club B' },
      ],
    };
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockResponse),
    });

    const clubs = await fetchClubs();

    expect(clubs).toEqual(mockResponse.clubs);
  });
});
