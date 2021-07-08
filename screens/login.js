import React, { useState } from "react";
import { StackActions } from '@react-navigation/native';

import { StyleSheet, View, TextInput, Button, Alert, Text } from "react-native";
import * as firebase from 'firebase'
import Loader from '../components/loader';
import NavButtons from '../components/navButtons'
export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)



  const submitHandler = () => {
    if(email != "" && password != ""){
        signin(email, password);
    }
    else {
        Alert.alert("Error", "Invalid Credentials", [
          { text: "Understood", onPress: () => console.log("alert closed") }
        ]);
      }
  };

const signin = async (email, pass) => {

    try {
        setLoading(()=>{
            return true
          })    
        await firebase.auth().signInWithEmailAndPassword(email, pass);

        console.log("Logged In!");
        navigation.dispatch(StackActions.replace('Home'));
    } catch (error) {
        Alert.alert(error.name, error.message, [
            { text: "Understood", onPress: () => console.log("alert closed") }
          ]);
          setLoading(()=>{
            return false
          })        
        console.log(error.name)
    }

}
  const changeEmail = val => {
    setEmail(val);
  };
  const changePassword = val => {
    setPassword(val);
  };
  const Signup = () => {
        navigation.dispatch(StackActions.replace('Signup' ));
  };
  const ForgetPass = () => {
        navigation.dispatch(StackActions.replace('ForgetPass' ));
  };



return (
    <View style= {styles.container}>
      <View style= {{flex:1, marginTop: 40}}>
       
       {loading? <Loader/>
       :( 
        <View>
          <Text>Login</Text>
          <TextInput
            style={styles.input}
            autoCapitalize = 'none'
            placeholder="email"
            onChangeText={changeEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            autoCapitalize = 'none'
            placeholder="password"
            textContentType= "password"
            secureTextEntry={true}
            onChangeText={changePassword}
            value={password}
          />
          <Text style={{padding:10}}></Text>
          <Button  onPress={submitHandler} title="LOGIN" />
        </View>
       )}
      </View>
      <NavButtons button1={{screen:Signup, text:"SIGNUP"}} button2={{screen:ForgetPass, text:"FORGET PASSWORD"}}/>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 40,
  },

  nav: {
    backgroundColor: "#fff",
    marginTop: 70,
},
  input: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#32CD32"
  }
});

