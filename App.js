import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Navigator from "./routes/homeStack";
import { SplashScreen } from 'expo';



export default function App() {
  
  // SplashScreen.preventAutoHide()


  console.disableYellowBox = true;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed");
      }}
    >
      <View style={styles.container}>
        {/* <Header /> */}
        <View style={styles.content}>
          <Navigator />
        </View>
      </View>
    </TouchableWithoutFeedback>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    // padding: 40,
    flex: 1
  }
});
