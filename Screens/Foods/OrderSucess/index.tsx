import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import Header from '../../../Components/Header';
// import icon from 'react-native-vector-icons';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import { RadioButton } from 'react-native-paper';

const OrderSucess = ({navigation}: any) => {
  const [value, setValue] = React.useState('first');
  const [isActive, setIsActive] = React.useState(false);

  return (
    <View style={styles.container}>
      <Header title="Order" backBtn navigation={navigation} />
      <View style={{marginTop: 20}}>
        <Text style={styles.text}>Your Order Success</Text>
        <Image
          style={styles.img}
          source={require('../../../Images/order.png')}
        />
        <Text style={styles.textTime}>Estimate Delivery Time</Text>
        <View style={styles.flexbox1}>
          <View style={styles.flexbox}>
            <Text style={styles.num}>30</Text>
            <Text style={styles.time}>min</Text>
          </View>
          <View>
            <Text style={{fontSize: 30, fontWeight: '500', color: 'black'}}>
              -
            </Text>
          </View>
          <View style={styles.flexbox}>
            <Text style={styles.num}>40</Text>
            <Text style={styles.time}>min</Text>
          </View>
        </View>
        <View style={styles.flexbox2}>
          <View style={styles.order}>
            <Text style={styles.timeid}>Order I.D #</Text>
            <Text style={styles.timeid}>435646476475</Text>
          </View>
          <View style={styles.order}>
            <Text style={styles.timeid}>Total Price</Text>
            <Text style={styles.timeid}>Rs.1,725.4</Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../../../Images/messageRes.png')}
              style={{width: 25, height: 25, resizeMode: 'contain'}}
            />
            <Text
              style={{color: 'white', fontSize: 18}}
              onPress={() => navigation.navigate('Order')}>
              Contact a Rider
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../../../Images/messageRes.png')}
              style={{width: 25, height: 25, resizeMode: 'contain'}}
            />
            <Text
              style={{color: 'white', fontSize: 18}}
              onPress={() => navigation.navigate('Order')}>
              Contact a Restaurant
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OrderSucess;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  flexbox: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  flexbox1: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 10,
  },
  flexbox2: {
    marginTop: 30,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  timeid: {
    color: 'gray',
    fontSize: 22,
  },
  order: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  num: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    color: 'black',
    fontWeight: '500',
  },
  time: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
  },
  textTime: {
    alignSelf: 'center',
    fontWeight: '500',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    color: 'black',
  },
  text: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: '500',
    color: 'black',
  },
  img: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
    height: '35%',
    width: '35%',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    alignSelf: 'center',
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 14,
    marginTop: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#5E20F4',
  },
});
