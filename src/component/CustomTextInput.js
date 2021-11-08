import React from "react";
import { TextInput } from "react-native";
import styles from "../styles/CustomTextInputStyle";

const  CustomTextInput = (props) => {
    return(
        <TextInput
              style={styles.inputContainer}
              placeholder={props.placeholder}
              placeholderTextColor={props.placeholderTextColor}
              secureTextEntry={props.secureTextEntry}
              onChangeText={props.onChangeText}
              value={props.value}
            />
    );
}
export default CustomTextInput;