import { useContext } from 'react';
import { AuthContext } from '~contexts/AuthContext';
import authServices from '~services/AuthServices';
import { getData, removeMultiple, setData, setMultiData } from '~shared/utils/storage/asyncStorage';
import { STORAGE_KEYS } from '~shared/utils/storage/keys';
import { resetUserProperties, setUserProperties } from '~shared/utils/firebase/analytics';
import { NewUser, UserResponse } from '~models/User';
import useError from './useError';

const useAuth = () => {
    const { setIsAuth, setUser, setIsLoading, isLoading, user, setToken, logOut, setInitRoute, initRoute } =
        useContext(AuthContext);
    const { setErrorApp } = useError();

    const restoreUser = async () => {
        setIsLoading(true);
        const userCurrent = await getData(STORAGE_KEYS.USER);
        const token = await getData(STORAGE_KEYS.TOKEN);
        const initRoute_ = (await getData(STORAGE_KEYS.INIT_ROUTE)) ?? 'OnBoardingScreen';
        setInitRoute(initRoute_);
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
            setErrorApp({
                isError: true,
                message: String(error),
                type: 'error',
            });
            //add crashlytics
            setIsLoading(false);
        }
    };

    const loginWithEmailAndPass = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            const data = await authServices.login(email, password);
            setUserResponse(data);
        } catch (error) {
            setErrorApp({
                isError: true,
                message: String(error),
                type: 'error',
            });
            setIsLoading(false);
        }
    };

    const getMe = () => {
        try {
            if (user) {
                setIsLoading(true);
                authServices.getMe(user._id).then(async (user_) => {
                    await setData(STORAGE_KEYS.USER, user_);
                    setUser(user_);
                    setIsLoading(false);
                });
            }
        } catch (error) {
            setErrorApp({
                isError: true,
                message: String(error),
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

    return { loginWithEmailAndPass, isLoading, logout, restoreUser, user, signUp, getMe, initRoute };
};
export default useAuth;
