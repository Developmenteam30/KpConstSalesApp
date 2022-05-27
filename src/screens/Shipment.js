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
  Modal,
  ActivityIndicator,
} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import QRCodeScanner from 'react-native-qrcode-scanner';
import CustomButton from '../component/CustomButton';
import CustomTextInput from '../component/CustomTextInput';
import styles from '../styles/ShipmentStyle';
import {Images} from '../utils/Images';
import {colors} from '../utils/Variables';
import api from '../utils/Api';
import Footer1 from './Footer1';

const Shipment = props => {
  const [serchByNumber, setSearchByNumber] = useState('');

  const scanner = useRef(null);
  const [scan, setScan] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [datefrom, setDatefrom] = useState('');
  const [dateto, setDateto] = useState('');
  const [orderno, setOrderno] = useState(true);
  const [site, setSite] = useState('');
  const [material, setMaterial] = useState(true);
  const data = [
    {
      id: '1',
      orderno: 'ABC1234',
      dcno: '45/S',
      startedtime: '10:15 AM',
      endtime: '12:00 PM',
      material: 'M Sand',
      deliverySite: 'Hosur',
      status: 'Accepted',
    },
    {
      id: '2',
      orderno: 'ABC1234',
      dcno: '45/S',
      startedtime: '10:15 AM',
      endtime: '12:00 PM',
      material: 'M Sand',
      deliverySite: 'Hosur',
      status: 'Accepted',
    },
    {
      id: '3',
      orderno: 'ABC1234',
      dcno: '45/S',
      startedtime: '10:15 AM',
      endtime: '12:00 PM',
      material: 'M Sand',
      deliverySite: 'Hosur',
      status: 'Accepted',
    },
    {
      id: '4',
      orderno: 'ABC1234',
      dcno: '45/S',
      startedtime: '10:15 AM',
      endtime: '12:00 PM',
      material: 'M Sand',
      deliverySite: 'Hosur',
      status: 'Accepted',
    },
  ];
  return !scan ? (
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
          <Text style={styles.mainText}>Shipment</Text>
          <View style={{width: '5%'}}></View>
          {/* </View> */}
        </LinearGradient>
      </Card>
      <View style={styles.subContainer}>
        <View style={styles.searchScanBtnView}>
          <View style={styles.searchInputIconView}>
            <TextInput
              style={styles.serchInputStyle}
              placeholder="Search here"
              placeholderTextColor={colors.gray}
              onChangeText={TextInput => setSearchByNumber(TextInput)}
              value={serchByNumber}
            />
            <TouchableOpacity
              // onPress={() => searchdata(serchByNumber)}
              style={{alignSelf: 'center'}}
              onPress={() => setModalVisible(true)}>
              <Icon name="search" color={colors.gray} size={25} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity activeOpacity={0.8} onPress={() => setScan(true)}>
            <LinearGradient
              colors={[colors.gradientMilkyBlue, colors.gradientBlue]}
              style={styles.scanButton}>
              <Text style={styles.scanButtonTxt}>SCAN</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <LinearGradient
        colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.backgroundStyle}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.whiteBanner}>
              <View style={styles.whiteBanner1}>
                <View style={styles.rowDirection1}>
                  <Text style={styles.orderTxt}>Order No:-</Text>
                  <Text style={styles.orderTxt1}> {item.orderno}</Text>
                </View>

                <View style={styles.rowSpace1}>
                  <View style={styles.rowDirection2}>
                    <Text style={styles.grayTxt}>Material:-</Text>
                    <Text style={styles.date}> {item.material}</Text>
                  </View>
                  <View style={styles.rowDirection}>
                    <Text style={styles.grayTxt}>DC No:-</Text>
                    <Text style={styles.date}> {item.dcno}</Text>
                  </View>
                </View>

                <View style={styles.top}>
                  <View style={styles.rowDirection2}>
                    <Text style={styles.grayTxt}>Started Time:-</Text>
                    <Text style={styles.date}> {item.startedtime}</Text>
                  </View>
                  <View style={styles.rowDirection2}>
                    <Text style={styles.grayTxt}>Arrived Time:-</Text>
                    <Text style={styles.date}> {item.endtime}</Text>
                  </View>
                </View>

                <View style={styles.rowSpace1}>
                  <View style={styles.rowDirection2}>
                    <Text style={styles.grayTxt}>Delivery Site:-</Text>
                    <Text style={styles.date}> {item.deliverySite}</Text>
                  </View>
                  <View style={styles.rowDirection2}>
                    <Text style={styles.grayTxt}>Status:-</Text>
                    <Text style={styles.date}> {item.status}</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </LinearGradient>

      <View style={styles.footer1}>
        <Footer1 active={4} navigation={props.navigation} />
      </View>
      <View>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContainer1}>
              <View style={styles.rowDirection}>
                <View style={styles.spaces1}>
                  <Text style={styles.formTxt}>Date From</Text>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.modalinput}
                      // placeholder="Search here"
                      placeholderTextColor={colors.gray}
                      onChangeText={TextInput => setDatefrom(TextInput)}
                      value={datefrom}
                    />
                  </View>
                </View>
                <View style={styles.spaces}></View>
                <View style={styles.spaces1}>
                  <Text style={styles.formTxt}>Date To</Text>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.modalinput}
                      // placeholder="Search here"
                      placeholderTextColor={colors.gray}
                      onChangeText={TextInput => setDateto(TextInput)}
                      value={dateto}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.rowDirection}>
                <View style={styles.spaces1}>
                  <Text style={styles.formTxt}>Order No</Text>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.modalinput}
                      // placeholder="Search here"
                      placeholderTextColor={colors.gray}
                      onChangeText={TextInput => setOrderno(TextInput)}
                      value={orderno}
                    />
                  </View>
                </View>
                <View style={styles.spaces}></View>
                <View style={styles.spaces1}>
                  <Text style={styles.formTxt}>Site</Text>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.modalinput}
                      // placeholder="Search here"
                      placeholderTextColor={colors.gray}
                      onChangeText={TextInput => setSite(TextInput)}
                      value={site}
                    />
                  </View>
                </View>
                <View style={styles.spaces}></View>
                <View style={styles.spaces1}>
                  <Text style={styles.formTxt}>Material</Text>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.modalinput}
                      // placeholder="Search here"
                      placeholderTextColor={colors.gray}
                      onChangeText={TextInput => setMaterial(TextInput)}
                      value={material}
                    />
                  </View>
                </View>
              </View>
              <CustomButton
                onPress={() => setModalVisible(!modalVisible)}
                title="Search"
              />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  ) : (
    <QRCodeScanner
      // onRead={onSuccess}
      ref={scanner}
      reactivate={true}
      showMarker={true}
      // flashMode={RNCamera.Constants.FlashMode.torch}
      bottomContent={
        <View style={styles.scanButtonView}>
          <TouchableOpacity
            style={styles.buttonTouchableCancel}
            onPress={() => setScan(false)}>
            <Text style={styles.buttonText}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={() => scanner.current.reactivate()}>
            <Text style={styles.buttonText}>CAPTURE</Text>
          </TouchableOpacity>
        </View>
      }
    />
  );
};
export default Shipment;
