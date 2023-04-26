import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import Splash from '../Screens/Splash';
import DrawerNavigation from './DrawerNavigation';
import LoginAccount from '../Screens/LoginAccount';
import RegisterAccount from '../Screens/RegisterAccount';
import LoginWithMobile from '../Screens/LoginWithMobile';
import OtpScreen from '../Screens/OtpScreen';
import ForgotPassword from '../Screens/ForgotPassword';
import NewPassword from '../Screens/NewPassword';
import Notification from '../Screens/Notification';
import JobsHome from '../Screens/Jobs/JobsHome';
import AvailablePersonDetails from '../Screens/Jobs/AvailablePersonDetails';
import JobsFilter from '../Screens/Jobs/JobsFilter';
import EntrepreneurProfile from '../Screens/Jobs/EntrepreneurProfile';
import MrriageBureauHome from '../Screens/MrriageBureau/MrriageBureauHome';
import SelectedReligion from '../Screens/MrriageBureau/SelectedReligion';
import MBPersonDetails from '../Screens/MrriageBureau/MBPersonDetails';
import OnBoarding from '../Screens/OnBoarding';
import BusinessPersonDetails from '../Screens/Jobs/BusinessPersonDetails';
import BusinessProfile from '../Screens/Jobs/BusinessProfile';
import Food from '../Screens/Foods/Food';

const Stack = createNativeStackNavigator();
const RoutingConfig = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="LoginAccount" component={LoginAccount} />
        <Stack.Screen name="RegisterAccount" component={RegisterAccount} />
        <Stack.Screen name="LoginWithMobile" component={LoginWithMobile} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="HomeScreen" component={DrawerNavigation} />
        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="MrriageBureauHome" component={MrriageBureauHome} />
        <Stack.Screen name="JobsHome" component={JobsHome} />
        <Stack.Screen name="SelectedReligion" component={SelectedReligion} />
        <Stack.Screen name="MBPersonDetails" component={MBPersonDetails} />
        <Stack.Screen name="JobsFilter" component={JobsFilter} />
        <Stack.Screen name="BusinessProfile" component={BusinessProfile} />
        <Stack.Screen
          name="BusinessPersonDetails"
          component={BusinessPersonDetails}
        />
        <Stack.Screen
          name="EntrepreneurProfile"
          component={EntrepreneurProfile}
        />
        <Stack.Screen
          name="AvailablePersonDetails"
          component={AvailablePersonDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RoutingConfig;

const styles = StyleSheet.create({});
