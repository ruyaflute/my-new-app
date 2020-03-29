import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <Text style={styles.carePlan}> Care Plan </Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Care Plan Goal"
          style={styles.input}
        />
        <Button title="ADD" />
      </View>
      <View>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  carePlan: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    padding: 20
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
});
