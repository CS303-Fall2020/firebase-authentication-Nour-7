import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
} from "react-native";
import AddComment from "../components/addComment";
import EditTodo from "../components/editTodo";
import CommentItem from "../components/commentItem";
export default function TodoDetails({ navigation, route }) {
  const [comments, setComments] = useState(route.params.data.comments);
  
  const pressHandler = key => {
    setComments(prevComments => {
      prevComments = prevComments.filter(comment => comment.key != key);
      todo = route.params.data;
      todo.comments = prevComments;
      navigation.setParams(todo);
      return prevComments;
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setComments(prevComments => {
        prevComments = [
          { text, key: Math.random().toString() },
          ...prevComments
        ];
        todo = route.params.data;
        todo.comments = prevComments;
        navigation.setParams(todo);
        return [...prevComments];
      });
    } else {
      Alert.alert("OOPS", "Todo must be over 3 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") }
      ]);
    }
  };

  const editTodo = text => {
    if (text.length > 3) {
      
       todo = route.params
      todo.data.title = text;
      todo.isFocus = true;
      navigation.setParams(todo);
      console.log(route.params.data.title)
      // navigation.goBack();
      navigation.navigate('Home',{isFocus :true})
    } else {
      Alert.alert("OOPS", "Todo must be over 3 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") }
      ]);
    }
  };
  
  return (
    <View style={styles.content}>
      <EditTodo submitHandler={editTodo} val={route.params.data.title} />
      {/* <AddComment
        submitHandler={submitHandler}
        todoId={route.params.data.id}
      />
      <View style={styles.list}>
        <FlatList
          data={comments}
          renderItem={({ item }) => (
            <CommentItem item={item} pressHandler={pressHandler} />
          )}
        />
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
