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
import {Color} from '../../../Constants';
import Header from '../../../Components/Header';

const SelectedReligion = ({navigation, route}: any) => {
  const {data, category} = route.params;
  console.log('category', category);

  const filteredData = JSON.parse(data);

  const [user, setUser] = useState(true);
  const [foundName, setFoundName] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState<any>(null);

  const searchName = (e: any) => {
    setSearchText(e);
    let filteredItems: any = filteredData.filter((x: any) =>
      x.name.toLowerCase().includes(e.toLowerCase()),
    );
    setFoundName(filteredItems);
  };
 const [filterSubCategory, setFilterSubCategory] = useState([])
  const handleCategoryClick = (e:any) => {
    console.log('category',e);
    setSelectedSubCategory(e.subCategory);
    const subdata = filteredData.filter((data:any) => data.subCategory === e.subCategory);
    setFilterSubCategory(subdata);
  };

  console.log('filterSubCategory',filterSubCategory);
  
  return (
    <>
      <View
        style={{
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
        <View style={{marginBottom: 10}}></View>

        {/* SubCategory */}
        
        <ScrollView horizontal>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              gap: 5,
              padding: 0,
              margin: 0,
            }}>
            {filteredData &&
              filteredData
                .filter(
                  (e: any, i: number, arr: any[]) =>
                    arr.findIndex(
                      (f: any) => f.subCategory === e.subCategory,
                    ) === i,
                )
                .map((e: any, i: number) => {
                  console.log('e',e);
                  
                  const isSelected = e.subCategory === selectedSubCategory;
                  return (
                    <TouchableOpacity
                    onPress={() => handleCategoryClick(e)}
                      style={{
                        backgroundColor: isSelected ? Color.mainColor : 'white',
                        paddingHorizontal: 25,
                        paddingVertical: 10,
                        borderRadius: 20,
                        borderWidth: 1,
                      }}>
                      <Text
                        style={[
                          styles.cancleButtonText,
                          {
                            color: isSelected ? 'white' : Color.mainColor,
                            marginTop: 0,
                          },
                        ]}>
                        {e.subCategory}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
          </View>
        </ScrollView>
       
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
            ) :
            filterSubCategory && filterSubCategory.length>0?
            
            (
              filterSubCategory.map((e: any, i: number): any => {
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
                        alignSelf: 'flex-start',
                        marginLeft: 10,
                        fontWeight: 'bold',
                      }}>
                      {e.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: 14,
                        color: Color.textColor,
                        alignSelf: 'flex-start',
                        marginLeft: 10,
                      }}>
                      {e.profession}
                    </Text>
                  </TouchableOpacity>
                );
              })
            )
            :
            (
              filteredData.map((e: any, i: number): any => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('MBPersonDetails', e)}
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
                        alignSelf: 'flex-start',
                        marginLeft: 10,
                        fontWeight: 'bold',
                      }}>
                      {e.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: 14,
                        color: Color.textColor,
                        alignSelf: 'flex-start',
                        marginLeft: 10,
                      }}>
                      {e.profession}
                    </Text>
                  </TouchableOpacity>
                );
              })
            )
            
            }
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
    // backgroundColor: '#fff',
    // paddingHorizontal: 9,
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
    // backgroundColor: 'white',
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
  cancleButtonText: {
    color: Color.mainColor,
    // fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
