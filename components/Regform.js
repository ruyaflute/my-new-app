import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default class Regform extends Component {
  render() {
  return (
    <KeyboardAvoidingView style={styles.regform}>
      <Text style={styles.header}>Let's begin. Please fill out the information below so we can pair you with your care team.</Text>

      <TextInput style={styles.textinput} placeholder="Your name" 
      underlineColorAndroid={'transparent'} />

      <TextInput style={styles.textinput} placeholder="Your date of birth" 
      underlineColorAndroid={'transparent'} />

      <TextInput style={styles.textinput} placeholder="Your password" 
      secureTextEntry={true}
      underlineColorAndroid={'transparent'} />
      
      <TouchableOpacity style={styles.button} >
      <Text style={styles.btntext}>Sign up </Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
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
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 14,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
