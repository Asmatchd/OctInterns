/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export class SignUp extends React.Component {
  state = {
    name: 'Study',
    fName: '',
    address: '',
    phone: '',
  };

  userData = () => {
    const {name, fName, address, phone} = this.state;

    const data = {
      userName: name,
      fatherName: fName,
      userAddress: address,
      userPhone: phone,
    };
    console.warn(data);
  };

  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 2}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.05)',
            alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <View
            style={{
              height: h('60%'),
              width: '90%',
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: h('14%'),
              borderRadius: h('2%'),
              borderColor: 'red',
              borderWidth: h('0.1%'),
            }}>
            <TextInput
              onChangeText={(name) => this.setState({name})}
              style={{
                height: h('6%'),
                width: '80%',
                backgroundColor: '#fff',
                color: 'red',
                // textAlign: 'center',
                borderWidth: h('0.1%'),
                borderRadius: h('1%'),
                marginBottom: h('1%'),
                fontSize: h('2%'),
              }}
              placeholder={'Name'}
              //   placeholderTextColor={'blue'}
              value={this.state.name}
              editable={false}
            />
            <TextInput
              onChangeText={(fName) => this.setState({fName})}
              style={{
                height: h('6%'),
                width: '80%',
                backgroundColor: '#fff',
                color: 'red',
                // textAlign: 'center',
                borderWidth: h('0.1%'),
                borderRadius: h('1%'),
                marginBottom: h('1%'),
              }}
              placeholder={'Father Name'}
              //   placeholderTextColor={'blue'}
            />
            <TextInput
              onChangeText={(address) => this.setState({address})}
              style={{
                height: h('6%'),
                width: '80%',
                backgroundColor: '#fff',
                color: 'red',
                // textAlign: 'center',
                borderWidth: h('0.1%'),
                borderRadius: h('1%'),
                marginBottom: h('1%'),
              }}
              placeholder={'Address'}
              //   placeholderTextColor={'blue'}
              keyboardType={'email-address'}
            />
            <TextInput
              onChangeText={(phone) => this.setState({phone})}
              style={{
                height: h('6%'),
                width: '80%',
                backgroundColor: '#fff',
                color: 'red',
                // textAlign: 'center',
                borderWidth: h('0.1%'),
                borderRadius: h('1%'),
                marginBottom: h('1%'),
              }}
              placeholder={'Phone'}
              //   placeholderTextColor={'blue'}
              keyboardType={'phone-pad'}
            />

            {/* Button */}

            <View
              style={{
                width: '100%',
                alignItems: 'center',
                marginTop: h('2%'),
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.userData();
                }}
                style={{
                  height: h('5%'),
                  width: '30%',
                  alignItems: 'center',
                  backgroundColor: 'blue',
                  justifyContent: 'center',
                  borderRadius: h('1%'),
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: h('3%'),
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
