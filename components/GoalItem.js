import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const GoalItem = ({ goal, deleteGoal, id }) => {
  return (
    <Pressable
      onPress={deleteGoal.bind(this, id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalView}>
        <Text style={styles.goalText}> {goal} </Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;
const styles = StyleSheet.create({
  goalView: {
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 15,
    backgroundColor: "#2f024d",
    width: "90%",
  },
  goalText: {
    textAlign: "center",
    color: "#cdafe0",
    padding: 20,
  },
  pressedItem: {
    opacity: 0.7,
  },
});
