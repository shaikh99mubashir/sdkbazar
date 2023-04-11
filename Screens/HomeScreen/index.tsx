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
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../Components/Header';
import {Color} from '../../Constants';
import CarouselSlider from '../../Components/CarouselSlider';

const HomeScreen = ({navigation}: any) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const dotColors = ['#FFC107', '#3F51B5', '#009688'];

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
          Categories
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
          <TouchableOpacity activeOpacity={0.8}>
            <Image
              source={require('../../Images/Food.png')}
              style={{width: 110, height: 110, borderRadius: 5}}
            />
            <Text style={{textAlign: 'center'}}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Image
              source={require('../../Images/Jobs.png')}
              style={{width: 110, height: 110, borderRadius: 5}}
            />
            <Text style={{textAlign: 'center'}}>Jobs</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Image
              source={require('../../Images/Marriage.png')}
              style={{width: 110, height: 110, borderRadius: 5}}
            />
            <Text style={{textAlign: 'center'}}>Marriage Bureau</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
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
});
