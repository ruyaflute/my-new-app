import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TextInput } from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.profile}>
      <View style={styles.mainbody}>
      <Image style={styles.imgprofile} source={require('assets/snack-icon.png')} />
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: '#36485f',
  },
  mainbody: {
    marginTop: 30,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 70,
  },
  imgprofile: {
    marginLeft: 5,
    marginTop: 5,
    height: 120,
    width: 120,
  },
});