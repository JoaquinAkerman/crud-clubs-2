import React from 'react';
import { render, screen } from '@testing-library/react';
import ClubDetails from '../Components/ClubDetails';

const testClub = {
  id: 'TEST_CLUB_ID',
  name: 'Test Club',
  shortName: 'Test',
  tla: 'TST',
  address: '123 Test St',
  phone: '555-1234',
  website: 'http://testclub.com',
  email: 'info@testclub.com',
  founded: '1970',
  clubColors: 'Red / White',
  venue: 'Test Stadium',
  latitude: 0,
  longitude: 0,
};

jest.mock('../Components/Map', () => {
  return function MockMap() {
    return <div data-testid='mock-map' />;
  };
});

describe('ClubDetails', () => {
  beforeEach(() => {
    jest.spyOn(window, 'fetch');
    window.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue({ club: testClub }),
    });
  });

  afterEach(() => {
    window.fetch.mockRestore();
  });

  it('renders club details', async () => {
    render(
      <ClubDetails
        club={testClub}
        onClose={jest.fn()}
      />,
    );
    await screen.findByRole('heading', { name: /Test Club/i });
    expect(screen.getByText(`ID: ${testClub.id}`)).toBeInTheDocument();
    expect(screen.getByText(`Shortname: ${testClub.shortName}`)).toBeInTheDocument();
    expect(screen.getByText(`TLA: ${testClub.tla}`)).toBeInTheDocument();
    expect(screen.getByTestId('mock-map')).toBeInTheDocument();
  });

  it('displays "Loading..." while club details are being fetched', () => {
    render(
      <ClubDetails
        club={testClub}
        onClose={() => {}}
      />,
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
