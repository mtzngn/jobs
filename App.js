import React from 'react';
import { Settings, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingScreen from './screens/SettingScreen';
import ReviewScreen from './screens/ReviewScreen';



const MainNavigator = createBottomTabNavigator({
  welcome: WelcomeScreen,
  auth: AuthScreen,
  main: {
    screen: createBottomTabNavigator({
      map: MapScreen,
      deck: DeckScreen,
      review: createStackNavigator({
        reviews: ReviewScreen,
        settings: SettingScreen
      })
    })
  }
})

const App = createAppContainer(MainNavigator);

export default () => {
  return (
    <App />
  );
};