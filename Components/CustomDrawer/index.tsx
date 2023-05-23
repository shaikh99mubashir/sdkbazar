import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  Image,
  Modal,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Color} from '../../Constants';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BasicUrl} from '../../Constants/BasicUrl';
function CustomDrawerContent(props: any) {
  const navigateToScreen = (screenName: any) => {
    props.navigation.navigate(screenName);
  };

  const [openDD, setOpenDD] = useState<boolean>(false);
  const share = async () => {
    const options = {
      message: 'Ifsdfxdfsdfdfder',
      url: 'https://mubashir.com',
      email: 'mubashir@gmail.com',
      subject: 'Eiusmod esse veniam esse.',
      recipient: '919988998899',
    };

    try {
      const res = await Share.open(options);
      // console.log(res);
    } catch (err) {
      // console.log(err);
    }
  };
  const ShowMessage = () => {
    ToastAndroid.show('This Feature will Soon Avaiable !', ToastAndroid.SHORT);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const handleFilterPress = () => {
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const [apply, setApply] = useState(false);
  const [cancel, setCancel] = useState(false);

  const [refreshToken, setRefreshToken] = useState('');
  // logout
  const ApplyButton = () => {
    AsyncStorage.getItem('user').then((val: any) => {
      console.log('val', val);
      const userData: any = JSON.parse(val);
      setRefreshToken(userData.token);
    });
    axios
      .post(`${BasicUrl}logout`, {refreshToken: refreshToken})
      .then(res => {
        AsyncStorage.removeItem('user');
        handleCloseModal();
        props.navigation.closeDrawer();
        props.navigation.navigate('LoginAccount');
        ToastAndroid.show('Logout Sucessfully !', ToastAndroid.SHORT);
      })
      .catch(error => {
        console.log('error', error);
      });
  };
  const CancelButton = () => {
    handleCloseModal();
  };
  return (
    <View style={{flex: 1, backgroundColor: Color.white}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContent}>
        <View
          style={{
            alignItems: 'center',
            marginHorizontal: 10,
            marginTop: 20,
            flexDirection: 'row',
            gap: 10,
          }}>
          <Image
            source={require('../../Images/p1.png')}
            style={{height: 80, width: 80, borderRadius: 50, marginBottom: 15}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
            }}>
            Zeeshan
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: Color.mainColor,
            paddingTop: 10,
            paddingBottom: 10,
            borderTopWidth: 1,
            borderTopColor: '#ccc',
          }}>
          {/* <DrawerItemList {...props} back /> */}
          {/* Profile */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigateToScreen('Profile')}
            style={{
              flexDirection: 'row',
              gap: 10,
              marginLeft: 15,
              marginTop: 25,
              paddingBottom: 10,
            }}>
            <FontAwesome name="user" size={22} color="#fff" />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 15,
                color: 'white',
                marginLeft: 5,
              }}>
              Profile
            </Text>
          </TouchableOpacity>
          {/* SDK Bazar */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setOpenDD(!openDD)}
            style={{
              flexDirection: 'row',
              gap: 10,
              marginLeft: 15,
              marginTop: 10,
            }}>
            <Image
              source={require('../../Images/logowhite.png')}
              style={{width: 25, height: 25}}
            />
            <View style={{flexDirection: 'row', gap: 100}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 15,
                  color: 'white',
                }}>
                SDK Bazar
              </Text>
              {openDD ? (
                <Icon name="chevron-up-sharp" size={20} color="white" />
              ) : (
                <Icon name="chevron-down-sharp" size={20} color="white" />
              )}
            </View>
          </TouchableOpacity>
          {openDD ? (
            <View style={{marginLeft: 40, marginTop: 5, gap: 8}}>
              <TouchableOpacity
                onPress={() => navigateToScreen('Food')}
                style={{flexDirection: 'row'}}>
                <Entypo name="dot-single" size={20} color="white" />
                <Text style={{color: Color.white}}>Food</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigateToScreen('JobsHome')}
                style={{flexDirection: 'row'}}>
                <Entypo name="dot-single" size={20} color="white" />
                <Text style={{color: Color.white}}>Job</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row'}}>
                <Entypo name="dot-single" size={20} color="white" />
                <Text style={{color: Color.white}}>Marriage Bureau</Text>
              </TouchableOpacity>
            </View>
          ) : (
            ''
          )}
          {/* Setting */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              gap: 10,
              marginLeft: 15,
              marginTop: 25,
            }}>
            <Icon name="settings" size={22} color="#fff" />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 15,
                color: 'white',
                marginLeft: 5,
              }}>
              Setting
            </Text>
          </TouchableOpacity>
          {/* Support */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigateToScreen('Support')}
            style={{
              flexDirection: 'row',
              gap: 10,
              marginLeft: 15,
              marginTop: 25,
            }}>
            <MaterialIcons name="support-agent" size={22} color="#fff" />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 15,
                color: 'white',
                marginLeft: 5,
              }}>
              Support
            </Text>
          </TouchableOpacity>
          {/* FAQs */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigateToScreen('FAQs')}
            style={{
              flexDirection: 'row',
              gap: 10,
              marginLeft: 15,
              marginTop: 25,
            }}>
            <FontAwesome name="question" size={22} color="#fff" />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 15,
                color: 'white',
                marginLeft: 15,
              }}>
              FAQs
            </Text>
          </TouchableOpacity>
          {/* Share */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => share()}
            style={{
              flexDirection: 'row',
              gap: 10,
              marginLeft: 15,
              marginTop: 25,
            }}>
            <Icon name="paper-plane" size={22} color="#fff" />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 15,
                color: 'white',
                marginLeft: 5,
              }}>
              Share
            </Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
      {/* Apply for a job and logout */}
      <View
        style={{
          padding: 5,
          paddingLeft: 15,
          backgroundColor: Color.mainColor,
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigateToScreen('ApplyForJob')}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <Image
              source={require('../../Images/applyjob.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                color: 'white',
              }}>
              Apply a Job
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFilterPress}
          style={{paddingVertical: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <Icon name="exit-outline" size={22} color="white" />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                color: 'white',
              }}>
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
        <Modal visible={modalVisible} animationType="fade" transparent={true}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              marginHorizontal: 60,
            }}>
            <View style={[styles.modalContainer, {padding: 30}]}>
              <Text
                style={{
                  color: Color.textColor,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Are you sure you want to Quit ?
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: 10,
                  marginTop: 20,
                  marginBottom: 20,
                }}>
                <TouchableOpacity
                  onPressIn={() => setCancel(true)}
                  onPressOut={() => setCancel(false)}
                  onPress={CancelButton}
                  activeOpacity={0.8}
                  style={{
                    borderWidth: 1,
                    paddingVertical: 5,
                    borderRadius: 50,
                    borderColor: Color.textColor,
                    alignItems: 'center',
                    width: 100,
                    backgroundColor: cancel ? Color.mainColor : 'white',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Poppins-SemiBold',
                      color: cancel ? 'white' : Color.mainColor,
                    }}>
                    No
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPressIn={() => setApply(true)}
                  onPressOut={() => setApply(false)}
                  onPress={ApplyButton}
                  activeOpacity={0.8}
                  style={{
                    borderWidth: 1,
                    paddingVertical: 5,
                    borderRadius: 50,
                    borderColor: Color.textColor,
                    alignItems: 'center',
                    width: 100,
                    backgroundColor: apply ? 'white' : Color.mainColor,
                  }}>
                  <Text
                    style={{
                      color: apply ? Color.mainColor : 'white',

                      fontSize: 16,
                      fontFamily: 'Poppins-SemiBold',
                    }}>
                    Yes
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
          }}>
          <TouchableOpacity>
            <Icon name="logo-facebook" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="logo-instagram" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="logo-youtube" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Color.mainColor,
  },
  modalContainer: {
    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: Color.textColor,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  modalText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  closeButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  closeButtonText: {
    color: Color.mainColor,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingHorizontal: 10,
  },
});
export default CustomDrawerContent;

// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   Image,
//   Dimensions,
//   TouchableOpacity,
//   Modal,
// } from 'react-native';
// import React, {useCallback, useState} from 'react';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import {
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';
// import Color from '../../Constants/Color';

// import Share from 'react-native-share';
// import {DrawerActions, useNavigation} from '@react-navigation/native';
// const CustomDrawerContent = (props: any) => {
//   const height = Dimensions.get('window').height;
//   const width = Dimensions.get('window').width;
//
//   const share = async () => {
//     const options = {
//       message:
//         'Deserunt ea sint magna dolor incididunt sit culpa id laborum cupidatat commodo do sint.',
//       url: 'https://mubashir.co.in',
//       email: 'mubashir@gmail.com',
//       subject: 'Eiusmod esse veniam esse.',
//       recipient: '919988998899',
//     };

//     try {
//       const res = await Share.open(options);
//       console.log(res);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const [modalVisible, setModalVisible] = useState(false);
//   const handleFilterPress = () => {
//     setModalVisible(true);
//   };
//   const handleCloseModal = () => {
//     setModalVisible(false);
//   };

//   const [apply, setApply] = useState(false);
//   const [cancel, setCancel] = useState(false);

//   const ApplyButton = () => {
//     handleCloseModal();
//   };
//   const CancelButton = () => {
//     handleCloseModal();
//   };

//   const navigation = useNavigation();

//   return (
//     <View style={{flex: 1}}>
//       <DrawerContentScrollView
//         {...props}
//         contentContainerStyle={{
//           backgroundColor: Color.mainColor,
//           height: '100%',
//         }}>
//

//
//
//
//         </View>
//       </DrawerContentScrollView>
//       <DrawerItemList {...props} />
//
//     </View>
//   );
// };

// export default CustomDrawerContent;

// const styles = StyleSheet.create({
//   modalContainer: {
//     // flex: 1,
//     alignItems: 'center',
//     // justifyContent: 'center',
//     backgroundColor: '#fff',
//     borderColor: Color.textColor,
//     borderRadius: 10,
//     paddingHorizontal: 10,
//   },
//   modalText: {
//     color: 'black',
//     fontSize: 14,
//     fontFamily: 'Poppins-Regular',
//   },
//   closeButton: {
//     backgroundColor: '#fff',
//     borderRadius: 5,
//   },
//   closeButtonText: {
//     color: Color.mainColor,
//     fontWeight: 'bold',
//     textAlign: 'right',
//     paddingHorizontal: 10,
//   },
// });
