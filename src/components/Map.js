import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import config from "../../config/config"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <div>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
    {props.markerLocations.map((location, i) => {
      return (
        <Marker key={i} position={location} />
      )
    }
    )} 
    </GoogleMap>
  </div>
))

export class MapView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markerLocations: [{ lat: -34.397, lng: 150.644 }, { lat: -33.865143, lng: 151.2099 }]
    }
  }

  render() {
    return (
      <MyMapComponent 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.googleKey}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        markerLocations={this.state.markerLocations}
      />
    )
  }
}