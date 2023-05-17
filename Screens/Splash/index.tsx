import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {Color} from '../../Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}: any) => {
  const checkUser = () => {};
  useEffect(() => {
    checkUser();
  }, []);
  const navigateToHomeScreen = () => {
    AsyncStorage.getItem('user').then((val: any) => {
      let date1 = JSON.parse(val);
      const expiryDate: any = new Date(date1.tokenExpiryDate).getTime();
      const date: any = new Date().getTime();

      if (Number(expiryDate) > Number(date)) {
        setTimeout(() => {
          navigation.replace('HomeScreen');
        }, 2000);
      } else {
        setTimeout(() => {
          navigation.replace('LoginAccount');
        }, 3000);
      }
    });
  };
  useEffect(() => {
    navigateToHomeScreen();
  }, []);
  return (
    <View style={{backgroundColor: Color.white, alignItems: 'center'}}>
      <Image
        source={require('../../Images/LogoColor.png')}
        resizeMode="contain"
        style={styles.logo}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  logo: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width / 1.2,
  },
});
