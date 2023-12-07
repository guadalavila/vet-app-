import axios from 'axios';
import Config from 'react-native-config';
import { appEventsHandler } from '~App';

export const instance = axios.create({
    baseURL: 'https://vet-app-backend-dev.vercel.app/api',
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
        (response) => {
            return response;
        },
        function (error) {
            if (error) {
                if (error.response && error.response?.status === 401) {
                    appEventsHandler.publish('logoutUser', undefined);
                }
                return Promise.reject(error);
            }
            return Promise.reject(error);
        },
    );
};
