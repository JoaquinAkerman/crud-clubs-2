import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const { latitude, longitude } = this.props;

    // create map
    this.map = new window.google.maps.Map(this.mapRef.current, {
      center: { lat: latitude, lng: longitude },
      zoom: 16,
    });

    // Add marker
    new window.google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: this.map,
    });
  }

  render() {
    return (
      <div
        className='map-container'
        ref={this.mapRef}
      />
    );
  }
}

export default Map;
