import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dashboard} from '../screens/dashboard';
import {List} from '../screens/list';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      {/* <Drawer.Screen name="List" component={List} /> */}
    </Drawer.Navigator>
  );
};
