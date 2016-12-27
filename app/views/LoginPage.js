import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginPage extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text onPress={Actions.IndexPage}>登录</Text>
      </View>
    )
  }
}