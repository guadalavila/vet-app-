import { NativeModules } from 'react-native';

const { VersionModule } = NativeModules;

type VersionApp = {
    appVersion: string;
    buildVersion: string;
    bundleIdentifier: string;
};

const VersionApp: VersionApp = {
    appVersion: VersionModule && VersionModule.appVersion,
    buildVersion: VersionModule && VersionModule.buildVersion,
    bundleIdentifier: VersionModule && VersionModule.bundleIdentifier,
};
export default VersionApp;
