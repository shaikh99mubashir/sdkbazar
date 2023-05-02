import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Checkout = ({navigation, route}: any) => {
  const data = route.params;
  // console.log('data', data);

  return (
    <View>
      <Text>Checkout</Text>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
