import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data: []
    }
  }
  componentWillMount(){
    fetch('http://10.11.44.239:4000/api')
    .then((data)=>data.json())
    .then((json)=>{
      this.setState({data:json});
    })
  }
  render() {
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
  },
  title: {
    fontSize: 25,
  }
});
