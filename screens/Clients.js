import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TextInput, Button } from 'react-native';

export default class Clients extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Clients</Text>
                </View>
                <View>
                    <Button
                        title='View client Profile 1'
                        onPress={() => this.props.navigation.navigate('View client Profile 1')}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: '#59cbbd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 25,
        padding: 26,
        fontWeight: '700',
        paddingTop: 50,
        paddingBottom: 20,
    }
});