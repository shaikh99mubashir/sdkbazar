import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}: any) => {
  return (
    <View>
      <Text style={{fontFamily:'Poppins-SemiBold'}} >HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
        <Text>Go TO Splash</Text>
      </TouchableOpacity>
      <Icon name="ios-calendar-sharp" size={22} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
