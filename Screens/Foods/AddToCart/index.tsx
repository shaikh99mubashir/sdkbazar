import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../../Components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {Color} from '../../../Constants';
import {addToCart} from '../../../Redux/Reducers/Reducers';

const AddToCart = ({navigation, route}: any) => {
  const [isCartData, setIsCartData]: any = useState([]);
  const data = route.params;
  const dispatch = useDispatch();
  const cartData: any = useSelector(cartData => cartData);
  useEffect(() => {
    setIsCartData(cartData.user.cart);
  }, []);
  useEffect(() => {
    dispatch(addToCart(isCartData));
  }, [isCartData]);

  const minusQty = (item: any, index: number) => {
    setIsCartData(
      isCartData
        .map((e: any) => {
          if (item.id === e.id) {
            if (item.quantity > 1) {
              return {
                ...e,
                quantity: e.quantity - 1,
              };
            }
          } else {
            return e;
          }
        })
        .filter(Boolean),
    );
  };
  const plusQty = (item: any, index: number) => {
    setIsCartData(
      isCartData.map((e: any) => {
        if (item.id === e.id) {
          return {
            ...e,
            quantity: e.quantity + 1,
          };
        } else {
          return e;
        }
      }),
    );
  };

  const subTotal = isCartData.map((item: any) => {
    let total = item.price * item.quantity;
    return Number(total);
  });

  const subTotalAmount =
    subTotal &&
    subTotal.length > 0 &&
    subTotal.reduce((total: number, current: number) => {
      return total + current;
    }, 0);

  const TotalAmount = subTotalAmount + 99 + 99;

  const NavigateToCheckout = () => {
    let data = {
      TotalAmount: TotalAmount,
      subTotalAmount: subTotalAmount,
    };
    navigation.navigate('Checkout', {cartData: isCartData, checkoutData: data});
    // console.log('running');
  };

  // console.log('cartData?.user.cart==>', isCartData);
  const renderCartItem = ({item, index}: any) => {
    return (
      <>
        <View
          style={{
            width: '90%',
            height: 100,
            backgroundColor: Color.white,
            elevation: 3,
            borderRadius: 10,
            shadowRadius: 10,
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            flexDirection: 'row',
            gap: 10,
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <Image
              source={require('../../../Images/burger.png')}
              style={{
                width: 80,
                height: 80,
                borderRadius: 50,
                padding: 10,
              }}
              resizeMode="cover"
            />
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: Color.mainColor,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                {item.foodName && item.foodName}
              </Text>
              <View
                style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                <TouchableOpacity onPress={() => minusQty(item, index)}>
                  <Image
                    source={require('../../../Images/MINUS.png')}
                    style={{width: 20, height: 20}}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    color: Color.mainColor,
                    fontFamily: 'Poppins-SemiBold',
                  }}>
                  {item.quantity}
                </Text>
                <TouchableOpacity onPress={() => plusQty(item, index)}>
                  <Image
                    source={require('../../../Images/PLUS.png')}
                    style={{width: 20, height: 20}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                fontSize: 13,
                color: Color.textColor,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Per item
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: Color.purple,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Rs. {item.price}
            </Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Header navigation={navigation} backBtn={true} title="My Cart" />
      <View
        style={{
          height: (Dimensions.get('screen').width * 110) / 100,
          // marginBottom: 20,
        }}>
        {isCartData && isCartData.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={true}
            data={isCartData}
            renderItem={renderCartItem}
          />
        ) : (
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 16,
                color: Color.textColor,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Your Cart is Empty
            </Text>
          </View>
        )}
      </View>
      {isCartData && isCartData.length > 0 ? (
        <View
          style={{
            backgroundColor: Color.mainColor,
            width: '100%',
            position: 'absolute',
            bottom: 0,
            borderTopEndRadius: 50,
            borderTopStartRadius: 50,
            paddingVertical: 40,
          }}>
          <View
            style={{
              marginHorizontal: 25,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: Color.white,
                fontFamily: 'Poppins-SemiBold',
              }}>
              SubTotal
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: Color.white,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Rs. {subTotalAmount}
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 25,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 13,
                color: Color.white,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Delivery Fee
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: Color.white,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Rs. 99.00
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 25,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 13,
                color: Color.white,
                fontFamily: 'Poppins-SemiBold',
              }}>
              PlatForm Fee
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: Color.white,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Rs. 99.00
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              marginHorizontal: 25,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: Color.white,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Total
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: Color.white,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Rs. {TotalAmount}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text
              style={{color: 'white', fontSize: 18}}
              onPress={NavigateToCheckout}>
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        ''
      )}
    </>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    textAlign: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 14,
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#5E20F4',
  },
});
