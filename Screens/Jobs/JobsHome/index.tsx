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
const {width, height} = Dimensions.get('window');
const JobsHome = ({navigation}: any) => {
  const [selectedServicedata, setSelectedServicedata]: any = useState({});
  const [serviceDD, setServiceDD] = useState(false);
  const SelectService = [
    {
      id: 1,
      type: 'Labour',
      service: 'Plumber',
    },
    {
      id: 2,
      type: 'Labour',
      service: 'Plumber',
    },
    {
      id: 3,
      type: 'Labour',
      service: 'Carpenter',
    },
    {
      id: 4,
      type: 'Developer',
      service: 'Web Developer',
    },
    {
      id: 5,
      type: 'Developer',
      service: 'Mobile Developer',
    },
    {
      id: 6,
      type: 'Developer',
      service: 'Ful Stack Developer',
    },
    {
      id: 7,
      type: 'Designer',
      service: 'Logo',
    },
    {
      id: 8,
      type: 'Designer',
      service: 'Social Media Post',
    },
    {
      id: 9,
      type: 'Designer',
      service: '3D',
    },
  ];

  console.log('selectedServicedata', selectedServicedata);

  const SelectedServices = (item: any) => {
    setSelectedServicedata(item);
    setServiceDD(!serviceDD);
  };
  const [specialized, setSpecialized]: any = useState([]);
  const [specializedDD, setspecializedDD] = useState(false);
  const Selectspecialized = [
    {
      id: 1,
      type: 'Labour',
      service: 'Plumber',
    },
    {
      id: 2,
      type: 'Labour',
      service: 'Plumber',
    },
    {
      id: 3,
      type: 'Labour',
      service: 'Carpenter',
    },
    {
      id: 4,
      type: 'Developer',
      service: 'Web Developer',
    },
    {
      id: 5,
      type: 'Developer',
      service: 'Mobile Developer',
    },
    {
      id: 6,
      type: 'Developer',
      service: 'Ful Stack Developer',
    },
    {
      id: 7,
      type: 'Designer',
      service: 'Logo',
    },
    {
      id: 8,
      type: 'Social Media Post',
    },
    {
      id: 5,
      type: 'Designer',
      service: '3D',
    },
  ];

  const SelectedSpecialized = (item: any) => {
    console.log(item);
    setSpecialized(item);
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
    if (selectedServicedata && selectedServicedata.type) {
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
            // flex: 1,
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
                Selectspecialized.map((item, index) => (
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
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('AvailablePersonDetails')}>
          <Text style={{color: 'black'}}>Move to Details</Text>
        </TouchableOpacity>
      </>
    );
  }, [
    specializedDD,
    specialized,
    Selectspecialized,
    selectedServicedata,
    serviceDD,
    SelectService,
  ]);

  const secondRoute = useCallback(() => {
    return <View style={{marginVertical: 0}}></View>;
  }, []);

  return (
    <>
      <ScrollView style={{flex: 1, borderWidth: 1, borderColor: 'red'}}>
        <View
          style={{
            backgroundColor: Color.mainColor,
            paddingHorizontal: 10,
          }}>
          <Header navigation={navigation} Drawer={true} Notification />
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
