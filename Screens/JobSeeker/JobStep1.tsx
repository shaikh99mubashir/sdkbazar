import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconnew from 'react-native-vector-icons/Ionicons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

const JobStep1 = ({navigation}: any) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.step}>Step 1</Text>
        </View>
        <View>
          <View style={styles.profile}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
              }}>
              <Icon name="upload" size={25} color={'white'} />
              <Text style={{color: 'white', fontSize: 15}}>
                profile Picture
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              keyboardType="default"
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              keyboardType="default"
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              keyboardType="default"
            />
          </View>
          <View style={styles.fields}>
            <View style={styles.box}>
              <TextInput
                style={styles.input50}
                placeholder="Gender"
                keyboardType="default"
              />
              <TextInput
                style={styles.input50}
                placeholder="Date Of Birth"
                keyboardType="default"
              />
            </View>
          </View>
          <View style={styles.fields}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              placeholder=" Description"
              style={[styles.input, {height: 100, textAlignVertical: 'top'}]}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Step2JobSeeker')}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default JobStep1;

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    display: 'flex',
    gap: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  button: {
    alignSelf: 'flex-end',
    textAlign: 'center',
    alignItems: 'center',
    width: '40%',
    borderRadius: 100,
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: 'red',
  },
  fields: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 12,
    padding: 10,
  },

  input50: {
    borderWidth: 1,
    width: '50%',
    borderColor: 'gray',
    borderRadius: 12,
    padding: 10,
  },
  text: {
    color: '#666666',
    fontSize: 20,
  },
  textsm: {
    color: '#666666',
    fontSize: 18,
  },
  profile: {
    backgroundColor: '#666666',
    width: 140,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    display: 'flex',
    height: 140,
    justifyContent: 'center',
    borderRadius: 500,
    alignSelf: 'center',
  },
  upload: {
    backgroundColor: '#F9F9F9',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
    height: 150,
    justifyContent: 'center',
    borderRadius: 20,
  },
  uploadBox: {
    backgroundColor: '#F9F9F9',
    width: '48%',
    flexDirection: 'column',
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    display: 'flex',
    height: 100,
    justifyContent: 'center',
    borderRadius: 20,
  },
  step: {
    fontSize: 25,
    textAlign: 'left',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    color: 'red',
    backgroundColor: '#ff000045',
  },
  view: {
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});
