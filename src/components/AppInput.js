/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class AppInput extends React.Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <TextInput
          {...this.props}
          style={{
            height: h('6%'),
            width: '80%',
            backgroundColor: '#fff',
            color: 'red',
            // textAlign: 'center',
            borderWidth: h('0.1%'),
            borderRadius: h('1%'),
            fontSize: h('2%'),
          }}
        />
      </View>
    );
  }
}
