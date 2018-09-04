import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Font } from 'expo';


export default class ProductScreen extends React.Component {
  static navigationOptions = {
    title: "T H E   B E E R",
    headerStyle: {
      backgroundColor: '#ff6421',
      borderBottomWidth: 0,
      height: 100,
      shadowColor: 'black',
      shadowRadius: 5,
      shadowOpacity: 0.1,
      shadowOffset: {
        height: 3,
        widht: 0,
      }
  },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff',
    },
  };


  constructor(props){
    super(props);
    this.state={
      fontLoaded: false
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
    console.log(this.props.navigation.state)
    const field = this.props.navigation.state.params


    let pic = {
      url: field.images[0]
    };

    return (

      <View style = {{backgroundColor:'white'}}>
      { this.state.fontLoaded  ? (
        <React.Fragment>
        <ScrollView>

            <View style={styles.container}>
              <Image source={pic} style={{width: 193, height: 350, marginTop: 30, marginLeft:50}}/>
              <Text style={styles.name}>{field.name.toUpperCase()}</Text>

              <View style = {{flex:1, flexDirection: 'row'}}>
                <View style = {styles.box}>
                  <Text style={styles.type}>Type: {field.type}</Text>
                </View>
                <View style = {styles.box}>
                  <Text style={styles.prosent}>ABV: {field.prosent}</Text>
                </View>
              </View>

              <Text style = {styles.descriptionTitle}>ABOUT</Text>
              <Text style={styles.description}>{field.description}</Text>
            </View>

        </ScrollView>
        </React.Fragment>
      ) : null
      }
      </View>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
  },
  name: {
    fontFamily: 'LatoBlack',
    fontSize: 24,
    color: "#ff6421",
    letterSpacing: 2,
    marginBottom: 20,
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    fontFamily: 'LatoRegular',
    lineHeight: 25,
    color: '#434343',
    marginBottom: 80,
  },
  descriptionTitle: {
    fontSize: 18,
    fontFamily: 'LatoBlack',
    color: "#ff6421",
    letterSpacing: 2,
    marginBottom: 5,
  },
  box:{
    backgroundColor:"#ff6421",
    padding: 15,
    marginRight: 10,
    borderRadius: 3,
    marginBottom: 30,
  },
  type:{
    fontSize: 14,
    fontFamily: 'LatoBlack',
    color: 'white'
  },
  prosent:{
    fontSize: 14,
    fontFamily: 'LatoBlack',
    color: 'white'
  }
});
