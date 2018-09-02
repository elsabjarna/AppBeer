import React, { Component } from 'react';
import { Image } from 'react-native';

export default class FrontPage extends Component {
  render() {
    let pic = {
      url: ''
    };
    return (
        <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}
