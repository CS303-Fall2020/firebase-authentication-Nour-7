import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StyleSheet, View, TextInput, Button, Alert, Text } from "react-native";

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Signup from '../screens/signup';
import Login from '../screens/login';
import ForgetPass from '../screens/forgetPass';


import TodoDetails from '../screens/todoDetails';


const Stack = createStackNavigator()

export default Navigator = ({navigation}) => {
  return (
    <NavigationContainer initialRouteName='Login'>
      <Stack.Navigator
         screenOptions={{
            title: 'My Todos', 
            headerTitleAlign: 'center',
             headerStyle: {
                backgroundColor: '#228B22'},

            headerTitleStyle: {
                alignSelf: 'center',
                color: "#fff",
                fontSize: 20,
                fontWeight: "bold",
          }
      }}
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='ForgetPass' component={ForgetPass} />
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='TodoDetails' component={TodoDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}