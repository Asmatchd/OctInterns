/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class Loading extends Component {
  render() {
    return (
      <View>
        {this.props.showLoading === true ? (
          <View
            style={{
              position: 'absolute',
              height: h('100%'),
              width: w('100%'),
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
              backgroundColor: '#faf7',
            }}>
            <ActivityIndicator size="large" color="red" />
            <Text>Please wait</Text>
          </View>
        ) : null}
      </View>
    );
  }
}
