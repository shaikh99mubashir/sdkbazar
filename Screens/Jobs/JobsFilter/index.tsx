import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../Components/Header';

const JobsFilter = ({navigation}: any) => {
  return (
    <View style={{marginHorizontal: 10}}>
      <Header navigation={navigation} backBtn title="Plumber" close />
      <Text>JobsFilter</Text>
    </View>
  );
};

export default JobsFilter;

const styles = StyleSheet.create({});
