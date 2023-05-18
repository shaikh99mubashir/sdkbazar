import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  PermissionsAndroid,
  ToastAndroid,
} from 'react-native';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconnew from 'react-native-vector-icons/Ionicons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BasicUrl, imageUrl} from '../../Constants/BasicUrl';
const JobStep1 = ({navigation}: any) => {
  interface Istep1 {
    login_ID: string;
    first_name: string;
    last_name: string;
    profile_picture: string;
    email: string;
    gender: string;
    date_of_birth: string;
    description: string;
  }

  const [login_ID, setLogin_ID] = useState('');
  AsyncStorage.getItem('user').then((val: any) => {
    let user = JSON.parse(val);
    console.log(user.userID, 'user===>');
    setLogin_ID(user.userID);
  });

  console.log('login_ID', login_ID);

  const [step1Fields, setStep1Fields] = useState<Istep1>({
    login_ID: login_ID,
    first_name: '',
    last_name: '',
    profile_picture: '',
    email: '',
    gender: '',
    date_of_birth: '',
    description: '',
  });
  console.log('step1Fields', step1Fields);
  const uploadProfilePicture = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    console.log(granted, 'granted');

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      let options: any = {
        saveToPhotos: true,
        mediaType: 'photo',
      };
      const result: any = await launchImageLibrary(options);
      if (result.didCancel) {
        // ('Cancelled image selection');
      } else if (result.errorCode == 'permission') {
        // setToastMsg('Permission Not Satisfied');
      } else if (result.errorCode == 'others') {
        // setToastMsg(result.errorMessage);
      } else {
        let imageUri = result.assets[0].uri;

        let formData = new FormData();

        formData.append('profile-file', {
          uri: imageUri,
          type: 'image/jpeg',
          name: 'image.jpg',
        });
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        };
        axios
          .post(`${BasicUrl}businessprofileimage`, formData, config)
          .then((res: any) => {
            console.log('res', res.data);
            setStep1Fields({
              ...step1Fields,
              profile_picture: `profileImage/${res.data.image}`,
            });
          })
          .catch((error: any) => {
            console.log(error);
            ToastAndroid.show('internal server error', ToastAndroid.SHORT);
          });
        console.log(result.assets[0].uri);
      }
    }
  };

  const jobStep1Next = () => {
    let data = {...step1Fields};
    data.login_ID = login_ID;
    console.log('data', data);

    let flag = Object.values(data);
    let flag2 = flag.some((e, i) => e == '');
    if (flag2) {
      ToastAndroid.show('Required fields are missing', ToastAndroid.SHORT);
      return;
    }
    axios
      .post(`${BasicUrl}jobseekerstep01`, data)
      .then(res => {
        console.log('res=====>', res.data);
        if (res.data) {
          navigation.replace('Step2JobSeeker');
          ToastAndroid.show(
            'Congratulations STEP 1 Completed',
            ToastAndroid.SHORT,
          );
        } else {
          ToastAndroid.show('Required fields are missing', ToastAndroid.SHORT);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.step}>Step 1</Text>
        </View>
        <View>
          <View style={styles.profile}>
            <TouchableOpacity
              onPress={uploadProfilePicture}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
              }}>
              {step1Fields.profile_picture ? (
                <Image
                  source={{
                    uri: `${imageUrl}/uploads/${step1Fields.profile_picture.substring(
                      'profileimage/'.length,
                    )}`,
                  }}
                  style={{width: 140, height: 140, borderRadius: 500}}
                />
              ) : (
                <>
                  <Icon name="upload" size={25} color={'white'} />
                  <Text style={{color: 'white', fontSize: 15}}>
                    profile Picture
                  </Text>
                </>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              keyboardType="default"
              onChangeText={e =>
                setStep1Fields({...step1Fields, first_name: e})
              }
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              keyboardType="default"
              onChangeText={e => setStep1Fields({...step1Fields, last_name: e})}
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              keyboardType="default"
              onChangeText={e => setStep1Fields({...step1Fields, email: e})}
            />
          </View>
          <View style={styles.fields}>
            <View style={styles.box}>
              <TextInput
                style={styles.input50}
                placeholder="Gender"
                keyboardType="default"
                onChangeText={e => setStep1Fields({...step1Fields, gender: e})}
              />
              <TextInput
                style={styles.input50}
                placeholder="Date Of Birth"
                keyboardType="default"
                onChangeText={e =>
                  setStep1Fields({...step1Fields, date_of_birth: e})
                }
              />
            </View>
          </View>
          <View style={styles.fields}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              placeholder=" Description"
              style={[styles.input, {height: 100, textAlignVertical: 'top'}]}
              onChangeText={e =>
                setStep1Fields({...step1Fields, description: e})
              }
            />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={jobStep1Next}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default JobStep1;

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
