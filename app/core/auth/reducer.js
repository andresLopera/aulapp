import * as actionsTypes from './actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case actionsTypes.AUTH_GET_TOKEN:
            return { ...state, token: action.token };
        case actionsTypes.AUTH_SAVE_TOKEN:
            return { ...state, token: action.token };
        case actionsTypes.AUTH_REMOVE_TOKEN:
            return { ...state, token: action.token };
        case actionsTypes.AUTH_LOADING:
            return { ...state, loading: action.isLoading };
        case actionsTypes.AUTH_ERROR:
            return { ...state, error: action.error };
        default:
            return state;
    }
}