import { useContext } from 'react';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../../contexts/AuthContext';
import authServices from '../../services/AuthServices';
import { ToastContext } from '../../contexts/ToastContext';
import { getData, removeMultiple, setMultiData } from '../utils/storage/asyncStorage';
import { STORAGE_KEYS } from '../utils/storage/keys';
import { resetUserProperties, setUserProperties } from '../utils/firebase/analytics';

const useAuth = () => {
    const { setIsAuth, setUser, setIsLoading, isLoading, setUserData, currentUser, userData } = useContext(AuthContext);
    const { setToast } = useContext(ToastContext);

    const restoreUser = async () => {
        setIsLoading(true);
        const user = await getData(STORAGE_KEYS.USER);
        const userData_ = await getData(STORAGE_KEYS.USER_DATA);
        if (user && userData_) {
            setUserProperties({ ...userData_.user });
            setIsAuth(true);
            setUser(user);
            setUserData(userData_);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    };

    const loginWithEmailAndPass = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            const user = await auth().signInWithEmailAndPassword(email, password);
            const data = await authServices.login(email.toLowerCase(), password);
            setUserProperties({ ...data.user });
            await setMultiData([
                [STORAGE_KEYS.USER, user],
                [STORAGE_KEYS.USER_DATA, data],
                [STORAGE_KEYS.TOKEN, data.token],
            ]);
            setIsAuth(true);
            setUser(user);
            setUserData(data);
            setIsLoading(false);
        } catch (error) {
            setToast({
                isError: true,
                message: 'Algunos datos no son correctos',
                type: 'error',
            });
            setIsLoading(false);
        }
    };

    const logout = async () => {
        await removeMultiple([STORAGE_KEYS.TOKEN, STORAGE_KEYS.USER, STORAGE_KEYS.USER_DATA]);
        resetUserProperties();
        setIsAuth(false);
    };

    return { loginWithEmailAndPass, isLoading, logout, restoreUser, currentUser, userData };
};
export default useAuth;
