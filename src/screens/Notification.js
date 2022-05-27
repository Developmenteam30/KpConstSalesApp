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

import styles from '../styles/NotificationStyle';
import {Images} from '../utils/Images';
import {colors} from '../utils/Variables';
import api from '../utils/Api';
import Footer1 from './Footer1';

const Notification = props => {
  const data = [
    {
      id: '1',
      heading: 'Notification',
      time: 'Mon 10:00 AM',
      message:
        'We have an Exciting Offres for you near to you we have an We have an ',
    },
    {
      id: '2',
      heading: 'Notification',
      time: '27 mins ago',
      message:
        'We have an Exciting Offres for you near to you we have an We have an ',
    },
    {
      id: '3',
      heading: 'Notification',
      time: '19 mins ago',
      message:
        'We have an Exciting Offres for you near to you we have an We have an ',
    },
    {
      id: '4',
      heading: 'Notification',
      time: 'Nov 3,2021',
      message:
        'We have an Exciting Offres for you near to you we have an We have an ',
    },
    {
      id: '5',
      heading: 'Notification',
      time: '25 Apr',
      message:
        'We have an Exciting Offres for you near to you we have an We have an ',
    },
  ];
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Card containerStyle={styles.cardHeader}>
        <LinearGradient
          colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 3}}
          style={styles.headerView}>
          {/* <View style={styles.headerView}> */}
          <View>
            <Icon
              onPress={() => props.navigation.goBack()}
              name="keyboard-backspace"
              color={colors.white}
              size={30}
            />
          </View>
          <Text style={styles.headerText}>Notification</Text>
          <TouchableOpacity>
            <Icon
              name="circle-notifications"
              //type="ionicon"
              color={colors.white}
              size={30}
            />
          </TouchableOpacity>
          {/* </View> */}
        </LinearGradient>
      </Card>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <LinearGradient
            colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.tabButton}>
            <View style={styles.rowDirection}>
              <View>
                <Icon
                  type={'ionicon'}
                  name="notifications-outline"
                  color={colors.white}
                  size={30}
                />
              </View>
              <View style={styles.spacce}>
                <View style={styles.rowSpace}>
                  <Text style={styles.msgHeadingTxt}>{item.heading}</Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
                <Text
                  style={styles.msgTxt}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}>
                  {item.message}
                </Text>
              </View>
            </View>
          </LinearGradient>
        )}
      />
      <View style={styles.footer1}>
        <Footer1 active={2} navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};
export default Notification;
