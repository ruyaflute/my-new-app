import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';

export default class Clients extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                   <Text style={styles.headerText}>Clients</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#36485f',
    },
    header: {
      backgroundColor: '#59cbbd',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      color: '#FFFFFF',
      fontSize: 18,
      padding: 26,
      fontWeight: '700',
    }
});