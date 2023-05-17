import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  PermissionsAndroid,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconnew from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BasicUrl, imageUrl} from '../../Constants/BasicUrl';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Step3 = ({navigation}: any) => {
  interface Istep3 {
    login_ID: string;
    manager_fullname: string;
    manager_designation: string;
    manager_email: string;
    cnic_image: string;
  }

  const [login_ID, setLogin_ID] = useState('');
  AsyncStorage.getItem('user').then((val: any) => {
    let user = JSON.parse(val);
    console.log(user.userID, 'user===>');
    setLogin_ID(user.userID);
  });

  console.log('login_ID', login_ID);

  const [step3Fields, setStep3Fields] = useState<Istep3>({
    login_ID: '',
    manager_fullname: '',
    manager_designation: '',
    manager_email: '',
    cnic_image: '',
  });

  const uploadCnicPicture = async () => {
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

        formData.append('cnic-file', {
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
          .post(`${BasicUrl}businesscnic`, formData, config)
          .then((res: any) => {
            console.log('res', res.data);
            setStep3Fields({
              ...step3Fields,
              cnic_image: `cnicImage/${res.data.image}`,
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

  console.log('step3Fields', step3Fields);

  const submitBusinessStep = () => {
    let data = {...step3Fields};
    data.login_ID = login_ID;
    console.log('data', data);

    let flag = Object.values(step3Fields);
    let flag1 = flag.some((e, i) => e == '');
    if (flag1) {
      ToastAndroid.show('Required fields are missing', ToastAndroid.SHORT);
      return;
    }

    const expression: RegExp = /^[A -Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const userEmail: any = step3Fields?.manager_email;
    const result: boolean = expression.test(userEmail); // true
    if (!result) {
      ToastAndroid.show('Enter correct email', ToastAndroid.SHORT);
      return;
    }

    axios
      .put(`${BasicUrl}businessstep03`, data)
      .then(res => {
        console.log(res);
        navigation.replace('HomeScreen');
        ToastAndroid.show('Form Submit Successfully', ToastAndroid.SHORT);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.step}>Step 3</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.para}>Manager Details</Text>
        </View>
        <View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              keyboardType="default"
              onChangeText={e =>
                setStep3Fields({...step3Fields, manager_fullname: e})
              }
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Designation"
              keyboardType="default"
              onChangeText={e =>
                setStep3Fields({...step3Fields, manager_designation: e})
              }
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="E-mail Address"
              keyboardType="default"
              onChangeText={e =>
                setStep3Fields({...step3Fields, manager_email: e})
              }
            />
          </View>
        </View>
        <View style={styles.view}>
          <Text style={styles.textsm}>Upload CNIC</Text>
        </View>

        <TouchableOpacity
          onPress={() => uploadCnicPicture()}
          style={styles.uploadBox}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}>
            {step3Fields.cnic_image ? (
              <Image
                source={{
                  uri: `${imageUrl}/businesscnic/${step3Fields.cnic_image.substring(
                    'cnicImage/'.length,
                  )}`,
                }}
                style={{width: 140, height: 140}}
              />
            ) : (
              <>
                <Iconnew
                  name="cloud-upload-outline"
                  size={60}
                  color={'#666666'}
                />
              </>
            )}
          </View>
        </TouchableOpacity>

        <View>
          <TouchableOpacity style={styles.button} onPress={submitBusinessStep}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Step3;

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
  para: {
    fontWeight: '700',
    color: '#333333',
    fontSize: 30,
    alignSelf: 'center',
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
  uploadBox: {
    backgroundColor: '#F2F2F2',
    width: '100%',
    flexDirection: 'column',
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    display: 'flex',
    height: 140,
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
