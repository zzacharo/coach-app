import React, { Component } from "react";
import Config from "react-native-config";
import OAuthWebView from "./components/OAuthWebView";
import CompleteLogin from "./components/CompleteLogin";

const USE_MOCK_AUTH = Config.USE_MOCK_BACKEND_AUTH === "true";

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { oAuthCode: USE_MOCK_AUTH ? 'random-oauth-code' : null };
  }

  oAuthCodeRetrieved = code => {
    this.setState({ oAuthCode: code });
  };

  authTokenRetrieved = () => {
    this.props.navigation.navigate('UserProfile');
  };

  onError = reason => {
    this.props.navigation.navigate("Home", {
      error: reason
    });
  };

  render() {
    return !this.state.oAuthCode ? (
      <OAuthWebView
        oAuthCodeRetrieved={this.oAuthCodeRetrieved}
        onError={this.onError}
      />
    ) : (
      <CompleteLogin
        oAuthCode={this.state.oAuthCode}
        authTokenRetrieved={this.authTokenRetrieved}
        onError={this.onError}
      />
    );
  }
}
