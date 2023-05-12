import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.mapRef = React.createRef();
    this.validLocation = true;
  }

  componentDidMount() {
    const { latitude, longitude } = this.props;
  
    if (isNaN(latitude) || isNaN(longitude) || latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
      this.validLocation = false;
      this.forceUpdate(); // Trigger a re-render
      return;
    }
  
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
    if (!this.validLocation) {
      return (
        <div className="map-error-container">
          <p className="map-error-message">Not a valid location</p>
        </div>
      );
    }
  
    return <div className="map-container" ref={this.mapRef} />;
  }
}

export default Map;
