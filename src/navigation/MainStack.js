import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import SetUpScreen from '../screens/SetUpScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Shipment from '../screens/Shipment';
import PendingScreen from '../screens/PendingScreen';
import CompletedOrder from '../screens/CompletedOrder';
import InTransitOrder from '../screens/InTransitOrder';
import Notification from '../screens/Notification';
import SalesOrder from '../screens/SalesOrder';
import SalesOrder1 from '../screens/SalesOrder1';
import MapScreen from '../screens/MapScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SetUp"
        component={SetUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Shipment"
        component={Shipment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PendingScreen"
        component={PendingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CompletedOrder"
        component={CompletedOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InTransitOrder"
        component={InTransitOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SalesOrder"
        component={SalesOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SalesOrder1"
        component={SalesOrder1}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
