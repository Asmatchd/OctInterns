import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {List, List2} from '../screens/list';
import {DrawerNavigator} from './DrawerNavigator';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'silver',
        labelStyle: {
          fontSize: h('2%'),
        },
      }}>
      <Tab.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          headerShown: false,
          tabBarLabel: 'List',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-person" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="List2"
        component={List2}
        options={{
          headerShown: false,
          tabBarLabel: 'List2',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-options" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
