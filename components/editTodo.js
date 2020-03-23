import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function EditTodo({ submitHandler, val }) {
  const [text, setText] = useState(val);

  const changeHandler = val => {
    setText(val);
  };

  const pressHandler = () => {
    submitHandler(text);
  };

  return (
    <View>
      <TextInput
        multiline={true}
        style={styles.input}
        placeholder={text}
        onChangeText={changeHandler}
        value={text}
      />
      <Button color="#228B22" onPress={pressHandler} title="Edit Todo" />
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
