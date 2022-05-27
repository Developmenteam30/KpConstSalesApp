import React, {useState, useEffect} from 'react';
import {Text, View, Image, Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import api from '../utils/Api';
import {Images} from '../utils/Images';
import styles from '../styles/SetUpScreenStyle';
import {colors} from '../utils/Variables';
import CustomTextInput from '../component/CustomTextInput';
import CustomButton from '../component/CustomButton';

const SetUpScreen = props => {
  const [server, setServer] = useState('');
  const [client, setClient] = useState(null);
  const [organization, setOrganization] = useState(null);
  const [role, setRole] = useState(null);
  const [warehouse, setWarehouse] = useState(null);

  /* const setUp = async () => {
    if (server != '' && client != null && organization != null && role != null && warehouse != null){
      var collectionStr = {'server': server, 'client': client, 'organization': organization, "role": role, 'warehouse': warehouse}
      await api.storeData('collectionStr', collectionStr);
      navigation.navigate('Login');
    }else{
      Alert.alert('Please fill all fields');
    }
  };



  const checkServerDetails = async () => {
    var collectionStr = await api.getData('collectionStr');
    if(collectionStr && collectionStr != null){
      global.collectionStr = collectionStr;
      if(server == '' || server == null){
        setServer(collectionStr.server);
        setClient(collectionStr.client);
        setOrganization(collectionStr.organization);
        setRole(collectionStr.role);
        setWarehouse(collectionStr.warehouse);
      }
    //navigation.navigate('Login')
    }
  }



  useEffect(() => {
    checkServerDetails();
  });*/

  return (
    <View style={styles.mainContainer}>
      <KeyboardAwareScrollView>
        <LinearGradient
          colors={[colors.gradientMilkyBlue, colors.gradientBlue]}
          style={styles.backgroundStyle}>
          <Image source={Images.logo} style={styles.logoStyle} />
          <Text style={styles.mainText}>SyvaSoft</Text>

          <View style={styles.inputMainContainer}>
            <View style={styles.inputView}>
              {/* <Text>email</Text> */}
              <Icon
                name="computer"
                color={colors.lightGray}
                size={30}
                style={{top: 9}}
              />

              <CustomTextInput
                placeholder="Server"
                placeholderTextColor={colors.white}
                onChangeText={TextInputValue => setServer(TextInputValue)}
                value={server}
              />
            </View>
            <View style={styles.inputView}>
              {/* <Text>email</Text> */}
              <Icon
                name="person"
                color={colors.lightGray}
                size={30}
                style={{top: 9}}
              />

              <CustomTextInput
                placeholder="Client"
                placeholderTextColor={colors.white}
                onChangeText={TextInputValue => setClient(TextInputValue)}
                value={client}
              />
            </View>
            <View style={styles.inputView}>
              {/* <Text>email</Text> */}
              <Icon
                name="people"
                color={colors.lightGray}
                size={30}
                style={{top: 9}}
              />

              <CustomTextInput
                placeholder="Organization"
                placeholderTextColor={colors.white}
                onChangeText={TextInputValue => setOrganization(TextInputValue)}
                value={organization}
              />
            </View>
            <View style={styles.inputView}>
              {/* <Text>email</Text> */}
              <Icon
                name="user-tie"
                type="font-awesome-5"
                color={colors.lightGray}
                size={25}
                style={{top: 9}}
              />

              <CustomTextInput
                placeholder="Role"
                placeholderTextColor={colors.white}
                onChangeText={TextInputValue => setRole(TextInputValue)}
                value={role}
              />
            </View>
            <View style={styles.inputView}>
              {/* <Text>email</Text> */}
              <Icon
                name="home"
                color={colors.lightGray}
                size={30}
                style={{top: 9}}
              />

              <CustomTextInput
                placeholder="Warehouse"
                placeholderTextColor={colors.white}
                onChangeText={TextInputValue => setWarehouse(TextInputValue)}
                value={warehouse}
              />
            </View>
          </View>
          <View style={{marginBottom: '25%'}}>
            <CustomButton
              onPress={() => props.navigation.navigate('Login')}
              title="SET UP"
            />
          </View>
        </LinearGradient>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default SetUpScreen;
