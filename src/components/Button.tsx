import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return(
    <TouchableOpacity 
    style={styles.button}     
    {...rest}
    >
      <Text style={styles.textButton}>{title}</Text>
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



