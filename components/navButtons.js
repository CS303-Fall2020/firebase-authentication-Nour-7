import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function NavButtons({ button1, button2 }) {

  return (
    <View style= {{flex:1, marginTop: 40}}>
    <View style={styles.nav}>
    <Button color="#228B22" onPress={button1.screen} title= {button1.text}/>
    </View>
    <View style={styles.nav}>
    <Button color="#228B22" onPress={button2.screen} title= {button2.text} />
    </View>
   </View>
  );
}
const styles = StyleSheet.create({
  nav: {
    backgroundColor: "#fff",
    marginTop: 70,
},
});

