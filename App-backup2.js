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