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
} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import QRCodeScanner from 'react-native-qrcode-scanner';

import styles from '../styles/SalesOrder1Style';
import {Images} from '../utils/Images';
import {colors} from '../utils/Variables';
import api from '../utils/Api';
import Footer1 from './Footer1';
import CustomTextInput from '../component/CustomTextInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../component/CustomButton';
import Dropdown2 from './Dropdown2';
import Dropdown3 from './Dropdown3';
import Dropdown4 from './Dropdown4';
import Dropdown5 from './Dropdown5';
import {ScrollView} from 'react-native-gesture-handler';
const SalesOrder1 = props => {
  const [server, setServer] = useState('');
  const [client, setClient] = useState(null);
  const [organization, setOrganization] = useState(null);
  const [role, setRole] = useState(null);
  const [warehouse, setWarehouse] = useState(null);

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
                <Text style={styles.headingTxt}>Item</Text>
                <Dropdown3 />
              </View>
              <View style={styles.hight}>
                <Text style={styles.headingTxt}>Qty</Text>
                <Dropdown2 />
              </View>
              <View style={styles.hight}>
                <Text style={styles.headingTxt}>UOM</Text>
                <View style={styles.inputView}>
                  {/* <Text>email</Text> */}

                  <CustomTextInput
                    placeholderTextColor={colors.gray}
                    onChangeText={TextInputValue => setServer(TextInputValue)}
                    value={server}
                  />
                </View>
              </View>

              <View style={styles.hight}>
                <Text style={styles.headingTxt}>Destination</Text>
                <Dropdown4 />
              </View>
              <View style={styles.Price2}>
                <Text style={styles.buttonText}>Gross Price</Text>

                <Text style={styles.buttonText}>300</Text>
              </View>
              <View style={styles.hight}>
                <Text style={styles.headingTxt}>Tax</Text>
                <Dropdown5 />
              </View>
              <View style={styles.amount}>
                <Text style={styles.buttonText1}>Amount</Text>
                <Text style={styles.buttonText1}>400</Text>
              </View>
              <View style={{marginTop: 30}}>
                <CustomButton
                  onPress={() => props.navigation.navigate('SalesOrder1')}
                  title="Create Order"
                />
              </View>
            </View>
          </View>
        </LinearGradient>

        <View style={{marginBottom: 50}}></View>
      </ScrollView>
      <View style={styles.footer1}>
        <Footer1 active={3} navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};
export default SalesOrder1;
