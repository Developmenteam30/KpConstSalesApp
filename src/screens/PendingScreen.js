import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
  Alert,
  FlatList,
} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import api from '../utils/Api';
import {Images} from '../utils/Images';
import styles from '../styles/PendingScreenStyle';
import {colors} from '../utils/Variables';
import CustomTextInput from '../component/CustomTextInput';
import CustomButton from '../component/CustomButton';

const PendingScreen = props => {
  const data = [
    {
      id: '1',
      orderno: 'ABC1234',
      date: '1-Apr-2022',
      orderedQty: '245',
      deliveredQty: 150,
      material: 'M Sand',
      deliverySite: 'Hosur',
      BalanceQty: '460',
      status: 'In Progress',
    },
    {
      id: '2',
      orderno: 'ABC1234',
      date: '1-Apr-2022',
      orderedQty: '245',
      deliveredQty: 150,
      material: 'M Sand',
      deliverySite: 'Hosur',
      BalanceQty: '460',
      status: 'In Progress',
    },
    {
      id: '3',
      orderno: 'ABC1234',
      date: '1-Apr-2022',
      orderedQty: '245',
      deliveredQty: 150,
      material: 'M Sand',
      deliverySite: 'Hosur',
      BalanceQty: '460',
      status: 'In Progress',
    },
    {
      id: '4',
      orderno: 'ABC1234',
      date: '1-Apr-2022',
      orderedQty: '245',
      deliveredQty: 150,
      material: 'M Sand',
      deliverySite: 'Hosur',
      BalanceQty: '460',
      status: 'In Progress',
    },
    {
      id: '5',
      orderno: 'ABC1234',
      date: '1-Apr-2022',
      orderedQty: '245',
      deliveredQty: 150,
      material: 'M Sand',
      deliverySite: 'Hosur',
      BalanceQty: '460',
      status: 'In Progress',
    },
  ];

  return (
    <SafeAreaView style={styles.mainContainer}>
      <LinearGradient
        colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 3}}
        style={styles.headerView}>
        {/* <View style={styles.headerView}> */}

        <Icon
          onPress={() => props.navigation.goBack()}
          name="keyboard-backspace"
          color={colors.white}
          size={30}
        />

        <Text style={styles.mainText}>Pending Orders</Text>
        <View style={{width: '5%'}}></View>
        {/* </View> */}
      </LinearGradient>

      <LinearGradient
        colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 3}}
        style={styles.backgroundStyle}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.whiteBanner}>
              <View style={styles.whiteBanner1}>
                <View style={styles.rowSpace}>
                  <Text style={styles.orderTxt}>
                    Order No:-<Text> {item.orderno}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                    Date:- <Text style={styles.date}> {item.date}</Text>
                  </Text>
                </View>

                <View style={styles.rowSpace1}>
                  <Text style={styles.grayTxt}>
                    Ordered Qty:-
                    <Text style={styles.date}> {item.orderedQty}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                    Delivered Qty:-{' '}
                    <Text style={styles.date}> {item.deliveredQty}</Text>
                  </Text>
                </View>
                <View style={styles.rowSpace}>
                  <Text style={styles.grayTxt}>
                    Material:-<Text style={styles.date}> {item.material}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                    Delivery Site:-{' '}
                    <Text style={styles.date}>{item.deliverySite}</Text>
                  </Text>
                </View>
                <View style={styles.rowSpace1}>
                  <Text style={styles.grayTxt}>
                    Balance Qty:-
                    <Text style={styles.date}> {item.BalanceQty}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                    Status:- <Text style={styles.status}> {item.status}</Text>
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};
export default PendingScreen;
