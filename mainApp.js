import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import MainStack from './src/navigation/MainStack';
import {store} from './src/redux/store';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};
export default App;
