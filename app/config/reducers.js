import { combineReducers } from "redux";
import authReducer from '../core/auth/reducer';

export default combineReducers({
    auth: authReducer
})