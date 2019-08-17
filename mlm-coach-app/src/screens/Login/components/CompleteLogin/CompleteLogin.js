import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default class CompleteLogin extends Component {
  constructor(props) {
    super(props);
    this.login = this.props.login.bind(this);
  }

  componentDidMount() {
    this.login(this.props.oAuthCode);
  }

  componentDidUpdate(prevProps) {
    if (this.props.loading !== prevProps.loading && !this.props.loading) {
      // login process completed
      if (this.props.userSession.token) {
        this.props.authTokenRetrieved();
      } else if (this.props.error) {
        this.props.onError(this.props.data);
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.completing}>Completing login {this.props.loading ? "LOADING" : "DONE"}</Text>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  completing: {
    textAlign: "center",
    margin: 30
  }
});
