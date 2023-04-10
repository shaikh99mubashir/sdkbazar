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

const ForgotPassword = ({navigation}: any) => {
  interface ILogin {
    email: string | undefined;
  }

  const [passwordEye, setPasswordEye] = useState(true);
  const [loginFields, setLoginFields] = useState<ILogin>({
    email: '',
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
              Forgot Password
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
                  onChangeText={e => setLoginFields({...loginFields, email: e})}
                  style={{
                    width: Dimensions.get('screen').width / 1.21,
                    padding: 12,
                  }}
                />
              </View>
            </View>
            {/* Login Button */}
            <View
              style={{
                alignItems: 'center',
                marginVertical: 15,
                marginBottom: 150,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('NewPassword')}
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
                  SEND
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Don't Have Account */}
          <View style={{alignItems: 'center', marginVertical: 15}}>
            <Text
              style={{color: Color.textColor, fontFamily: 'Poppins-Medium'}}>
              Don't Have Account?
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('RegisterAccount')}>
              <Text style={{color: Color.red, fontFamily: 'Poppins-Medium'}}>
                Register
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
export default ForgotPassword;
