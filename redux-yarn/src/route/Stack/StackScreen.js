import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HooksCakeContainer from '../../Screen/HooksCakeContainer';
import CakeContainer from '../../Screen/CakeContainer';

const Stack = createStackNavigator();

export default function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HooksCakeContainer" component={HooksCakeContainer} />
      <Stack.Screen name="CakeContainer" component={CakeContainer} />
    </Stack.Navigator>
  );
}
