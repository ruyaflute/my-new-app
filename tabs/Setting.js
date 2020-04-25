import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

class Setting extends Component {
    render() {
        return (
            <View style={styles.center}>
                <Text style={styles.title}>Setting</Text>
                <Button
                title='View Bottom Tabs'
                onPress={() => this.props.navigation.navigate('Bottom Tabs')}
                />
                <Button 
                title='View Top Tabs'
                onPress={() => this.props.navigation.navigate('Top Tabs')}
                />
            </View>
        );
    }
}

export default Setting;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize:36,
        marginBottom: 16,
    }
});