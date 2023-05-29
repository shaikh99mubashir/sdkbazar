import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';

const PdfViewer = ({route}: any) => {
  const data = route.params;
  console.log('data', data);

  // const source = require('../../../Images/SDK.pdf');
  const source = data ? {uri: data} : require('../../../Images/SDK.pdf');
  console.log('sourec', source);

  return (
    <View style={{flex: 1}}>
      <Pdf
        trustAllCerts={false}
        source={source}
        style={styles.pdf}
        onError={error => console.log('Error:', error)}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
      />
    </View>
  );
};

export default PdfViewer;

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
});
