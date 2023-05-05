import React, {useEffect, useState} from 'react';
import {
  Alert,
  Modal,
  Pressable,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {GooggleMapKey} from '../../../GoogleMapKey';
import {Color} from '../../../Constants';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

function AddressDetail({navigation}: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentLocation, setCurrentLocation]: any = useState({});
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentLocation({latitude, longitude});
      },
      error => console.log(error),
    );
  };

  useEffect(() => {
    getCurrentLocation();
    // getLocationUpdates();
  }, []);
  const [state, setState]: any = useState({
    pickupCords: null,
    dropLocationCords: {},
  });

  const customStyle = [
    {
      elementType: 'geometry',
      stylers: [{color: Color.mainColor}],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [{color: Color.mainColor}, {weight: 2}],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [{color: '#FFFFFF'}],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [{color: '#FFFFFF'}, {weight: 1}],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'geometry.stroke',
      stylers: [{color: '#FFFFFF'}, {weight: 1}],
    },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [{color: '#FFFFFF'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: Color.mainColor}],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#FFFFFF'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#FFFFFF'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: Color.mainColor}],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: Color.mainColor}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#FFFFFF'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: Color.mainColor}, {weight: 2}],
    },
  ];
  const [currentAddress, setCurrentAddress] = useState('');
  useEffect(() => {
    Object.keys(currentLocation).length > 0 && Geocoder.init(GooggleMapKey); // use a valid API key
    // With more options
    // Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx", {language : "en"}); // set the language

    // Search by address
    Geocoder.from(currentLocation)
      .then(json => {
        var Address = json.results[0].formatted_address;
        setCurrentAddress(Address);
      })
      .catch(error => {
        console.warn('error', error);
      });
  }, [currentLocation]);
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            height: 250,
            borderWidth: 1,
            overflow: 'hidden',
          }}>
          {Object.keys(currentLocation).length > 0 && (
            <MapView
              style={[
                StyleSheet.absoluteFill,
                {
                  height: '100%',
                  width: '100%',
                  borderRadius: 20,
                  alignSelf: 'center',
                  justifyContent: 'center',
                },
              ]}
              initialRegion={{
                latitude: currentLocation ? currentLocation.latitude : 37.78825,
                longitude: currentLocation
                  ? currentLocation.longitude
                  : -122.4324,
                latitudeDelta: 0.9,
                longitudeDelta: 0.9,
              }}
              customMapStyle={customStyle}>
              {currentLocation && (
                <Marker
                  draggable={true}
                  coordinate={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                  }}
                  title="You are here"
                />
              )}
            </MapView>
          )}
        </View>
      </View>
      <View style={styles.box}>
        <View style={{marginTop: 20}}>
          <Text style={styles.text}>Delivery Details</Text>
          <View style={styles.viewflex}>
            <Image
              source={require('../../../Images/location.png')}
              style={{width: 25, height: 25}}
              resizeMode="contain"
            />
            <Text style={styles.para}>
              {currentAddress ? currentAddress : ''}
            </Text>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    RJ Mall,Near Rashid Minhas Rd. Karachi
                  </Text>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>

          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Address Line 01"
              keyboardType="default"
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Address Line 02"
              keyboardType="default"
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Address Line 03"
              keyboardType="default"
            />
          </View>
          {/* button */}
          <TouchableOpacity style={styles.button}>
            <Text
              style={{color: 'white', fontSize: 18}}
              onPress={() => navigation.navigate('Checkout')}>
              Save & Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default AddressDetail;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 12,
    padding: 10,
  },
  fields: {
    marginTop: 20,
  },
  box: {
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: '600',
    color: '#333333',
  },
  viewflex: {
    display: 'flex',
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
  },
  para: {
    fontSize: 16,
    color: '#333333',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,

    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 14,
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#5E20F4',
  },
});
