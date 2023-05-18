import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Dimensions,
} from 'react-native';

import React, {useState} from 'react';
import axios from 'axios';
import {Icon} from 'react-native-vector-icons/Icon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const History = () => {
  // const [passwordFields, setPasswordFields] = useState({
  //   old_password: '',
  //   new_password: '',
  // });

  // const submitBusinessStep = () => {
  //   const formData = new FormData();
  //   formData.append('old_password', passwordFields.old_password);
  //   formData.append('new_password', passwordFields.new_password);

  //   const config = {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       Authorization: 'd964f91681a28bcca6f63a546372b440',
  //     },
  //   };

  //   axios
  //     .post(
  //       'https://portal.ispbilling.com.pk/API/changePassword',
  //       formData,
  //       config,
  //     )
  //     .then((res: any) => {
  //       console.log('res data', res.data);
  //     })
  //     .catch(error => {
  //       console.log('error==>', error);
  //       ToastAndroid.show('Internal Server Error', ToastAndroid.BOTTOM);
  //     });
  // };

  // const [email_address, setEmail_address] = useState('');
  // const submitBusinessStep = () => {
  //   const expression: RegExp = /^[A -Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  //   const userEmail: any = email_address;
  //   const result: boolean = expression.test(userEmail); // true
  //   if (!result) {
  //     ToastAndroid.show('Enter correct email', ToastAndroid.SHORT);
  //     return;
  //   }
  //   const formData = new FormData();
  //   formData.append('email_address', email_address);

  //   const config = {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       Authorization: 'd964f91681a28bcca6f63a546372b440',
  //     },
  //   };

  //   axios
  //     .post(
  //       'https://portal.ispbilling.com.pk/API/editProfile',
  //       formData,
  //       config,
  //     )
  //     .then((res: any) => {
  //       console.log('res data', res.data);
  //     })
  //     .catch(error => {
  //       console.log('error==>', error);
  //       ToastAndroid.show('Internal Server Error', ToastAndroid.BOTTOM);
  //     });
  // };

  return (
    <View style={{paddingTop: 10, paddingHorizontal: 10}}>
      <View style={styles.mainBox}>
        <View style={styles.box}>
          <View style={styles.innerBox}>
            <View>
              <Text
                style={{
                  fontSize: 15,
                  padding: 2,
                  color: 'gray',
                  alignSelf: 'center',
                }}>
                May
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  padding: 2,
                  color: 'black',
                  fontWeight: '700',
                  alignSelf: 'center',
                }}>
                02
              </Text>
            </View>
            <Text
              style={{
                fontSize: 18,
                padding: 5,
                color: 'black',
                width: 100,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                fontWeight: '600',
                textAlign: 'center',

                backgroundColor: '#767676',
              }}>
              2023
            </Text>
          </View>
        </View>
        <View style={styles.boxOne}>
          <View>
            <Text style={{fontSize: 14, color: 'gray'}}>Amount</Text>
            <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
              6600
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 14, color: 'gray'}}>Cheque Number</Text>
            <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
              79297
            </Text>
          </View>
        </View>
      </View>

      {/* second */}
      <View style={{marginTop: 10}}>
        <View
          style={{
            display: 'flex',
            elevation: 20,
            flexDirection: 'column',
            borderRadius: 30,
          }}>
          <View
            style={{
              backgroundColor: '#c7c7c7',
              padding: 10,
              borderTopLeftRadius: 30,
              borderTopEndRadius: 30,
            }}>
            <View style={{flexDirection: 'column'}}>
              <MaterialIcons name="support-agent" size={22} color="#fff" />
              <Text style={{fontSize: 18, color: 'black', fontWeight: '700'}}>
                Muhammad Faizan And Muhammad Ahsan
              </Text>
              <Text style={{color: 'gray', fontSize: 14}}>8659896578</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderBottomLeftRadius: 30,
              borderBottomEndRadius: 30,
            }}>
            <View style={{gap: 10}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 5,
                  alignItems: 'center',
                }}>
                <View>
                  <MaterialIcons name="support-agent" size={22} color="black" />
                </View>
                <View>
                  <Text style={{fontSize: 14, color: 'gray'}}>
                    Cheque Status
                  </Text>
                  <Text
                    style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
                    Cleared
                  </Text>
                </View>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 5,
                  alignItems: 'center',
                }}>
                <View>
                  <MaterialIcons name="support-agent" size={22} color="black" />
                </View>
                <View>
                  <Text style={{fontSize: 14, color: 'gray'}}>
                    Cheque Number
                  </Text>
                  <Text
                    style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
                    79297
                  </Text>
                </View>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 5,
                  alignItems: 'center',
                }}>
                <View>
                  <MaterialIcons name="support-agent" size={22} color="black" />
                </View>
                <View>
                  <Text style={{fontSize: 14, color: 'gray'}}>date</Text>
                  <Text
                    style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
                    May 02, 2023
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* <View style={styles.fields}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          keyboardType="default"
          onChangeText={e => setEmail_address(e)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={submitBusinessStep}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
          SUBMIT
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  mainBox: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
  },
  box: {
    display: 'flex',
    backgroundColor: '#c7c7c7',
    padding: 10,
    elevation: 20,
    // borderColor: 'black',
    // borderWidth: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    width: '32%',
  },
  boxOne: {
    backgroundColor: 'white',
    // width: Dimensions.get('screen').width / 1.6,
    width: '68%',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    display: 'flex',
    padding: 10,
    elevation: 20,
    gap: 7,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  innerBox: {
    justifyContent: 'center',
    textAlign: 'center',
    width: 100,
    backgroundColor: '#bbbbbb',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  fields: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 12,
    padding: 10,
  },
  button: {
    alignSelf: 'flex-end',
    textAlign: 'center',
    alignItems: 'center',
    width: '40%',
    borderRadius: 100,
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: 'red',
  },
});
