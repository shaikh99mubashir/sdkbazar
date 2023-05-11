import React, {useState} from 'react';
import {SafeAreaView, View, PermissionsAndroid, Image} from 'react-native';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconnew from 'react-native-vector-icons/Ionicons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {BasicUrl} from '../../Constants/BasicUrl';
import axios from 'axios';
import {withDecay} from 'react-native-reanimated';
const Step1 = ({navigation}: any) => {
  const [profileImage, setProfileImage] = useState<any>('');
  const uploadProfilePicture = async () => {
    console.log('jello');

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

      console.log(result);

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
            setProfileImage(res.data.image);
          })
          .catch((error: any) => {
            console.log(error);
          });
        console.log(result.assets[0].uri);
      }
    }
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
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <Icon name="upload" size={20} color={'#666666'} />
              <Text style={styles.text}>upload</Text>
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
              <Icon name="upload" size={25} color={'white'} />
              <Text style={{color: 'white', fontSize: 15}}>
                profile Picture
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {profileImage && (
          <Image
            source={{uri: `http://192.168.100.9:3000/uploads/${profileImage}`}}
            style={{width: 199, height: 129}}
          />
        )}
        <View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Company Name"
              keyboardType="default"
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Business Category"
              keyboardType="default"
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Company Registration Number"
              keyboardType="default"
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Tax Identifier"
              keyboardType="default"
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="License Type"
              keyboardType="default"
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              placeholder="Company Description"
              style={[styles.input, {height: 100, textAlignVertical: 'top'}]}
            />
          </View>
        </View>
        <View style={styles.view}>
          <Text style={styles.textsm}>Upload Documents</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', gap: 14}}>
          <View style={styles.uploadBox}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <Iconnew
                name="cloud-upload-outline"
                size={40}
                color={'#666666'}
              />
            </View>
          </View>
          <View style={styles.uploadBox}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <Iconnew
                name="cloud-upload-outline"
                size={40}
                color={'#666666'}
              />
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Step2business')}>
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
