import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../../Components/Header';
import {Color} from '../../../Constants';
import CarouselSlider from '../../../Components/CarouselSlider';
import CustomTabView from '../../../Components/CustomTabView';

const JobsHome = ({navigation}: any) => {
  const HomePageBanner = [
    {
      id: 1,
      image: require('../../../Images/HomePageBanner.png'),
    },
    {
      id: 2,
      image: require('../../../Images/HomePageBanner.png'),
    },
    {
      id: 3,
      image: require('../../../Images/HomePageBanner.png'),
    },
  ];
  const [selectedServicedata, setSelectedServicedata]: any = useState([]);
  const [serviceDD, setServiceDD] = useState(false);
  const SelectService = [
    {
      id: 1,
      service: 'Plumber',
    },
    {
      id: 2,
      service: 'qaqz',
    },
    {
      id: 3,
      service: 'wswsw',
    },
  ];

  const SelectedServices = (item: any) => {
    console.log(item);
    setSelectedServicedata(item);
    setServiceDD(!serviceDD);
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

  const firstRoute = useCallback(() => {
    return (
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
                    {selectedServicedata.service}
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
              SelectService.map((item, index) => (
                <TouchableOpacity
                  onPress={() => SelectedServices(item)}
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
                    {selectedServicedata.service}
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
                    Specialized
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
              SelectService.map((item, index) => (
                <TouchableOpacity
                  onPress={() => SelectedServices(item)}
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
    );
  }, [serviceDD, selectedServicedata, SelectService]);

  const secondRoute = useCallback(() => {
    return <View style={{marginVertical: 0}}></View>;
  }, []);

  return (
    <>
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
        style={{paddingTop: 20, backgroundColor: Color.mainColor, height: 110}}>
        <View>
          <CarouselSlider carouselItems={HomePageBanner} dots />
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
        <TouchableOpacity
          onPress={() => navigation.navigate('AvailablePersonDetails')}>
          <Text style={{color: 'black'}}>MOve to Details</Text>
        </TouchableOpacity>
      </View>
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
