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
} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppBtn, AppInput, Bar, NavHeader} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loading} from '../../components';
export class SignUp extends React.Component {
  state = {
    name: 'Study',
    fName: '',
    address: '',
    phone: '+92',
    isLoading: false,
  };

  userData = () => {
    this.controlLoading(true);
    const {name, fName, address, phone} = this.state;

    if (name === '' || fName === '' || address === '' || phone === '') {
      alert('all fields are required');
      this.controlLoading(false);
    } else {
      if (phone.length < 13) {
        alert('Invalid phone number');
        this.controlLoading(false);
      } else {
        const data = {
          userName: name.toUpperCase(),
          fatherName: fName.toUpperCase(),
          userAddress: address.toLowerCase(),
          userPhone: phone,
        };

        setTimeout(() => {
          AsyncStorage.setItem('userData', JSON.stringify(data), () => {
            this.controlLoading(false);
            this.props.navigation.replace('TabNavigator');
          });
        }, 2000);
        // this.props.navigation.navigate('Dashboard', {values: data});
      }
    }
  };

  controlLoading = (value) => {
    this.setState({isLoading: value});
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
            // alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <Bar clr={'red'} />

          <Loading showLoading={this.state.isLoading} />

          <NavHeader
            title={'Sign Up'}
            // leftIc={'options'}
            // leftIcPressed={() => this.props.navigation.goBack()}
            rightIc={'ios-arrow-forward'}
            // rightIcPressed={() => this.props.navigation.navigate('Dashboard')}
            rightIcPressed={() => this.userData()}
          />

          <View
            style={{
              alignItems: 'center',
              width: w('100%'),
            }}>
            <View
              style={{
                height: h('60%'),
                width: '90%',
                backgroundColor: '#fff4',
                // alignItems: 'center',
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

              <AppInput
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
                editable={false}
                placeholder={'Name'}
              />
              <View
                style={{
                  height: h('1.5%'),
                }}
              />

              <AppInput
                onChangeText={(fName) => this.setState({fName})}
                placeholder={'Father Name'}
              />

              <View
                style={{
                  height: h('1.5%'),
                }}
              />

              <AppInput
                onChangeText={(address) => this.setState({address})}
                placeholder={'Address'}
                //   placeholderTextColor={'blue'}
                keyboardType={'email-address'}
                autoCapitalize={'none'}
              />

              <View
                style={{
                  height: h('1.5%'),
                }}
              />

              <AppInput
                onChangeText={(phone) => this.setState({phone})}
                placeholder={'Phone'}
                //   placeholderTextColor={'blue'}
                keyboardType={'phone-pad'}
                value={this.state.phone}
                maxLength={13}
              />

              <View
                style={{
                  height: h('1.5%'),
                }}
              />

              {/* Button */}

              <AppBtn
                txt={'Sign Up'}
                btnPressed={() => {
                  this.userData();
                }}
              />
            </View>
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
    );
  }
}
