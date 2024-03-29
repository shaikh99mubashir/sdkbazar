import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../../Components/Header';
import {Color} from '../../../Constants';
import CarouselSlider from '../../../Components/CarouselSlider';
import CustomTabView from '../../../Components/CustomTabView';
import Video from 'react-native-video';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
const {width, height} = Dimensions.get('window');
const Food = ({navigation}: any) => {
  const [selectService, setSelectService] = useState([
    {
      id: 1,
      type: 'DeliveryService',
      resturantName: 'Chef Art Resturant',
      name: 'Name 1',
      location: '2.8 mile',
      exp: '5 year',
      rating: 4.2,
    },
    {
      id: 2,
      type: 'DeliveryService',
      resturantName: 'ABC Resturant',
      name: 'Name 2',
      location: '2.8 mile',
      exp: '5 year',
      rating: 4.2,
    },
    {
      id: 3,
      type: 'DeliveryService',
      resturantName: 'fdgfd ff',
      name: 'Name 3',
      location: '2.8 mile',
      exp: '5 year',
      rating: 4.2,
    },
    {
      id: 4,
      type: 'Self Service',
      resturantName: 'Chef Art Resturant',
      name: 'Name 4',
      location: '2.8 mile',
      exp: '5 year',
      rating: 4.2,
    },
    {
      id: 5,
      type: 'Self Service',
      resturantName: 'sdsf dsf',
      name: 'Name 5',
      location: '2.8 mile',
      exp: '5 year',
      rating: 4.2,
    },
    {
      id: 6,
      type: 'Self Service',
      resturantName: 'afdssdfsdffsd',
      name: 'Name 6',
      location: '2.8 mile',
      exp: '5 year',
      rating: 4.2,
    },
  ]);

  const [currentTab, setCurrentTab]: any = useState([
    {
      index: 0,
      name: 'Restaurant Food',
      selected: true,
    },
    {
      index: 1,
      name: 'Home Made Food',
      selected: false,
    },
  ]);
  const activateTab = (index: any) => {
    setCurrentTab(
      currentTab &&
        currentTab.length > 0 &&
        currentTab.map((e: any, i: any) => {
          if (e.index == index) {
            return {
              ...e,
              selected: true,
            };
          } else {
            return {
              ...e,
              selected: false,
            };
          }
        }),
    );
  };

  const DeliveryService = (item: string) => {
    const filterItem = selectService.filter((x: any) => x.type == item);
    navigation.navigate('NearByRestaurant', filterItem);
  };

  const firstRoute = useCallback(() => {
    return (
      <>
        <View
          style={{
            marginVertical: 0,
            marginHorizontal: 20,
            flexDirection: 'row',
            gap: 10,
          }}>
          <View style={{width: '50%'}}>
            <View>
              <TouchableOpacity
                onPress={() => DeliveryService('DeliveryService')}
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: 1,
                  marginTop: 20,
                  paddingVertical: 2,
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  borderColor: Color.textColor,
                  alignItems: 'center',
                }}>
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
                    Delivery {'\n'}Service
                  </Text>
                  <Image
                    source={require('../../../Images/DeliverySerive.png')}
                    style={{width: 40, height: 40}}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{width: '50%'}}>
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: 1,
                  marginTop: 20,
                  paddingVertical: 2,
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  borderColor: Color.textColor,
                  alignItems: 'center',
                }}>
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
                    Self {'\n'}Service
                  </Text>
                  <Image
                    source={require('../../../Images/SelfSerive.png')}
                    style={{width: 40, height: 40}}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  }, []);

  const secondRoute = useCallback(() => {
    return (
      <>
        <View
          style={{
            marginVertical: 0,
            marginHorizontal: 20,
            flexDirection: 'row',
            gap: 10,
          }}>
          <View style={{width: '50%'}}>
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: 1,
                  marginTop: 20,
                  paddingVertical: 2,
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  borderColor: Color.textColor,
                  alignItems: 'center',
                }}>
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
                    Delivery {'\n'}Service
                  </Text>
                  <Image
                    source={require('../../../Images/DeliverySerive.png')}
                    style={{width: 40, height: 40}}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{width: '50%'}}>
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: 1,
                  marginTop: 20,
                  paddingVertical: 2,
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  borderColor: Color.textColor,
                  alignItems: 'center',
                }}>
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
                    Self {'\n'}Service
                  </Text>
                  <Image
                    source={require('../../../Images/SelfSerive.png')}
                    style={{width: 40, height: 40}}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  }, []);
  const [currentLocation, setCurrentLocation]: any = useState({});

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentLocation({latitude, longitude});
      },
      // error => console.log(error),
    );
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);
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

  return (
    <>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            backgroundColor: Color.mainColor,
            paddingHorizontal: 10,
          }}>
          <Header
            navigation={navigation}
            Drawer={true}
            cart
            cartStyle="white"
          />
          {/* Search */}
          <View
            style={{
              width: '98%',
              borderWidth: 1,
              borderColor: Color.white,
              borderRadius: 10,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 4,
              paddingHorizontal: 10,
              alignSelf: 'center',
              backgroundColor: Color.white,
              marginTop: 15,
            }}>
            <TextInput
              placeholder="Search"
              placeholderTextColor={Color.mainColor}
              style={{
                width: '90%',
                padding: 8,
                color: 'white',
              }}
            />
            <TouchableOpacity onPress={() => navigation}>
              <Text>
                <Icon name="search" size={25} color={Color.mainColor} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* CarouselSlider */}
        <View
          style={{
            // flex: 1,
            paddingTop: 20,
            backgroundColor: Color.mainColor,
            height: 110,
          }}>
          <View style={{alignItems: 'center'}}>
            <Video
              source={require('../../../Videos/Food.mp4')}
              ref={ref => {}}
              // controls={true}
              posterResizeMode={'cover'}
              repeat
              resizeMode={'cover'}
              style={{
                height: height / 4,
                width: width / 1.11,
                borderRadius: 25,
              }}
              // onError={error => console.log(error, 'error')}
            />
          </View>
        </View>
        <View style={{top: 100}}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Poppins-SemiBold',
              fontSize: 22,
              color: Color.heading,
            }}>
            Food Categories
          </Text>
          <CustomTabView
            currentTab={currentTab}
            firstRoute={firstRoute}
            secondRoute={secondRoute}
            activateTab={activateTab}
            firstRouteTitle="Restaurant Food"
            secondRouteTitle="Home Made Food"
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            marginVertical: 15,
          }}>
          <View
            style={{
              alignItems: 'center',
              width: '90%',
              height: 200,
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
                  latitude: currentLocation
                    ? currentLocation.latitude
                    : 37.78825,
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
      </ScrollView>
    </>
  );
};

export default Food;

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
});
