/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#faf',
      }}>
      {/* Top View */}
      <View
        style={{
          height: '30%',
          backgroundColor: '#ffa',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#000',
            height: '30%',
            width: '50%',
          }}
        />
      </View>

      {/* Center View */}
      <View
        style={{
          height: '30%',
          width: '100%',
          backgroundColor: '#aaf',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            height: '30%',
            width: '50%',
            backgroundColor: '#45a',
            // alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: 'bold',
              fontStyle: 'italic',
              textAlign: 'center', // if text don't align via alignItems: 'center' then we use textAlign: 'center'
            }}>
            Study
          </Text>
        </View>
      </View>

      {/* Bottom View */}
      <View
        style={{
          height: '40%',
          backgroundColor: 'green',
          // flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: '20%',
            width: '100%',
            // backgroundColor: '#faf',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#871',
              height: '100%',
              width: '30%',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 50,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
              }}>
              Left
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#6aa',
              height: '100%',
              width: '30%',
              alignItems: 'center',
              justifyContent: 'center',
              // marginLeft: 50,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
              }}>
              Right
            </Text>
          </View>
        </View>

        <View
          style={{
            height: '20%',
            width: '30%',
            backgroundColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            // marginBottom: 20,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
            }}>
            Bottom 1
          </Text>
        </View>

        <View
          style={{
            height: '20%',
            width: '30%',
            backgroundColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
            }}>
            Bottom 2
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;
