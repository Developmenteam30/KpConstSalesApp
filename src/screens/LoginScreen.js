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
import {ScrollView} from 'react-native-gesture-handler';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(true);

  const login = async () => {
    var l = await api.login(email, password);
    if (l) {
      var s = await api.storeData('userId', l);
      await api.storeData('email', email);
      await api.storeData('password', password);
      if (s) {
        global.userId = l;
        global.email = email;
        global.password = password;
        props.navigation.replace('HomeScreen');
      } else {
        alert('not saved');
      }
    }
  };
  /* const checkServerDetails = async () => {
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
  };*/
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <LinearGradient
          colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
          start={{x: 2, y: 0}}
          end={{x: 1, y: 3}}
          style={styles.backgroundStyle}>
          <View>
            <Image source={Images.logo2} style={styles.logoStyle} />
          </View>
          <Text style={styles.mainText}>KPCons Sales App</Text>
          <View style={styles.whiteBox}>
            <View>
              <Text style={styles.wellcomeText}>Welcome back</Text>
              <Text style={styles.loginTxt}>Login to continue</Text>

              <Image source={Images.blueLine} style={styles.line} />
            </View>

            <View style={styles.inputMainContainer}>
              <Text style={styles.userTxt}>Username</Text>
              <View style={styles.inputView}>
                {/* <Text>email</Text> */}
                <Icon
                  name="email"
                  color={colors.blue}
                  size={30}
                  style={{top: 9}}
                />
                <CustomTextInput
                  placeholder="Enter Username"
                  placeholderTextColor={colors.gray}
                  onChangeText={TextInputValue => setEmail(TextInputValue)}
                  value={email}
                />
              </View>
              <Text style={styles.userTxt}>Password</Text>
              <View style={styles.inputView}>
                {/* <Text>email</Text> */}
                <Icon
                  name="lock"
                  color={colors.blue}
                  size={30}
                  style={{top: 9}}
                />
                <CustomTextInput
                  placeholder="Enter Password"
                  placeholderTextColor={colors.gray}
                  secureTextEntry={visiblePassword}
                  onChangeText={TextInputValue => setPassword(TextInputValue)}
                  value={password}
                />
                <TouchableOpacity
                  onPress={() => setVisiblePassword(!visiblePassword)}>
                  {!visiblePassword && (
                    <Icon
                      name="eye"
                      type={'ionicon'}
                      color={colors.gray}
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
                      color={colors.gray}
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
              <View style={{marginTop: 30}}>
                <CustomButton
                  onPress={() => props.navigation.navigate('HomeScreen')}
                  title="LOGIN"
                />
              </View>
            </View>
          </View>
        </LinearGradient>
        {/**    <CustomButton
          onPress={() => props.navigation.navigate('HomeScreen')}
          title="LOGIN"
        />*/}
      </ScrollView>
    </SafeAreaView>
  );
};
export default LoginScreen;
