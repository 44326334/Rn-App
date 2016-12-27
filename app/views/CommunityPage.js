import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';


//社区
export default class CommunityPage extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text onPress={Actions.IndexPage}>社区</Text>
      </View>
    )
  }
}