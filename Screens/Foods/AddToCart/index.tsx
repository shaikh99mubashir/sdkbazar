import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../../Components/Header';
import {useDispatch, useSelector} from 'react-redux';

const AddToCart = ({navigation, route}: any) => {
  const [isCartData, setIsCartData]: any = useState();

  const cartData: any = useSelector(a => a);

  //   console.log(cartData?.user.cart);
  //   console.log(cartData?.payload?.user, '<========== CartData');

  //   useEffect(() => {
  //     setIsCartData(cartData?.payload?.user);
  //   }, [cartData]);

  const data = route.params;

  return (
    <ScrollView>
      <Header navigation={navigation} backBtn={true} title="My Cart" />
      <Text>AddToCart</Text>
    </ScrollView>
  );
};

export default AddToCart;

const styles = StyleSheet.create({});
