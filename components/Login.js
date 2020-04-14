import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TextInput } from 'react-native';

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
        
        <View style={styles.loginFormContainer}> 
        <TextInput 
        placeholder="username or email"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        style={styles.input} />
        <TextInput 
        placeholder="password"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        style={styles.input} />
        
        </View>



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
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10,
  }
});

//https://www.youtube.com/watch?v=1xu1eeRCPEk