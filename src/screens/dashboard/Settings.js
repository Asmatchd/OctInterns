/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Bar} from '../../components';
import {primaryColor, white} from '../Dimen';

import ImagePicker from 'react-native-image-picker';

export class Settings extends React.Component {
  state = {
    img: '',
  };
  logOut = () => {
    AsyncStorage.removeItem('userData', () => {
      this.props.navigation.replace('SignUp');
    });
  };

  show = () => {
    const options = {
      title: 'Select Profile Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.uri};
        // const imgData = {uri: response.data};
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          img: source,
        });
      }
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Bar />
        <View
          style={{
            height: h('30%'),
            backgroundColor: primaryColor,
            justifyContent: 'flex-end',
            paddingBottom: h('3%'),
            paddingLeft: h('3%'),
          }}>
          <TouchableOpacity onPress={() => this.show()}>
            <Image
              style={{
                height: h('12%'),
                width: h('12%'),
                borderRadius: h('6%'),
              }}
              source={
                this.state.img === ''
                  ? require('../../assets/5.jpeg')
                  : this.state.img
              }
            />
          </TouchableOpacity>

          <View
            style={{
              width: '100%',
              paddingLeft: h('2%'),
              marginTop: h('2%'),
            }}>
            <Text
              style={{
                color: white,
              }}>
              John Doe
            </Text>
          </View>
        </View>

        {/* logout */}
        <View
          style={{
            height: h('8%'),
            // backgroundColor: '#faf',
            flexDirection: 'row',
            marginTop: h('1%'),
            borderTopWidth: h('0.1%'),
            borderBottomWidth: h('0.1%'),
            borderColor: '#0003',
          }}>
          <View
            style={{
              height: '100%',
              width: '20%',
              //   backgroundColor: '#aaf',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons
              name={'arrow-undo-outline'}
              color={primaryColor}
              size={h('3%')}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Alert',
                'Do you really want to logout?',
                [
                  {
                    text: 'No',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'Yes', onPress: () => this.logOut()},
                ],
                {cancelable: false},
              );
            }}
            style={{
              height: '100%',
              width: '80%',
              //   backgroundColor: '#aaf',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: h('2.5%')}}>Log Out</Text>
          </TouchableOpacity>
        </View>

        {/* customer support */}
        <View
          style={{
            height: h('8%'),
            // backgroundColor: '#faf',
            flexDirection: 'row',
            marginTop: h('1%'),
            borderTopWidth: h('0.1%'),
            borderBottomWidth: h('0.1%'),
            borderColor: '#0003',
          }}>
          <View
            style={{
              height: '100%',
              width: '20%',
              //   backgroundColor: '#aaf',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons name={'ios-mail'} color={primaryColor} size={h('3%')} />
          </View>
          <TouchableOpacity
            style={{
              height: '100%',
              width: '80%',
              //   backgroundColor: '#aaf',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: h('2.5%')}}>Customer Support</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
