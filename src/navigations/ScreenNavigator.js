import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AdvanceBasics, Basics} from '../screens/basics';
import {SignUp} from '../screens/signUp';
import {Dashboard} from '../screens/dashboard';
import {List} from '../screens/list';
import {Splash} from '../screens/splash';
import {DrawerNavigator} from './DrawerNavigator';
import {TabNavigator} from './TabNavigator';

const Stack = createStackNavigator();

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />

        {/* <Stack.Screen
          name="List"
          component={List}
          options={{headerShown: false}}
        /> */}

        <Stack.Screen
          name="AdvanceBasics"
          component={AdvanceBasics}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Basics"
          component={Basics}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
