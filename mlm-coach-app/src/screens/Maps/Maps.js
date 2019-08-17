import MapView, { Marker } from "react-native-maps";
import React, { Component } from "react";
import { Platform } from "react-native";
import POIs from "./POIs";

type Props = {};
export default class Maps extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      showsUserLocation: props.showsUserLocation || true,
      pois: props.pois || []
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <MapView
        showsUserLocation={this.state.showsUserLocation}
        rotateEnabled={false}
        style={{ flex: 1 }}
        showsUserLocation={true}
        followsUserLocation={true}
        showsMyLocationButton={true}
        mapType="standard"
      >
        <POIs pois={this.state.pois} />
      </MapView>
    );
  }
}
