import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Header from '../../../Components/Header';
// import { RadioButton } from 'react-native-paper';

const PaymentMethod = ({navigation}: any) => {
  const [value, setValue] = React.useState('first');
  const [isActive, setIsActive] = React.useState(false);

  const active = () => {
    if (isActive == true) {
      setIsActive(false);
    } else {
      setIsActive(true);
      navigation.navigate('Checkout');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Payment Method" backBtn />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('CardDetail')}>
        <View style={styles.box}>
          <View style={styles.card}>
            <Image
              source={require('../../../Images/creditCard.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
            <Text style={styles.text}>Credit or Debit Card</Text>
          </View>
          <View>
            <Icon name="md-chevron-forward" size={30} color={'black'} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} onPress={() => active()}>
        <View style={styles.box}>
          <View style={styles.card}>
            <Image
              source={require('../../../Images/cash.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
            <Text style={styles.text}>Cash</Text>
          </View>
          <View>
            <Fontisto name="radio-btn-active" size={20} color={'#5E20F4'} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('CardDetail')}>
        <View style={styles.box}>
          <View style={styles.card}>
            <Image
              source={require('../../../Images/Jazz.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
            <Text style={styles.text}>Jazz Cash</Text>
          </View>
          <View>
            <Icon name="md-chevron-forward" size={30} color={'black'} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('CardDetail')}>
        <View style={styles.box}>
          <View style={styles.card}>
            <Image
              source={require('../../../Images/Easy.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
            <Text style={styles.text}>Easypaisa</Text>
          </View>
          <View>
            <Icon name="md-chevron-forward" size={30} color={'black'} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  box: {
    // elevation: 2,
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333333',
    fontWeight: '500',
  },
});
