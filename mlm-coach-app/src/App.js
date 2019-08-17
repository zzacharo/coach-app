import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import Home from "./screens/Home";
// import Login from "./screens/Login";
import Profile from "./screens/Profile";
import store from "./store";

const NavigatorComponent = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile }
  },
  {
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              //  active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Home")}
            >
              <Icon name="calendar" />
              <Text>Whiteboard</Text>
            </Button>
            <Button
              vertical
              // active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Profile")}
            >
              <Icon name="person" />
              <Text>Me</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorComponent />
      </Provider>
    );
  }
}
