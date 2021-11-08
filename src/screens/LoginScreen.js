import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import api from '../utils/Api';
import {Images} from '../utils/Images';
import styles from '../styles/LoginScreenStyle';
import {colors} from '../utils/Variables';
import CustomTextInput from '../component/CustomTextInput';
import CustomButton from '../component/CustomButton';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(true);

  const login = async () => {
    var l = await api.login(email, password);
    if (l) {
      console.log(l);
      var s = await api.storeData('userId', l);
      await api.storeData('email', email);
      await api.storeData('password', password);
      if (s) {
        global.userId = l;
        global.email = email;
        global.password = password;
        navigation.replace('Home');
      } else {
        alert('not saved');
      }
    }
  };
  const checkServerDetails = async () => {
    var collectionStr = await api.getData('collectionStr');
    if (collectionStr && collectionStr != null) {
      global.collectionStr = collectionStr;
    } else {
      navigation.replace('SetUp');
    }
  };

  const passwordVisibleHandlePress = () => {
    setVisiblePassword(!visiblePassword);
  };

  useEffect(() => {
    checkServerDetails();
  });

  const removeValue = async key => {
    try {
      //await api.removeValue(key);
      navigation.replace('SetUp');
    } catch (e) {
      // remove error
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <LinearGradient
        colors={[colors.gradientMilkyBlue, colors.gradientBlue]}
        style={styles.backgroundStyle}>
        <Image source={Images.logo} style={styles.logoStyle} />
        <Text style={styles.mainText}>SyvaSoft</Text>
        <View style={styles.inputMainContainer}>
          <View style={styles.inputView}>
            {/* <Text>email</Text> */}
            <Icon
              name="email"
              color={colors.lightGray}
              size={30}
              style={{top: 9}}
            />
            <CustomTextInput
              placeholder="User ID"
              placeholderTextColor={colors.white}
              onChangeText={TextInputValue => setEmail(TextInputValue)}
              value={email}
            />
          </View>
          <View style={styles.inputView}>
            {/* <Text>email</Text> */}
            <Icon
              name="lock"
              color={colors.lightGray}
              size={30}
              style={{top: 9}}
            />
            <CustomTextInput
              placeholder="Password"
              placeholderTextColor={colors.white}
              secureTextEntry={visiblePassword}
              onChangeText={TextInputValue => setPassword(TextInputValue)}
              value={password}
            />
            <TouchableOpacity onPress={() => passwordVisibleHandlePress()}>
              {!visiblePassword && (
                <Icon
                  name="eye"
                  type={'ionicon'}
                  color={colors.white}
                  size={30}
                  style={
                    Platform.OS == 'ios'
                      ? styles.inputIconIos
                      : styles.inputIconAndroid
                  }
                />
              )}
              {visiblePassword && (
                <Icon
                  name="eye-off"
                  type={'ionicon'}
                  color={colors.white}
                  size={30}
                  style={
                    Platform.OS == 'ios'
                      ? styles.inputIconIos
                      : styles.inputIconAndroid
                  }
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <CustomButton onPress={() => login()} title="LOGIN" />
        <TouchableOpacity
          onPress={async () => await removeValue('collectionStr')}>
          <Text style={styles.bottomText}>Change Server Details</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};
export default LoginScreen;
