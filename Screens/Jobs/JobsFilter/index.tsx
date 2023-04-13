import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../Components/Header';
import {Color} from '../../../Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
const JobsFilter = ({navigation}: any) => {
  const [selectedServicedata, setSelectedServicedata]: any = useState([]);
  const [serviceDD, setServiceDD] = useState(false);
  const SelectService = [
    {
      id: 1,
      service: 'sadasd',
    },
    {
      id: 2,
      service: 'asdwdewd',
    },
    {
      id: 3,
      service: 'asdxzc',
    },
  ];
  const SelectHistory = [
    {
      id: 1,
      service: 'All',
    },
    {
      id: 2,
      service: 'Completed',
    },
    {
      id: 3,
      service: 'No show',
    },
  ];

  const SelectedServices = (item: any) => {
    console.log(item);
    setSelectedServicedata(item);
    setServiceDD(!serviceDD);
  };
  const [radius, setRadius] = useState<any>('');
  const selectedRadius = Math.round(radius * 10);
  return (
    <View style={{marginHorizontal: 10, flex: 1}}>
      <View>
        <Header navigation={navigation} backBtn title="Plumber" />
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 22,
            color: Color.mainColor,
          }}>
          Filter
        </Text>
        <View>
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setServiceDD(!serviceDD)}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderWidth: 1,
                marginTop: 10,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderTopEndRadius: 5,
                borderTopStartRadius: 5,
                borderBottomEndRadius: !serviceDD ? 5 : 0,
                borderBottomStartRadius: !serviceDD ? 5 : 0,
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
                    Select Job Category
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
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                borderBottomEndRadius: 5,
                borderBottomStartRadius: 5,
                borderWidth: serviceDD ? 1 : 0,
                borderColor: Color.textColor,
                width: '100%',
              }}>
              {serviceDD == true &&
                SelectService.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => SelectedServices(item)}
                    key={index}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: 15,
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
        <View>
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
                borderTopEndRadius: 5,
                borderTopStartRadius: 5,
                borderBottomEndRadius: !serviceDD ? 5 : 0,
                borderBottomStartRadius: !serviceDD ? 5 : 0,
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
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                borderBottomEndRadius: 5,
                borderBottomStartRadius: 5,
                borderWidth: serviceDD ? 1 : 0,
                borderColor: Color.textColor,
                width: '100%',
              }}>
              {serviceDD == true &&
                SelectService.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => SelectedServices(item)}
                    key={index}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: 15,
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
        <View>
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
                borderTopEndRadius: 5,
                borderTopStartRadius: 5,
                borderBottomEndRadius: !serviceDD ? 5 : 0,
                borderBottomStartRadius: !serviceDD ? 5 : 0,
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
                    Speciallized
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
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                borderBottomEndRadius: 5,
                borderBottomStartRadius: 5,
                borderWidth: serviceDD ? 1 : 0,
                borderColor: Color.textColor,
                width: '100%',
              }}>
              {serviceDD == true &&
                SelectService.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => SelectedServices(item)}
                    key={index}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: 15,
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

        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 22,
            color: Color.mainColor,
            marginTop: 20,
          }}>
          Radius
        </Text>
        <Slider
          style={{width: '100%', height: 40}}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor={Color.mainColor}
          maximumTrackTintColor="#000000"
          onValueChange={(value: any) => setRadius(value)}
        />
        <View style={{alignSelf: 'center'}}>
          <Text style={{color: Color.mainColor}}>{selectedRadius}</Text>
        </View>
      </View>
      <View
        style={{
          marginBottom: 20,
          borderTopWidth: 1,
          borderColor: Color.textColor,
          width: '100%',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Text style={styles.cancleButtonText}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: Color.buttonBg,
            paddingHorizontal: 25,
            paddingVertical: 10,
            borderRadius: 20,
            marginTop: 20,
          }}>
          <Text
            style={[styles.cancleButtonText, {color: 'white', marginTop: 0}]}>
            Apply Filters
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobsFilter;

const styles = StyleSheet.create({
  cancleButtonText: {
    color: Color.mainColor,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
