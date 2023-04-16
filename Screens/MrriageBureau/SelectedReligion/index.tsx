import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Modal,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color } from '../../../Constants';
import Header from '../../../Components/Header';

const SelectedReligion = ({navigation, route}: any) => {
  const { data, category } = route.params;
  console.log('category',category);
  
  const filteredData = JSON.parse(data);
  console.log('filteredData',filteredData);
  
  
  const [user, setUser] = useState(true);
  const [foundName, setFoundName] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleFilterPress = () => {
    setModalVisible(true);
  };

  const [creators, setCreators] = useState([
    {
      id: 1,
      name: 'asd',
      image: require('../../../Images/p1.png'),
      category:''
    },
    {
      id: 2,
      name: 'qqq',
      image: require('../../../Images/p1.png'),
    },
    {
      id: 3,
      name: 'www',
      image: require('../../../Images/p1.png'),
    },
    {
      id: 4,
      name: 'anchors',
      image: require('../../../Images/p1.png'),
    },
    {
      id: 5,
      name: 'www',
      image: require('../../../Images/p1.png'),
    },
    {
      id: 6,
      name: 'sd',
      image: require('../../../Images/p1.png'),
    },
    {
      id: 7,
      name: 'sdd',
      image: require('../../../Images/p1.png'),
    },
  ]);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const filterByAtoZ = () => {
    setCreators([...creators].sort((a, b) => a.name.localeCompare(b.name)));
    setModalVisible(false);
  };
  const filterByRevelance = () => {
    setCreators([...creators].sort(() => Math.random() - 0.5));
    setModalVisible(false);
  };

  const searchName = (e: any) => {
    setSearchText(e);
    let filteredItems: any = creators.filter(x =>
      x.name.toLowerCase().includes(e.toLowerCase()),
    );
    setFoundName(filteredItems);
  };
  return (
    <>
      <View
        style={{
          backgroundColor: Color.white,
          height: Dimensions.get('window').height,
          paddingHorizontal: 10,
        }}>
        <Header navigation={navigation} title={category} backBtn />

        {/* Search */}
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              onChangeText={e => searchName(e)}
            />
            <TouchableOpacity onPress={searchName}>
              <Icon
                name="search"
                size={20}
                color={Color.mainColor}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        

        {/* CARDS */}
        <View style={{marginBottom: 10}}></View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: '100%',
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}>
            {foundName && foundName.length > 0 ? (
              foundName.map((e: any, i: any) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {}}
                    key={i}
                    style={{
                      borderWidth: 0,
                      paddingVertical: 1,
                      alignItems: 'center',
                      borderRadius: 10,
                      marginTop: 10,
                      width: '50%',
                      justifyContent: 'space-between',
                    }}>
                    <Image
                      source={e.image}
                      resizeMode="cover"
                      style={{
                        width: Dimensions.get('window').width / 2 - 25,
                        height: 180,
                        borderRadius: 10,
                        shadowOffset: {width: 0, height: 3},
                        shadowOpacity: 0.4,
                        shadowRadius: 2,
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: 18,
                        color: Color.textColor,
                      }}>
                      {e.name}
                    </Text>
                  </TouchableOpacity>
                );
              })
            ) : searchText && foundName.length == 0 ? (
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: Color.textColor,
                    textAlign: 'center',
                    fontSize: 24,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Search Data Not Found
                </Text>
              </View>
            ) : (
              filteredData.map((e:any, i:number):any => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {}}
                    key={i}
                    style={{
                      borderWidth: 0,
                      paddingVertical: 1,
                      alignItems: 'center',
                      borderRadius: 10,
                      marginTop: 10,
                      width: '50%',
                      justifyContent: 'space-between',
                    }}>
                    <Image
                      source={require('../../../Images/p1.png')}
                      resizeMode="cover"
                      style={{
                        width: Dimensions.get('window').width / 2 - 25,
                        height: 180,
                        borderRadius: 10,
                        shadowOffset: {width: 0, height: 3},
                        shadowOpacity: 0.4,
                        shadowRadius: 2,
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: 18,
                        color: Color.textColor,
                        alignSelf:'flex-start',
                        marginLeft:10,
                        fontWeight:'bold'
                        
                      }}>
                      {e.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: 14,
                        color: Color.textColor,
                        alignSelf:'flex-start',
                        marginLeft:10
                      }}>
                      {e.profession}
                    </Text>
                  </TouchableOpacity>
                );
              })
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default SelectedReligion;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 9,
    paddingVertical: 5,
    width: '100%',
  },
  filterButton: {
    marginRight: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  modalContainer: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: Color.textColor,
    borderRadius: 10,
    height: 70,
    width: 150,
    top: 120,
    left: 10,
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  modalText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  closeButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  closeButtonText: {
    color: Color.mainColor,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingHorizontal: 10,
  },
});