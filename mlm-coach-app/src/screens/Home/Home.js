import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  List,
  ListItem
} from "native-base";
import { FlatList } from "react-native";
wod = {
  title: "Mary",
  metadata: {
    repScheme: "3 rounds for time",
    exercises: [
      {
        name: "HSPU",
        reps: 5
      },
      {
        name: "Pistol squats",
        reps: 10
      },
      {
        name: "Pull-ups",
        reps: 15
      }
    ]
  }
};
export default class Home extends Component {
  _renderWod = () => {
    return wod.metadata.exercises.map(exercise => (
      <ListItem>
        <Text>
          {exercise.reps} {exercise.name}
        </Text>
      </ListItem>
    ));
  };
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>{wod.title}</Text>
            </CardItem>
            <CardItem>
              <Text>{wod.metadata.repScheme}</Text>
            </CardItem>
            <CardItem>
              <FlatList>{this._renderWod()}</FlatList>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
