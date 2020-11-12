/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class NavHeader extends React.Component {
  render() {
    return (
      <View
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
          <Ionicons name={this.props.leftIc} size={h('4%')} color={'#fff'} />
        </TouchableOpacity>

        {/* title */}
        <View
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
        </View>

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
          <Ionicons name={this.props.rightIc} size={h('3.5%')} color={'#fff'} />
        </TouchableOpacity>
      </View>
    );
  }
}
