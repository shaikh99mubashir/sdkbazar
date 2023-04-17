import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Color} from '../../../Constants';
import Header from '../../../Components/Header';

const MBPersonDetails = ({route}: any) => {
  const data = route.params;
  console.log('data', data);

  const Intrest = [
    {
      id: 1,
      intrest: 'sdfsd',
    },
    {
      id: 2,
      intrest: 'sdfsd',
    },
    {
      id: 3,
      intrest: 'sdfsd',
    },
    {
      id: 4,
      intrest: 'sdfsd',
    },
    {
      id: 5,
      intrest: 'sdfsd',
    },
    {
      id: 6,
      intrest: 'sdfsd',
    },
  ];
  return (
    <ScrollView>
      <View>
        <Image
          source={require('../../../Images/p1.png')}
          resizeMode="stretch"
          style={{
            width: Dimensions.get('screen').width,
            height: 350,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: Color.white,
          zIndex: 1,
          top: -50,
          width: '100%',
          paddingHorizontal: 10,
          borderTopStartRadius: 40,
          borderTopEndRadius: 40,
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'flex-end',
            marginHorizontal: 20,
            marginVertical: 15,
          }}>
          <Image
            source={require('../../../Images/email.png')}
            style={{width: 35, height: 35}}
          />
          <Image
            source={require('../../../Images/phne.png')}
            style={{width: 35, height: 35}}
          />
        </View>
        <View>
          <Text
            style={{fontSize: 18, color: Color.mainColor, fontWeight: 'bold'}}>
            {data.name}
          </Text>
          <Text style={{color: Color.mainColor, fontSize: 14}}>
            {data.profession}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Text
            style={{fontSize: 18, color: Color.mainColor, fontWeight: 'bold'}}>
            Height
          </Text>
          <Text style={{color: Color.textColor, fontSize: 16}}>{'  '}51</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Text
            style={{fontSize: 18, color: Color.mainColor, fontWeight: 'bold'}}>
            Weight
          </Text>
          <Text style={{color: Color.textColor, fontSize: 16}}>{'  '}51</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Text
            style={{fontSize: 18, color: Color.mainColor, fontWeight: 'bold'}}>
            Body Type
          </Text>
          <Text style={{color: Color.textColor, fontSize: 16}}>{'  '}51</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Text
            style={{fontSize: 18, color: Color.mainColor, fontWeight: 'bold'}}>
            Color Complexion
          </Text>
          <Text style={{color: Color.textColor, fontSize: 16}}>{'  '}51</Text>
        </View>
        <View style={{marginVertical: 5}}>
          <Text
            style={{fontSize: 18, color: Color.mainColor, fontWeight: 'bold'}}>
            About
          </Text>
          <Text style={{color: Color.textColor, fontSize: 16}}>
            dsfdf df dff k fd kdjfg kd fgk dfkg kdf jgk dfg dfk gdf kgkdf gkd
            fgk dfk gkfd g
          </Text>
        </View>
        <View style={{marginVertical: 5}}>
          <Text
            style={{
              fontSize: 18,
              color: Color.mainColor,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Intrests
          </Text>

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 10,
            }}>
            {Intrest &&
              Intrest.map((e: any, i: number) => {
                return (
                  <TouchableOpacity
                    style={{
                      backgroundColor: Color.mainColor,
                      paddingHorizontal: 25,
                      paddingVertical: 10,
                      borderRadius: 20,
                      borderWidth: 1,
                    }}>
                    <Text
                      style={[
                        styles.cancleButtonText,
                        {
                          color: 'white',
                        },
                      ]}>
                      {e.intrest}
                    </Text>
                  </TouchableOpacity>
                );
              })}
          </View>
        </View>

        <View style={{marginVertical: 5}}>
          <Text
            style={{fontSize: 18, color: Color.mainColor, fontWeight: 'bold'}}>
            Pictures
          </Text>
          <View style={{flexDirection: 'row', gap: 10, marginVertical: 10}}>
            <Image
              source={require('../../../Images/p1.png')}
              style={{width: '50%', height: 150}}
            />
            <Image
              source={require('../../../Images/p1.png')}
              style={{width: '48%', height: 150}}
            />
          </View>
          <View style={{flexDirection: 'row', gap: 10, marginVertical: 10}}>
            <Image
              source={require('../../../Images/p1.png')}
              style={{width: '33%', height: 150}}
            />
            <Image
              source={require('../../../Images/p1.png')}
              style={{width: '31%', height: 150}}
            />
            <Image
              source={require('../../../Images/p1.png')}
              style={{width: '31%', height: 150}}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MBPersonDetails;

const styles = StyleSheet.create({
  cancleButtonText: {
    color: Color.mainColor,
    // fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
