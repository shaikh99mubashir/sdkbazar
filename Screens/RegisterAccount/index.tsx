import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../Constants';
import Icon from 'react-native-vector-icons/Ionicons';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const RegisterAccount = ({navigation}: any) => {
  interface IRegister {
    firstName: string | undefined;
    email: string | undefined;
    password: string | undefined;
    confirmPassword: string | undefined;
  }

  const [passwordEye, setPasswordEye] = useState(true);
  const [registerFields, setRegisterFields] = useState<IRegister>({
    firstName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  return (
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
              Register
            </Text>
            <View style={{alignItems: 'center'}}>
              {/* First NAme */}
              <View
                style={{
                  width: Dimensions.get('screen').width / 1.3,
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: Color.textColor,
                  marginTop: 15,
                }}>
                <TextInput
                  placeholder="First Name"
                  onChangeText={e =>
                    setRegisterFields({...registerFields, firstName: e})
                  }
                  style={{
                    width: Dimensions.get('screen').width / 1.21,
                    padding: 12,
                  }}
                />
              </View>
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
                    setRegisterFields({...registerFields, email: e})
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
                  width: Dimensions.get('screen').width / 1.3,
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
                    setRegisterFields({...registerFields, password: e})
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
                      <Icon name="eye-off" size={25} color={Color.textColor} />
                    )}
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Confirm Password */}
              <View
                style={{
                  width: Dimensions.get('screen').width / 1.3,
                  borderWidth: 1,
                  borderRadius: 10,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderColor: Color.textColor,
                  margin: 15,
                }}>
                <TextInput
                  placeholder="Confirm Password"
                  secureTextEntry={passwordEye ? true : false}
                  onChangeText={e =>
                    setRegisterFields({...registerFields, confirmPassword: e})
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
                      <Icon name="eye-off" size={25} color={Color.textColor} />
                    )}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Login Button */}
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  backgroundColor: Color.red,
                  paddingHorizontal: 70,
                  paddingVertical: 13,
                  borderRadius: 25,
                }}>
                <Text
                  style={{
                    color: Color.white,
                    fontFamily: 'Poppins-Bold',
                  }}>
                  REGISTER
                </Text>
              </TouchableOpacity>
            </View>
            {/* or Text */}
            <Text
              style={{
                color: Color.textColor,
                fontFamily: 'Poppins-Regular',
                textAlign: 'center',
                marginTop: 10,
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
                marginVertical: 10,
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
              style={{marginVertical: 15}}
              onPress={() => navigation.navigate('LoginWithMobile')}>
              <Text
                style={{
                  color: Color.textColor,
                  fontFamily: 'Poppins-Medium',
                  textAlign: 'center',
                }}>
                Login With{''}
                <Text style={{color: Color.red, fontFamily: 'Poppins-Medium'}}>
                  {' '}
                  Mobile Number
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
          {/* Already Have an Account */}
          <View style={{alignItems: 'center', marginVertical: 15}}>
            <Text
              style={{color: Color.textColor, fontFamily: 'Poppins-Medium'}}>
              Already Have an Account
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('LoginAccount')}>
              <Text style={{color: Color.red, fontFamily: 'Poppins-Medium'}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
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
export default RegisterAccount;
