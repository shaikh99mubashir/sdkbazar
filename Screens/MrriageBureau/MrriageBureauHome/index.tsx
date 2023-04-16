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

const MrriageBureauHome = ({navigation}: any) => {
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

  const [apply, setApply] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const handleCategoryClick = (e: any) => {
    setSelectedCategory(e.category);
    // console.log('ee',e.category);
    const category = e.category;
    const filteredData = categoryData.filter(
      data => data.category === e.category,
    );
    // console.log('filteredData',filteredData);
    const filteredDataJSON = JSON.stringify(filteredData);
    navigation.navigate('SelectedReligion', {data: filteredDataJSON, category});
  };
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
          Religion
        </Text>
        {/* <View style={{marginHorizontal:20, flexDirection:"row", flexWrap:'wrap', width:'100%',gap:5}}>
            {religionCategory && religionCategory.map((e,i)=>{
                return(
                    <TouchableOpacity
                    onPressIn={() => setApply(true)}
                    onPressOut={() => setApply(false)}
                      onPress={()=> navigation.navigate('SelectedReligion', e.catggory)}
                    activeOpacity={0.8}
                    style={{
                        borderWidth: 1,
                        paddingVertical: 10,
                        paddingHorizontal:5,
                        borderRadius: 5,
                        borderColor: Color.textColor,
                        alignItems: 'center',
                        width: 160,
                        backgroundColor: apply ? Color.mainColor : 'white',
                    }}>
                  <Text
                    style={{
                        color: apply ? 'white' : Color.mainColor,
                        
                        fontSize: 16,
                        fontFamily: 'Poppins-SemiBold',
                    }}>
                    {e.catggory}
                  </Text>
                </TouchableOpacity>
                    )
                })}
          </View> */}
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
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
                    width: 160,
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
    </>
  );
};

export default MrriageBureauHome;

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
