import React, {useState} from 'react';
import {
  Alert,
  Modal,
  Pressable,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

function AddressDetail({navigation}: any) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <View style={styles.box}>
        <View style={{marginTop: 20}}>
          <Text style={styles.text}>Delivery Details</Text>
          <View style={styles.viewflex}>
            <Image
              source={require('../../../Images/location.png')}
              style={{width: 25, height: 25}}
              resizeMode="contain"
            />
            <Text style={styles.para}>
              RJ Mall,Near Rashid Minhas Rd. Karachi
            </Text>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    RJ Mall,Near Rashid Minhas Rd. Karachi
                  </Text>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable onPress={() => setModalVisible(true)}>
              {/* <Image
                source={require('../../../Images/editIcon.png')}
                style={{width: 25, height: 25}}
                resizeMode="contain"
              /> */}
            </Pressable>
          </View>

          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Address Line 01"
              keyboardType="default"
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Address Line 02"
              keyboardType="default"
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Address Line 03"
              keyboardType="default"
            />
          </View>
          {/* button */}
          <TouchableOpacity style={styles.button}>
            <Text
              style={{color: 'white', fontSize: 18}}
              onPress={() => navigation.navigate('Checkout')}>
              Save & Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default AddressDetail;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 12,
    padding: 10,
  },
  fields: {
    marginTop: 20,
  },
  box: {
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: '600',
    color: '#333333',
  },
  viewflex: {
    display: 'flex',
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
  },
  para: {
    fontSize: 16,
    color: '#333333',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,

    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
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
