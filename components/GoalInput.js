import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

const GoalInput = ({ handleAddGoal, showModal, hideModal }) => {
  //  state for the user input
  const [userInput, setUserInput] = useState("");

  //  this is where we add our functions for state or handlers
  const handleUserInput = (userInput) => {
    setUserInput(userInput);
  };

  const addGoalHandler = () => {
    handleAddGoal(userInput);
    setUserInput("");
  };

  return (
    <Modal visible={showModal} animationType="fade">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/favicon.png")} />
        <TextInput
          onChangeText={handleUserInput}
          style={styles.textInput}
          placeholder="Your Course Goal!"
          placeholderTextColor={"#e5cef5"}
          value={userInput}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={addGoalHandler} style={styles.addGoal}>
            <Text style={styles.text}> Add Goal </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addGoal} onPress={hideModal}>
            <Text style={styles.text}> See Goals </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "grey",
    padding: 2,
    width: "65%",
    marginRight: 10,
    paddingLeft: 3,
    color: "#e5cef5",
  },
  addGoal: {
    borderColor: "#87649e",
    backgroundColor: "#87649e",
    borderWidth: 5,
    borderRadius: 6,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  text: {
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "space-evenly",
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
