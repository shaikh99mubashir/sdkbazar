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
  BackHandler,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import MapView, {Marker, PROVIDER_DEFAULT} from 'react-native-maps';
import React, {useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../Components/Header';
import {Color} from '../../Constants';
import CarouselSlider from '../../Components/CarouselSlider';
import Geolocation from '@react-native-community/geolocation';
import {locationPermission} from '../../Components/locationPermission';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTab from '../../RoutingConfig/MyTabs';
import Loader from '../../Components/Loader';
import ShowWifiStatus from '../../Components/ShowWifiStatus';
import NetInfo from '@react-native-community/netinfo';
const {height, width} = Dimensions.get('screen');

const HomeScreen = ({navigation}: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const HomePageBanner = [
    {
      id: 1,
      image: require('../../Images/HomePageBanner.png'),
    },
    {
      id: 2,
      image: require('../../Images/HomePageBanner.png'),
    },
    {
      id: 3,
      image: require('../../Images/HomePageBanner.png'),
    },
  ];

  const focus = useIsFocused();
  const navigateToLogin = () => {
    AsyncStorage.getItem('user').then((val: any) => {
      let date1 = JSON.parse(val);
      const expiryDate: any = new Date(date1.tokenExpiryDate).getTime();
      const date: any = new Date().getTime();
      if (Number(expiryDate) < Number(date)) {
        navigation.navigate('LoginAccount');
        ToastAndroid.show('Session Expire Login Again', ToastAndroid.SHORT);
      }
    });
  };
  useEffect(() => {
    const check = setInterval(() => {
      if (focus) {
        navigateToLogin();
      }
    }, 1000);
    // 60000 * 15
    return () => clearInterval(check);
  }, [focus]);
  // AsyncStorage.removeItem('tokenExpiryDate');

  const [currentIndex, setCurrentIndex] = useState<any>(0);
  const flatListRef = useRef<any>(null);
  // Function to move to next image
  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % HomePageBanner.length;
    setCurrentIndex(nextIndex);
    flatListRef?.current?.scrollToIndex({animated: true, index: nextIndex});
  };

  // Use effect to move to next image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000);

    // Cleanup function to clear interval on unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);
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
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    // Subscribe to network state changes
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
    });

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <ScrollView>
      <>
        {!isConnected && <ShowWifiStatus />}
        {loading ? (
          <View>
            <Loader />
          </View>
        ) : (
          <>
            <View
              style={{
                backgroundColor: Color.mainColor,
                paddingHorizontal: 10,
              }}>
              <Header navigation={navigation} Drawer={true} Notification />
              {/* search */}
              <View
                style={{
                  width: '98%',
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
                  marginVertical: 15,
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
            {/* Custom Slider is use because paddingBottom  */}
            <View
              style={{height: 100, backgroundColor: Color.mainColor}}></View>
            <View
              // colors={[Color.mainColor, Color.white]}
              style={{marginTop: -90, zIndex: 2}}>
              <FlatList
                ref={flatListRef}
                data={HomePageBanner}
                showsHorizontalScrollIndicator={false}
                // pagingEnabled
                onScroll={e => {
                  const x = e.nativeEvent.contentOffset.x;
                  setCurrentIndex((x / (width - 50)).toFixed(0));
                }}
                horizontal
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={{
                        width: width,
                        // height: '100%',
                        alignItems: 'center',
                        padding: 0,
                        margin: 0,
                      }}>
                      <Image
                        source={item.image}
                        style={{width: '93%', height: 160}}
                        resizeMode="center"
                      />
                    </View>
                  );
                }}
              />
            </View>
            {/* Dots */}
            <View
              style={{
                flexDirection: 'row',
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 5,
              }}>
              {HomePageBanner.map((item, index) => {
                return (
                  <View
                    key={item.id}
                    style={{
                      width: currentIndex == index ? 10 : 8,
                      height: currentIndex == index ? 10 : 8,
                      borderRadius: currentIndex == index ? 5 : 4,
                      backgroundColor: currentIndex == index ? 'red' : 'gray',
                      marginLeft: 5,
                    }}></View>
                );
              })}
            </View>

            <View
              style={{
                height: '100%',
                marginBottom: 20,
              }}>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 22,
                    color: Color.heading,
                  }}>
                  Categories
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Food')}
                    activeOpacity={0.8}>
                    <Image
                      source={require('../../Images/Food.png')}
                      style={{width: 110, height: 110, borderRadius: 5}}
                    />
                    <Text
                      style={{
                        textAlign: 'center',
                        fontFamily: 'Poppins-Regular',
                        fontSize: 16,
                        color: Color.heading,
                      }}>
                      Food
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('JobsHome')}>
                    <Image
                      source={require('../../Images/Jobs.png')}
                      style={{width: 110, height: 110, borderRadius: 5}}
                    />
                    <Text
                      style={{
                        textAlign: 'center',
                        fontFamily: 'Poppins-Regular',
                        fontSize: 16,
                        color: Color.heading,
                      }}>
                      Jobs
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('MrriageBureauHome')}>
                    <Image
                      source={require('../../Images/Marriage.png')}
                      style={{width: 110, height: 110, borderRadius: 5}}
                    />
                    <Text
                      style={{
                        textAlign: 'center',
                        fontFamily: 'Poppins-Regular',
                        fontSize: 16,
                        color: Color.heading,
                      }}>
                      Marriage{'\n'}
                      <Text
                        style={{
                          textAlign: 'center',
                          fontFamily: 'Poppins-Regular',
                          fontSize: 16,
                          color: Color.heading,
                        }}>
                        Bureau
                      </Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
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
            </View>
          </>
        )}
      </>
    </ScrollView>
  );
};

export default HomeScreen;

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
  // loaderContainer: {
  //   ...StyleSheet.absoluteFillObject,
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)', // Set the desired overlay color and transparency
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // loader: {
  //   backgroundColor: '#fff',
  //   borderRadius: 10,
  //   padding: 20,
  // },
});
