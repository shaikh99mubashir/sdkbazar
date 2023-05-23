import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconnew from 'react-native-vector-icons/Ionicons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BasicUrl} from '../../Constants/BasicUrl';

const JobStep2 = ({navigation, route}: any) => {
  const formId: any = route.params;

  console.log('data', formId.id);
  interface Istep2 {
    formId: string;
    cnic: string;
    phone_number: string;
    country: string;
    city: string;
    step2: string;
  }

  const [login_ID, setLogin_ID] = useState('');
  AsyncStorage.getItem('user').then((val: any) => {
    let user = JSON.parse(val);
    console.log(user.userID, 'user===>');
    setLogin_ID(user.userID);
  });

  console.log('login_ID', login_ID);

  const [step2Fields, setStep2Fields] = useState<Istep2>({
    formId: '',
    cnic: '',
    phone_number: '',
    country: '',
    city: '',
    step2: 'copmleted',
  });
  console.log('step2Fields', step2Fields);

  const step2next = () => {
    let data = {...step2Fields};
    data.formId = formId.id;
    console.log('data', data);

    let flag = Object.values(data);
    let flag1 = flag.some((e, i) => e == '');
    if (flag1) {
      ToastAndroid.show('Required fields are missing', ToastAndroid.SHORT);
      return;
    }

    axios
      .put(`${BasicUrl}jobseekerstep02`, data)
      .then(res => {
        navigation.replace('Step3JobSeeker', {id: formId.id});
        ToastAndroid.show(
          'Congratulations STEP 2 Completed',
          ToastAndroid.SHORT,
        );
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
            <TextInput
              style={styles.input}
              placeholder="CNIC Number"
              keyboardType="number-pad"
              onChangeText={e => setStep2Fields({...step2Fields, cnic: e})}
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
            <View style={styles.box}>
              <TextInput
                style={styles.input50}
                placeholder="Country"
                keyboardType="default"
                onChangeText={e => setStep2Fields({...step2Fields, country: e})}
              />
              <TextInput
                style={styles.input50}
                placeholder="City"
                keyboardType="default"
                onChangeText={e => setStep2Fields({...step2Fields, city: e})}
              />
            </View>
          </View>
        </View>
        <View>
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

export default JobStep2;

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    display: 'flex',
    gap: 10,
    borderRadius: 10,
    flexDirection: 'row',
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

  input50: {
    borderWidth: 1,
    width: '50%',
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
    marginTop: 20,
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
