import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconnew from 'react-native-vector-icons/Ionicons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

const Step1 = ({navigation}: any) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.step}>Step 1</Text>
        </View>
        <View>
          <View style={styles.upload}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <Icon name="upload" size={20} color={'#666666'} />
              <Text style={styles.text}>upload</Text>
            </View>
          </View>
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
              placeholder="Company Name"
              keyboardType="default"
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Business Category"
              keyboardType="default"
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Company Registration Number"
              keyboardType="default"
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Tax Identifier"
              keyboardType="default"
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="License Type"
              keyboardType="default"
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              placeholder="Company Description"
              style={[styles.input, {height: 100, textAlignVertical: 'top'}]}
            />
          </View>
        </View>
        <View style={styles.view}>
          <Text style={styles.textsm}>Upload Documents</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', gap: 14}}>
          <View style={styles.uploadBox}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <Iconnew
                name="cloud-upload-outline"
                size={40}
                color={'#666666'}
              />
            </View>
          </View>
          <View style={styles.uploadBox}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <Iconnew
                name="cloud-upload-outline"
                size={40}
                color={'#666666'}
              />
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Step2business')}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Step1;

const styles = StyleSheet.create({
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
    marginTop: -50,
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
    backgroundColor: 'white',
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
