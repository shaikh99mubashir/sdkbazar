import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import icon from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Fontisto';
import {TextInput} from 'react-native-gesture-handler';
import Header from '../../../Components/Header';

// import { RadioButton } from 'react-native-paper';

const CardDetail = ({navigation}: any) => {
  const [value, setValue] = React.useState('first');
  const [isActive, setIsActive] = React.useState(false);

  const active = () => {
    if (isActive == true) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Card Details" backBtn />
      <View style={styles.box}>
        <TextInput
          style={styles.input100}
          placeholder="Card number"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.box}>
        <TextInput
          style={styles.input50}
          placeholder="MM/YY"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input50}
          placeholder="CVC"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.box}>
        <TextInput
          style={styles.input100}
          placeholder="Name of the card holder"
          keyboardType="default"
        />
      </View>
      <View style={styles.box}>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => active()}>
            <View>
              {isActive ? (
                <Icon name="checkbox-active" size={15} color={'#5E20F4'} />
              ) : (
                <Icon name="checkbox-passive" size={15} color={'#5E20F4'} />
              )}
            </View>
          </TouchableOpacity>
          <Text style={styles.label}>
            Save this card for a faster checkout next time
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{color: 'white', fontSize: 18}}
          onPress={() => navigation.navigate('Checkout')}>
          Done
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardDetail;

const styles = StyleSheet.create({
  checkboxContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    color: 'black',
    fontSize: 15,
  },
  container: {
    paddingHorizontal: 10,
  },
  box: {
    marginTop: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    display: 'flex',
    gap: 10,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
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
  input50: {
    width: '48%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 12,
    padding: 10,
  },
  input100: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 12,
    padding: 10,
  },
  fields: {
    marginTop: 20,
  },
  button: {
    alignSelf: 'center',
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 14,
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#5E20F4',
  },
});
