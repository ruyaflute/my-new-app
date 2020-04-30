//Text screens

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


-----
//Navigation practice
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen'


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;


----------
//Navigation worked
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// https://oblador.github.io/react-native-vector-icons/

import Login from './screens/Login'
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
        name="Profile"
        style={{ marginBottom: 16 }}
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'human'} />
          ),
        }}
      />

      <MaterialBottomTabs.Screen
        name="Complaints"
        style={{ marginBottom: 16 }}
        component={Complaints}
        options={{
          tabBarLabel: 'Complaints',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'home'} />
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="Announcement"
        component={Announcement}
        options={{
          tabBarLabel: 'Announcement',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'human'} />
          )
        }}
      />
      <MaterialBottomTabs.Screen
        name="Resources"
        component={Resources}
        options={{
          tabBarLabel: 'Resources',
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
        <Stack.Screen name="View client Profile 1" children={this.createBottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

--------
//Clinet list
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import contacts, { compareNames } from './contacts'

import SectionListContacts from './SectionListContacts'
import AddContactForm from './AddContactForm'

export default class App extends React.Component {
  state = {
    showContacts: true,
    showForm: false,
    contacts: contacts,
  }


  sort = () => {
    this.setState(prevState => ({ contacts: prevState.contacts.sort(compareNames) }))
  }

  showForm = () => {
    this.setState({ showForm: true })
  }

  render() {
    if (this.state.showForm) return <AddContactForm />
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Clients</Text>
        </View>
        <Button title="add contact" onPress={this.showForm} />
        {this.state.showContacts && <SectionListContacts contacts={this.state.contacts} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#59cbbd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 25,
    padding: 26,
    fontWeight: '700',
    paddingTop: 50,
    paddingBottom: 20,
  }
});