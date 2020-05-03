import React from 'react';
import { Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

function Regform ({navigation}) {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.regform}>
                <Text style={styles.welcome}> Welcome! </Text>
                <Text style={styles.header}>Let's begin. Please fill out the information below.</Text>

                <TextInput
                    placeholder="Your name"
                    style={styles.textinput}
                    underlineColorAndroid={'transparent'}
                    onSubmitEditing={() => React.yourdob.focus()} />

                <TextInput
                    placeholder="Your date of birth"
                    style={styles.textinput}
                    underlineColorAndroid={'transparent'}
                    ref={(input) => React.yourdob = input}
                    onSubmitEditing={() => React.youremail.focus()} />

                <TextInput
                    placeholder="Your email"
                    style={styles.textinput}
                    underlineColorAndroid={'transparent'}
                    ref={(input) => React.youremail = input}
                    onSubmitEditing={() => React.passwordInput.focus()} />

                <TextInput
                    placeholder="Your password"
                    style={styles.textinput}
                    secureTextEntry={true}
                    underlineColorAndroid={'transparent'}
                    ref={(input) => React.passwordInput = input} />

                <TouchableOpacity style={styles.button} 
                onPress={() => navigation.navigate('Login')} >
                    <Text style={styles.btntext}>Sign up </Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        );
    }
export default Regform;

const styles = StyleSheet.create({
    regform: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f',
        paddingLeft: 60,
        paddingRight: 60,
        alignSelf: 'stretch',
    },
    welcome: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 30,
        borderBottomColor: '#199187',
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
