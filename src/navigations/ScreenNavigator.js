import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AdvanceBasics, Basics} from '../screens/basics';

const Stack = createStackNavigator();

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AdvanceBasics" component={AdvanceBasics} />
        <Stack.Screen name="Basics" component={Basics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
