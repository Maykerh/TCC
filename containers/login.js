import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View>
        <Text>
          Tela login aa a
        </Text>
        <Button title="ahsd" onPress={() => { this.props.navigation.navigate('Adverts')}}></Button>
      </View>
    )
  }
}