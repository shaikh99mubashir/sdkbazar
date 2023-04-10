import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../Components/Header';
import {Color} from '../../Constants';

const HomeScreen = ({navigation}: any) => {
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
          marginTop: 10,
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

      <Text style={{fontFamily: 'Poppins-SemiBold'}}>HomeScreen</Text>
      <Icon name="ios-calendar-sharp" size={22} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
