import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../../Constants';
import Header from '../../../Components/Header';

const Checkout = ({navigation, route}: any) => {
  const data = route.params;
  console.log('data', data);
  const [editNumber, setEditNumber] = useState<boolean>(false);

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
        <TouchableOpacity>
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
          style={{width: 20, height: 20}}
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
            flexDirection: 'row',
            alignItems: 'center',
            gap: 11,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 14,
              color: Color.mainColor,
              fontFamily: 'Poppins-SemiBold',
            }}>
            {data.cartData.foodName}
          </Text>
          <Text>{data.cartData.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
