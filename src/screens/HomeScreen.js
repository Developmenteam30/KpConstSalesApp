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

const HomeScreen = ({navigation}) => {
  const [selectBackgroundColor, setSelectBackgroundColor] = useState(false);
  const [serchByNumber, setSearchByNumber] = useState('');
  const [newpendingdata, setnewpendingdata] = useState([]);
  const [pendingData, setpendingdata] = useState([]);
  const [completedData, setcompletedData] = useState([]);
  const scanner = useRef(null);
  const [scan, setScan] = useState(false);
  const [result, setResult] = useState(null);
  const [loader, setLoader] = useState(false);
  const [loaders, setLoaders] = useState(false);

  useEffect(() => {
    setResult(null);
  }, []);
  const checkifincomplete = id => {
    return global.checkcomplete.indexOf(id) > -1 ? false : true;
  };
  const checkServerDetails = async () => {
    try{
      var d = completedData;
      var i = [];
      var o = 0;
      completedData.forEach(async s => {
        if (!s.update) {
          await updatependingdata(s, o);
        }
        i.push(s.TF_LoadingSlip_ID);
        o++;
      });
      var collectionStr = await api.getData(global.userId);
      if (collectionStr && collectionStr != null) {
        var o = 0;
        collectionStr.forEach(async s => {
          if (i.indexOf(s.TF_LoadingSlip_ID) < 0) {
            if (!s.update) {
              var u = await updatependingdata(s, o);
              if (u) {
                s.update = true;
              }
            }
            i.push(s.TF_LoadingSlip_ID);
            d.push(s);
            setcompletedData(collectionStr);
          }
          o++;
        });
      }
    }catch(e){
      //alert(e);
    }
  };
  const updatependingdata = async (x, i) => {
    try{
      x.currentdate = api.getcurrentdate();
      global.checkcomplete.push(x.TF_LoadingSlip_ID);
      var datarow = await api.getcompleteslips(
        x.TF_LoadingSlip_ID,
        x.currentdate,
      );
      if (datarow) {
        x.update = true;
        var collectionStr = await api.getData(global.userId);
        collectionStr[i] = x;
        await api.storeData(global.userId, collectionStr);
        return true;
      } else {
        return false;
      }
    }catch(e){
      //alert(e);
    }
  };
  const getpendingslips = async () => {
    var datarow = await api.getpendingslips();
    if (datarow) {
      var j = 0;
      var storedata =
        global.allslips && global.allslips.length > 0 ? global.allslips : [];
      if (Array.isArray(datarow)) {
        datarow.forEach(d => {
          var ob = {};
          d.field.forEach(de => {
            de._column == 'TF_LoadingSlip_ID'
              ? (ob.TF_LoadingSlip_ID = de.val.__text)
              : null;
            de._column == 'AD_Org_ID' ? (ob.AD_Org_ID = de.val.__text) : null;
            de._column == 'DocumentNo' ? (ob.DocumentNo = de.val.__text) : null;
            de._column == 'Status' ? (ob.Status = de.val.__text) : null;
            de._column == 'VehicleNo' ? (ob.VehicleNo = de.val.__text) : null;
            de._column == 'ProductName'
              ? (ob.ProductName = de.val.__text)
              : null;
          });
          if (global.store.indexOf(ob.TF_LoadingSlip_ID) < 0) {
            global.store.push(ob.TF_LoadingSlip_ID);
            storedata.push(ob);
            j++;
          }
        });
      } else if (datarow.field) {
        var ob = {};
        datarow.field.forEach(de => {
          de._column == 'TF_LoadingSlip_ID'
            ? (ob.TF_LoadingSlip_ID = de.val.__text)
            : null;
          de._column == 'AD_Org_ID' ? (ob.AD_Org_ID = de.val.__text) : null;
          de._column == 'DocumentNo' ? (ob.DocumentNo = de.val.__text) : null;
          de._column == 'Status' ? (ob.Status = de.val.__text) : null;
          de._column == 'VehicleNo' ? (ob.VehicleNo = de.val.__text) : null;
          de._column == 'ProductName' ? (ob.ProductName = de.val.__text) : null;
        });
        var i = global.store.indexOf(ob.TF_LoadingSlip_ID);
        if (i < 0) {
          global.store.push(ob.TF_LoadingSlip_ID);
          storedata.push(ob);
          j++;
        }
      }
      if (j > 0) {
        global.allslips = storedata;
        searchdata(serchByNumber);
      }
    }
  };

  const updatependingslips = async (x, index) => {
    try{
      setLoader(true);
      x.currentdate = api.getcurrentdate();
      global.checkcomplete.push(x.TF_LoadingSlip_ID);
      var datarow = await api.getcompleteslips(
        x.TF_LoadingSlip_ID,
        x.currentdate,
      );
      if (datarow) {
        if (datarow == true) {
          var c = newpendingdata;
          c.splice(index, 1);
          alert();
          await setnewpendingdata(c);
          setLoader(false);
        } else {
          x.update = true;
          var d = completedData;
          d.push(x);
          var c = newpendingdata;
          c.splice(index, 1);
          setnewpendingdata(c);
          setLoader(false);
          await api.storeData(global.userId, d);
        }
      } else {
        x.update = false;
        var d = completedData;
        d.push(x);
        var c = newpendingdata;
        c.splice(index, 1);
        setLoader(false);
        try{
          setnewpendingdata(c);
        }catch(e){
          getpendingslips();
        }
        await api.storeData(global.userId, d);
      }
      global.allslips.forEach((e, indexs) => {
        if (e.TF_LoadingSlip_ID == x.TF_LoadingSlip_ID) {
          global.allslips.splice(indexs, 1);
        }
      });
      checkServerDetails();
      setSearchByNumber('');
    }catch(e){
      //alert(e);
    }
  };

  const searchdata = txt => {
    if (global.allslips && global.allslips.length > 0 && txt != '') {
      var filter = global.allslips.filter(e => {
        if (
          e.DocumentNo.toLowerCase().indexOf(txt.toLowerCase()) > -1 ||
          e.VehicleNo.toLowerCase().indexOf(txt.toLowerCase()) > -1
        ) {
          return e;
        }
      });
      setnewpendingdata(filter);
    } else {
      setnewpendingdata(global.allslips);
    }
  };
  const onSuccess = e => {
    if (e.type == 'CODE_39') {
      e.data = e.data.split('/O').join('/');
      
    }
    setResult(e);
    console.log(e);
    setScan(false);
    if (e.data) {
      setSearchByNumber(e.data);
      setTimeout(() => {
        searchdata(e.data);
      }, 1000);
    }
  };
  const goProfile = () => {
    navigation.navigate('Profile');
  };
  useEffect(() => {
    setLoader(false);
    getpendingslips();
    checkServerDetails();
  });
  const hendlePressTab = () => {
    setSelectBackgroundColor(!selectBackgroundColor);
  };
  const pendingTabBackgroundColor = selectBackgroundColor
    ? colors.white
    : colors.gradientMilkyBlue;
  const completedTabBackgroundColor = !selectBackgroundColor
    ? colors.white
    : colors.gradientMilkyBlue;
  const pendingTabColor = selectBackgroundColor ? colors.black : colors.white;
  const completedTabColor = !selectBackgroundColor
    ? colors.black
    : colors.white;

  const PendingRenderItem = ({item, index}) => {
    return (
      <Card containerStyle={styles.cardList}>
        <LinearGradient
          colors={[colors.white, colors.white]}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          style={styles.linearGradient}>
          <View style={styles.listTxtNoView}>
            <Text style={styles.listHeadingText}>Challan No </Text>
            <Text style={styles.listNumber}>{item.DocumentNo}</Text>
          </View>
          <View style={styles.listTxtNoView}>
            <Text style={styles.listHeadingText}>Material </Text>
            <Text style={styles.listNumber}>{item.ProductName}</Text>
          </View>
          <View style={styles.listTxtNoView}>
            <Text style={styles.listHeadingText}>Vehicle# </Text>
            <Text style={styles.listNumber}>{item.VehicleNo}</Text>
          </View>
          {item.currentdate ? (
            <View style={styles.listTxtNoView}>
              <Text style={styles.listHeadingText}>Date & Time </Text>
              <Text style={styles.listNumber}>{item.currentdate}</Text>
            </View>
          ) : null}
          {!selectBackgroundColor ? (
            checkifincomplete(item.TF_LoadingSlip_ID) && !loader ? (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => hendlePressComplete(item, index)}>
                <LinearGradient
                  colors={[colors.gradientMilkyBlue, colors.gradientBlue]}
                  style={styles.listButton}>
                  <Text style={styles.listButtonTxt}>Mark as Complete</Text>
                </LinearGradient>
              </TouchableOpacity>
            ) : (
              <ActivityIndicator
                size="large"
                color={colors.black}
                width="20"
                height="20"
              />
            )
          ) : null}
          {selectBackgroundColor && (
            <View>
              <Image
                source={Images.completed}
                style={styles.completedImgStyle}
              />
              {item.update ? (
                <Text style={styles.updateTxt}>Updated</Text>
              ) : (
                <Text style={styles.pendingTxt}>Pending</Text>
              )}
            </View>
          )}
        </LinearGradient>
      </Card>
      // </View>
    );
  };

  const handlePressLogout = () => {
    Alert.alert('Logout', 'Are you sure to logout', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          var l = await api.logout();
          l ? navigation.replace('Login') : null;
        },
      },
    ]);
  };

  const hendlePressComplete = (item, index) => {
    Alert.alert(null, 'Do you really want to complete', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => updatependingslips(item, index)},
    ]);
  };

  return !scan ? (
    <SafeAreaView style={styles.mainContainer}>
      <Card containerStyle={styles.cardHeader}>
        <LinearGradient
          colors={[colors.gradientMilkyBlue, colors.gradientBlue]}
          // start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          style={styles.headerView}>
          {/* <View style={styles.headerView}> */}
          <View style={styles.headerIconView}>
            <Icon
              onPress={() => goProfile()}
              name="person"
              color={colors.black}
              size={30}
            />
          </View>
          <Text style={styles.mainText}>Loading Slips</Text>
          <Icon
            onPress={() => handlePressLogout()}
            name="logout"
            iconType="simple-line-icon"
            color={colors.white}
            size={30}
          />
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
              onPress={() => searchdata(serchByNumber)}
              style={{alignSelf: 'center'}}>
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
        {/* {result && <Text>{(result, null, 2)}</Text>} */}
        <View style={styles.upTabMainView}>
          <TouchableOpacity
            onPress={() => hendlePressTab(true)}
            style={[
              styles.pendingTabView,
              {backgroundColor: pendingTabBackgroundColor},
            ]}>
            <Text style={[styles.pendingTabText, {color: pendingTabColor}]}>
              Pending
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => hendlePressTab(false)}
            style={[
              styles.completedTabView,
              {backgroundColor: completedTabBackgroundColor},
            ]}>
            <Text style={[styles.completedTabText, {color: completedTabColor}]}>
              Completed
            </Text>
          </TouchableOpacity>
        </View>
        {loaders && (
          <ActivityIndicator
            size="large"
            color={colors.black}
            width="20"
            height="20"
          />
        )}
        {!selectBackgroundColor && (
          <View style={styles.listLeftRightLine}>
            <FlatList
              data={newpendingdata}
              renderItem={({item, index}) => (
                <PendingRenderItem item={item} index={index} />
              )}
            />
          </View>
        )}
        {selectBackgroundColor && (
          <View style={styles.listLeftRightLine}>
            <FlatList
              data={completedData}
              renderItem={({item, index}) => (
                <PendingRenderItem item={item} index={index} />
              )}
            />
          </View>
        )}
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={async () => {
          setLoaders(true);
          setSearchByNumber('');
          //global.allslips = [];
          await getpendingslips();
          searchdata('');
          setTimeout(() => {
            setLoaders(false);
          }, 1500);
        }}
        style={styles.refreshBtn}>
        <Text style={styles.refresh}>Refresh</Text>
      </TouchableOpacity>
    </SafeAreaView>
  ) : (
    <QRCodeScanner
      onRead={onSuccess}
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
export default HomeScreen;
