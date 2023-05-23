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
import {Color} from '../../Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const JobStep3 = ({navigation, route}: any) => {
  const formId: any = route.params;
  console.log('formId======>', formId);

  interface Istep3 {
    formId: string;
    profession: string;
    work_experience: string;
    level_of_education: string;
    cv: string;
    specialization: string;
    step3: string;
  }
  // Entrepreneur
  const [selectedServicedata, setSelectedServicedata]: any = useState({});
  const [serviceDD, setServiceDD] = useState(false);
  const [specialized, setSpecialized]: any = useState([]);
  const [specializedDD, setspecializedDD] = useState(false);
  const SelectService = [
    {
      id: 1,
      type: 'Labour',
      service: 'Plumber',
      name: 'Name 1',
      profession: 'plumber',
      exp: '5 year',
    },
    {
      id: 2,
      type: 'Labour',
      service: 'Plumber',
      name: 'Name 2',
      profession: 'plumber',
      exp: '5 year',
    },
    {
      id: 3,
      type: 'Labour',
      service: 'Carpenter',
      name: 'Name 3',
      profession: 'Carpenter',
      exp: '5 year',
    },
    {
      id: 4,
      type: 'Developer',
      service: 'Web Developer',
      name: 'Name 4',
      profession: 'Web Developer',
      exp: '5 year',
    },
    {
      id: 5,
      type: 'Developer',
      service: 'Mobile Developer',
      name: 'Name 5',
      profession: 'Mobile Developer',
      exp: '5 year',
    },
    {
      id: 6,
      type: 'Developer',
      service: 'Ful Stack Developer',
      name: 'Name 6',
      profession: 'Ful Stack Developer',
      exp: '5 year',
    },
    {
      id: 7,
      type: 'Designer',
      service: 'Logo',
      name: 'Name 7',
      profession: 'Logo',
      exp: '5 year',
    },
    {
      id: 8,
      type: 'Designer',
      service: 'Social Media Post',
      name: 'Name 8',
      profession: 'Social Media Post',
      exp: '5 year',
    },
    {
      id: 9,
      type: 'Designer',
      service: '3D',
      name: 'Name 9',
      profession: '3D',
      exp: '5 year',
    },
  ];
  const [login_ID, setLogin_ID] = useState('');
  AsyncStorage.getItem('user').then((val: any) => {
    let user = JSON.parse(val);
    console.log(user.userID, 'user===>');
    setLogin_ID(user.userID);
  });

  const [step3Fields, setStep3Fields] = useState<Istep3>({
    formId: '',
    profession: '',
    specialization: '',
    work_experience: '',
    level_of_education: '',
    cv: '',
    step3: 'competed',
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

  console.log('selectedServicedata', selectedServicedata.type);
  console.log('specialized', specialized.service);

  const submitBusinessStep = () => {
    let data = {...step3Fields};
    data.formId = formId.id;
    data.profession = selectedServicedata.type;
    data.specialization = specialized.service;
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

  // Entrepreneur
  const SelectedServices = (item: any) => {
    setSelectedServicedata(item);
    setServiceDD(!serviceDD);
  };

  const SelectedSpecialized = (item: any) => {
    setSpecialized(item);
    setspecializedDD(!specializedDD);
  };
  const OnPressSpecialization = () => {
    if (selectedServicedata && selectedServicedata.type) {
      setspecializedDD(!specializedDD);
    } else {
      ToastAndroid.show('First Select Profession', ToastAndroid.SHORT);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.step}>Step 3</Text>
        </View>

        <View>
          {/* Profrssion */}
          <View style={styles.fields}>
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setServiceDD(!serviceDD)}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: 1,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 12,
                  borderBottomWidth: serviceDD ? 0 : 1,
                  borderBottomLeftRadius: serviceDD ? 0 : 12,
                  borderBottomRightRadius: serviceDD ? 0 : 12,
                  borderColor: Color.textColor,
                  alignItems: 'center',
                }}>
                {selectedServicedata &&
                Object.keys(selectedServicedata).length > 0 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}>
                    <Text
                      style={{
                        color: Color.textColor,
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 16,
                      }}>
                      {selectedServicedata.type &&
                      selectedServicedata.type.length > 10
                        ? selectedServicedata.type.slice(0, 10)
                        : selectedServicedata.type}
                    </Text>
                    {serviceDD ? (
                      <Ionicons
                        name="chevron-up-sharp"
                        size={20}
                        color="black"
                      />
                    ) : (
                      <Ionicons
                        name="chevron-down-sharp"
                        size={20}
                        color="black"
                      />
                    )}
                  </View>
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}>
                    <Text
                      style={{
                        color: Color.textColor,
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 16,
                      }}>
                      Profession
                    </Text>
                    {serviceDD ? (
                      <Ionicons
                        name="chevron-up-sharp"
                        size={20}
                        color="black"
                      />
                    ) : (
                      <Ionicons
                        name="chevron-down-sharp"
                        size={20}
                        color="black"
                      />
                    )}
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderBottomEndRadius: 8,
                borderBottomStartRadius: 8,
                borderWidth: !serviceDD ? 0 : 1,
                borderTopWidth: !serviceDD ? 0 : 1,
                borderColor: Color.textColor,
              }}>
              {serviceDD == true &&
                Array.from(new Set(SelectService.map(item => item.type))).map(
                  (type, index) => (
                    <TouchableOpacity
                      onPress={() =>
                        SelectedServices(
                          SelectService.find(item => item.type === type),
                        )
                      }
                      key={index}
                      style={{
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        marginVertical: 5,
                        gap: 10,
                      }}>
                      <Text
                        style={{
                          color: Color.textColor,
                          fontFamily: 'Poppins-SemiBold',
                          fontSize: 16,
                        }}>
                        {type}
                      </Text>
                    </TouchableOpacity>
                  ),
                )}
            </View>
          </View>
          {/* Specialization */}
          <View style={styles.fields}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                OnPressSpecialization();
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderWidth: 1,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 12,
                borderBottomWidth: specializedDD ? 0 : 1,
                borderBottomLeftRadius: specializedDD ? 0 : 12,
                borderBottomRightRadius: specializedDD ? 0 : 12,
                borderColor: Color.textColor,
                alignItems: 'center',
              }}>
              {specialized && Object.keys(specialized).length > 0 ? (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <Text
                    style={{
                      color: Color.textColor,
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 16,
                    }}>
                    {specialized.service && specialized.service.length > 10
                      ? specialized.service.slice(0, 10)
                      : specialized.service}
                  </Text>
                  {specializedDD ? (
                    <Ionicons name="chevron-up-sharp" size={20} color="black" />
                  ) : (
                    <Ionicons
                      name="chevron-down-sharp"
                      size={20}
                      color="black"
                    />
                  )}
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <Text
                    style={{
                      color: Color.textColor,
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 16,
                    }}>
                    Specialized
                  </Text>
                  {specializedDD ? (
                    <Ionicons name="chevron-up-sharp" size={20} color="black" />
                  ) : (
                    <Ionicons
                      name="chevron-down-sharp"
                      size={20}
                      color="black"
                    />
                  )}
                </View>
              )}
            </TouchableOpacity>

            <View
              style={{
                borderBottomEndRadius: 8,
                borderBottomStartRadius: 8,
                borderWidth: !specializedDD ? 0 : 1,
                borderTopWidth: !specializedDD ? 0 : 1,
                borderColor: Color.textColor,
              }}>
              {specializedDD == true &&
                SelectService.filter(
                  item => item.type === selectedServicedata.type,
                )
                  .reduce((unique: any, item: any) => {
                    return unique.some((i: any) => i.service === item.service)
                      ? unique
                      : [...unique, item];
                  }, [])
                  .map((item: any, index: any) => (
                    <TouchableOpacity
                      onPress={() => SelectedSpecialized(item)}
                      key={index}
                      style={{
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        marginVertical: 5,
                        gap: 10,
                      }}>
                      <Text
                        style={{
                          color: Color.textColor,
                          fontFamily: 'Poppins-SemiBold',
                          fontSize: 16,
                        }}>
                        {item.service}
                      </Text>
                    </TouchableOpacity>
                  ))}
            </View>
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
