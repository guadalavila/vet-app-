import { useEffect } from 'react';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
const rnBiometrics = new ReactNativeBiometrics();

const useBiometric = () => {
    useEffect(() => {
        initBiometry();
    }, []);

    const initBiometry = async () => {
        const { biometryType, available } = await rnBiometrics.isSensorAvailable();
        if (available) {
        } else {
            console.log('no cuenta con biometria');
        }
    };

    const createKey = () => {
        rnBiometrics.createKeys().then((resultObject) => {
            const { publicKey } = resultObject;
            console.log(publicKey);
            // sendPublicKeyToServer(publicKey);
        });
    };
};

export default useBiometric;
