import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Font } from 'expo';


export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: "T H E  B E E R ' S",
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
      data: [],
    }
  }

  async componentDidMount(){
    await Font.loadAsync({
      'ConcertOne': require('../assets/fonts/ConcertOne-Regular.ttf'),
      'LatoRegular': require('../assets/fonts/Lato-Regular.ttf'),
      'LatoBlack': require('../assets/fonts/Lato-Black.ttf'),
    });
    this.setState({fontLoaded: true})
  }

  componentWillMount(){
    fetch('http://10.11.44.180:2312/api')
    .then((data)=>data.json())
    .then((json)=>{
      this.setState({data:json});
    })

  }
  render() {
    return (
      <View style={styles.container}>
      { this.state.fontLoaded  ? (
        <React.Fragment>
        <ScrollView>
        {this.state.data.map((field,i)=>{
          let pic = {
            url: field.images[0]
          };
          return(
            <View key={i}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.push('Product', field)
            }}>
            <View style={{flex: 1,
              flexDirection: 'row',
              borderBottomColor: '#e5e5e5',
              borderBottomWidth: 1,
              height: 90,
              paddingLeft: 25,
              paddingTop: 10,
             }}>
              <Image source={pic} style={{width: 36, height: 66}}/>
            <View style = {{
              paddingTop: 15,
              paddingLeft: 20,
            }}>
              <Text style={styles.title}>{field.name.toUpperCase()}</Text>
              <Text style={styles.type}>{field.type}</Text>
            </View>
            </View>
            </TouchableOpacity>
            </View>
          )
        })}
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
    flex: 1,
    backgroundColor: '#fff',

  },
  title: {
    fontSize: 16,
    fontFamily: 'LatoBlack',
    letterSpacing: 2,
    color: '#434343',
    marginBottom: 2,
  }
});
