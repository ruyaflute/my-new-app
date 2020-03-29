import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (  
    <View style={{ padding: 50 }}> 
    <Text style={{
      fontSize: 30,
      textAlign:'center',
      color:'black',
      fontWeight:'bold'
      }}> Care Plan </Text>
      <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
        }}>
        <TextInput
        placeholder="Care Plan Goal"
        style={{ 
          width: '80%', 
          borderColor: 'black', 
          borderWidth: 1 , 
          padding: 10 }}
        />
        <Button title="ADD" />
      </View>
      <View>
      </View>
      
    </View>

  );
}

const styles = StyleSheet.create({

});
