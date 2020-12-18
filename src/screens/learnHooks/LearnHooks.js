import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppBtn, AppInput, Bar, IcInput, NavHeader} from '../../components';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LearnHook = (props) => {
  const [name, setName] = useState('');
  const [fName, setFName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    // console.log('Done');
  }, []);

  const userData = () => {
    // console.warn(name, fName, address, modalVisible);
    // setName('Asmat');
    // setTimeout(() => {
    //   console.warn('done');
    // }, 2000);

    AsyncStorage.getItem('userData', (err, data) => {
      console.warn('1');
      if (!err && data !== null) {
        console.warn('2');
        const myData = JSON.parse(data);
        console.warn('3');
        setUser(myData);
        console.warn('4');
      } else {
        console.warn('err');
      }
    });

    console.warn(user.userName);
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require('../../assets/bg.jpg')}
        resizeMode={'cover'}
        style={styles.imgBg}>
        <Bar clr={'red'} />

        <NavHeader
          title={'Sign Up'}
          rightIc={'ios-arrow-forward'}
          // rightIcPressed={() => this.props.navigation.navigate('Dashboard')}
          rightIcPressed={() => console.warn(user.userName)}
        />

        <View style={styles.contentContainer}>
          <View style={styles.userInfo}>
            <View style={styles.imgView}>
              <TouchableOpacity
                onPress={() => {
                  console.warn('Img pressed');
                }}>
                <Image
                  style={styles.img}
                  source={require('../../assets/logo.jpg')}
                />
              </TouchableOpacity>
            </View>

            <IcInput
              onChangeText={(txt) => setName(txt)}
              // editable={false}
              placeholder={'Name'}
              value={name}
              ic={'ios-mail'}
            />

            <View style={styles.spacer} />

            <AppInput
              onChangeText={(txt) => setFName(txt)}
              placeholder={'Father Name'}
            />

            <View style={styles.spacer} />

            <AppInput
              onChangeText={(txt) => setAddress(txt)}
              placeholder={'Address'}
              //   placeholderTextColor={'blue'}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
            />

            <View style={styles.spacer} />

            <AppInput
              onChangeText={(txt) => setPhone(txt)}
              placeholder={'Phone'}
              //   placeholderTextColor={'blue'}
              keyboardType={'phone-pad'}
              value={phone}
              maxLength={13}
            />

            <View style={styles.spacer} />

            {/* Button */}

            <AppBtn
              txt={'Sign Up'}
              btnPressed={() => {
                userData();
              }}
            />

            <View style={styles.btnView}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
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
    </KeyboardAwareScrollView>
  );
};

export default LearnHook;
