import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,Button,
  AsyncStorage,
  Text
} from "react-native";
import TodoItem from "../components/todoItem";
import AddTodo from "../components/addTodo";
import Loader from '../components/loader';
import ConLabel from '../components/conLabel';
import { SplashScreen } from 'expo';






export default function Home({ navigation , route}) {

  
  const [todos, setTodos] = useState([]);
  const [isMout, setIsMount] = useState(false)
  const [loading, setLoading] = useState(false)
  const [online, setOnline] = useState(false)


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button  
          
        onPress={()=>{
          logout()
          navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
        }} title="LOGOUT" />
      ),
    });
  }, [navigation]);

  React.useEffect(() => {
    if(!isMout){
      fetchData()
      navigation.setParams({isFocus :false});
      setIsMount(prevMount =>{
        return !prevMount
      })
    }
    if(isMout)
   { 
    if(route.params.isFocus){
      setTodos(prevTodos => {
        updateStorage(prevTodos)
        return [...prevTodos];
       });
       navigation.setParams({isFocus :false});
    }
  }

  });


const logout = async () =>{

  try {

      await firebase.auth().signOut();

      // Navigate to login view

  } catch (error) {
      console.log(error);
  }

}
const loadScreen = () =>{
  return (
    <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#0000ff" />
    <ActivityIndicator size="small" color="#00ff00" />
    <ActivityIndicator size="large" color="#0000ff" />
    <ActivityIndicator size="small" color="#00ff00" />
  </View>
  );
};
 const updateStorage = async(data)=>{
  await AsyncStorage.setItem("Todos", JSON.stringify(data) );
  todo = await  AsyncStorage.getItem("Todos");
  console.log(JSON.parse(todo).length)

 };

  const API = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1", {
      headers: {
        'Cache-Control': 'no-cache',
        'pragma': 'no-cache'
      }});
    if(response.ok){
      const json = await response.json();
      console.log(json)
      await AsyncStorage.setItem("Todos", JSON.stringify(json));
    }
    todo = await  AsyncStorage.getItem("Todos");
    setTodos(() => {
      return JSON.parse(todo);
    });
    };

const fetchData = async()=>{
  setLoading(()=>{
    return true
  })
  console.log(loading)
  try {
    await API();
    setOnline(()=>{
      return true
    })
    console.log("Online")

  } catch (e) {
    todo = await  AsyncStorage.getItem("Todos");
    setTodos(() => {
      console.log(JSON.parse(todo).length)
      return JSON.parse(todo);
    });
    setOnline(()=>{
      return false
    })
    console.log("Offline")
    console.log(e)
  }
  
  setLoading(()=>{
    return false
  })
  
  if(!isMout){
    SplashScreen.hide()
  }
  
}

  const pressHandler = id => {
    navigation.navigate("TodoDetails", {
      data: todos.filter(todo => todo.id == id)[0],
    });
  };

  const todoHandler = id => {
    setTodos(prevTodos => {
      prevTodos = prevTodos.filter(todo => todo.id != id);
      updateStorage(prevTodos)
      return prevTodos;
    });
  };

  const deleteHandler = id => {
    setTodos(prevTodos => {
      index = prevTodos.findIndex(todo => todo.id == id);
      prevTodos[index].completed = !prevTodos[index].completed;
      updateStorage(prevTodos)
      return [...prevTodos];
    });
  };

  const submitHandler = title => {
    if (title.length > 3) {
      setTodos(prevTodos => {
        prevTodos =  [
          { userId:1, id: Math.random().toString(),title, completed:false, comments: [] },
          ...prevTodos
        ]
        updateStorage(prevTodos)
        return prevTodos;
      });
    } else {
      Alert.alert("OOPS", "Todo must be over 3 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") }
      ]);
    }
  };

  if(loading)
    return( 
     <View style ={{flex:1}}>      
     <View style={styles.content}>
      <View style={styles.list}>
      <Loader/>
      </View>
      <Button onPress={fetchData} title="Refresh"/>

    </View>
    </View>

      
      )
  return (
    <View style ={{flex:1}}>      
    <ConLabel connected = {online} fetchData={fetchData}/>
     <View style={styles.content}>
      <AddTodo submitHandler={submitHandler} />
      <View style={styles.list}>
        <FlatList
          data={todos}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item }) => (
            <TodoItem
              item={item}
              pressHandler={pressHandler}
              deleteHandler={deleteHandler}
              todoHandler={todoHandler}
            />
          )}
        />
      </View>
      <Button onPress={fetchData} title="Refresh"/>

    </View>
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
    flex: 1,
    marginBottom: 20,

  }
});

Home.navigationOptions = ({
  title: 'Home'
})