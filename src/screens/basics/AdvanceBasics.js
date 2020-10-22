/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

export class AdvanceBasics extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          // backgroundColor: '#aaf',
        }}>
        {/* header */}
        <View
          style={{
            height: '5%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#000',
              fontWeight: 'bold',
            }}>
            Advance Basics
          </Text>
        </View>
        {/* top view */}
        <View
          style={{
            height: '20%',
            width: '100%',
            backgroundColor: '#234',
            flexDirection: 'row',
            // justifyContent: 'center',
            alignItems: 'center',
            // justifyContent: 'space-around',
            // justifyContent: 'space-between',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              height: '30%',
              width: '30%',
              backgroundColor: '#a55',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
              }}>
              Left
            </Text>
          </View>

          <View
            style={{
              height: '30%',
              width: '30%',
              backgroundColor: '#12f',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
              }}>
              Right
            </Text>
          </View>
        </View>

        {/* center view */}
        <View
          style={{
            height: '20%',
            width: '100%',
            backgroundColor: '#aa4',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              // height: '30%',
              width: '30%',
              backgroundColor: '#fda',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text
              style={{
                color: '#000',
              }}>
              Left
            </Text>
          </View>
        </View>

        <View
          style={{
            height: '20%',
            width: '100%',
            // backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: '90%',
              width: '95%',
              // backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              // borderColor: 'red',
              // borderWidth: 2,

              borderBottomColor: 'red',
              borderBottomWidth: 2,

              borderTopColor: 'blue',
              borderTopWidth: 2,

              borderLeftColor: 'yellow',
              borderLeftWidth: 2,

              borderRightColor: 'green',
              borderRightWidth: 2,
            }}>
            <Text>Test</Text>
          </View>
        </View>

        <View
          style={{
            height: '20%',
            width: '100%',
            backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: '90%',
              width: '95%',
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: '#faf',
                alignItems: 'center',
                justifyContent: 'center',
                // borderRadius: 50,
                borderTopLeftRadius: 20,
                borderBottomRightRadius: 20,
                // borderTopRightRadius: 20,
                // borderBottomLeftRadius: 20,
              }}>
              <Text>Test</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            height: '15%',
            backgroundColor: '#aada',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              console.warn('ok');
            }}
            style={{
              backgroundColor: '#faf',
              padding: 10,
            }}>
            <Text>Button 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              alert('ok');
            }}
            style={{
              backgroundColor: '#faf',
              padding: 10,
            }}>
            <Text>Button 1</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
