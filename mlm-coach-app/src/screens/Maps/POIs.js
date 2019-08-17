import { Marker } from "react-native-maps";
import React from "react";
const POIs = props =>
  props.pois.map(poi => (
    <Marker coordinate={poi.latlng} title={poi.name} key={poi.id} />
  ));

export default POIs;
