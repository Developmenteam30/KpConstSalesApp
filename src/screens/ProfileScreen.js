import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import api from '../utils/Api';
import {Images} from '../utils/Images';
import styles from '../styles/ProfileScreenStyle';
import {colors} from '../utils/Variables';
import CustomTextInput from '../component/CustomTextInput';
import CustomButton from '../component/CustomButton';

const ProfileScreen = props => {
  const [firstName, setFirstName] = useState(global.userId);
  const [lastName, setLastName] = useState('Infotech');
  const [email, setEmail] = useState('curveinfotech@gmail.com');
  const [password, setPassword] = useState('curve@123');

  /*const handlePressLogout = () => {
    Alert.alert('Logout', 'Are you sure to logout', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: async () => {
        var l = await api.logout()
        l ? navigation.replace('Login') : null;
      }},
    ]);
  };
*/
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.mainContainer}>
        <LinearGradient
          colors={[colors.gradientMilkyBlue, colors.gradientBlue]}
          start={{x: 0, y: 0}}
          end={{x: 2, y: 1}}
          style={styles.backgroundStyle}>
          <View style={styles.header}>
            <Icon
              name="keyboard-backspace"
              color="white"
              size={25}
              onPress={() => props.navigation.goBack()}
            />
            <Text style={styles.headerTitle}>Profile</Text>
          </View>
          <Image source={Images.syvaSoft} style={styles.logoStyle} />
          <View style={styles.inputMainContainer}>
            <View style={styles.inputIconView}>
              <Icon
                name="person"
                color={colors.lightGray}
                size={30}
                style={{top: 9}}
              />
              <CustomTextInput
                placeholder="User Name"
                placeholderTextColor={colors.white}
                onChangeText={TextInput => setFirstName(TextInput)}
                value={firstName}
              />
            </View>
            {/* <View style={styles.inputIconView}>
              <Icon
                name="person"
                color={colors.lightGray}
                size={30}
                style={{top: 9}}
              />
              <CustomTextInput
                placeholder="Last Name"
                placeholderTextColor={colors.white}
                onChangeText={TextInput => setLastName(TextInput)}
                value={lastName}
              />
            </View>
            <View style={styles.inputIconView}>
              <Icon
                name="email"
                color={colors.lightGray}
                size={30}
                style={{top: 9}}
              />
              <CustomTextInput
                placeholder="Email"
                placeholderTextColor={colors.white}
                onChangeText={TextInput => setEmail(TextInput)}
                value={email}
              />
            </View>
            <View style={styles.inputIconView}>
              <Icon
                name="lock"
                color={colors.lightGray}
                size={30}
                style={{top: 9}}
              />
              <CustomTextInput
                placeholder="Password"
                placeholderTextColor={colors.white}
                secureTextEntry={true}
                onChangeText={TextInput => setPassword(TextInput)}
                value={password}
              />
            </View> */}
          </View>
          <View style={{marginBottom: '30%'}}>
            <CustomButton title="LOG OUT" />
          </View>
        </LinearGradient>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};
export default ProfileScreen;
