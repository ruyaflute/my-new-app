import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class Regform extends Component {
  render() {
  return (
    <View style={styles.regform}>
      <Text> Texting </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36485f',
    paddingLeft: 60,
    paddingRight: 60,
  },
});
