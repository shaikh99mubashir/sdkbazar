import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Color} from '../../../Constants';
import Header from '../../../Components/Header';
import {useDispatch, useSelector} from 'react-redux';
const Checkout = ({navigation, route}: any) => {
  const data = route.params;
  const [isCartData, setIsCartData]: any = useState([]);
  // console.log('data', data);
  const cart: any = useSelector(data => data);

  useEffect(() => {
    setIsCartData(cart?.user?.cart);
  }, [cart]);

  // console.log('isCartData', isCartData);

  const [editNumber, setEditNumber] = useState<boolean>(false);
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

  const TotalAmount = subTotalAmount + 3 + 99;

  return (
    <View
      style={{
        backgroundColor: Color.white,
        height: '100%',
        paddingHorizontal: 15,
      }}>
      <Header title="CheckOut" backBtn navigation={navigation} />
      {/* Delivery address */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: Color.mainColor,
            fontFamily: 'Poppins-SemiBold',
          }}>
          Delivery Address
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddressDetail')}>
          <Image
            source={require('../../../Images/editIcon.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>
      {/* location Image and text */}
      <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
        <Image
          source={require('../../../Images/location.png')}
          style={{width: 20, height: 20, resizeMode: 'contain'}}
        />
        <Text
          style={{
            fontSize: 14,
            color: Color.mainColor,
            fontFamily: 'Poppins-SemiBold',
          }}>
          RJ mal cd jksdbjkdsb
        </Text>
      </View>

      {/* Mobile No */}
      <View
        style={{
          backgroundColor: Color.white,
          elevation: 10,
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Text
            style={{
              fontSize: 14,
              color: Color.textColor,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Mobile No. |
          </Text>
          {editNumber ? (
            <TextInput
              placeholder="Enter No +92xxxxxxxxx"
              style={{padding: 0, width: 200}}
            />
          ) : (
            <Text>+92856662212</Text>
          )}
        </View>
        <TouchableOpacity onPress={() => setEditNumber(!editNumber)}>
          {editNumber ? (
            <Text
              style={{
                fontSize: 14,
                color: Color.purple,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Save
            </Text>
          ) : (
            <Image
              source={require('../../../Images/editIcon.png')}
              style={{width: 20, height: 20}}
            />
          )}
        </TouchableOpacity>
      </View>

      {/* Payment Method */}
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 16,
            color: Color.mainColor,
            fontFamily: 'Poppins-SemiBold',
          }}>
          Payment Method
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('PaymentMethod')}
          activeOpacity={0.8}
          style={{
            backgroundColor: Color.white,
            elevation: 10,
            padding: 10,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../Images/add.png')}
            style={{width: 20, height: 20}}
          />
          <Text
            style={{
              fontSize: 14,
              color: Color.mainColor,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Add a Payment Method
          </Text>
        </TouchableOpacity>
      </View>
      {/* OrderSummary */}
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 16,
            color: Color.mainColor,
            fontFamily: 'Poppins-SemiBold',
          }}>
          Order Summary
        </Text>

        <View
          style={{
            backgroundColor: Color.white,
            elevation: 10,
            padding: 10,
            borderRadius: 10,
          }}>
          <ScrollView
            style={{height: isCartData.length > 2 ? 80 : 40}}
            showsVerticalScrollIndicator={false}>
            {isCartData &&
              isCartData.map((e: any, i: number) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: Color.mainColor,
                          fontFamily: 'Poppins-SemiBold',
                        }}>
                        {e.quantity}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: Color.mainColor,
                          fontFamily: 'Poppins-SemiBold',
                        }}>
                        {e.foodName}
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 14,
                        color: Color.mainColor,
                        fontFamily: 'Poppins-SemiBold',
                      }}>
                      Rs.{e.price}
                    </Text>
                  </View>
                );
              })}
          </ScrollView>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: Color.textColor,
              marginTop: 10,
            }}></View>
          {/* subtotal */}
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: Color.textColor,
                fontFamily: 'Poppins-SemiBold',
              }}>
              SubTotal
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: Color.textColor,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Rs. {subTotalAmount}
            </Text>
          </View>
          {/* Delivery Fee */}
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: Color.textColor,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Delivery Fee
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: Color.textColor,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Rs. 99.00
            </Text>
          </View>
          {/* Platform Fee */}
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: Color.textColor,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Platform Fee
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: Color.textColor,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Rs. 3.00
            </Text>
          </View>
        </View>
        {/* Total */}
        <View
          style={{
            marginHorizontal: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: Color.mainColor,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Total
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: Color.mainColor,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Rs. {TotalAmount}
          </Text>
        </View>
        {/* confirm button */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('OrderSucess')}
          style={styles.button}>
          <Text style={{color: Color.white, fontSize: 18}}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkout;

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
