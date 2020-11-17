/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';

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
      },
      {
        name: 'Nouman',
      },
      {
        name: 'Test class',
      },
      {
        name: 'Arslan 1',
      },
      {
        name: 'Nouman 2',
      },
      {
        name: 'Test class 3',
      },
    ],
  };

  add = () => {};

  // design=()=>()

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
          renderItem={({item}) => (
            <View
              style={{
                height: h('10%'),
                backgroundColor: '#0008',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: h('1%'),
              }}>
              <Text style={{color: '#fff', fontSize: h('3%')}}>
                {item.name}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    );
  }
}
