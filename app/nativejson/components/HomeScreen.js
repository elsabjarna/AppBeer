import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
  render() {

    return (
      <View style={{ backgroundColor: "#ff6421", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../images/beerslogo.png')} style={{width: 193, height: 110}}/>

        <Text style={styles.title}>Icelandic Beer Encyclopedia</Text>
        <Text style={styles.undertext}>Remember to drink responsably</Text>
        <Button
          title="Let's start looking"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Text>or lets find a random beer</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 38,
    color: "white",
  },
  undertext: {
    fontSize: 16,
  },
});
