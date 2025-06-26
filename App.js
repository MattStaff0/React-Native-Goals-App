import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  //  state to set the modal
  const [button, setButton] = useState(false);

  //  state for the goals list
  const [goalList, setGoalList] = useState([]);

  // handler for showing the button
  const handleModalShow = () => {
    setButton(true);
  };

  //  handler for closing the modal
  const handleModaHide = () => {
    setButton(false);
  };

  //  handler for adding goals
  const handleAddGoal = (userInput) => {
    setGoalList((currentGoalList) => [
      ...currentGoalList,
      { text: userInput, id: Math.random().toString() },
    ]);
  };

  //  handler for deleting goals - want to get the id for goal -
  const handleDeleteGoal = (id) => {
    setGoalList((currentGoalList) =>
      //  returns false if the ids are equal and will filter out the goal from the list
      currentGoalList.filter((goal) => goal.id !== id)
    );
  };
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.appContainer}>
        <Button
          title="Add new Goal"
          color="#e5cef5"
          onPress={handleModalShow}
        />
        <GoalInput
          handleAddGoal={handleAddGoal}
          showModal={button}
          hideModal={handleModaHide}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalList}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  goal={itemData.item.text}
                  deleteGoal={handleDeleteGoal}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "purple",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    width: "100%",
    flex: 5,
  },
});
