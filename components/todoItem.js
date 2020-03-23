import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


export default function TodoItem({
  pressHandler,
  item,
  deleteHandler,
  todoHandler
}) {
  // console.log(item);


  const textStyle = state => {
    if (state == true) decoration = "line-through";
    else decoration = "none";
  
    return {
      flex: 1,
      marginLeft: 10,
      textDecorationLine: decoration,
      textDecorationStyle: "solid"
    };
  };
  const IconChange = state => {
    let icon =""
    if (state == true) icon = "check-box";
    else icon = "check-box-outline-blank";
  
    return icon;
  };
  
  return (
    <TouchableOpacity onPress={() => pressHandler(item.id)}>
      <View style={styles.item}>
        <MaterialIcons
          name={IconChange(item.completed)}
          size={25}
          color="#333"
          onPress={() => {
            deleteHandler(item.id);
          }}
        />
        {/* <Text style={styles.itemText}>{item.text}</Text> */}
        <Text style={textStyle(item.completed)}>{item.title}</Text>
        {
          <MaterialIcons
            style={(float = "right")}
            name="delete"
            size={25}
            color="#333"
            onPress={() => {
              todoHandler(item.id);
            }}
          />
        }
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#228B22",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    // display: "flex",
    // flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center"
  },
  itemText: {
    flex: 1,
    marginLeft: 10
  }
});
