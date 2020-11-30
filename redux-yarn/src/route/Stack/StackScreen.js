import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HooksCakeContainer from '../../Screen/HooksCakeContainer';
import CakeContainer from '../../Screen/CakeContainer';
import ColaContainer from '../../Screen/ColaContainer';
import IceCreamContainer from '../../Screen/IceCreamContainer';

const Stack = createStackNavigator();

export default function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HooksCakeContainer" component={HooksCakeContainer} />
      <Stack.Screen name="CakeContainer" component={CakeContainer} />
      <Stack.Screen name="ColaContainer" component={ColaContainer} />
      <Stack.Screen name="IceCreamContainer" component={IceCreamContainer} />
    </Stack.Navigator>
  );
}
