import React from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides'

const SLIDE_DATA = [
    { text: 'Welcome to JobApp', color: '#03A0F4'},
    { text: 'Set your location, then swipe away', color: '#009688'},
    { text: 'Find your dream Job', color: '#03A9F4'}
];



const WelcomeScreen = ({ navigation }) => {

    const onSlideCompelete = () => {
        navigation.navigate('auth')
    }
    return (
        <View style={{ flex: 1}}>
            <Slides data={SLIDE_DATA} onComplete={onSlideCompelete}  />
        </View>
    )

};

export default WelcomeScreen;


