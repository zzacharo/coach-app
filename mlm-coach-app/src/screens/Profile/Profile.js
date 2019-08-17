import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Profile extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Create ride view</Text>
      </View>
    );
  }
}
