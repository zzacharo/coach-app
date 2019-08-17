import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.getCurrentUser = this.props.getCurrentUser.bind(this);
  }

  componentDidMount() {
    this.getCurrentUser(this.props.userSession.userId);
  }

  render() {
    let { loading, data, error } = this.props;
    let innerView;
    if (loading) {
      innerView = <ActivityIndicator />;
    } else {
      innerView = <Text>
          {data.firstName} {data.lastName}
        </Text>;
    }
    return <View style={styles.container}>{innerView}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
