import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Button } from 'react-native';

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.profile}>
                <View style={styles.mainbody}>
                    <Image style={styles.imgprofile} source={require('../assets/snack-icon.png')} />
                    <Text style={styles.profiletext}>Notes</Text>
                    <Text style={styles.profiletext}>Name</Text>
                    <Text style={styles.profiletext}>DOB</Text>
                    <Text style={styles.profiletext}>Phone</Text>
                    <Text style={styles.profiletext}>Address</Text>
                    <Text style={styles.profiletext}>Insurance</Text>
                    <Text style={styles.profiletext}>Coordinator Name</Text>

                    <TouchableOpacity style={styles.tabs}>
                        <Text style={styles.tabstext}> Other Demographic </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs}>
                        <Text style={styles.tabstext}> Patient Complaints </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs}>
                        <Text style={styles.tabstext}> Case Management/Coordination</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs}>
                        <Text style={styles.tabstext}> Event Announcement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs}>
                        <Text style={styles.tabstext}> Entitlement Resources</Text>
                    </TouchableOpacity>
                    <Button
                        title='Bottom Tabs'
                        onPress={() => this.props.navigation.navigate('Bottom Tabs')}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        backgroundColor: '#36485f',       
    },
    mainbody: {
        marginTop: 50,
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 70,
    },
    imgprofile: {
        marginLeft: 5,
        marginTop: 5,
        height: 120,
        width: 120,
    },
    profiletext: {
        color: '#FFF',
        marginTop: 5,
        width: 160,
        textAlign: 'left',
        opacity: 0.9,
    },
    tabs: {
        alignSelf: 'stretch',
        padding: 10,
        backgroundColor: '#59cbbd',
        marginTop: 15,
    },
    tabstext: {
        color: '#fff',
    },
});