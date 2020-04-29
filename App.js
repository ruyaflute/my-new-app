import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Clients from './screens/Clients'
import Profile from './screens/Profile'

import Complaints from './tabs/Complaints'
import Announcement from './tabs/Announcement'
import Resources from './tabs/Resources'

const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

function App() {

  createBottomTabs = () => {
    return <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen
        name="Complaints"
        style={{ marginBottom: 16 }}
        component={Complaints}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'home'} />
          ),
        }}
      />
      <MaterialBottomTabs.Screen 
      name="Announcement" 
      component={Announcement}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'human'} />
          )
        }}
      />
      <MaterialBottomTabs.Screen 
      name="Resources" 
      component={Resources}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'map'} />
          ),
        }}
      />
    </MaterialBottomTabs.Navigator>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Clients" component={Clients} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Bottom Tabs" children={this.createBottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;