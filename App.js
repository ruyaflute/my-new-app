import 'react-native-gesture-handler';
import React, { Component } from 'react';

import Clients from './screens/Clients';
import Profile from './screens/Profile';

import Complaints from './tabs/Complaints'
import Announcement from './tabs/Announcement'
import Resources from './tabs/Resources'

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-nativation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const MaterialBottomTabs = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


export default class App extends Component {

  render() {

    //createHomeStack = () =>


    createBottomTabs = () => {
      return <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen name="Complaints" component={Complaints} />
        <MaterialBottomTabs.Screen name="Announcement" component={Announcement} />
        <MaterialBottomTabs.Screen name="Resources" component={Resources} />
      </MaterialBottomTabs.Navigator>
    }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Clients" component={Clients} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Bottom Tabs" children={createBottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>

      /* 
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={createHomeStack} />

        </Drawer.Navigator>
       */
    );
  }
}
