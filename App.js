import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import Announcement from './tabs/Announcement'

const App = () => {
  return (
    <Announcement />
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36485f',
  }
}); 