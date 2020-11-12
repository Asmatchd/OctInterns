/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class AppBtn extends React.Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          // disabled={true}
          //   if you want to disable button
          //   {...this.props}
          onPress={this.props.btnPressed}
          style={{
            height: h('5%'),
            width: '40%',
            alignItems: 'center',
            // backgroundColor: 'rgba(200, 12, 150, 1)',
            backgroundColor: '#fff',
            justifyContent: 'center',
            borderRadius: h('1%'),
          }}>
          <Text
            style={{
              color: 'rgba(200, 12, 150, 1)',
              fontSize: h('3%'),
            }}>
            {this.props.txt}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
