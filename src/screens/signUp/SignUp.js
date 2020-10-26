/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

export class SignUp extends React.Component {
  state = {
    name: '',
    fName: '',
    address: '',
    phone: '',
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'silver',
        }}>
        <TextInput
          onChangeText={(txt) => this.setState({name: txt})}
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
        />
        <TextInput
          onChangeText={(txt) => this.setState({fName: txt})}
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
          onChangeText={(txt) => this.setState({address: txt})}
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
        />
        <TextInput
          onChangeText={(txt) => this.setState({phone: txt})}
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
              const data = {
                userName: this.state.name,
                fatherName: this.state.fName,
                userAddress: this.state.address,
                userPhone: this.state.phone,
              };
              console.warn(data);
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
