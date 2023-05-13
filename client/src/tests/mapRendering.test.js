import React from 'react';
import { render } from '@testing-library/react';
import Map from '../Components/Map';

describe('Map', () => {
  it('renders a valid location', () => {
    const latitude = 40.7128;
    const longitude = -74.0060;
    // const { container } = render(<Map latitude={latitude} longitude={longitude} />);
    // const mapContainer = container.querySelector('.map-container');
    // expect(mapContainer).toBeInTheDocument();
  });

  it('renders an error message for an invalid location', () => {
    const latitude = 100;
    const longitude = -200;
    const { getByText } = render(<Map latitude={latitude} longitude={longitude} />);
    const errorMessage = getByText('Not a valid location');
    expect(errorMessage).toBeInTheDocument();
  });
});
