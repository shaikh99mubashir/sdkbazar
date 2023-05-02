import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../Components/Header';
import {Color} from '../../../Constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FoodDetails = ({navigation, route}: any) => {
  const [quantity, setQuantity] = useState<number>(1);
  const data = route.params;
  // console.log('data', data);

  const minusQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(quantity);
    }
  };
  const plusQty = () => {
    setQuantity(quantity + 1);
  };

  const NavigateToCheckout = () => {
    navigation.navigate('Checkout', {cartData: data, quantity: quantity});
    // console.log('running');
  };

  return (
    <View style={{backgroundColor: Color.white, height: '100%'}}>
      <View style={{height: '40%'}}>
        <Header title="Food Detail" navigation={navigation} backBtn />
        <Image
          source={require('../../../Images/pizza.png')}
          style={{width: 300, height: 250, alignSelf: 'center'}}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          width: '100%',
          height: '60%',
          elevation: 20,
          shadowRadius: 40,
          backgroundColor: 'white',
          borderTopStartRadius: 40,
          borderTopEndRadius: 40,
          paddingTop: 30,
          paddingHorizontal: 10,
        }}>
        {/* name */}
        <Text
          style={{
            paddingHorizontal: 10,
            fontSize: 22,
            color: Color.mainColor,
            fontFamily: 'Poppins-SemiBold',
          }}>
          {data.foodName}
        </Text>
        {/* minutes and rating */}
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
            }}>
            <Ionicons name="timer" size={15} color={Color.textColor} />
            <Text
              style={{
                fontSize: 13,
                color: Color.textColor,
                fontFamily: 'Poppins-SemiBold',
              }}>
              20 min
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
            }}>
            <FontAwesome name="star" size={15} color="gold" />
            <Text
              style={{
                fontSize: 13,
                color: Color.mainColor,
                fontFamily: 'Poppins-SemiBold',
              }}>
              4.2
            </Text>
          </View>
        </View>
        {/* Description */}
        <View style={{marginTop: 30}}>
          <Text
            style={{
              paddingHorizontal: 10,
              fontSize: 18,
              color: Color.mainColor,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Description
          </Text>
          <Text
            style={{
              paddingHorizontal: 10,
              fontSize: 14,
              color: Color.textColor,
              fontFamily: 'Poppins-SemiBold',
            }}>
            {data.Description}
          </Text>
        </View>
        {/* Counter Price and ordernow button */}
        <View style={{position: 'absolute', bottom: 0, paddingBottom: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingHorizontal: 30,
              gap: 150,
            }}>
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                backgroundColor: '#eee',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 5,
              }}>
              <TouchableOpacity onPress={minusQty}>
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
                {quantity}
              </Text>
              <TouchableOpacity onPress={plusQty}>
                <Image
                  source={require('../../../Images/PLUS.png')}
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 22,
                  color: Color.purple,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Rs.{data.price * quantity}
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={NavigateToCheckout}
              style={styles.button}>
              <Text style={{color: 'white', fontSize: 18}}>Order Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetails;

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
