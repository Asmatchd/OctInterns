/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

export class AdvanceBasics extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#aaf',
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
      </View>
    );
  }
}
