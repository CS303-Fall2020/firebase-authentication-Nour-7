import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddComment({ submitHandler, todoId }) {
  const [text, setText] = useState("");

  const changeHandler = val => {
    setText(val);
  };

  const pressHandler = () => {
    submitHandler(text, todoId);
    setText("");
  };

  return (
    <View>
      <TextInput
        multiline={true}
        style={styles.input}
        placeholder="new comment..."
        onChangeText={changeHandler}
        value={text}
      />
      <Button color="#228B22" onPress={pressHandler} title="add comment" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#32CD32"
  }
});
