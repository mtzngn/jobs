import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

const AuthScreen = ({facebookLogin}) => {

    useEffect(() => {
        facebookLogin()
    }, []);
    
    return (
        <View>
            <Text style={{marginTop: 50}}>It is auth screen</Text>
        </View>
    )

};

export default connect(null, actions)(AuthScreen);