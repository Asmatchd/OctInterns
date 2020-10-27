/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

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
      <View
        style={{
          flex: 1,
          backgroundColor: 'silver',
        }}>
        <TextInput
          onChangeText={(name) => this.setState({name})}
          style={{
            height: '10%',
            width: '100%',
            backgroundColor: '#fff',
            color: 'red',
            // textAlign: 'center',
            borderWidth: 2,
            borderRadius: 10,
          }}
          placeholder={'Name'}
          //   placeholderTextColor={'blue'}
          value={this.state.name}
          editable={false}
        />
        <TextInput
          onChangeText={(fName) => this.setState({fName})}
          style={{
            height: '10%',
            width: '100%',
            backgroundColor: '#fff',
            color: 'red',
            // textAlign: 'center',
            borderWidth: 2,
            borderRadius: 10,
          }}
          placeholder={'Father Name'}
          //   placeholderTextColor={'blue'}
        />
        <TextInput
          onChangeText={(address) => this.setState({address})}
          style={{
            height: '10%',
            width: '100%',
            backgroundColor: '#fff',
            color: 'red',
            // textAlign: 'center',
            borderWidth: 2,
            borderRadius: 10,
          }}
          placeholder={'Address'}
          //   placeholderTextColor={'blue'}
          keyboardType={'email-address'}
        />
        <TextInput
          onChangeText={(phone) => this.setState({phone})}
          style={{
            height: '10%',
            width: '100%',
            backgroundColor: '#fff',
            color: 'red',
            // textAlign: 'center',
            borderWidth: 2,
            borderRadius: 10,
          }}
          placeholder={'Phone'}
          //   placeholderTextColor={'blue'}
          keyboardType={'phone-pad'}
        />

        {/* Button */}

        <View
          style={{
            height: '10%',
            width: '100%',
            alignItems: 'center',
            marginTop: '4%',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.userData();
            }}
            style={{
              height: '50%',
              width: '30%',
              alignItems: 'center',
              marginTop: '4%',
              backgroundColor: '#faf',
              justifyContent: 'center',
            }}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
