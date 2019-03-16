import { AsyncStorage } from 'react-native';
import { axios } from 'axios';
import AppConst from '../config/constants';

export class ApiService {
    API_END_POINT = AppConst.API_END_POINT;

    constructor() {
    }

    get(endPoint, params) {
        let absoluteUrl = `${AppConst.API_END_POINT}/${endPoint}`;
        let headers = this.setHeaders();
        return axios.get(absoluteUrl, {
            ...params,
            ...headers
        });
    }


    setHeader() {
        const userToken = await AsyncStorage.getItem(AppConst.TOKEN_KEY)
        return {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        }
    }


}