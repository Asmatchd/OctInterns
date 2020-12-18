import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  container: {
    flexGrow: 2,
  },
  imgBg: {
    height: h('96.5%'),
    width: w('100%'),
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  contentContainer: {
    alignItems: 'center',
    width: w('100%'),
  },
  userInfo: {
    height: h('60%'),
    width: '90%',
    backgroundColor: '#fff4',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: h('10%'),
    borderRadius: h('2%'),
    borderColor: '#fff9',
    borderWidth: h('0.1%'),
  },
  imgView: {
    height: h('15%'),
    width: '100%',
    // backgroundColor: '#faf',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: h('13%'),
    width: h('13%'),
    // resizeMode: 'contain',
    borderRadius: h('8%'),
    overflow: 'hidden',
  },
  spacer: {
    height: h('1.5%'),
  },
  btnView: {
    width: '100%',
    alignItems: 'center',
    marginTop: h('2%'),
  },
  btn: {
    // backgroundColor: '#faf',
    padding: h('1%'),
  },
  btnTxt: {
    color: '#fff',
  },
});
