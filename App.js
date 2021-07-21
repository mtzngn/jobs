import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';


import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';



const MainNavigator = createBottomTabNavigator({
  auth: AuthScreen,
  welcome: WelcomeScreen,
  main: {
    screen: createBottomTabNavigator({
      map: MapScreen,
      deck: DeckScreen
    })
  }
})

const App = createAppContainer(MainNavigator);

export default () => {
  return (
    <App />
  );
};