import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class Splash extends Component {
	render() {
		return (
			<View style={styles.container}>
                <Text style={styles.title}></Text>
			</View>
			)
	}
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyCOntent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})