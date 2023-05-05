import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Color} from '../../../Constants';
import Header from '../../../Components/Header';
import {useDispatch, useSelector} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import {GooggleMapKey} from '../../../GoogleMapKey';
const Checkout = ({navigation, route}: any) => {
  const data = route.params;
  const [isCartData, setIsCartData]: any = useState([]);
  // console.log('data', data);
  const cart: any = useSelector(data => data);

  useEffect(() => {
    setIsCartData(cart?.user?.cart);
  }, [cart]);

  // console.log('isCartData', isCartData);

  const [editNumber, setEditNumber] = useState<boolean>(false);
  const subTotal = isCartData.map((item: any) => {
    let total = item.price * item.quantity;
    return Number(total);
  });

  const subTotalAmount =
    subTotal &&
    subTotal.length > 0 &&
    subTotal.reduce((total: number, current: number) => {
      return total + current;
    }, 0);

  const TotalAmount = subTotalAmount + 3 + 99;

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
    <View
      style={{
        backgroundColor: Color.white,
        height: '100%',
        paddingHorizontal: 15,
      }}>
      <Header title="CheckOut" backBtn navigation={navigation} />
      {/* Delivery address */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: Color.mainColor,
            fontFamily: 'Poppins-SemiBold',
          }}>
          Delivery Address
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddressDetail')}>
          <Image
            source={require('../../../Images/editIcon.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>
      {/* MAp */}
      <View
        style={{
          alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            height: 200,
            borderWidth: 1,
            borderRadius: 20,
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
      {/* location Image and text */}
      <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
        <Image
          source={require('../../../Images/location.png')}
          style={{width: 25, height: 25, resizeMode: 'contain'}}
        />
        <Text
          style={{
            fontSize: 14,
            color: Color.mainColor,
            fontFamily: 'Poppins-SemiBold',
          }}>
          {currentAddress ? currentAddress : ''}
        </Text>
      </View>

      {/* Mobile No */}
      <View
        style={{
          backgroundColor: Color.white,
          elevation: 10,
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Text
            style={{
              fontSize: 14,
              color: Color.textColor,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Mobile No. |
          </Text>
          {editNumber ? (
            <TextInput
              placeholder="Enter No +92xxxxxxxxx"
              style={{padding: 0, width: 200}}
            />
          ) : (
            <Text>+92856662212</Text>
          )}
        </View>
        <TouchableOpacity onPress={() => setEditNumber(!editNumber)}>
          {editNumber ? (
            <Text
              style={{
                fontSize: 14,
                color: Color.purple,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Save
            </Text>
          ) : (
            <Image
              source={require('../../../Images/editIcon.png')}
              style={{width: 20, height: 20}}
            />
          )}
        </TouchableOpacity>
      </View>

      {/* Payment Method */}
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 16,
            color: Color.mainColor,
            fontFamily: 'Poppins-SemiBold',
          }}>
          Payment Method
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('PaymentMethod')}
          activeOpacity={0.8}
          style={{
            backgroundColor: Color.white,
            elevation: 10,
            padding: 10,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../Images/add.png')}
            style={{width: 20, height: 20}}
          />
          <Text
            style={{
              fontSize: 14,
              color: Color.mainColor,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Add a Payment Method
          </Text>
        </TouchableOpacity>
      </View>
      {/* OrderSummary */}
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 16,
            color: Color.mainColor,
            fontFamily: 'Poppins-SemiBold',
          }}>
          Order Summary
        </Text>

        <View
          style={{
            backgroundColor: Color.white,
            elevation: 10,
            padding: 10,
            borderRadius: 10,
          }}>
          <ScrollView
            style={{height: isCartData.length > 2 ? 80 : 40}}
            showsVerticalScrollIndicator={false}>
            {isCartData &&
              isCartData.map((e: any, i: number) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: Color.mainColor,
                          fontFamily: 'Poppins-SemiBold',
                        }}>
                        {e.quantity}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: Color.mainColor,
                          fontFamily: 'Poppins-SemiBold',
                        }}>
                        {e.foodName}
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 14,
                        color: Color.mainColor,
                        fontFamily: 'Poppins-SemiBold',
                      }}>
                      Rs.{e.price}
                    </Text>
                  </View>
                );
              })}
          </ScrollView>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: Color.textColor,
              marginTop: 10,
            }}></View>
          {/* subtotal */}
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: Color.textColor,
                fontFamily: 'Poppins-SemiBold',
              }}>
              SubTotal
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: Color.textColor,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Rs. {subTotalAmount}
            </Text>
          </View>
          {/* Delivery Fee */}
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: Color.textColor,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Delivery Fee
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: Color.textColor,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Rs. 99.00
            </Text>
          </View>
          {/* Platform Fee */}
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: Color.textColor,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Platform Fee
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: Color.textColor,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Rs. 3.00
            </Text>
          </View>
        </View>
        {/* Total */}
        <View
          style={{
            marginHorizontal: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: Color.mainColor,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Total
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: Color.mainColor,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Rs. {TotalAmount}
          </Text>
        </View>
        {/* confirm button */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('OrderSucess')}
          style={styles.button}>
          <Text style={{color: Color.white, fontSize: 18}}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    textAlign: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 14,
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#5E20F4',
  },
});
