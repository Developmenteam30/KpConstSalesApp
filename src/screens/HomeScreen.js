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

import styles from '../styles/HomeScreenStyle';
import {Images} from '../utils/Images';
import {colors} from '../utils/Variables';
import api from '../utils/Api';
import Footer1 from './Footer1';

const HomeScreen = props => {
  const scanner = useRef(null);
  const [scan, setScan] = useState(false);

  const orderlist = async () => {
    await api.orderlist();
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Card containerStyle={styles.cardHeader}>
        <LinearGradient
          colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 3}}
          style={styles.headerView}>
          <View style={styles.headerIconView}>
            <Icon
              onPress={() => props.navigation.navigate('Profile')}
              name="person"
              color={colors.black}
              size={30}
            />
          </View>
          <Text style={styles.mainText}>KPCons Sales App</Text>
          <TouchableOpacity>
            <Icon
              name="logout"
              iconType="simple-line-icon"
              color={colors.white}
              size={30}
            />
          </TouchableOpacity>
          {/* </View> */}
        </LinearGradient>
      </Card>
      <View style={styles.subContainer}>
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => orderlist()}>
            <LinearGradient
              colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.tabButton}>
              <View style={styles.whiteLine1}>
                <Icon
                  type={'ionicon'}
                  // name="watch-later"
                  name="hourglass-outline"
                  color={colors.white}
                  size={30}
                />

                <Image source={Images.whiteLine} style={styles.whiteLine} />
                <Text style={styles.tabButtonTxt}>Pending Order</Text>
              </View>
              <Text style={styles.tabButtonTxt}>15</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('CompletedOrder')}>
            <LinearGradient
              colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.tabButton}>
              <View style={styles.whiteLine1}>
                <Icon
                  onPress={() => props.navigation.navigate('Profile')}
                  type={'fontisto'}
                  name="shopping-package"
                  color={colors.white}
                  size={30}
                />

                <Image source={Images.whiteLine} style={styles.whiteLine} />
                <Text style={styles.tabButtonTxt}>Completed Order</Text>
              </View>
              <Text style={styles.tabButtonTxt}>15</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('InTransitOrder')}>
            <LinearGradient
              colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.tabButton}>
              <View style={styles.whiteLine1}>
                <Icon
                  onPress={() => props.navigation.navigate('Profile')}
                  name="watch-later"
                  color={colors.white}
                  size={30}
                />

                <Image source={Images.whiteLine} style={styles.whiteLine} />
                <Text style={styles.tabButtonTxt}>In Transit Order</Text>
              </View>
              <Text style={styles.tabButtonTxt}>5</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer1}>
        <Footer1 active={1} navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
