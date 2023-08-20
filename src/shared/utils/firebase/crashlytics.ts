import crashlytics from '@react-native-firebase/crashlytics';
import { Platform } from 'react-native';

type AttributesCrash = {
    nameService: string;
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
    appVersion: string;
    platform: any;
};
// { [key: string]: string }

export const logCrash = (message: string, nameService: string, method: 'GET' | 'POST' | 'PATCH' | 'DELETE') => {
    try {
        const params: AttributesCrash = {
            nameService: nameService ?? '',
            method: method,
            appVersion: '0.0.1', //TODO change
            platform: Platform.OS,
        };
        crashlytics().log(message);
        crashlytics().setAttributes(params);
        crashlytics().recordError(new Error(message));
    } catch (error) {
        crashlytics().log('Error in logCrash');
        crashlytics().recordError(new Error('Error in logCrash'));
    }
};

export const forceCrash = () => {
    crashlytics().crash();
};
