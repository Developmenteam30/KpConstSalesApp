import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from '../styles/CustomButtonStyle';
import {colors} from '../utils/Variables';

const CustomButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 3}}
        style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default CustomButton;
