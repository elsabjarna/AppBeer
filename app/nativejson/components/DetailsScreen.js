import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { AppLoading,Font } from 'expo';


export default class DetailsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data: [],
      isReady: false
    }
  }


  componentWillMount(){
    fetch('http://10.11.44.136:4000/api')
    .then((data)=>data.json())
    .then((json)=>{
      this.setState({data:json});
    })
    (async() => {
      await Font.loadAsync({
        'ConcertOne':require('../fonts/Concert_One/ConcertOne-Regular.ttf')
      })
      this.setState({isReady:true})
    })
  }
  render() {
    if(!this.state.isReady){
      return <AppLoading />;
    }
    return (
      <View style={styles.container}>
        <ScrollView>
        {this.state.data.map((field,i)=>{
          let pic = {
            url: field.images[0]
          };
          return(
            <View key={i}>
              <Image source={pic} style={{width: 193, height: 110}}/>
              <Text style={styles.title}>{field.name}</Text>
              <Text>{field.prosent}</Text>
              <Text>{field.description}</Text>

            </View>
          )
        })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'ConcertOne'
  },
  title: {
    fontSize: 25,
  }
});
