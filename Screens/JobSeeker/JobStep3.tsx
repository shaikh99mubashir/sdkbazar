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
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BasicUrl, imageUrl} from '../../Constants/BasicUrl';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import {launchImageLibrary} from 'react-native-image-picker';

const JobStep3 = ({navigation}: any) => {
  interface Istep3 {
    login_ID: string;
    profession: string;
    work_experience: string;
    level_of_education: string;
    cv: string;
    specialization: string;
  }

  const [login_ID, setLogin_ID] = useState('');
  AsyncStorage.getItem('user').then((val: any) => {
    let user = JSON.parse(val);
    console.log(user.userID, 'user===>');
    setLogin_ID(user.userID);
  });

  const [step3Fields, setStep3Fields] = useState<Istep3>({
    login_ID: '',
    profession: '',
    specialization: '',
    work_experience: '',
    level_of_education: '',
    cv: '',
  });
  console.log('step3Fields', step3Fields);

  const uploadCV = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf], // Specify the allowed file types
      });

      const selectedFile: DocumentPickerResponse = res[0]; // Assuming you want to handle the first selected file
      console.log('selectedFile==>', selectedFile);

      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append('cv-file', {
        uri: selectedFile.uri,
        type: selectedFile.type,
        name: selectedFile.name,
      });
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      axios
        .post(`${BasicUrl}jobseekecv`, formData, config)
        .then((response: any) => {
          setStep3Fields({
            ...step3Fields,
            cv: `cv/${response.data.image}`,
          });
        })
        .catch((error: any) => {
          console.log(error);
          ToastAndroid.show('Internal server error', ToastAndroid.SHORT);
        });
    } catch (error) {
      console.log(error);
      // Handle the error
      ToastAndroid.show('Error occurred', ToastAndroid.SHORT);
    }
  };

  const submitBusinessStep = () => {
    let data = {...step3Fields};
    data.login_ID = login_ID;

    let flag = Object.values(data);
    let flag1 = flag.some((e, i) => e == '');
    if (flag1) {
      ToastAndroid.show('Required fields are missing', ToastAndroid.SHORT);
      return;
    }

    axios
      .put(`${BasicUrl}jobseekerstep03`, data)
      .then(res => {
        console.log('res.data', res.data);
        console.log('res.status', res.status);
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

        <View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Profession"
              keyboardType="default"
              onChangeText={e =>
                setStep3Fields({...step3Fields, profession: e})
              }
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="specialization"
              keyboardType="default"
              onChangeText={e =>
                setStep3Fields({...step3Fields, specialization: e})
              }
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Work Experience"
              keyboardType="default"
              onChangeText={e =>
                setStep3Fields({...step3Fields, work_experience: e})
              }
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Level of Education"
              keyboardType="default"
              onChangeText={e =>
                setStep3Fields({...step3Fields, level_of_education: e})
              }
            />
          </View>
        </View>
        <View style={styles.view}>
          <Text style={styles.textsm}>Upload CV</Text>
        </View>

        {step3Fields.cv ? (
          <Text style={{color: 'grey'}}>{step3Fields.cv}</Text>
        ) : (
          <TouchableOpacity onPress={uploadCV} style={styles.uploadBox}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <Iconnew
                name="cloud-upload-outline"
                size={60}
                color={'#666666'}
              />
            </View>
          </TouchableOpacity>
        )}

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

export default JobStep3;

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
