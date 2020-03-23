import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert, Text } from "react-native";
import {auth} from "../Auth/auth";


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
        await auth.sendPasswordResetEmail(email);
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
<View style= {{flex:1, marginTop: 40}}>
    <View style={styles.nav}>
    <Button color="#228B22" onPress={Signup} title="Signup" />
    </View>
    <View style={styles.nav}>
    <Button color="#228B22" onPress={Login} title="Login" />
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
