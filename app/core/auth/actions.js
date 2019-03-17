import * as actionTypes from './actionTypes';
import { AsyncStorage } from 'react-native';
import AppConst from '../../config/constants';

const getToken = (token) => ({
    type: actionTypes.AUTH_GET_TOKEN,
    token,
});

const saveToken = token => ({
    type: actionTypes.AUTH_SAVE_TOKEN,
    token
});

const removeToken = () => ({
    type: actionTypes.AUTH_REMOVE_TOKEN,
});

const loading = bool => ({
    type: actionTypes.AUTH_LOADING,
    isLoading: bool,
});

const error = error => ({
    type: actionTypes.AUTH_ERROR,
    error,
});

const getUserToken = () => dispatch =>
    AsyncStorage.getItem(AppConst.TOKEN_KEY)
        .then((data) => {
            dispatch(loading(false));
            dispatch(getToken(data));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })

const saveUserToken = (token) => dispatch =>
    AsyncStorage.setItem(AppConst.TOKEN_KEY, token)
        .then((data) => {
            dispatch(loading(false));
            dispatch(saveToken(token));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })

const removeUserToken = () => dispatch =>
    AsyncStorage.removeItem(AppConst.TOKEN_KEY)
        .then((data) => {
            dispatch(loading(false));
            dispatch(removeToken());
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })

export {
    getUserToken,
    saveUserToken,
    removeUserToken
}