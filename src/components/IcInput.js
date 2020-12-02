/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {primaryColor} from '../screens/Dimen';
export class IcInput extends React.Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          height: h('6%'),
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '15%',
            height: '100%',
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: h('0.1%'),
            borderTopLeftRadius: h('1%'),
            borderBottomLeftRadius: h('1%'),
            // borderTopRightRadius: 0,
            // borderBottomRightRadius: 0,
          }}>
          <Icon name={this.props.ic} size={h('3%')} color={primaryColor} />
        </View>
        <View
          style={{
            width: '65%',
            height: '100%',
            borderWidth: h('0.1%'),
            borderLeftWidth: 0,
            backgroundColor: '#fff',
            borderTopRightRadius: h('1%'),
            borderBottomRightRadius: h('1%'),
          }}>
          <TextInput
            {...this.props}
            style={{
              width: '100%',
              height: '100%',
              color: 'red',
              fontSize: h('2%'),
              paddingLeft: h('1%'),
            }}
          />
        </View>
      </View>
    );
  }
}
