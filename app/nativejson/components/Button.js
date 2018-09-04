import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Font } from 'expo';

export default class Button extends React.Component {

  render () {
    return (

    <TouchableOpacity onPress={this.props.onPress}>
    <View style={takki}>
    <Text style={text}>{this.props.text}</Text>
    </View>
    </TouchableOpacity>

    )
  }
}

const takki = {
  backgroundColor: "white",
  width: 309,
  height: 70,
  borderRadius: 100,
  shadowColor: 'black',
  shadowRadius: 5,
  shadowOpacity: 0.1,
  marginBottom: 20,
}

const text = {
  fontSize: 16,
  textAlign: "center",
  color: "#ff6421",
  fontFamily: 'LatoBlack',
  letterSpacing: 2,
  paddingTop: 25,
  justifyContent: 'center',
}
