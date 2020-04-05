import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals,
    { key: Math.random().toString(), value: enteredGoal }]);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.carePlan}> Care Plan </Text>
      
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoals} 
        renderItem={itemData =>
          <GoalItem title={itemData.item.value} />}
      />
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
  
});
