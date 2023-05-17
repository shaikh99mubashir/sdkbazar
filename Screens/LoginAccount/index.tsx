import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Color} from '../../Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {BasicUrl} from '../../Constants/BasicUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const LoginAccount = ({navigation}: any) => {
  interface ILogin {
    email: string | undefined;
    password: string | undefined;
  }
  const [loginLoading, setLoginLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordEye, setPasswordEye] = useState(true);
  const [loginFields, setLoginFields] = useState<ILogin>({
    email: '',
    password: '',
  });

  const login = () => {
    setLoginLoading(true);
    let flag = Object.values(loginFields);
    let flag2 = flag.some((e, i) => e == '');
    if (flag2) {
      ToastAndroid.show('Required fields are missing', ToastAndroid.SHORT);
      return;
    }

    axios
      .post(`${BasicUrl}login`, loginFields)
      .then(res => {
        // console.log('res', res.data.user.id);
        const userID = res.data.user.id;
        const tokenExpiryDate = res?.data?.tokens?.refresh?.expires;
        let user = {
          userID: userID,
          tokenExpiryDate: tokenExpiryDate,
        };
        AsyncStorage.setItem('user', JSON.stringify(user));
        navigation.navigate('HomeScreen');
        ToastAndroid.show('Login Sucessfully', ToastAndroid.SHORT);
        setLoginLoading(false);
      })
      .catch(error => {
        if (error == 'AxiosError: Request failed with status code 401') {
          ToastAndroid.show('Incorrect email or password', ToastAndroid.SHORT);
        }
        console.log('error', error);
        setLoginLoading(false);
      });
  };
  return (
    <>
      {loading ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}>
          <ActivityIndicator size={'large'} color={'black'} />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{backgroundColor: Color.lightgrey, height: height}}>
            <View
              style={{
                backgroundColor: Color.mainColor,
                height: height / 1.7,
                borderBottomEndRadius: 100,
                borderBottomStartRadius: 100,
              }}>
              {/* logo */}
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../Images/logowhite.png')}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>
              {/* login Account */}
              <View style={[styles.LoginFieldsBg]}>
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 20,
                    marginTop: 20,
                    textAlign: 'center',
                    color: Color.mainColor,
                  }}>
                  Login Account
                </Text>
                <View style={{alignItems: 'center'}}>
                  {/* Email */}
                  <View
                    style={{
                      width: Dimensions.get('screen').width / 1.3,
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: Color.textColor,
                      marginVertical: 15,
                    }}>
                    <TextInput
                      placeholder="Email"
                      onChangeText={e =>
                        setLoginFields({...loginFields, email: e})
                      }
                      style={{
                        width: Dimensions.get('screen').width / 1.21,
                        padding: 12,
                      }}
                    />
                  </View>
                  {/* Password */}
                  <View
                    style={{
                      width: Dimensions.get('window').width / 1.3,
                      borderWidth: 1,
                      borderRadius: 10,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderColor: Color.textColor,
                    }}>
                    <TextInput
                      placeholder="Password"
                      secureTextEntry={passwordEye ? true : false}
                      onChangeText={e =>
                        setLoginFields({...loginFields, password: e})
                      }
                      style={{
                        width: Dimensions.get('window').width / 1.5,
                        padding: 12,
                      }}
                    />
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => setPasswordEye(!passwordEye)}>
                      <Text>
                        {passwordEye ? (
                          <Icon name="eye" size={25} color={Color.textColor} />
                        ) : (
                          <Icon
                            name="eye-off"
                            size={25}
                            color={Color.textColor}
                          />
                        )}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* Forget Password */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text
                    style={{
                      color: Color.red,
                      fontFamily: 'Poppins-Medium',
                      marginLeft: 25,
                    }}>
                    In case you forgot password?
                  </Text>
                </TouchableOpacity>
                {/* Login Button */}
                <View style={{alignItems: 'center', marginVertical: 15}}>
                  <TouchableOpacity
                    onPress={login}
                    activeOpacity={0.8}
                    style={{
                      backgroundColor: Color.red,
                      paddingHorizontal: 70,
                      paddingVertical: 13,
                      borderRadius: 25,
                    }}>
                    {loginLoading ? (
                      <ActivityIndicator size={'small'} color={'white'} />
                    ) : (
                      <Text
                        style={{
                          color: Color.white,
                          fontFamily: 'Poppins-Bold',
                        }}>
                        LOGIN
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>
                {/* or Text */}
                <Text
                  style={{
                    color: Color.textColor,
                    fontFamily: 'Poppins-Regular',
                    textAlign: 'center',
                  }}>
                  Or
                </Text>
                {/* Icons */}
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: 10,
                    justifyContent: 'center',
                    marginVertical: 15,
                  }}>
                  <Image
                    source={require('../../Images/google.png')}
                    style={{width: 45, height: 45}}
                  />
                  <Image
                    source={require('../../Images/facebook.png')}
                    style={{width: 45, height: 45}}
                  />
                </View>
                {/* Mobile no Text */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{marginVertical: 15}}
                  onPress={() => navigation.navigate('LoginWithMobile')}>
                  <Text
                    style={{
                      color: Color.textColor,
                      fontFamily: 'Poppins-Medium',
                      textAlign: 'center',
                    }}>
                    Login With{''}
                    <Text
                      style={{color: Color.red, fontFamily: 'Poppins-Medium'}}>
                      {' '}
                      Mobile Number
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Don't Have Account */}
              <View style={{alignItems: 'center', marginVertical: 15}}>
                <Text
                  style={{
                    color: Color.textColor,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Don't Have Account
                </Text>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('RegisterAccount')}>
                  <Text
                    style={{color: Color.red, fontFamily: 'Poppins-Medium'}}>
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 120,
    width: 350,
    marginTop: 10,
  },

  LoginFieldsBg: {
    backgroundColor: Color.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 5,
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 25,
  },
});
export default LoginAccount;
