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
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../Components/Header';
import {Color} from '../../Constants';

const HomeScreen = ({navigation}: any) => {
  const HomePageBanner = [
    {
      id: 1,
      name: 'asd',
      image: require('../../Images/HomePageBanner.png'),
    },
    {
      id: 2,
      name: 'qqq',
      image: require('../../Images/HomePageBanner.png'),
    },
    {
      id: 3,
      name: 'www',
      image: require('../../Images/HomePageBanner.png'),
    },
  ];
  const renderHomePageBanner = ({item}: any): any => {
    console.log('item==>', item);
    return (
      <View
        style={{
          marginTop: 15,
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{width: Dimensions.get('window').width / 1.2, height: 150}}
        />
      </View>
    );
  };
  return (
    <View style={{backgroundColor: Color.mainColor, paddingHorizontal: 10}}>
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

      <FlatList
        data={HomePageBanner}
        renderItem={renderHomePageBanner}
        keyExtractor={(item: any) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Entypo name="dot-single" size={22} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
