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
} from 'react-native';
import MapView, {Marker, PROVIDER_DEFAULT} from 'react-native-maps';
import React, {useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../Components/Header';
import {Color} from '../../Constants';
import CarouselSlider from '../../Components/CarouselSlider';
const {height, width} = Dimensions.get('screen');
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

  const [currentIndex, setCurrentIndex] = useState<any>(0);
  const flatListRef = useRef<any>(null);
  // Function to move to next image
  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % HomePageBanner.length;
    setCurrentIndex(nextIndex);
    flatListRef.current.scrollToIndex({animated: true, index: nextIndex});
  };

  // Use effect to move to next image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000);

    // Cleanup function to clear interval on unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <>
      <View
        style={{
          backgroundColor: Color.mainColor,
          paddingHorizontal: 10,
          paddingBottom: 120,
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
      {/* <View
        style={{paddingTop: 20, backgroundColor: Color.mainColor, height: 110}}>
        <View>
          <CarouselSlider carouselItems={HomePageBanner} dots />
        </View>
      </View> */}
      {/* Custom Slider top -100 is use because paddingBottom  */}
      <View
        style={{
          height: '30%',
          width: width,
          // justifyContent: 'center',
          // alignItems: 'center',
          // borderWidth: 1,
          top: -100,
        }}>
        <FlatList
          ref={flatListRef}
          data={HomePageBanner}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
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
                  // borderWidth: 1,
                  // borderColor: 'red',
                  padding: 0,
                  margin: 0,
                }}>
                <Image
                  source={item.image}
                  style={{width: '93%', height: '93%'}}
                  resizeMode="contain"
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
          top: -120,
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

      <ScrollView style={{top: -110}}>
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
            style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
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
        {/* <MapView
          provider={PROVIDER_DEFAULT}
          style={{width: '100%', height: '48%'}}
          mapType="standard"
          customMapStyle={[
            {
              featureType: 'all',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#333333',
                },
              ],
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [
                {
                  color: '#ffffff',
                },
              ],
            },
          ]}
          pitchEnabled={false}
        /> */}
      </ScrollView>
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
