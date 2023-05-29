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
import axios from 'axios';
import {BasicUrl} from '../../../Constants/BasicUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width, height} = Dimensions.get('window');
const JobsHome = ({navigation}: any) => {
  const [selectedServicedata, setSelectedServicedata]: any = useState({});
  const [serviceDD, setServiceDD] = useState(false);
  const [specialized, setSpecialized]: any = useState([]);
  const [specializedDD, setspecializedDD] = useState(false);
  const [jobSeekerData, setJobSeekerData] = useState([]);
  const getJobData = () => {
    let data1: any;
    AsyncStorage.getItem('user').then((val: any) => {
      data1 = JSON.parse(val);
      console.log('date1===>', data1?.userID);
    });
    axios
      .get(`${BasicUrl}getjobseeker`)
      .then(({data}) => {
        // console.log('res', data.data);
        const filterData =
          data.data &&
          data.data.filter((e: any, i: number) => e.login_ID != data1?.userID);
        setJobSeekerData(filterData);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  useEffect(() => {
    getJobData();
  }, []);

  // Entrepreneur
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

  const SelectedServices = (item: any) => {
    setSelectedServicedata(item);
    setServiceDD(!serviceDD);
  };
  const SelectedSpecialized = (item: any) => {
    setSpecialized(item);
    const filteredData = jobSeekerData.filter(
      (service: any) =>
        service.profession === selectedServicedata.profession &&
        service.profession === item.profession,
    );

    navigation.navigate('BusinessPersonDetails', {data: filteredData});
    setspecializedDD(!specializedDD);
  };

  const SelectedBusinessSpecialized = (item: any) => {
    setSpecialized(item);
    const filteredData = SelectService.filter(
      service =>
        service.type === selectedServicedata.type &&
        service.profession === item.profession,
    );

    navigation.navigate('AvailablePersonDetails', {filteredData});
    setspecializedDD(!specializedDD);
  };

  const [currentTab, setCurrentTab]: any = useState([
    {
      index: 0,
      name: 'Entrepreneur',
      selected: true,
    },
    {
      index: 1,
      name: 'Business',
      selected: false,
    },
  ]);
  const activateTab = (index: any) => {
    setCurrentTab(
      currentTab &&
        currentTab.length > 0 &&
        currentTab.map((e: any, i: any) => {
          if (e.index == index) {
            setSelectedServicedata();
            setSpecialized();
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

  const OnPressSpecialization = () => {
    if (selectedServicedata && selectedServicedata.profession) {
      setspecializedDD(!specializedDD);
    } else {
      ToastAndroid.show('First Select Profession', ToastAndroid.SHORT);
    }
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
                activeOpacity={0.8}
                onPress={() => setServiceDD(!serviceDD)}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: 1,
                  marginTop: 20,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 5,
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
                      {selectedServicedata.profession &&
                      selectedServicedata.profession.length > 10
                        ? selectedServicedata.profession.slice(0, 10)
                        : selectedServicedata.profession}
                    </Text>
                    {serviceDD ? (
                      <Icon name="chevron-up-sharp" size={20} color="black" />
                    ) : (
                      <Icon name="chevron-down-sharp" size={20} color="black" />
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
                      <Icon name="chevron-up-sharp" size={20} color="black" />
                    ) : (
                      <Icon name="chevron-down-sharp" size={20} color="black" />
                    )}
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderBottomEndRadius: 8,
                borderBottomStartRadius: 8,
              }}>
              {serviceDD == true &&
                Array.from(
                  new Set(jobSeekerData.map((item: any) => item.profession)),
                ).map((type, index) => (
                  <TouchableOpacity
                    onPress={() =>
                      SelectedServices(
                        jobSeekerData.find(
                          (item: any) => item.profession === type,
                        ),
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
                ))}
            </View>
          </View>

          <View style={{width: '50%'}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                OnPressSpecialization();
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderWidth: 1,
                marginTop: 20,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 5,
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
                    {specialized.specialization &&
                    specialized.specialization.length > 10
                      ? specialized.specialization.slice(0, 10)
                      : specialized.specialization}
                  </Text>
                  {specializedDD ? (
                    <Icon name="chevron-up-sharp" size={20} color="black" />
                  ) : (
                    <Icon name="chevron-down-sharp" size={20} color="black" />
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
                    Specializ
                  </Text>
                  {specializedDD ? (
                    <Icon name="chevron-up-sharp" size={20} color="black" />
                  ) : (
                    <Icon name="chevron-down-sharp" size={20} color="black" />
                  )}
                </View>
              )}
            </TouchableOpacity>

            <View
              style={{
                borderBottomEndRadius: 8,
                borderBottomStartRadius: 8,
              }}>
              {specializedDD == true &&
                jobSeekerData
                  .filter(
                    (item: any) =>
                      item.specialization ===
                      selectedServicedata.specialization,
                  )
                  .reduce((unique: any, item: any) => {
                    return unique.some(
                      (i: any) => i.specialization === item.specialization,
                    )
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
                        {item.specialization}
                      </Text>
                    </TouchableOpacity>
                  ))}
            </View>
          </View>
        </View>
      </>
    );
  }, [
    specializedDD,
    specialized,
    selectedServicedata,
    serviceDD,
    SelectService,
    jobSeekerData,
  ]);

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
                onPress={() => setServiceDD(!serviceDD)}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: 1,
                  marginTop: 20,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 5,
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
                      <Icon name="chevron-up-sharp" size={20} color="black" />
                    ) : (
                      <Icon name="chevron-down-sharp" size={20} color="black" />
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
                      <Icon name="chevron-up-sharp" size={20} color="black" />
                    ) : (
                      <Icon name="chevron-down-sharp" size={20} color="black" />
                    )}
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderBottomEndRadius: 8,
                borderBottomStartRadius: 8,
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
          <View style={{width: '50%'}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                OnPressSpecialization();
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderWidth: 1,
                marginTop: 20,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 5,
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
                    <Icon name="chevron-up-sharp" size={20} color="black" />
                  ) : (
                    <Icon name="chevron-down-sharp" size={20} color="black" />
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
                    <Icon name="chevron-up-sharp" size={20} color="black" />
                  ) : (
                    <Icon name="chevron-down-sharp" size={20} color="black" />
                  )}
                </View>
              )}
            </TouchableOpacity>

            <View
              style={{
                borderBottomEndRadius: 8,
                borderBottomStartRadius: 8,
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
                      onPress={() => SelectedBusinessSpecialized(item)}
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
        </View>
      </>
    );
  }, [
    specializedDD,
    specialized,
    selectedServicedata,
    serviceDD,
    SelectService,
  ]);

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
            backBtn
            Notification
            backBtnColor="white"
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
              source={require('../../../Videos/Job.mp4')}
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
              onError={error => console.log(error, 'error')}
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
            Job Categories
          </Text>
          <CustomTabView
            currentTab={currentTab}
            firstRoute={firstRoute}
            secondRoute={secondRoute}
            activateTab={activateTab}
            firstRouteTitle="Entrepreneur"
            secondRouteTitle="Business"
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

export default JobsHome;

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
