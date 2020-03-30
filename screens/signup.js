import React, { useState } from "react";
import { StackActions } from '@react-navigation/native';
import { StyleSheet, View, TextInput, Button, Alert, Text, totchabl } from "react-native";
import * as firebase from 'firebase'
import NavButtons from '../components/navButtons'


export default function Signup({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
 
  const submitHandler = () => {
    if(email != "" && password != "" && conPassword != ""){
        if (conPassword == password) {
            signup(email, password);
        } else {
          Alert.alert("Error", "The confirmation password doesn't match with password", [
            { text: "Understood", onPress: () => console.log("alert closed") }
          ]);
        }
    }
    else {
        Alert.alert("Error", "Invalid Credentials", [
          { text: "Understood", onPress: () => console.log("alert closed") }
        ]);
      }
  };

const signup = async (email, pass) => {

    try {
        await firebase.auth().createUserWithEmailAndPassword(email, pass);

        console.log("Account created");
        navigation.dispatch(StackActions.replace('Home'));
    } catch (error) {
        Alert.alert(error.name, error.message, [
            { text: "Understood", onPress: () => console.log("alert closed") }
          ]);
        console.log(error.name)
    }

}


  const changeEmail = val => {
    setEmail(val);
  };
  const changePassword = val => {
    setPassword(val);
  };

  const changeConPassword = val => {
    setConPassword(val);
  };

  const Signup = () => {
    navigation.dispatch(StackActions.replace('Signup'));
};
const Login = () => {
    navigation.dispatch(StackActions.replace('Login' ));

};
const ForgetPass = () => {
    navigation.dispatch(StackActions.replace('ForgetPass' ));
};

  return (
    <View style= {styles.container}>
      <View style= {{flex:1, marginTop: 40}}>
      <Text>SignUp</Text>
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
          onChangeText={changePassword}
          secureTextEntry={true}
          value={password}

        />
        <TextInput
          secureTextEntry={true}
          autoCapitalize = 'none'
          style={styles.input}
          placeholder="confirm password"
          onChangeText={changeConPassword}
          value={conPassword}
        />
          <Text style={{padding:10}}></Text>

        <Button  onPress={submitHandler} title="SIGNUP" />
      </View>
      <NavButtons  button1={{screen:Login, text:"LOGIN"}} button2={{screen:ForgetPass, text:"FORGET PASSWORD"}}/>
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
    // flex: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#32CD32"
  }
});
