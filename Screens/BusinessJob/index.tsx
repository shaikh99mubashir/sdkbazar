import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';

const BusinessJob = ({navigation}: any) => {
  const [login_ID, setLogin_ID] = useState('');
  AsyncStorage.getItem('user').then((val: any) => {
    let user = JSON.parse(val);
    setLogin_ID(user.userID);
  });
  console.log('login_ID', login_ID);

  const checkJobSeeker = () => {
    // () => navigation.navigate('Step1JobSeeker')
  };
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Business / Job</Text>
        <Text style={styles.para}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>

      {/* Business start */}
      <TouchableOpacity onPress={() => navigation.navigate('Step1business')}>
        <View style={styles.view}>
          <View style={styles.box}>
            <View style={styles.card}>
              <Image
                source={require('../../Images/owner.png')}
                style={styles.img}
              />
              <Text style={styles.boxText}>Business</Text>
            </View>
            <View>
              <Image
                source={require('../../Images/redright.png')}
                style={styles.arrowimg}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {/* Business End */}

      {/* Job start */}
      <TouchableOpacity onPress={checkJobSeeker}>
        <View style={styles.view}>
          <View style={styles.box}>
            <View style={styles.card}>
              <Image
                source={require('../../Images/CV.png')}
                style={styles.img}
              />
              <Text style={styles.boxText}>Job Seeker</Text>
            </View>
            <View>
              <Image
                source={require('../../Images/redright.png')}
                style={styles.arrowimg}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {/* Job End */}
    </View>
  );
};

export default BusinessJob;

const styles = StyleSheet.create({
  arrowimg: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  img: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  box: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  boxText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333333',
  },
  para: {
    fontWeight: '400',
    color: '#333333',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
    color: '#333333',
    fontSize: 30,
    alignSelf: 'center',
  },
  view: {
    paddingVertical: 10,
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
