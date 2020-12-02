import React from 'react';
import {Provider} from 'react-redux';
import store from './src/reduxFeatures/store';
import StackScreen from './src/route/Stack/StackScreen';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </Provider>
  );
}
