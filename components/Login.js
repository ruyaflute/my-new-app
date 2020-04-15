import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('assets/snack-icon.png')}
          />
          <Text style={styles.title}> 
          Welcome to CMCC APP
          </Text>
        </View>
        
        <KeyboardAvoidingView behavior="padding" style={styles.loginFormContainer}> 
        <TextInput 
        placeholder="username or email"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        style={styles.input} />
        <TextInput 
        placeholder="password"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        secureTextEntry
        style={styles.input} />
        
        <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
          
          <View style={styles.retrivePassword}> 
          <Text style={styles.title}> 
          Dont't remember your password?
          </Text>
        </View>

        </KeyboardAvoidingView>




        <View style={styles.formContainer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    color: '#FFF',
    marginTop: 10, 
    width: 160,
    textAlign: 'center',
    opacity: 0.9,
  },
  loginFormContainer: {
    padding: 20,
  }, 
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  retrivePassword: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
});
//https://www.youtube.com/watch?v=1xu1eeRCPEk