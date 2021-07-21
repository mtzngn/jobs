import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

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
        title: "Review Jobs",
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('settings')}>
                <Text>Go to right</Text>
            </TouchableOpacity>
        )
    }};

export default ReviewScreen;