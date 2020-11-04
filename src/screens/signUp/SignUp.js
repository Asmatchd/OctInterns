/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class SignUp extends React.Component {
  state = {
    name: 'Study',
    fName: '',
    address: '',
    phone: '',
  };

  userData = () => {
    const {name, fName, address, phone} = this.state;

    if (name === '' || fName === '' || address === '' || phone === '') {
      alert('all fields are required');
    } else {
      const data = {
        userName: name,
        fatherName: fName,
        userAddress: address,
        userPhone: phone,
      };
      console.warn(data);
    }
  };

  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 2}}>
        <ImageBackground
          source={require('../../assets/bg.jpg')}
          resizeMode={'cover'}
          style={{
            height: h('96.5%'),
            width: w('100%'),
            backgroundColor: 'rgba(0,0,0,0.05)',
            alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <SafeAreaView />

          <View
            style={{
              backgroundColor: '#fff9',
              height: h('7%'),
              width: '100%',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                // backgroundColor: '#faf',
                height: h('7%'),
                width: '15%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons name={'arrow-back'} size={h('4%')} color={'#000'} />
            </TouchableOpacity>

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
                  color: '#000',
                  fontSize: h('3%'),
                }}>
                Sign Up
              </Text>
            </View>

            <TouchableOpacity
              style={{
                // backgroundColor: '#faf',
                height: h('7%'),
                width: '15%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons name={'options'} size={h('3.5%')} color={'#000'} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: h('60%'),
              width: '90%',
              backgroundColor: '#fff4',
              alignItems: 'center',
              // justifyContent: 'center',
              marginTop: h('10%'),
              borderRadius: h('2%'),
              borderColor: '#fff9',
              borderWidth: h('0.1%'),
            }}>
            <View
              style={{
                height: h('15%'),
                width: '100%',
                // backgroundColor: '#faf',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* https://images.agoramedia.com/wte3.0/gcms/Sleeping-Through-the-Night-722x406.jpg?width=414 */}
              <TouchableOpacity
                onPress={() => {
                  console.warn('Img pressed');
                }}>
                <Image
                  style={{
                    height: h('13%'),
                    width: h('13%'),
                    // resizeMode: 'contain',
                    borderRadius: h('8%'),
                    overflow: 'hidden',
                  }}
                  // resizeMode={'contain'}
                  source={require('../../assets/logo.jpg')}
                  // source={{
                  //   uri:
                  //     'https://images.agoramedia.com/wte3.0/gcms/Sleeping-Through-the-Night-722x406.jpg?width=414',
                  // }}
                />
              </TouchableOpacity>
            </View>

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
                // disabled={true}
                onPress={() => {
                  this.userData();
                }}
                style={{
                  height: h('5%'),
                  width: '30%',
                  alignItems: 'center',
                  // backgroundColor: 'rgba(200, 12, 150, 1)',
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  borderRadius: h('1%'),
                }}>
                <Ionicons
                  name={'checkmark-circle'}
                  size={h('5%')}
                  color={'rgba(200, 12, 150, 1)'}
                />
                {/* <Text
                  style={{
                    color: '#fff',
                    fontSize: h('3%'),
                  }}>
                  Sign Up
                </Text> */}
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
    );
  }
}
