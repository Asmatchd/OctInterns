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
    </View>
  );
};

export default App;
