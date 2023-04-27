import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Color} from '../../../Constants';
import Header from '../../../Components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
const RestaurantDetails = ({navigation, route}: any) => {
  const data = route.params;
  console.log('data==>', data.resturantName);

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
          title={data.resturantName}
          titleColor="white"
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
    </ScrollView>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({});
