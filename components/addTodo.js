import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = val => {
    setText(val);
  };

  const pressHandler = () => {
    submitHandler(text);
    setText("");
  };

  return (
    <View>
      <TextInput
        multiline={true}
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
        value={text}
      />
      <Button color="#228B22" onPress={pressHandler} title="add todo" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    // flex: 1,
    // marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#32CD32"
  }
});
