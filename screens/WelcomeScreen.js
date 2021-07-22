import React from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides'

const SLIDE_DATA = [
    { text: 'Welcome to JobApp'},
    { text: 'Set your location, then swipe away'}
];

const WelcomeScreen = () => {
    return (
        <View style={{ flex: 1}}>
            <Slides data={SLIDE_DATA} />
        </View>
    )

};

export default WelcomeScreen;