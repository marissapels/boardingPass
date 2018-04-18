// AIzaSyD0grZOXrVTXdPcZWuH5bIY8uP6_CiAxfc

import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyD0grZOXrVTXdPcZWuH5bIY8uP6_CiAxfc&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap 
    defaultZoom={8} 
    defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    )}
  </GoogleMap>
));

export class MapView extends Component {
  state = {
    isMarkerShown: true,
  }

  // componentDidMount() {
  //   this.delayedShowMarker()
  // }

  // delayedShowMarker = () => {
  //   setTimeout(() => {
  //     this.setState({ isMarkerShown: true })
  //   }, 3000)
  // }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}