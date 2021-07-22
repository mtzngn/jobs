import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ReviewScreen = ( { navigation }) => {

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
                <Text style={{color: 'rgb(0, 122, 255)',fontSize: 20}}>Settings</Text>
            </TouchableOpacity>
        ),
        
    }};

export default ReviewScreen;