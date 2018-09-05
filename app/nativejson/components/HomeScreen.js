import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Font } from 'expo';
import Button from './Button';
import { StatusBar } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#ff6421',
      shadowColor: 'transparent',
      borderBottomWidth: 0,
  },
  };

  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false,
    }
  }

  async componentDidMount(){
    await Font.loadAsync({
      'ConcertOne': require('../assets/fonts/ConcertOne-Regular.ttf'),
      'LatoRegular': require('../assets/fonts/Lato-Regular.ttf'),
      'LatoBlack': require('../assets/fonts/Lato-Black.ttf'),
      'LatoItalic': require('../assets/fonts/Lato-Italic.ttf'),
    });
    this.setState({fontLoaded: true})
  }

  render() {

    return (
      <View style={{ backgroundColor: "#ff6421", flex: 1, alignItems: 'center', }}>
      <StatusBar barStyle = "light-content" hidden = {false}/>
      { this.state.fontLoaded  ? (
        <React.Fragment>
        <Image source={require('../images/beerslogo.png')} style={{width: 250, height: 220, marginTop: 30}}/>

        <Text style={styles.title}>ICELANDIC BEER ENCYCLOPEDIA</Text>
        <Text style={styles.undertext}>Remember to drink responsably</Text>
        <Button
          text= "LET'S  START LOOKING"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Text style={styles.undertext2}>or lets find a random beer</Text>
        </React.Fragment>
      ) : null
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 38,
    color: "white",
    fontFamily: 'ConcertOne',
    textAlign: 'center',
    letterSpacing: 2,
  },
  undertext: {
    fontSize: 16,
    fontFamily: 'LatoItalic',
    color: "#FFC8B0",
    marginTop: 10,
    marginBottom: 140,
  },
  undertext2: {
    fontSize: 18,
    fontFamily: 'LatoRegular',
    color: "white",
  }
});
