import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../Components/Header';
import {Color} from '../../../Constants';
import {imageUrl} from '../../../Constants/BasicUrl';

const BusinessPersonDetails = ({navigation, route}: any) => {
  const data = route.params.data;
  console.log('data===>', data);

  const [showAll, setShowAll] = useState(false);
  const [sliceAmount, setSliceAmount] = useState(5);

  const slicedData = data.slice(0, sliceAmount);

  const handleViewAll = () => {
    setSliceAmount(sliceAmount + 5);
  };
  const renderItem = ({item}: any) => {
    return (
      <View
        style={{
          alignSelf: 'center',
          width: Dimensions.get('screen').width / 1.1,
        }}>
        <View
          style={{
            marginTop: 10,
            borderRadius: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            backgroundColor: Color.white,
            elevation: 6,
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <View>
              <Image
                source={{
                  uri: `${imageUrl}/uploads/${item.profile_picture.substring(
                    'profileimage/'.length,
                  )}`,
                }}
                style={{width: 70, height: 70, borderRadius: 50}}
              />
            </View>
            <View>
              <Text
                style={{
                  color: Color.textColor,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                }}>
                {item.first_name} {item.last_name}
              </Text>
              <Text
                style={{
                  color: Color.textColor,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                }}>
                {item.profession}
              </Text>
              <Text
                style={{
                  color: Color.textColor,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                }}>
                {item.work_experience} experience
              </Text>
            </View>
          </View>
          <View style={{gap: 10}}>
            <TouchableOpacity
              // onPress={}
              style={{
                backgroundColor: Color.lightgrey,
                paddingHorizontal: 15,
                paddingVertical: 5,
                borderRadius: 20,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                  color: Color.mainColor,
                }}>
                View CV
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('BusinessProfile', item)}
              style={{
                backgroundColor: Color.mainColor,
                paddingHorizontal: 15,
                paddingVertical: 5,
                borderRadius: 20,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                  color: Color.white,
                }}>
                View Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{marginHorizontal: 10}}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <Header navigation={navigation} backBtn title={data[0].profession} />

        {/* Cards */}
        <FlatList
          // data={showAll ? data && data.filteredData : ''}
          data={showAll ? data && data : slicedData}
          renderItem={renderItem}
          nestedScrollEnabled={true}
          keyExtractor={item => item._id.toString()}
          showsVerticalScrollIndicator={false}
        />
        <View
          style={{
            marginBottom: 20,
            borderTopWidth: 1,
            marginTop: 20,
            borderColor: Color.textColor,
          }}>
          <TouchableOpacity onPress={handleViewAll}>
            <Text style={styles.viewAllButtonText}>View All</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BusinessPersonDetails;

const styles = StyleSheet.create({
  viewAllButtonText: {
    color: Color.textColor,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
