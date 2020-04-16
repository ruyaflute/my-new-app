import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default class Regform extends Component {
  render() {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.regform}>
      <Text style={styles.header}>Let's begin. Please fill out the information below so we can pair you with your care team.</Text>

      <TextInput 
      placeholder="Your name"
      style={styles.textinput}  
      underlineColorAndroid={'transparent'} 
      onSubmitEditing={() => this.yourdob.focus()} />

      <TextInput 
      placeholder="Your date of birth"
      style={styles.textinput}  
      underlineColorAndroid={'transparent'} 
      ref={(input) => this.yourdob = input}
      onSubmitEditing={() => this.passwordInput.focus()} />

      <TextInput 
      placeholder="Your password"
      style={styles.textinput}  
      secureTextEntry={true}
      underlineColorAndroid={'transparent'} 
      ref={(input) => this.passwordInput = input}/>
      
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