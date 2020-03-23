import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert, Text } from "react-native";
import {auth} from "../Auth/auth";
import Loader from '../components/loader';


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
        await auth.signInWithEmailAndPassword(email, pass);

        console.log("Logged In!");
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
        // Navigate to the Home page, the user is auto logged in

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

if(loading)

return (
    <View style= {styles.container}>
    <View style= {{flex:1, marginTop: 40}}>
    <Loader/>
    </View>
<View style= {{flex:1, marginTop: 40}}>
      <View style={styles.nav}>
      <Button color="#228B22" onPress={Signup} title="Signup" />
      </View>
      <View style={styles.nav}>
      <Button color="#228B22" onPress={ForgetPass} title="FORGET PASSWORD" />
      </View>
     </View>
    </View>
  );

return (
    <View style= {styles.container}>
    <View style= {{flex:1, marginTop: 40}}>
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
<View style= {{flex:1, marginTop: 40}}>
      <View style={styles.nav}>
      <Button color="#228B22" onPress={Signup} title="Signup" />
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
