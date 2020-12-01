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
  Alert,
} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ElementsNavHeader} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Bar} from '../../components';
import moment from 'moment';
export class Dashboard extends React.Component {
  state = {
    name: '',
    fName: '',
    address: '',
    phone: '',
    date: moment().format('DD MMM YYYY'),
    time: moment().format('hh:mm a'),
  };

  componentDidMount = () => {
    // this.setState({date: moment().format('DD MMM YYYY')});
    // const navProps = this.props.route.params.values;
    // this.setState({
    //   name: navProps.userName,
    //   fName: navProps.fatherName,
    //   address: navProps.userAddress,
    //   phone: navProps.userPhone,
    // });

    this.retrieveData();
  };

  retrieveData = () => {
    AsyncStorage.getItem('userData', (error, result) => {
      if (!error && result !== null) {
        const data = JSON.parse(result);
        this.setState({
          name: data.userName,
          fName: data.fatherName,
          address: data.userAddress,
          phone: data.userPhone,
        });
      } else {
        alert('Data not found');
      }
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Bar clr={'blue'} />

        <ElementsNavHeader
          title={'Dashboard'}
          leftIc={'options-outline'}
          leftIcType={'ionicon'}
          // =======>
          rightIcType={'octicons'}
          rightIc={'person'}
          leftIcPressed={() => this.props.navigation.openDrawer()}
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

        {/* Date */}
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
            <Text>Date</Text>
          </View>
          <View
            style={{
              width: '50%',
              height: '100%',
              //   backgroundColor: '#faa',
              justifyContent: 'center',
            }}>
            <Text>{this.state.date}</Text>
          </View>
        </View>

        {/* TIme */}
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
            <Text>Time</Text>
          </View>
          <View
            style={{
              width: '50%',
              height: '100%',
              //   backgroundColor: '#faa',
              justifyContent: 'center',
            }}>
            <Text>{this.state.time}</Text>
          </View>
        </View>
      </View>
    );
  }
}
