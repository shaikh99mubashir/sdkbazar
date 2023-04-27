import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FoodDetails = ({navigation, route}: any) => {
  const data = route.params;
  // console.log('data', data);

  return (
    <View>
      <Text>FoodDetails</Text>
    </View>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({});
