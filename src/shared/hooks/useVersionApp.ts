import Config from 'react-native-config';
import VersionApp from '~native-modules/version-app';
import { Platform } from 'react-native';

const useVersionApp = () => {
    const getVersionApp = () => {
        if (Platform.OS === 'android') {
            return Config.VERSION_NAME;
        } else {
            return VersionApp.appVersion;
        }
    };

    return { getVersionApp };
};

export default useVersionApp;
