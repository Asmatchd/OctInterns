/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
export class Splash extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.retrieveData();
    }, 3000);
  };

  retrieveData = () => {
    AsyncStorage.getItem('userData', (error, result) => {
      if (!error && result !== null) {
        this.props.navigation.replace('DrawerNavigator');
      } else {
        this.props.navigation.replace('SignUp');
      }
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#aaf6',
        }}>
        <Text
          style={{
            fontSize: h('5%'),
            color: '#000',
          }}>
          Splash Screen
        </Text>
      </View>
    );
  }
}
