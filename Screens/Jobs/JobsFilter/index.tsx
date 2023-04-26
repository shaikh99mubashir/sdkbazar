import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../Components/Header';
import {Color} from '../../../Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
const JobsFilter = ({navigation}: any) => {
  const [selectedServicedata, setSelectedServicedata]: any = useState({});
  const [serviceDD, setServiceDD] = useState(false);
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

  console.log('selectedServicedata', selectedServicedata);

  const SelectedServices = (item: any) => {
    setSelectedServicedata(item);
    setServiceDD(!serviceDD);
  };
  const [specialized, setSpecialized]: any = useState([]);
  const [specializedDD, setspecializedDD] = useState<boolean>(false);
  const [filteredData, setFilteredData]: any = useState();

  const SelectedSpecialized = (item: any) => {
    setSpecialized(item);
    const filteredData = SelectService.filter(
      service =>
        service.type === selectedServicedata.type &&
        service.profession === item.profession,
    );
    setFilteredData(filteredData);
    setspecializedDD(!specializedDD);
  };
  // Apply Filters
  const filterButtonPress = () => {
    if (filteredData) {
      navigation.navigate('AvailablePersonDetails', {filteredData});
    } else {
      ToastAndroid.show('First Select Profession', ToastAndroid.SHORT);
    }
  };

  // Apply Clear Button
  const ClearButton = () => {
    setSelectedServicedata();
    setFilteredData();
  };

  const OnPressSpecialization = () => {
    if (selectedServicedata && selectedServicedata.type) {
      setspecializedDD(!specializedDD);
    } else {
      ToastAndroid.show('First Select Profession', ToastAndroid.SHORT);
    }
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

        <>
          <View>
            <View style={{width: '100%'}}>
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
                        <Icon
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
                        <Icon name="chevron-up-sharp" size={20} color="black" />
                      ) : (
                        <Icon
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
            <View>
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
        </>

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
        <TouchableOpacity onPress={ClearButton}>
          <Text style={styles.cancleButtonText}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={filterButtonPress}
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
