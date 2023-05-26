import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import Header from '../../../Components/Header';
import {Color} from '../../../Constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {imageUrl} from '../../../Constants/BasicUrl';
const EntrepreneurProfile = ({navigation, route}: any) => {
  const data = route.params;

  return (
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
      <View style={{marginHorizontal: 10}}>
        <Header navigation={navigation} backBtn title="Job Seeker" />
      </View>
      {/* image part */}
      <View
        style={{
          alignSelf: 'center',
          borderBottomWidth: 1,
          width: Dimensions.get('screen').width,
          borderBottomColor: Color.textColor,
        }}>
        <View style={{alignSelf: 'center'}}>
          <Image
            source={{
              uri: `${imageUrl}/uploads/${data.profile_picture.substring(
                'profileimage/'.length,
              )}`,
            }}
            resizeMode="cover"
            style={{width: 120, height: 120, borderRadius: 100}}
          />
        </View>
        <Text
          style={{
            color: Color.textColor,
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
            textAlign: 'center',
            marginTop: 10,
          }}>
          {data.first_name} {data.last_name}
        </Text>
        <Text
          style={{
            color: Color.buttonBg,
            fontFamily: 'Poppins-Medium',
            fontSize: 14,
            textAlign: 'center',
            marginBottom: 10,
          }}>
          Business
        </Text>
      </View>
      {/* Detailpart */}
      <View style={{marginHorizontal: 10}}>
        {/* Email */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View>
            <Text
              style={{
                color: Color.mainColor,
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
              }}>
              Email
            </Text>
            <Text
              style={{
                color: Color.textColor,
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
              }}>
              {data.email}
            </Text>
          </View>
          <View>
            <Image
              source={require('../../../Images/email.png')}
              style={{width: 35, height: 35}}
            />
          </View>
        </View>
        {/* Gender */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 10,
            gap: 100,
          }}>
          <View>
            <Text
              style={{
                color: Color.mainColor,
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
              }}>
              Gender
            </Text>
            <Text
              style={{
                color: Color.textColor,
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
              }}>
              {data.gender}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: Color.mainColor,
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
              }}>
              Date of Birth
            </Text>
            <Text
              style={{
                color: Color.textColor,
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
              }}>
              {data.date_of_birth}
            </Text>
          </View>
        </View>
        {/* Description */}
        <View>
          <Text
            style={{
              color: Color.mainColor,
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
            }}>
            Description
          </Text>
          <Text
            style={{
              color: Color.textColor,
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
            }}>
            {data.description}
          </Text>
        </View>
        {/* CNIC */}
        <View>
          <Text
            style={{
              color: Color.mainColor,
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
            }}>
            CNIC Number
          </Text>

          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              color: '#fff0',
              //   textShadowColor: 'rgba(255,255,255,0.8)',
              textShadowOffset: {
                width: 0,
                height: 0,
              },
              textShadowRadius: 10,
              fontSize: 14,
              fontWeight: '600',
              textTransform: 'capitalize',
            }}>
            {data.cnic}
          </Text>
        </View>
        {/* phone Number */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View>
            <Text
              style={{
                color: Color.mainColor,
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
              }}>
              Phone Number
            </Text>
            <Text
              style={{
                color: Color.textColor,
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
              }}>
              {data.phone_number}
            </Text>
          </View>
          <View>
            <Image
              source={require('../../../Images/phne.png')}
              style={{width: 35, height: 35}}
            />
          </View>
        </View>
        {/* Country */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 10,
            gap: 100,
          }}>
          <View>
            <Text
              style={{
                color: Color.mainColor,
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
              }}>
              Country
            </Text>
            <Text
              style={{
                color: Color.textColor,
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
              }}>
              Pakistan
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: Color.mainColor,
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
              }}>
              City
            </Text>
            <Text
              style={{
                color: Color.textColor,
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
              }}>
              Karachi
            </Text>
          </View>
        </View>
        {/* AREA */}
        <View>
          <Text
            style={{
              color: Color.mainColor,
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
            }}>
            Area/District
          </Text>
          <Text
            style={{
              color: Color.textColor,
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
            }}>
            south District
          </Text>
        </View>
        {/* Profession */}
        <View>
          <Text
            style={{
              color: Color.mainColor,
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
            }}>
            Profession
          </Text>
          <Text
            style={{
              color: Color.textColor,
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
            }}>
            plumber
          </Text>
        </View>
        {/* Work Experience */}
        <View>
          <Text
            style={{
              color: Color.mainColor,
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
            }}>
            Work Experience
          </Text>
          <Text
            style={{
              color: Color.textColor,
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
            }}>
            7+
          </Text>
        </View>
        {/* level of Education */}
        <View>
          <Text
            style={{
              color: Color.mainColor,
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
            }}>
            level of Education
          </Text>
          <Text
            style={{
              color: Color.textColor,
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
            }}>
            Intermidate
          </Text>
        </View>
        {/* language */}
        <View style={{marginBottom: 20}}>
          <Text
            style={{
              color: Color.mainColor,
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
            }}>
            Language
          </Text>
          <Text
            style={{
              color: Color.textColor,
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
            }}>
            Urdu
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default EntrepreneurProfile;

const styles = StyleSheet.create({});
