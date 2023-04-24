import { handleClubSelect, handleCloseDetails } from '../modules/clubHandlers';

describe('handleClubSelect', () => {
  it('should update state with selected club', () => {
    const callback = jest.fn();
    const club = { id: 1, name: 'Club 1' };
    handleClubSelect(club, callback);
    expect(callback).toHaveBeenCalledWith({
      selectedClub: club,
      showDetails: true,
    });
  });
});

describe('handleCloseDetails', () => {
  it('should update state for hide details', () => {
    const callback = jest.fn();
    handleCloseDetails(callback);
    expect(callback).toHaveBeenCalledWith({ showDetails: false });
  });
});
