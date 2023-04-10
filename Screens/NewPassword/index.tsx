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

const NewPassword = ({navigation}: any) => {
  interface IRegister {
    password: string | undefined;
    confirmPassword: string | undefined;
  }

  const [passwordEye, setPasswordEye] = useState(true);
  const [registerFields, setRegisterFields] = useState<IRegister>({
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
              New Password
            </Text>
            <View style={{alignItems: 'center'}}>
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
                  marginTop: 20,
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
            <View style={{alignItems: 'center', marginBottom: 120}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginAccount')}
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
                  SUBMIT
                </Text>
              </TouchableOpacity>
            </View>
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
export default NewPassword;
