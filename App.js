//import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

//import Clients from './screens/Clients'
import contacts, {compareNames} from './contacts'
import SectionListContacts from './SectionListContacts'
import ScrollViewContacts from './ScrollViewContacts'
import FlatListContacts from './FlatListContacts'
import AddContactForm from './AddContactForm'

export default class App extends Component {
  state = {
    showContacts: true,
    showForm: false,
    contacts: contacts,
  }
  sort = () => {
    this.setState(prevState => ({ contacts: prevState.contact.sort(compareNames) }))
  }

  showForm = () => {
    this.setState({ showForm: true })
  }
  render() {
    if (this.state.showForm) return <AddContactForm />
    return (
      <View style={styles.container}>
        <Button title="add contact" onPRess={this.showForm} />
        {this.state.showContacts && <SectionListContacts contacts={this.state.contacts} />}
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36485f',
  }
}); 