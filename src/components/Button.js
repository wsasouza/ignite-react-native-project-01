import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";

export function Button({ onPress }) {
  return(
    <TouchableOpacity 
    style={styles.button} 
    activeOpacity={0.7}
    onPress={onPress}
    >
      <Text style={styles.textButton}>Adicionar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a370f7",
    padding: 15,
    borderRadius: 10,
    marginTop: 20
  },
  textButton: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 17,
    fontWeight: "bold"
  },
})



