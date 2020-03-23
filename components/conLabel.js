import React from "react";
import { View, ActivityIndicator, StyleSheet, Text,TouchableOpacity } from "react-native";

export default function ConLabel({connected, fetchData}) {

   
        if(!connected){
            return (
                <TouchableOpacity onPress={() => fetchData()}> 
                <View style={styles.header} >
        <Text style={styles.title}> {"It seems you are offline, tap here or press Refresh when you get connected"}</Text>
              </View>
              </TouchableOpacity>)
        }
        else {
            return ( <View>
              </View>)
        }
 
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#BDB76B",
      },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
     padding: 10
  }
});
