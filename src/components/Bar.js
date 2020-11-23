import React from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';

export class Bar extends React.Component {
  render() {
    return (
      <SafeAreaView>
        {Platform.OS === 'ios' ? null : (
          <StatusBar
            backgroundColor={this.props.clr}
            // barStyle={'dark-content'}
          />
        )}
      </SafeAreaView>
    );
  }
}
