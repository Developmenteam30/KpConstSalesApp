import styles from '../styles/MapScreenStyle';

import {colors} from '../utils/Variables';
import api from '../utils/Api';
import Footer1 from './Footer1';
import MapView from 'react-native-maps';
import {Marker, Polyline} from 'react-native-maps';
import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  PermissionsAndroid,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Input} from 'react-native-elements';

const coordinate = {
  latitude: 22.7196,
  longitude: 75.8577,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: {
        latlng: {
          latitude: 22.7196,
          longitude: 75.8577,
        },
        title: 'indore',
        description: 'Indore Service Center',
      },
      region: coordinate,
      camera: {
        center: {
          latitude: 22.7196,
          longitude: 75.8577,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        zoom: 8,
        pitch: 10,
        heading: 10,
        altitude: 12,
      },
    };
  }
  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location access',
          message: 'Please allow location access to use our app',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        this.requestCameraPermission();
      }
    } catch (err) {
      alert(err);
    }
  };
  async componentDidMount() {
    if (Platform.OS == 'android') {
      this.requestCameraPermission();
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.head}>
          <Input
            placeholder="Search for area, landmark or apartment..."
            leftIcon={{type: 'feather', name: 'search'}}
            inputContainerStyle={{
              borderBottomWidth: 0,
              paddingHorizontal: 10,
            }}
            inputStyle={{fontSize: 16}}
          />
        </View>
        <MapView
          style={styles.map}
          camera={this.state.camera}
          showsUserLocation={true}
          userLocationPriority={'high'}
          userLocationUpdateInterval={2000}
          followsUserLocation={true}
          showsMyLocationButton={true}
          showsTraffic={true}
          showsCompass={false}
          userLocationCalloutEnabled={true}>
          {/* <Marker
            key={0}
            coordinate={this.state.markers.latlng}
            centerOffset={[0, 0]}></Marker> */}
        </MapView>

        <View style={styles.footer1}>
          <Footer1 active={5} navigation={this.props.navigation} />
        </View>
      </SafeAreaView>
    );
  }
}
export default MapScreen;
