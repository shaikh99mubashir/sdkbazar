import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Color from '../../Constants/Color';

interface Props {
  navigation?: any;
  Drawer?: boolean;
  backBtn?: boolean;
  Notification?: boolean;
  title?: string;
  noLogo?: boolean;
  myStyle?: any;
  filter?: any;
  close?: any;
  logoStyle?: any;
  headerStyle?: any;
  onFilterPress?: any;
  cart?: boolean;
  cartStyle?: string;
  backBtnColor?: string;
  titleColor?: any;
}

const Header = (Props: Props) => {
  let {
    navigation,
    Drawer,
    backBtn,
    Notification,
    title,
    noLogo,
    myStyle,
    filter,
    close,
    logoStyle,
    headerStyle,
    onFilterPress,
    cart,
    cartStyle,
    backBtnColor,
    titleColor,
  } = Props;

  return (
    <View
      style={{
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        ...headerStyle,
      }}>
      {Drawer ? (
        <TouchableOpacity
          style={{
            flex: 1,
          }}
          activeOpacity={0.8}
          onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../../Images/drawer.png')}
            resizeMode="contain"
            style={styles.icon}
          />
        </TouchableOpacity>
      ) : backBtn ? (
        <TouchableOpacity
          style={{
            flex: 1,
          }}
          onPress={() => navigation.goBack()}>
          <Text>
            <Icon
              name="md-chevron-back"
              size={30}
              color={backBtnColor ? backBtnColor : 'black'}
            />
          </Text>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            flex: 1,
          }}></View>
      )}

      {title ? (
        <View style={{flex: 2, alignItems: 'center', ...logoStyle}}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 20,
              color: titleColor ? titleColor : Color.mainColor,
              marginVertical: 15,
              fontWeight: 'bold',
            }}>
            {title}
          </Text>
        </View>
      ) : noLogo ? (
        <View style={{flex: 2, ...logoStyle}}></View>
      ) : (
        <View style={{flex: 2, ...logoStyle}}>
          <Image
            source={require('../../Images/LogoIcon.png')}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
      )}
      {Notification ? (
        <TouchableOpacity
          style={{flex: 1, alignItems: 'flex-end', ...myStyle}}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Notification')}>
          <Image
            source={require('../../Images/Notification.png')}
            resizeMode="contain"
            style={[styles.icon]}
          />
        </TouchableOpacity>
      ) : filter ? (
        <TouchableOpacity
          style={{flex: 1, alignItems: 'flex-end', ...myStyle}}
          activeOpacity={0.8}
          onPress={onFilterPress}>
          <Image
            source={require('../../Images/filter.png')}
            resizeMode="contain"
            style={[styles.icon, {marginRight: 8}]}
          />
        </TouchableOpacity>
      ) : close ? (
        <TouchableOpacity
          style={{flex: 1, alignItems: 'flex-end', ...myStyle}}
          activeOpacity={0.8}>
          <Image
            source={require('../../Images/close.png')}
            resizeMode="contain"
            style={[styles.icon, {marginRight: 8}]}
          />
        </TouchableOpacity>
      ) : cart ? (
        <TouchableOpacity
          style={{flex: 1, alignItems: 'flex-end', ...myStyle}}
          activeOpacity={0.8}>
          <AntDesign name="shoppingcart" size={30} color={cartStyle} />
        </TouchableOpacity>
      ) : (
        <View style={{flex: 1}}>
          <Text></Text>
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  button: {
    height: Dimensions.get('screen').height / 12,
    width: Dimensions.get('screen').width / 5,
  },
  icon: {
    height: Dimensions.get('screen').height / 16,
    width: Dimensions.get('screen').width / 16,
  },
  logo: {
    height: Dimensions.get('screen').height / 16,
    width: Dimensions.get('screen').width / 2,
  },
});
