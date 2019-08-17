import React, { Component } from "react";
import { WebView } from "react-native";
import Config from "react-native-config";

export default class OAuthObtainCode extends Component {
  render() {
    const REDIRECT_URI = Config.CERN_OAUTH_REDIRECT_URI;
    const CLIENT_ID = Config.CERN_OAUTH_CLIENT_ID;
    const url =
      Config.CERN_OAUTH_AUTHORIZE_PATH +
      `&redirect_uri=${REDIRECT_URI}&client_id=${CLIENT_ID}`;
    console.debug("WebView loading:", url);
    return (
      <WebView
        ref="webview"
        source={{ uri: url }}
        useWebKit={true}
        startInLoadingState={true}
        onNavigationStateChange={this._onNavigationStateChange}
        // javaScriptEnabled={true} // TODO to be tested on Android
      />
    );
  }

  _onNavigationStateChange = webViewState => {
    console.debug("WebView current url", webViewState.url);
    if (webViewState.url.startsWith(Config.CERN_OAUTH_REDIRECT_URI)) {
      const codeUrlParam = this._getParameterByName(webViewState.url, "code");
      if (codeUrlParam) {
        console.debug("CERN OAuth code:", codeUrlParam);
        this.props.oAuthCodeRetrieved(codeUrlParam);
      }
    }
  };

  _getParameterByName(url, name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
}
