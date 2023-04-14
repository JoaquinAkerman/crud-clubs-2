import { handleClubSelect, handleCloseDetails } from '../modules/clubHandlers';

describe('handleClubSelect', () => {
  it('debería actualizar el estado con el club seleccionado', () => {
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
  it('debería actualizar el estado para ocultar los detalles', () => {
    const callback = jest.fn();
    handleCloseDetails(callback);
    expect(callback).toHaveBeenCalledWith({ showDetails: false });
  });
});
