import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from './types';

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
    } else {
        doFacebookLogin();
    }
};

const doFacebookLogin = async () => {
    let { token, type } = await Facebook.logInWithReadPermissionAsync('989598281829329', {
        permissions: ['public_profile']
    });
    if (type === 'cancel') {
        return dispatch({ type: 'FACEBOOK_LOGIN_FAIL'})
    }
};

