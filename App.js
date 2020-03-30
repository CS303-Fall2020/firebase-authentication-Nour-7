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
import config from './config'
import * as firebase from 'firebase'


if (!firebase.apps.length) {
  console.log("initializeApp-----------------")
  firebase.initializeApp(config)
}
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
    flex: 1
  }
});
