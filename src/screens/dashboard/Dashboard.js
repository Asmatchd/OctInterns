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
import {NavHeader} from '../../components/NavHeader';

export class Dashboard extends React.Component {
  state = {
    name: '',
    fName: '',
    address: '',
    phone: '',
  };

  componentDidMount = () => {
    const navProps = this.props.route.params.values;
    this.setState({
      name: navProps.userName,
      fName: navProps.fatherName,
      address: navProps.userAddress,
      phone: navProps.userPhone,
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <SafeAreaView />
        <NavHeader
          title={'Dashboard'}
          leftIc={'options'}
          leftIcPressed={() => this.props.navigation.goBack()}
          rightIc={'information-circle'}
          rightIcPressed={() => console.warn('Right')}
        />

        {/* Name */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: '#faf',
            height: h('5%'),
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '50%',
              height: '100%',
              //   backgroundColor: '#aaf',
              justifyContent: 'center',
              paddingLeft: h('5%'),
            }}>
            <Text>Name</Text>
          </View>
          <View
            style={{
              width: '50%',
              height: '100%',
              //   backgroundColor: '#faa',
              justifyContent: 'center',
            }}>
            <Text>{this.state.name}</Text>
          </View>
        </View>

        {/* Father Name */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: '#faf',
            height: h('5%'),
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '50%',
              height: '100%',
              //   backgroundColor: '#aaf',
              justifyContent: 'center',
              paddingLeft: h('5%'),
            }}>
            <Text>Father Name</Text>
          </View>
          <View
            style={{
              width: '50%',
              height: '100%',
              //   backgroundColor: '#faa',
              justifyContent: 'center',
            }}>
            <Text>{this.state.fName}</Text>
          </View>
        </View>

        {/* Address */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: '#faf',
            height: h('5%'),
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '50%',
              height: '100%',
              //   backgroundColor: '#aaf',
              justifyContent: 'center',
              paddingLeft: h('5%'),
            }}>
            <Text>Address</Text>
          </View>
          <View
            style={{
              width: '50%',
              height: '100%',
              //   backgroundColor: '#faa',
              justifyContent: 'center',
            }}>
            <Text numberOfLines={1}>{this.state.address}</Text>
          </View>
        </View>

        {/* Phone */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: '#faf',
            height: h('8%'),
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '50%',
              height: '100%',
              //   backgroundColor: '#aaf',
              justifyContent: 'center',
              paddingLeft: h('5%'),
            }}>
            <Text>Phone</Text>
          </View>
          <View
            style={{
              width: '50%',
              height: '100%',
              //   backgroundColor: '#faa',
              justifyContent: 'center',
            }}>
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
                fontSize: h('2%'),
              }}
              placeholder={'Phone'}
              //   placeholderTextColor={'blue'}
              keyboardType={'phone-pad'}
              value={this.state.phone}
            />
          </View>
        </View>
      </View>
    );
  }
}
