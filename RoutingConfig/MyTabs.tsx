import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Splash from '../Screens/Splash';
import History from '../Screens/History';
import Feedback from '../Screens/Feedback';
import LoginUserProfile from '../Screens/LoginUserProfile';
import {Color} from '../Constants';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: 'black',
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: 'red',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <View>
              {focused == true ? (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    padding: 5,
                    borderRadius: 5,
                  }}>
                  <Image
                    source={require('../Images/Home.png')}
                    resizeMode="contain"
                    style={{
                      height: 30,
                      width: 30,
                      tintColor: focused ? Color.mainColor : Color.textColor,
                    }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../Images/Home.png')}
                    resizeMode="contain"
                    style={{
                      height: 30,
                      width: 30,
                      tintColor: focused ? Color.mainColor : Color.textColor,
                    }}
                  />
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({focused, color}) => (
            <View>
              {focused == true ? (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    padding: 5,
                    borderRadius: 5,
                  }}>
                  <Image
                    source={require('../Images/History.png')}
                    resizeMode="contain"
                    style={{
                      height: 30,
                      width: 30,
                      tintColor: focused ? Color.mainColor : Color.textColor,
                    }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../Images/History.png')}
                    resizeMode="contain"
                    style={{
                      height: 30,
                      width: 30,
                      tintColor: focused ? Color.mainColor : Color.textColor,
                    }}
                  />
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Feedback"
        component={Feedback}
        options={{
          tabBarIcon: ({focused, color}) => (
            <View>
              {focused == true ? (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    padding: 5,
                    borderRadius: 5,
                  }}>
                  <Image
                    source={require('../Images/feedback.png')}
                    resizeMode="contain"
                    style={{
                      height: 30,
                      width: 30,
                      tintColor: focused ? Color.mainColor : Color.textColor,
                    }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../Images/feedback.png')}
                    resizeMode="contain"
                    style={{
                      height: 30,
                      width: 30,
                      tintColor: focused ? Color.mainColor : Color.textColor,
                    }}
                  />
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="LoginUserProfile"
        component={LoginUserProfile}
        options={{
          tabBarIcon: ({focused, color}) => (
            <View>
              {focused == true ? (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    padding: 5,
                    borderRadius: 5,
                  }}>
                  <Image
                    source={require('../Images/profile.png')}
                    resizeMode="contain"
                    style={{
                      height: 30,
                      width: 30,
                      tintColor: focused ? Color.mainColor : Color.textColor,
                    }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../Images/profile.png')}
                    resizeMode="contain"
                    style={{
                      height: 30,
                      width: 30,
                      tintColor: focused ? Color.mainColor : Color.textColor,
                    }}
                  />
                </View>
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;

const styles = StyleSheet.create({
  tabBarStyle: {
    // position: 'absolute',
    borderTopWidth: 0,
    height: 60,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
});
