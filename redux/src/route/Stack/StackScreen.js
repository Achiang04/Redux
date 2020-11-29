import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CakeContainer from '../../Screen/cakeContainer';

const Stack = createStackNavigator();

export default function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="cakeContainer" component={CakeContainer} />
    </Stack.Navigator>
  );
}
