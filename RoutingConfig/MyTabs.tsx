import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Splash from '../Screens/Splash';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="myHome" component={HomeScreen} />
      <Tab.Screen name="Splash" component={Splash} />
    </Tab.Navigator>
  )
}

export default MyTabs

const styles = StyleSheet.create({})