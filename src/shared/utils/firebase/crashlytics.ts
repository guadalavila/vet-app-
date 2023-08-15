import crashlytics from '@react-native-firebase/crashlytics';

export const logCrash = (message: string) => {
    try {
        crashlytics().log(message);
        crashlytics().recordError(new Error(message));
    } catch (error) {
        crashlytics().log('Error in logCrash');
        crashlytics().recordError(new Error('Error in logCrash'));
    }
};

export const forceCrash = () => {
    crashlytics().crash();
};
