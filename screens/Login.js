import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      validEmail: false,
      emailAddress: '',
      validPassword: false,
      loadingVisible: false,
    }
    this.handleCloseNotification = this.handleCloseNotification.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleCloseNotification() {
    this.setState({ formValid: true });
  }

  handleEmailChange(email) {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({ emailAddress: email });

    if (!this.state.validEmaill) {
      if (emailCheckRegex.test(email)) {
        this.setState({ validEmail: true });
      }
    } else {
      if (!emailCheckRegex.test(email)) {
        this.setState({ validEmail: false });
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('assets/snack-icon.png')}
          />
          <Text style={styles.header}>
            Welcome to CMCC
          </Text>
          <Text style={styles.subtitle}>
            The Best Case Management and Care Coordination tool
          </Text>
        </View>

        <KeyboardAvoidingView behavior="padding" style={styles.loginFormContainer}>
          <TextInput
            placeholder="username or email"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="emaill-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input} />
          <TextInput
            placeholder="password"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            returnKeyType="enter"
            secureTextEntry
            style={styles.input}
            ref={(input) => this.passwordInput = input} />

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.retrivePassword}>
            <Text style={styles.title} numberOfLines={1}>
              Don't have an account? Sign up!
          </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.retrivePassword}>
            <Text style={styles.title}  numberOfLines={1}>
              Dont't remember your password?
          </Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>


        <View style={styles.formContainer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36485f',
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
  header: {
    color: '#FFF',
    marginTop: 10,   
    fontSize: 20,
  },
  subtitle: {
    color: '#FFF',
    marginTop: 10,
    fontSize: 12,
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
    backgroundColor: '#59cbbd',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  retrivePassword: {
    textDecorationLine: 'underline',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    width: 400,
    textAlign: 'center',
    opacity: 0.9,
  },
});