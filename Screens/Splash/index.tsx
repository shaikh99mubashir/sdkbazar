import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {Color} from '../../Constants';

const Splash = ({navigation}: any) => {
  const navigateToHomeScreen = () => {
    setTimeout(() => {
      navigation.navigate('LoginAccount');
    }, 3000);
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
