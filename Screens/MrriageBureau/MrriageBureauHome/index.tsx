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
import React, {useState, useEffect, useCallback} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../../Components/Header';
import {Color} from '../../../Constants';
import CarouselSlider from '../../../Components/CarouselSlider';
import Video from 'react-native-video';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const {width, height} = Dimensions.get('window');
const MrriageBureauHome = ({navigation}: any) => {
  const religionCategory = [
    {
      id: 1,
      category: 'Muslims',
    },
    {
      id: 2,
      category: 'Christian',
    },
    {
      id: 3,
      category: 'Hindu',
    },
    {
      id: 4,
      category: 'Sikh',
    },
    {
      id: 5,
      category: 'Buddhist',
    },
  ];

  const [categoryData, setCategoryData] = useState([
    {
      id: 1,
      name: 'asd',
      image: require('../../../Images/p1.png'),
      category: 'Muslims',
      subCategory: 'Sunni Muslim',
      profession: 'developer',
    },
    {
      id: 2,
      name: 'qqq',
      image: require('../../../Images/p1.png'),
      category: 'Muslims',
      subCategory: 'Shia Muslim',
      profession: 'developer',
    },
    {
      id: 8,
      name: 'qqq',
      image: require('../../../Images/p1.png'),
      category: 'Muslims',
      subCategory: 'Sunni Muslim',
      profession: 'developer',
    },
    {
      id: 3,
      name: 'www',
      image: require('../../../Images/p1.png'),
      category: 'Christian',
      subCategory: 'orthodox',
      profession: 'developer',
    },
    {
      id: 4,
      name: 'anchors',
      image: require('../../../Images/p1.png'),
      category: 'Christian',
      subCategory: 'cathlic',
      profession: 'developer',
    },
    {
      id: 5,
      name: 'www',
      image: require('../../../Images/p1.png'),
      category: 'Hindu',
      subCategory: 'uppercast',
      profession: 'developer',
    },
    {
      id: 6,
      name: 'sd',
      image: require('../../../Images/p1.png'),
      category: 'Sikh',
      subCategory: 'uppercast',
      profession: 'developer',
    },
    {
      id: 7,
      name: 'sdd',
      image: require('../../../Images/p1.png'),
      subCategory: 'uppercast',
      category: 'Buddhist',
      profession: 'developer',
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const handleCategoryClick = (e: any) => {
    setSelectedCategory(e.category);
    const category = e.category;
    const filteredData = categoryData.filter(
      data => data.category === e.category,
    );
    const filteredDataJSON = JSON.stringify(filteredData);
    navigation.navigate('SelectedReligion', {data: filteredDataJSON, category});
  };
  const videoSource = {
    uri: 'file:///D:/sdkbazar/Videos/MarriageBureau.mp4',
  };

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
    <ScrollView>
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
          <TouchableOpacity onPress={() => {}}>
            <Text>
              <Icon name="search" size={25} color={Color.mainColor} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* CarouselSlider */}
      <View style={{height: 100, backgroundColor: Color.mainColor}}></View>
      <View style={{alignItems: 'center', marginTop: -90}}>
        <Video
          source={require('../../../Videos/MarriageBureau.mp4')}
          ref={ref => {}}
          // controls={true}
          posterResizeMode={'cover'}
          repeat
          resizeMode={'stretch'}
          style={{
            ...styles.backgroundVideo,
            height: height / 4,
            width: width / 1.11,
            borderRadius: 25,
          }}
          onError={error => console.log(error, 'error')}
        />
      </View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Poppins-SemiBold',
            fontSize: 22,
            color: Color.heading,
          }}>
          Religion
        </Text>
        {/* Category Map */}
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            alignItems: 'center',
            gap: 5,
          }}>
          {religionCategory &&
            religionCategory.map((e: any, i: number) => {
              const isSelected = e.category === selectedCategory;
              return (
                <TouchableOpacity
                  onPress={() => handleCategoryClick(e)}
                  activeOpacity={0.8}
                  key={i}
                  style={{
                    borderWidth: 1,
                    paddingVertical: 10,
                    paddingHorizontal: 5,
                    borderRadius: 5,
                    borderColor: Color.textColor,
                    alignItems: 'center',
                    width: 170,
                    backgroundColor: isSelected ? Color.mainColor : 'white',
                  }}>
                  <Text
                    style={{
                      color: isSelected ? 'white' : Color.mainColor,

                      fontSize: 16,
                      fontFamily: 'Poppins-SemiBold',
                    }}>
                    {e.category}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          // marginVertical: 15,
          // top: 80,
        }}>
        <View
          style={{
            alignItems: 'center',
            width: '90%',
            height: 200,
            marginVertical: 10,
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
                latitude: currentLocation ? currentLocation.latitude : 37.78825,
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
  );
};

export default MrriageBureauHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  video: {
    width,
    height: height / 3,
  },
  backgroundVideo: {
    width: '100%',
  },
});
