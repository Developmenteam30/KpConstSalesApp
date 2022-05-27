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
import styles from '../styles/InTransitOrderStyle';
import {colors} from '../utils/Variables';
import CustomTextInput from '../component/CustomTextInput';
import CustomButton from '../component/CustomButton';

const InTransitOrder = props => {
  const data = [
    {
      id: '1',
      orderno: 'ABC1234',
      dcno: '45/S',
      startedtime: '10:15 AM',
      endtime: '1 hr 30 mins',
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
      dcno: '45/S',
      startedtime: '10:15 AM',
      endtime: '1 hr 30 mins',
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
      dcno: '45/S',
      startedtime: '10:15 AM',
      endtime: '1 hr 30 mins',
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
      dcno: '45/S',
      startedtime: '10:15 AM',
      endtime: '1 hr 30 mins',
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
      dcno: '45/S',
      startedtime: '10:15 AM',
      endtime: '1 hr 30 mins',
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

        <Text style={styles.mainText}>In TransitOrders</Text>
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
                <View style={styles.rowDirection}>
                  <Text style={styles.orderTxt}>Order No:-</Text>
                  <Text style={styles.orderTxt1}> {item.orderno}</Text>
                </View>

                <View style={styles.rowSpace1}>
                  <View style={styles.rowDirection}>
                    <Text style={styles.grayTxt}>Material:-</Text>
                    <Text style={styles.date}> {item.material}</Text>
                  </View>
                  <View style={styles.rowDirection}>
                    <Text style={styles.grayTxt}>DC No:-</Text>
                    <Text style={styles.date}> {item.dcno}</Text>
                  </View>
                </View>

                <View style={styles.top}>
                  <View style={styles.rowDirection}>
                    <Text style={styles.grayTxt}>Started Time:-</Text>
                    <Text style={styles.date}> {item.startedtime}</Text>
                  </View>
                  <View style={styles.rowDirection}>
                    <Text style={styles.grayTxt}>Est Arrival Time:-</Text>
                    <Text style={styles.date}> {item.endtime}</Text>
                  </View>
                </View>

                <View style={styles.rowSpace1}>
                  <View style={styles.rowDirection}>
                    <Text style={styles.grayTxt}> Delivery Site:-</Text>
                    <Text style={styles.date}> {item.deliverySite}</Text>
                  </View>

                  <TouchableOpacity
                    style={styles.trackView}
                    onPress={() => props.navigation.navigate('MapScreen')}>
                    <Text style={styles.track}>Live Track:-</Text>
                    <TouchableOpacity>
                      <Icon
                        onPress={() => props.navigation.navigate('MapScreen')}
                        name="location-on"
                        color={colors.white}
                        size={24}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};
export default InTransitOrder;
