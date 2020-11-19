/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
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
        name: 'AArslan',
        age: '20',
        clr: 'blue',
        img: require('../../assets/1.png'),
      },
      {
        name: 'ANouman',
        age: '22',
        clr: 'green',
        img: require('../../assets/2.png'),
      },
      {
        name: 'ATest class',
        age: '24',
        clr: 'black',
        img: require('../../assets/3.png'),
      },
      {
        name: 'AArslan 1',
        age: '26',
        clr: 'pink',
        img: require('../../assets/4.jpeg'),
      },
      {
        name: 'ANouman 2',
        age: '27',
        clr: 'red',
        img: require('../../assets/5.jpeg'),
      },
      {
        name: 'ATest class 3',
        age: '28',
        clr: 'orange',
        img: require('../../assets/6.jpeg'),
      },
      {
        name: 'Arslan',
        age: '20',
        clr: 'blue',
        img: require('../../assets/1.png'),
      },
      {
        name: 'Nouman',
        age: '22',
        clr: 'green',
        img: require('../../assets/1.png'),
      },
      {
        name: 'Test class',
        age: '24',
        clr: 'black',
        img: require('../../assets/1.png'),
      },
      {
        name: 'Arslan 1',
        age: '26',
        clr: 'pink',
        img: require('../../assets/1.png'),
      },
      {
        name: 'Nouman 2',
        age: '27',
        clr: 'red',
        img: require('../../assets/1.png'),
      },
      {
        name: 'Test class 3',
        age: '28',
        clr: 'orange',
        img: require('../../assets/1.png'),
      },
    ],
    selectedItem: '',
    refreshing: false,
  };

  design = (item) => (
    <TouchableOpacity
      onPress={() => {
        this.setState({selectedItem: item});
      }}
      style={{
        height: h('12%'),
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
          width: '20%',
          height: '100%',
          // backgroundColor: '#faf',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            height: h('10%'),
            width: h('10%'),
            borderRadius: h('6%'),
          }}
          source={item.img}
          resizeMode={'cover'}
        />
      </View>
      <View
        style={{
          width: '50%',
        }}>
        <Text
          style={{
            color:
              item.name === this.state.selectedItem.name ? 'black' : '#fff',
            fontSize: h('2.5%'),
          }}>
          Name:{'   '}
          {item.name}
        </Text>
      </View>

      <View
        style={{
          width: '30%',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: h('2.5%')}}>
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

  header = () => (
    <View
      style={{
        height: h('10%'),
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: h('3%'),
        }}>
        List of all users
      </Text>
    </View>
  );

  controlRefreshing = () => {
    this.setState({refreshing: true});

    setTimeout(() => {
      this.setState({refreshing: false}, () => {
        console.warn('loading');
      });
    }, 5000);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <SafeAreaView />
        <NavHeader title={'Flat List'} />
        {/* <View
          style={{
            height: h('10%'),
            backgroundColor: '#faf',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: h('3%'),
            }}>
            List of all users
          </Text>
        </View> */}
        <FlatList
          data={this.state.data}
          renderItem={({item}) => this.design(item)}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={() => this.separator()}
          ListHeaderComponent={() => this.header()}
          refreshing={this.state.refreshing}
          onRefresh={() => this.controlRefreshing()}
        />
      </View>
    );
  }
}
