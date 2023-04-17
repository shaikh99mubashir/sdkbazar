import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import {} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from '../Splash';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const OnBoarding = ({navigation}: any) => {
  const videoSources = [
    {
      source: require('../../Videos/Areyouhungry.mp4'),
      text: 'Are you hungry?',
      buttonText: require('../../Images/eatme.png'),
      skip: 'skip',
    },
    {
      source: require('../../Videos/BeAnEntrepreneur.mp4'),
      text: 'Want to be an entrepreneur?',
      buttonText: require('../../Images/Beginit.png'),
      skip: 'skip',
    },
    {
      source: require('../../Videos/HereisYourSoulmate.mp4'),
      text: 'Here is your soulmate!',
      buttonText: require('../../Images/iamhere.png'),
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);

  const {source, text, buttonText, skip} = videoSources[currentVideoIndex];
  const ONBOARDING_COMPLETED_KEY = 'onboarding_completed';
  const onNextVideo = () => {
    if (currentVideoIndex === videoSources.length - 1) {
      // If this is the last video, mark the onboarding process as completed
      AsyncStorage.setItem(ONBOARDING_COMPLETED_KEY, 'true');
      setOnboardingCompleted(true);
    } else {
      // If there are more videos, increment the index
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const onSkip = () => {
    // Mark the onboarding process as completed
    AsyncStorage.setItem(ONBOARDING_COMPLETED_KEY, 'true');
    setOnboardingCompleted(true);
  };

  useEffect(() => {
    // Check if the onboarding process has already been completed
    AsyncStorage.getItem(ONBOARDING_COMPLETED_KEY).then(value => {
      if (value === 'true') {
        setOnboardingCompleted(true);
      }
    });
  }, []);

  if (onboardingCompleted) {
    // Return a different component (e.g. the app's main screen) if the onboarding process has already been completed
    return <Splash navigation={navigation} />;
  }

  return (
    <View style={styles.container}>
      <Video source={source} style={styles.video} resizeMode="cover" />
      <View style={styles.overlay}>
        <Text style={[styles.text, {textAlign: 'center'}]}>{text}</Text>
        <TouchableOpacity style={{alignItems: 'center'}} onPress={onNextVideo}>
          <Image
            source={buttonText}
            style={{width: 200, height: 80}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}} onPress={onSkip}>
          <Text style={styles.skipButtonText}>{skip}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: width,
    height: height,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  skipButton: {
    backgroundColor: '#2e78b7',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  skipButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
