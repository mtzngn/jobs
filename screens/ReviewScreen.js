import React from 'react';
import { View, Text } from 'react-native';

const ReviewScreen = ( { navigation }) => {
    console.log(navigation)

    return (
        <View>
            <Text>It is review screen</Text>
        </View>
    )

};

ReviewScreen.navigationOptions = ({ navigation }) => {
    return {
        title: "Review Jobs"
    }};

export default ReviewScreen;