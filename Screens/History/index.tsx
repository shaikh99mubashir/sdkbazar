import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef, useEffect} from 'react';
import {View, TouchableOpacity, Text, BackHandler} from 'react-native';
import {WebView, WebViewNavigation} from 'react-native-webview';

const History = ({navigation}: any) => {
  const webViewRef = useRef<WebView | null>(null);

  // const navigation = useNavigation();

  const backAction = () => {
    webViewRef.current?.goBack();

    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
  }, []);

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{position: 'absolute', zIndex: 1}}>
        <Text style={{color: 'black'}}>Back button</Text>
      </TouchableOpacity>
      <WebView
        ref={webViewRef}
        allowsFullscreenVideo={true}
        source={{uri: 'https://www.youtube.com/'}}
        style={{flex: 1}}
      />
    </View>
  );
};

export default History;
