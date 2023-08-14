import crashlytics from '@react-native-firebase/crashlytics';

const useCrashlytics = () => {
    const forceCrash = () => {
        crashlytics().crash();
    };

    const logCrash = (message: string) => {
        crashlytics().log(message);
        crashlytics().recordError(new Error(message));
    };

    return { forceCrash, logCrash };
};

export default useCrashlytics;
