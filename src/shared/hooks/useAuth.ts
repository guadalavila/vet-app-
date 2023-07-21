import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import authServices from '../../services/AuthServices';
import { ToastContext } from '../../contexts/ToastContext';
import { getData, removeMultiple, setMultiData } from '../utils/storage/asyncStorage';
import { STORAGE_KEYS } from '../utils/storage/keys';
import { resetUserProperties, setUserProperties } from '../utils/firebase/analytics';
import { NewUser, UserResponse } from '../../models/User';

const useAuth = () => {
    const { setIsAuth, setUser, setIsLoading, isLoading, user, setToken, logOut } = useContext(AuthContext);
    const { setToast } = useContext(ToastContext);

    const restoreUser = async () => {
        setIsLoading(true);
        const userCurrent = await getData(STORAGE_KEYS.USER);
        const token = await getData(STORAGE_KEYS.TOKEN);
        if (userCurrent && token) {
            setUserResponse({ user: userCurrent, token: token });
        } else {
            setIsLoading(false);
        }
    };

    const signUp = (user_: NewUser) => {
        setIsLoading(true);
        try {
            authServices.signUp(user_).then(async (res) => {
                setUserResponse(res);
            });
        } catch (error) {
            setIsLoading(false);
        }
    };

    const loginWithEmailAndPass = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            const data = await authServices.login(email, password);
            setUserResponse(data);
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
        await removeMultiple([STORAGE_KEYS.TOKEN, STORAGE_KEYS.USER]);
        resetUserProperties();
        logOut();
    };

    const setUserResponse = async (data: UserResponse) => {
        await setMultiData([
            [STORAGE_KEYS.USER, data.user],
            [STORAGE_KEYS.TOKEN, data.token],
        ]);
        setUserProperties(data.user);
        setToken(data.token);
        setUser(data.user);
        setIsAuth(true);
        setIsLoading(false);
    };

    return { loginWithEmailAndPass, isLoading, logout, restoreUser, user, signUp };
};
export default useAuth;
