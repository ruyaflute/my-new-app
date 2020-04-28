import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import Profile from './screens/Profile'

const App = () => {
  return (
    <Profile />
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36485f',
  }
}); 

----------
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
------
//import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

//import Clients from './screens/Clients'
import contacts, {compareNames} from './contacts'
import SectionListContacts from './SectionListContacts'
import ScrollViewContacts from './ScrollViewContacts'
import FlatListContacts from './FlatListContacts'
import AddContactForm from './AddContactForm'

export default class App extends Component {
  state = {
    showContacts: true,
    showForm: false,
    contacts: contacts,
  }
  sort = () => {
    this.setState(prevState => ({ contacts: prevState.contact.sort(compareNames) }))
  }

  showForm = () => {
    this.setState({ showForm: true })
  }
  render() {
    if (this.state.showForm) return <AddContactForm />
    return (
      <View style={styles.container}>
        <Button title="add contact" onPRess={this.showForm} />
        {this.state.showContacts && <SectionListContacts contacts={this.state.contacts} />}
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36485f',
  }
}); 
-----
import 'react-native-gesture-handler';
import React, { Component } from 'react';

import Clients from './screens/Clients';
import Profile from './screens/Profile';

import Complaints from './tabs/Complaints'
import Announcement from './tabs/Announcement'
import Resources from './tabs/Resources'

import { NavigationContainer } from '@react-navigation/native';
//import {createStackNavigator} from '@react-nativation/stack';
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