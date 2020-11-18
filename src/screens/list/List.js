/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavHeader} from '../../components/NavHeader';

export class List extends Component {
  state = {
    data: [
      {
        name: 'Arslan',
        age: '20',
        clr: 'blue',
      },
      {
        name: 'Nouman',
        age: '22',
        clr: 'green',
      },
      {
        name: 'Test class',
        age: '24',
        clr: 'black',
      },
      {
        name: 'Arslan 1',
        age: '26',
        clr: 'pink',
      },
      {
        name: 'Nouman 2',
        age: '27',
        clr: 'red',
      },
      {
        name: 'Test class 3',
        age: '28',
        clr: 'orange',
      },
    ],
    selectedItem: '',
  };

  design = (item) => (
    <TouchableOpacity
      onPress={() => {
        this.setState({selectedItem: item});
      }}
      style={{
        height: h('10%'),
        // backgroundColor: '#0008',
        // backgroundColor: item.clr === undefined ? '#0008' : item.clr,
        backgroundColor:
          item.name === this.state.selectedItem.name ? 'purple' : item.clr,
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: h('1%'),
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: '50%',
        }}>
        <Text
          style={{
            color:
              item.name === this.state.selectedItem.name ? 'black' : '#fff',
            fontSize: h('3%'),
          }}>
          Name:{'   '}
          {item.name}
        </Text>
      </View>

      <View
        style={{
          width: '50%',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: h('3%')}}>
          Age:{'   '}
          {item.age}
        </Text>
      </View>
    </TouchableOpacity>
  );

  separator = () => (
    <View
      style={{
        height: h('1%'),
      }}
    />
  );

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <SafeAreaView />
        <NavHeader title={'Flat List'} />
        <FlatList
          data={this.state.data}
          renderItem={({item}) => this.design(item)}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={() => this.separator()}
        />
      </View>
    );
  }
}
