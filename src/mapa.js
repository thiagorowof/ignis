import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    console.log(this.props.latitude, this.props.longitude)

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '75vh', margin: 'auto'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB6JPZNNogbGgFIwD1xh4n9TkpbWAM5AXE'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          heatmapLibrary={true}
        >
          <AnyReactComponent
            lat={11}
            lng={22}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;