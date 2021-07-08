import React, { useState } from "react";
import { StackActions } from '@react-navigation/native';
import { StyleSheet, View, TextInput, Button, Alert, Text } from "react-native";
import * as firebase from 'firebase'
import NavButtons from '../components/navButtons'


export default function ForgetPass({navigation}) {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");



  const submitHandler = () => {
    if(email != "" ){
      forget(email);
    }
    else {
        Alert.alert("Error", "Invalid Credentials", [
          { text: "Understood", onPress: () => console.log("alert closed") }
        ]);
      } 
  };

const forget = async (email, pass) => {

    try {
        await firebase.auth().sendPasswordResetEmail(email);
        setText("Email was sent successfully, please follow the instruction to reset your password")
        console.log("Email sent");


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

  const Signup = () => {
    navigation.dispatch(StackActions.replace('Signup' ));
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
      <Text>Forget Password?</Text>
        <TextInput
          style={styles.input}
          autoCapitalize = 'none'
          placeholder="email"
          onChangeText={changeEmail}
        />
        
        <Text style={{padding:10}}>{text}</Text>
        <Button  onPress={submitHandler} title="SEND RESET EMAIL" />
        </View>
        <NavButtons button1={{screen:Signup, text:"SIGNUP"}} button2={{screen:Login, text:"LOGIN"}}/>
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
