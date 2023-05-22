import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Dimensions,
  BackHandler,
} from 'react-native';

import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import {Icon} from 'react-native-vector-icons/Icon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import WebView from 'react-native-webview';
const History = () => {
  const [showWebView, setShowWebView] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  const webViewRef = useRef<any>(null);

  const handlePress = () => {
    console.log('jhello');
    setShowWebView(!showWebView);
    if (currentUrl !== 'https://www.youtube.com/') {
      webViewRef.current.goBack();
    }
  };

  const handleNavigationStateChange = (navState: any) => {
    setCurrentUrl(navState.url);
  };

  const handleBackButtonPress = () => {
    if (showWebView && currentUrl !== 'https://www.youtube.com/') {
      webViewRef.current.goBack();
      return true;
    }
    return false;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButtonPress,
    );

    return () => {
      backHandler.remove();
    };
  }, [showWebView, currentUrl]);
  console.log('showWebView', showWebView);

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          position: 'absolute',
          width: 100,
          bottom: 0,
          right: 0,
          padding: 40,
        }}>
        <Text>Toggle WebView</Text>
      </TouchableOpacity>
      {showWebView ? (
        <WebView
          ref={webViewRef}
          allowsFullscreenVideo={true}
          source={{uri: 'https://www.youtube.com/'}}
          style={{flex: 1}}
          onNavigationStateChange={handleNavigationStateChange}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>This is the "Toggle WebView" screen</Text>
        </View>
      )}
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});
