import _ from 'lodash';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';
import { AppLoading } from 'expo';

const SLIDE_DATA = [
    { text: 'Welcome to JobApp', color: '#03A0F4'},
    { text: 'Set your location, then swipe away', color: '#009688'},
    { text: 'Find your dream Job', color: '#03A9F4'}
];



const WelcomeScreen = ({ navigation }) => {

    const [token, setToken] = useState(null)


    const onSlideCompelete = () => {
        navigation.navigate('auth')
    }
    // if (_.isNull(token)) return <AppLoading />

    return (
        <View style={{ flex: 1}}>
            <Slides data={SLIDE_DATA} onComplete={onSlideCompelete}  />
        </View>
    )

};

export default WelcomeScreen;


