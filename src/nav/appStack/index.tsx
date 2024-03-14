import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../../screen/home';
import AppNav from '../appNav';
import Cart from '../../screen/cart';
import {Login} from '../../screen/login';
import {OpeningPage} from '../../screen/opening';

const Stack = createStackNavigator();
function AppStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="opening" component={OpeningPage} />
      <Stack.Screen name="nav" component={AppNav} />
    </Stack.Navigator>
  );
}

export default AppStack;
