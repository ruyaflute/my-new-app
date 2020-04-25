import 'react-native-gesture-handler';
import React, { Component } from 'react';

//import Login from './screens/Login';
import Clients from './screens/Clients';
import Profile from './screens/Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

export default class App extends Component {

  render() {

    createHomeStack = () =>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>

    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={createHomeStack} />
          <Drawer.Screen name="Contacts" component={Clients} />
          <Drawer.Screen name="Favorites" />
          <Drawer.Screen name="Settings" />

        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
