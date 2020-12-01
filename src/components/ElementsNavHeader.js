/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View as V, TouchableOpacity, Text} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

import {Icon} from 'react-native-elements';

export class ElementsNavHeader extends React.Component {
  render() {
    return (
      <V
        style={{
          backgroundColor: '#0006',
          height: h('7%'),
          width: '100%',
          flexDirection: 'row',
        }}>
        {/* Left Icon */}
        <TouchableOpacity
          onPress={this.props.leftIcPressed}
          style={{
            // backgroundColor: '#faf',
            height: h('7%'),
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            name={this.props.leftIc}
            type={this.props.leftIcType}
            size={h('4%')}
            color={'#fff'}
          />
        </TouchableOpacity>

        {/* title */}
        <V
          style={{
            // backgroundColor: '#aaf',
            height: h('7%'),
            width: '70%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: h('3%'),
            }}>
            {this.props.title}
          </Text>
        </V>

        {/* Right icon */}

        <TouchableOpacity
          onPress={this.props.rightIcPressed}
          style={{
            // backgroundColor: '#faf',
            height: h('7%'),
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            name={this.props.rightIc}
            type={this.props.rightIcType}
            size={h('3.5%')}
            color={'#fff'}
          />
        </TouchableOpacity>
      </V>
    );
  }
}
