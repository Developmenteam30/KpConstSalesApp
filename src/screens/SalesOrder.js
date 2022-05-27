import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  FlatList,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import QRCodeScanner from 'react-native-qrcode-scanner';

import styles from '../styles/SalesOrderStyle';
import {Images} from '../utils/Images';
import {colors} from '../utils/Variables';
import api from '../utils/Api';
import Footer1 from './Footer1';
import CustomTextInput from '../component/CustomTextInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../component/CustomButton';
import Dropdown1 from './Dropdown1';
import Dropdown6 from './Dropdown6';
const SalesOrder = props => {
  const [server, setServer] = useState('');
  const [client, setClient] = useState(null);
  const [organization, setOrganization] = useState(null);
  const [role, setRole] = useState(null);
  const [warehouse, setWarehouse] = useState(null);
  const [datefrom, setDatefrom] = useState('');
  const [dateto, setDateto] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <LinearGradient
          colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          style={styles.MainView}>
          {/* <View style={styles.headerView}> */}
          <View style={styles.headerView}>
            <View>
              <Icon
                onPress={() => props.navigation.goBack()}
                name="keyboard-backspace"
                color={colors.white}
                size={30}
              />
            </View>
            <Text style={styles.headerText}>Sales Order</Text>
            <View style={{width: '5%'}}></View>
          </View>

          <View style={styles.backgroundStyle}>
            <View style={styles.inputMainContainer}>
              <View style={styles.hight}>
                <Text style={styles.headingTxt}>Document No.</Text>
                <View style={styles.inputView}>
                  {/* <Text>email</Text> */}

                  <CustomTextInput
                    placeholder="Enter Document No."
                    placeholderTextColor={colors.gray}
                    onChangeText={TextInputValue => setServer(TextInputValue)}
                    value={server}
                    keyboardType={'number-pad'}
                  />
                </View>
              </View>
              <View style={styles.rowDirection3}>
                <View style={styles.spaces1}>
                  <Text style={styles.formTxt}>Date </Text>
                  <View style={styles.inputView0}>
                    <TextInput
                      style={styles.modalinput}
                      placeholder="03-05-2022"
                      placeholderTextColor={colors.gray}
                      onChangeText={TextInput => setDatefrom(TextInput)}
                      value={datefrom}
                      keyboardType={'number-pad'}
                    />
                  </View>
                </View>
                <View style={styles.spaces}></View>
                <View style={styles.spaces1}>
                  <Text style={styles.formTxt}>Delivery Date</Text>
                  <View style={styles.inputView0}>
                    <TextInput
                      style={styles.modalinput}
                      placeholder="09-05-2022"
                      placeholderTextColor={colors.gray}
                      onChangeText={TextInput => setDateto(TextInput)}
                      value={dateto}
                      keyboardType={'number-pad'}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.hight}>
                <Text style={styles.headingTxt}>Customer</Text>
                <Dropdown6 />
              </View>

              <View style={styles.hight}>
                <Text style={styles.headingTxt}>Drafted/Completed</Text>
                <Dropdown1 />
              </View>
              <View style={{marginTop: 30}}>
                <CustomButton
                  onPress={() => props.navigation.navigate('SalesOrder1')}
                  title="NEXT"
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
      <View style={styles.footer1}>
        <Footer1 active={3} navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};
export default SalesOrder;
