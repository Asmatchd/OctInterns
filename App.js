/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#faf',
      }}>
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
    </View>
  );
};

export default App;
