import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert, Text, totchabl } from "react-native";
import {auth} from "../Auth/auth";


export default function Signup({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");


  


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
        await auth.createUserWithEmailAndPassword(email, pass);

        console.log("Account created");

        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          }); 
        // Navigate to the Home page, the user is auto logged in

    } catch (error) {
        setErrorMsg(error.toString())
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
    navigation.reset({
        index: 0,
        routes: [{ name: 'Signup' }],
      });
};
const Login = () => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
};
const ForgetPass = () => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'ForgetPass' }],
      });
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
      />
      <TextInput
        style={styles.input}
        autoCapitalize = 'none'
        placeholder="password"
        onChangeText={changePassword}
        secureTextEntry={true}

      />
      <TextInput
        secureTextEntry={true}
        autoCapitalize = 'none'
        style={styles.input}
        placeholder="confirm password"
        onChangeText={changeConPassword}
      />
        <Text style={{padding:10}}></Text>

      <Button  onPress={submitHandler} title="SIGNUP" />
</View>
<View style= {{flex:1, marginTop: 40}}>
      <View style={styles.nav}>
      <Button color="#228B22" onPress={Login} title="LOGIN" />
      </View>
      <View style={styles.nav}>
      <Button color="#228B22" onPress={ForgetPass} title="FORGET PASSWORD" />
      </View>
     </View>
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
