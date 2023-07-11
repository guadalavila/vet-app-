import axios from 'axios';
import Config from 'react-native-config';
import { removeMultiple } from '../storage/asyncStorage';
import { STORAGE_KEYS } from '../storage/keys';

export const instance = axios.create({
    baseURL: Config.API_URL,
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        channel: Config.CHANNEL,
    },
});

export const setup = () => {
    instance.interceptors.response.use(
        (next) => {
            return next;
        },
        async function (error) {
            if (error) {
                if (error.response && error.response?.status === 401) {
                    await removeMultiple([STORAGE_KEYS.TOKEN, STORAGE_KEYS.USER, STORAGE_KEYS.USER_DATA]);
                    //TODO desloguearlo dispatch(setLogout());
                }
                return Promise.reject(error);
            }
            return Promise.reject(error);
        },
    );
};
