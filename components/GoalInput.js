import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="Care Plan Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
    );
};

const styles = StyleSheet.create({
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
      },
});

export default GoalItem;