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
import {NavHeader} from '../../components/NavHeader';
import {axiosInstance, baseUrl} from '../../services/AxiosApi';
import {Loading} from '../../components';
export class List2 extends Component {
  state = {
    data: [],
    selectedItem: '',
    refreshing: false,
    isLoading: false,
  };

  componentDidMount = () => {
    this.controlLoading(true);
    this.allUsers();
  };

  allUsers = () => {
    this.setState({refreshing: false});
    axiosInstance
      .get(baseUrl + 'users/allUsers')
      .then((res) => {
        const user = res.data;
        this.controlLoading(false);
        if (user.status === '200') {
          this.setState({data: user.allUsers});
        } else if (user.status === '404') {
          alert(user.msg);
        }
        // console.warn(res.data);
      })
      .catch((error) => {
        this.controlLoading(false);
        alert(error.message);
      });
  };

  design = (item) => (
    <TouchableOpacity
      onPress={() => {
        this.setState({selectedItem: item});
      }}
      style={{
        height: h('12%'),
        backgroundColor:
          item.userName === this.state.selectedItem.userName
            ? 'purple'
            : '#fff',
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
              item.userName === this.state.selectedItem.userName
                ? '#fff'
                : 'black',
            fontSize: h('2.5%'),
          }}>
          Name:{'   '}
          {item.userName}
        </Text>
      </View>

      <View
        style={{
          width: '50%',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color:
              item.userName === this.state.selectedItem.userName
                ? '#fff'
                : 'black',
            fontSize: h('2.5%'),
          }}>
          Phone:{'   '}
          {item.userPhone}
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
    this.setState({refreshing: true, isLoading: true}, () => {
      setTimeout(() => {
        this.componentDidMount();
      }, 2000);
    });
  };

  controlLoading = (value) => {
    this.setState({isLoading: value});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <SafeAreaView />

        <Loading showLoading={this.state.isLoading} />

        <NavHeader
          title={'All Users'}
          leftIc={'ios-arrow-back'}
          leftIcPressed={() => this.props.navigation.goBack()}
        />
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
          keyExtractor={(item) => item.userName}
          ItemSeparatorComponent={() => this.separator()}
          ListHeaderComponent={() => this.header()}
          refreshing={this.state.refreshing}
          onRefresh={() => this.controlRefreshing()}
        />
      </View>
    );
  }
}
