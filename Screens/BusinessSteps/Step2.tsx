import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  View,
  ToastAndroid,
  ScrollView,
  TextInput,
} from 'react-native';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconnew from 'react-native-vector-icons/Ionicons';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GooggleMapKey} from '../../GoogleMapKey';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BasicUrl} from '../../Constants/BasicUrl';

const Step2 = ({navigation, route}: any) => {
  interface Istep2 {
    login_ID: string;
    company_location: string;
    email: string;
    phone_number: string;
    fax_number: string;
    website: string;
  }

  const [login_ID, setLogin_ID] = useState('');
  AsyncStorage.getItem('user').then((val: any) => {
    let user = JSON.parse(val);
    console.log(user.userID, 'user===>');
    setLogin_ID(user.userID);
  });

  console.log('login_ID', login_ID);

  const [step2Fields, setStep2Fields] = useState<Istep2>({
    login_ID: '',
    company_location: '',
    email: '',
    phone_number: '',
    fax_number: '',
    website: '',
  });

  const step2next = () => {
    let data = {...step2Fields};
    data.login_ID = login_ID;
    console.log('data', data);

    let flag = Object.values(data);
    let flag1 = flag.some((e, i) => e == '');
    if (flag1) {
      ToastAndroid.show('Required fields are missing', ToastAndroid.SHORT);
      return;
    }

    const expression: RegExp = /^[A -Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const userEmail: any = step2Fields?.email;
    const result: boolean = expression.test(userEmail); // true
    if (!result) {
      ToastAndroid.show('Enter correct email', ToastAndroid.SHORT);
      return;
    }

    axios
      .put(`${BasicUrl}businessstep02`, data)
      .then(res => {
        console.log(res);
        navigation.replace('Step3business');
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.step}>Step 2</Text>
        </View>
        <View>
          <View style={styles.fields}>
            {/* <GooglePlacesAutocomplete
              placeholder="Company location"
              // textInputProps={styles.input}
              suppressDefaultStyles={true}
              // currentLocation={true}
              keepResultsAfterBlur
              fetchDetails={true}
              styles={{
                container: styles.containerStyle, // Update container instead of textInputContainer
                textInput: styles.textInputStyle,
                description: {color: 'black'},
              }}
              // onPress={onPressAddress}
              onPress={(data, details) => {
                // 'details' is provided when fetchDetails = true
                console.log('details', details);
              }}
              query={{
                key: GooggleMapKey,
                language: 'en',
              }}
            /> */}
            <TextInput
              style={styles.input}
              placeholder="Company Location"
              keyboardType="default"
              onChangeText={e =>
                setStep2Fields({...step2Fields, company_location: e})
              }
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="E-mail Address"
              keyboardType="email-address"
              onChangeText={e => setStep2Fields({...step2Fields, email: e})}
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              keyboardType="number-pad"
              onChangeText={e =>
                setStep2Fields({...step2Fields, phone_number: e})
              }
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Fax Number"
              keyboardType="default"
              onChangeText={e =>
                setStep2Fields({...step2Fields, fax_number: e})
              }
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Website"
              keyboardType="default"
              onChangeText={e => setStep2Fields({...step2Fields, website: e})}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={step2next}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Step2;

const styles = StyleSheet.create({
  containerStyle: {
    // backgroundColor: 'white',
    zIndex: 1,
    width: Dimensions.get('window').width / 1.1,
  },

  textInputStyle: {
    zIndex: 1,
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
  fields: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 12,
    padding: 10,
  },
  text: {
    color: '#666666',
    fontSize: 20,
  },
  textsm: {
    color: '#666666',
    fontSize: 18,
  },
  profile: {
    backgroundColor: '#666666',
    width: 140,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: -50,
    display: 'flex',
    height: 140,
    justifyContent: 'center',
    borderRadius: 500,
    alignSelf: 'center',
  },
  upload: {
    backgroundColor: '#F9F9F9',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
    height: 150,
    justifyContent: 'center',
    borderRadius: 20,
  },
  uploadBox: {
    backgroundColor: '#F9F9F9',
    width: '48%',
    flexDirection: 'column',
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    display: 'flex',
    height: 100,
    justifyContent: 'center',
    borderRadius: 20,
  },
  step: {
    fontSize: 25,
    textAlign: 'left',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    color: 'red',
    backgroundColor: '#ff000045',
  },
  view: {
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});
