import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export default function Loader() {
    return (
        <View style={styles.header}>
        <ActivityIndicator size="large" color="#228B22" />
      </View>
      );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
});
