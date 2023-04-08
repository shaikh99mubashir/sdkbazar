import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import Splash from '../Screens/Splash';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();
const RoutingConfig = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={DrawerNavigation} />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default RoutingConfig

const styles = StyleSheet.create({})