import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  PermissionsAndroid,
  Image,
  ToastAndroid,
} from 'react-native';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconnew from 'react-native-vector-icons/Ionicons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {BasicUrl, imageUrl} from '../../Constants/BasicUrl';
import axios from 'axios';
import {withDecay} from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Step1 = ({navigation}: any) => {
  interface Istep1 {
    login_ID: string;
    company_name: string;
    business_category: string;
    company_registration_number: string;
    tax_identifier: string;
    license_Type: string;
    company_description: string;
    docunment1_image: any;
    docunment2_image: any;
    cover_image: any;
    profile_image: any;
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
    company_name: '',
    business_category: '',
    company_registration_number: '',
    tax_identifier: '',
    license_Type: '',
    company_description: '',
    docunment1_image: '',
    docunment2_image: '',
    cover_image: '',
    profile_image: '',
  });

  console.log('seep1Fields', step1Fields);

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
              profile_image: `profileImage/${res.data.image}`,
            });
          })
          .catch((error: any) => {
            console.log(error);
            ToastAndroid.show('internal server server', ToastAndroid.SHORT);
          });
        console.log(result.assets[0].uri);
      }
    }
  };
  const uploadCoverPicture = async () => {
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

        formData.append('cover-file', {
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
          .post(`${BasicUrl}businesscover`, formData, config)
          .then((res: any) => {
            console.log('res', res.data);
            setStep1Fields({
              ...step1Fields,
              cover_image: res.data.image,
            });
          })
          .catch((error: any) => {
            console.log(error);
            ToastAndroid.show('internal server server', ToastAndroid.SHORT);
          });
        console.log(result.assets[0].uri);
      }
    }
  };
  const uploadDocunmentPicture = async () => {
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

        formData.append('docunment-file', {
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
          .post(`${BasicUrl}businessdocunment`, formData, config)
          .then((res: any) => {
            console.log('res', res.data);
            setStep1Fields({
              ...step1Fields,
              docunment1_image: res.data.image,
            });
          })
          .catch((error: any) => {
            console.log(error);
            ToastAndroid.show('internal server server', ToastAndroid.SHORT);
          });
        console.log(result.assets[0].uri);
      }
    }
  };
  const uploadDocunmentPicture2 = async () => {
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

        formData.append('docunment-file', {
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
          .post(`${BasicUrl}businessdocunment`, formData, config)
          .then((res: any) => {
            console.log('res', res.data);
            setStep1Fields({
              ...step1Fields,
              docunment2_image: res.data.image,
            });
          })
          .catch((error: any) => {
            console.log(error);
            ToastAndroid.show('internal server server', ToastAndroid.SHORT);
          });
        console.log(result.assets[0].uri);
      }
    }
  };

  const businessStep1Next = () => {
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
      .post(`${BasicUrl}businessstep01`, data)
      .then(res => {
        console.log('res=====>', res.data);
        if (res.data) {
          navigation.replace('Step2business');
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
          <View style={styles.upload}>
            <TouchableOpacity
              onPress={() => uploadCoverPicture()}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              {step1Fields.cover_image ? (
                <Image
                  source={{
                    uri: `http://192.168.100.9:3000/businesscoverimage/${step1Fields.cover_image}`,
                  }}
                  resizeMode="contain"
                  style={{width: '100%', height: 150, borderRadius: 20}}
                />
              ) : (
                <>
                  <Icon name="upload" size={20} color={'#666666'} />
                  <Text style={styles.text}>upload</Text>
                </>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.profile}>
            <TouchableOpacity
              onPress={() => uploadProfilePicture()}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
              }}>
              {step1Fields.profile_image ? (
                <Image
                  source={{
                    uri: `${imageUrl}/uploads/${step1Fields.profile_image.substring(
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
              placeholder="Company Name"
              keyboardType="default"
              onChangeText={e =>
                setStep1Fields({...step1Fields, company_name: e})
              }
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Business Category"
              keyboardType="default"
              onChangeText={e =>
                setStep1Fields({...step1Fields, business_category: e})
              }
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Company Registration Number"
              keyboardType="numeric"
              onChangeText={e =>
                setStep1Fields({...step1Fields, company_registration_number: e})
              }
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Tax Identifier"
              keyboardType="default"
              onChangeText={e =>
                setStep1Fields({...step1Fields, tax_identifier: e})
              }
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="License Type"
              keyboardType="default"
              onChangeText={e =>
                setStep1Fields({...step1Fields, license_Type: e})
              }
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              placeholder="Company Description"
              onChangeText={e =>
                setStep1Fields({...step1Fields, company_description: e})
              }
              style={[styles.input, {height: 100, textAlignVertical: 'top'}]}
            />
          </View>
        </View>
        <View style={styles.view}>
          <Text style={styles.textsm}>Upload Documents</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', gap: 14}}>
          <View style={styles.uploadBox}>
            <TouchableOpacity
              onPress={() => uploadDocunmentPicture()}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              {step1Fields.docunment1_image ? (
                <Image
                  source={{
                    uri: `${imageUrl}/businessdocunment/${step1Fields.docunment1_image}`,
                  }}
                  style={{width: '100%', height: 100, borderRadius: 20}}
                />
              ) : (
                <>
                  <Iconnew
                    name="cloud-upload-outline"
                    size={40}
                    color={'#666666'}
                  />
                </>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.uploadBox}>
            <TouchableOpacity
              onPress={() => uploadDocunmentPicture2()}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              {step1Fields.docunment2_image ? (
                <Image
                  source={{
                    uri: `${imageUrl}/businessdocunment/${step1Fields.docunment2_image}`,
                  }}
                  style={{width: '100%', height: 100, borderRadius: 20}}
                />
              ) : (
                <>
                  <Iconnew
                    name="cloud-upload-outline"
                    size={40}
                    color={'#666666'}
                  />
                </>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => businessStep1Next()}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Step1;

const styles = StyleSheet.create({
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
    backgroundColor: 'white',
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
