import crashlytics from '@react-native-firebase/crashlytics';
import { Platform } from 'react-native';
import VersionApp from '../../../native-modules/version-app';
import Config from 'react-native-config';

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
            appVersion: Platform.OS === 'android' ? Config.VERSION_NAME! : VersionApp.appVersion!,
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
