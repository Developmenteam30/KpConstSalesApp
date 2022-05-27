import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import MainStack from './src/navigation/MainStack';
import {store} from './src/redux/store';
import {colors} from './src/utils/Variables';

global.store = [];
global.checkcomplete = [];

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor={colors.blue} />
          <MainStack />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};
export default App;
