//Text screens

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import Profile from './screens/Profile'
import Login from './screens/Login';

const App = () => {
  return (
    <Login />
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36485f',
  }
}); 

