import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../../Constants';
import Header from '../../../Components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const NearByRestaurant = ({navigation, route}: any) => {
  const data = route.params;

  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: Color.mainColor,
          paddingHorizontal: 10,
          paddingBottom: 20,
        }}>
        <Header
          navigation={navigation}
          backBtn={true}
          backBtnColor="white"
          cart
          cartStyle="white"
        />
        {/* Search */}
        <View
          style={{
            width: '100%',
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
      {/* Near By Restaurants */}
      <View
        style={{
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: Color.mainColor,
            fontFamily: 'Poppins-SemiBold',
            marginTop: 10,
          }}>
          Near By Restaurants
        </Text>
      </View>
      {/* Card */}
      {data &&
        data.length > 0 &&
        data.map((e: any, i: number) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('RestaurantDetails', e)}
              activeOpacity={0.8}
              style={{
                backgroundColor: Color.lightgrey,
                height: 210,
                width: Dimensions.get('screen').width / 1.1,
                borderRadius: 20,
                shadowRadius: 20,
                elevation: 6,
                alignSelf: 'center',
                marginBottom: 15,
              }}>
              <Image
                source={require('../../../Images/rbg.png')}
                resizeMode="stretch"
                style={{
                  width: Dimensions.get('screen').width / 1.1,
                  height: 130,
                  paddingHorizontal: 10,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
              />
              <View
                style={{
                  width: '90%',
                  alignItems: 'flex-start',
                  justifyContent: 'space-around',
                  padding: 10,
                  marginTop: 5,
                }}>
                <View style={{borderRadius: 20}}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: Color.mainColor,
                      fontFamily: 'Poppins-SemiBold',
                    }}>
                    {e.resturantName}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 5,
                        alignItems: 'center',
                      }}>
                      <FontAwesome
                        name="map-marker"
                        size={20}
                        color={Color.mainColor}
                      />
                      <Text
                        style={{
                          fontSize: 13,
                          color: Color.mainColor,
                          fontFamily: 'Poppins-SemiBold',
                        }}>
                        1.5 miles away
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 5,
                        alignItems: 'center',
                      }}>
                      <FontAwesome name="star" size={15} color="gold" />
                      <Text
                        style={{
                          fontSize: 13,
                          color: Color.mainColor,
                          fontFamily: 'Poppins-SemiBold',
                        }}>
                        4.2
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* Restaurant Logo */}
              <View
                style={{
                  position: 'absolute',
                  right: 30,
                  top: 90,
                  flex: 1,
                  zIndex: 100,
                  backgroundColor: 'white',
                  padding: 5,
                  borderRadius: 50,
                  shadowRadius: 50,
                  elevation: 8,
                }}>
                <Image
                  source={require('../../../Images/reslogo.png')}
                  style={{width: 50, height: 50}}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          );
        })}
    </ScrollView>
  );
};

export default NearByRestaurant;

const styles = StyleSheet.create({});
