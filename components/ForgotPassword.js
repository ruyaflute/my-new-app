import React, { Component } from 'react';
import { Text, View, KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  handleEmailChange(email) {

  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper}
      behavior="padding">
      <View style={styles.form}>
      <Text style={styles.forgotPasswordHeading}>Forgot your password?</Text>
      <Text style={styles.forgotPasswordSubheading}> Enter your email to find your account: </Text>
      
       <TextInput 
      placeholder="EMAIL ADDRESS"
      style={styles.inputField}  
      />

      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#36485f',
  },
  form: {
    marginTop: 90,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  forgotPasswordHeading: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '300',
  },
  forgotPasswordSubheading: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 60,
  },
  inputField: {
    marginBottom: 30,
    textColor: '#fff'
  }
});
