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
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const OtpScreen = ({navigation}: any) => {
  interface ILogin {
    email: string | undefined;
    password: string | undefined;
  }

  const [user, setUser] = useState(false);
  const CELL_COUNT = 6;
  // const { confirmation, phoneNum } = route.params;
  const [code, setCode] = useState('');
  const [uploading, setUploading] = useState(false);
  const [codeError, setCodeError] = useState(false);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
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
              OTP Verification
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 14,
                marginTop: 20,
                textAlign: 'center',
              }}>
              Thank you for Registering with you.Please type the OTP as shared
              on your mobile +92349-3499846
            </Text>

            <CodeField
              ref={ref}
              {...props}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />

            {/* Login Button */}
            <View style={{alignItems: 'center', marginVertical: 15}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('HomeScreen')}
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
                  VERIFY
                </Text>
              </TouchableOpacity>
            </View>

            {/* Mobile no Text */}
            <TouchableOpacity style={{marginVertical: 15, marginBottom: 80}}>
              <Text
                style={{
                  color: Color.textColor,
                  fontFamily: 'Poppins-Medium',
                  textAlign: 'center',
                }}>
                OTP Not Recived?{''}
                <Text style={{color: Color.red, fontFamily: 'Poppins-Medium'}}>
                  {' '}
                  Resend
                </Text>
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
  codeFieldRoot: {
    marginTop: 20,
    justifyContent: 'center',
  },
  cell: {
    width: 40,
    height: 60,
    padding: 10,
    alignItems: 'center',
    lineHeight: 38,
    fontSize: 24,
    marginHorizontal: 4,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.textColor,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: Color.textColor,
  },
});
export default OtpScreen;
