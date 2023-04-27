import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../../Components/Header';

const AddToCart = ({navigation, route}: any) => {
  const data = route.params;
  console.log('data', data);

  return (
    <ScrollView>
      <Header navigation={navigation} backBtn={true} title="My Cart" />
      <Text>AddToCart</Text>
    </ScrollView>
  );
};

export default AddToCart;

const styles = StyleSheet.create({});
