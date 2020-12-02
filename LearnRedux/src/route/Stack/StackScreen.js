import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../Screen/Home';
import HooksCakeContainer from '../../Screen/HooksCakeContainer';
import CakeContainer from '../../Screen/CakeContainer';
import NewCakeContainer from '../../Screen/NewCakeContainer';
import ColaContainer from '../../Screen/ColaContainer';
import IceCreamContainer from '../../Screen/IceCreamContainer';
import ItemContainer from '../../Screen/ItemContainer';
import UsersContainer from '../../Screen/UsersContainer';
import HooksUsersContainer from '../../Screen/HooksUsersContainer';

const Stack = createStackNavigator();

export default function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HooksCakeContainer" component={HooksCakeContainer} />
      <Stack.Screen name="CakeContainer" component={CakeContainer} />
      <Stack.Screen name="NewCakeContainer" component={NewCakeContainer} />
      <Stack.Screen name="ColaContainer" component={ColaContainer} />
      <Stack.Screen name="IceCreamContainer" component={IceCreamContainer} />
      <Stack.Screen name="ItemContainer" component={ItemContainer} />
      <Stack.Screen name="UsersContainer" component={UsersContainer} />
      <Stack.Screen
        name="HooksUsersContainer"
        component={HooksUsersContainer}
      />
    </Stack.Navigator>
  );
}
