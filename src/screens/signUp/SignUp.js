/* eslint-disable no-alert */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppBtn, AppInput, Bar, NavHeader} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loading} from '../../components';
import {styles} from './styles';
export class SignUp extends React.Component {
  state = {
    name: 'Study',
    fName: '',
    address: '',
    phone: '+92',
    isLoading: false,
    modalVisible: false,

    // SIgn In states

    userName: '',
    password: '',
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

  signIn = () => {
    console.warn('User name is = ' + this.state.userName);
    console.warn('User password is = ' + this.state.password);
  };

  controlLoading = (value) => {
    this.setState({isLoading: value});
  };

  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <ImageBackground
          source={require('../../assets/bg.jpg')}
          resizeMode={'cover'}
          style={styles.imgBg}>
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

          <View style={styles.contentContainer}>
            <View style={styles.userInfo}>
              <View style={styles.imgView}>
                {/* https://images.agoramedia.com/wte3.0/gcms/Sleeping-Through-the-Night-722x406.jpg?width=414 */}
                <TouchableOpacity
                  onPress={() => {
                    console.warn('Img pressed');
                  }}>
                  <Image
                    style={styles.img}
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
              <View style={styles.spacer} />

              <AppInput
                onChangeText={(fName) => this.setState({fName})}
                placeholder={'Father Name'}
              />

              <View style={styles.spacer} />

              <AppInput
                onChangeText={(address) => this.setState({address})}
                placeholder={'Address'}
                //   placeholderTextColor={'blue'}
                keyboardType={'email-address'}
                autoCapitalize={'none'}
              />

              <View style={styles.spacer} />

              <AppInput
                onChangeText={(phone) => this.setState({phone})}
                placeholder={'Phone'}
                //   placeholderTextColor={'blue'}
                keyboardType={'phone-pad'}
                value={this.state.phone}
                maxLength={13}
              />

              <View style={styles.spacer} />

              {/* Button */}

              <AppBtn
                txt={'Sign Up'}
                btnPressed={() => {
                  this.userData();
                }}
              />

              <View style={styles.btnView}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({modalVisible: true});
                  }}
                  style={styles.btn}>
                  <Text style={styles.btnTxt}>
                    Already have an account? Sign In
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>

        {/*=======>>>>>>>      Sign In modal       <<<<<<<<<<============ */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <ImageBackground
              source={require('../../assets/signInBg.jpg')}
              resizeMode={'cover'}
              style={styles.imgBg}>
              <Bar clr={'red'} />

              <Loading showLoading={this.state.isLoading} />

              <NavHeader
                title={'Sign In'}
                leftIc={'ios-arrow-back'}
                leftIcPressed={() => {
                  this.setState({modalVisible: false});
                }}
              />

              <View style={styles.contentContainer}>
                <View style={styles.userInfo}>
                  <View style={styles.imgView}>
                    <Image
                      style={styles.img}
                      // resizeMode={'contain'}
                      source={require('../../assets/logo.jpg')}
                      // source={{
                      //   uri:
                      //     'https://images.agoramedia.com/wte3.0/gcms/Sleeping-Through-the-Night-722x406.jpg?width=414',
                      // }}
                    />
                  </View>

                  <AppInput
                    onChangeText={(userName) => this.setState({userName})}
                    placeholder={'User Name'}
                  />
                  <View style={styles.spacer} />

                  <AppInput
                    onChangeText={(password) => this.setState({password})}
                    placeholder={'Password'}
                    secureTextEntry
                  />

                  <View style={styles.spacer} />

                  {/* Button */}

                  <AppBtn
                    txt={'Sign In'}
                    btnPressed={() => {
                      this.signIn();
                    }}
                  />

                  <View style={styles.btnView}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({modalVisible: false});
                      }}
                      style={styles.btn}>
                      <Text style={styles.btnTxt}>
                        Don't have an account? Sign Up
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </KeyboardAwareScrollView>
        </Modal>
      </KeyboardAwareScrollView>
    );
  }
}
