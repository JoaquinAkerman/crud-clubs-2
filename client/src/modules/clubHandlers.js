export const handleClubSelect = (club, callback) => {
  callback({ selectedClub: club, showDetails: true });
};

export const handleCloseDetails = (callback) => {
  callback({ showDetails: false });
};
