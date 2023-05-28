import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const index = () => {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInput = (text) => {
    setText(text);
  };

  const addGoal = () => {
    setGoals((currentGoals) => [...currentGoals, text]);
  };

  return (
    <View>
      <View>
        <TextInput placeholder="Masukan Goal" onChangeText={goalInput} />
        <Button title="Add" onPress={addGoal} />
      </View>
      <View>
        {goals.map((key) => {
          <View key={key}>
            <Text>{key}</Text>
          </View>;
        })}
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
