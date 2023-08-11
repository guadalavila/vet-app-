import React, { ReactNode, useState } from 'react';
import { User } from '../models/User';

export const AuthContext = React.createContext<{
    isAuth: boolean,
    setIsAuth: React.Dispatch<boolean>,
    isLoading: boolean,
    setIsLoading: React.Dispatch<boolean>,
    user: User | undefined,
    setUser: React.Dispatch<User>,
    token: string | undefined,
    setToken: React.Dispatch<string>,
    logOut: React.Dispatch<void>,
    initRoute: 'LoginScreen' | 'OnBoardingScreen',
    setInitRoute: React.Dispatch<'LoginScreen' | 'OnBoardingScreen'>,
}>({
    isAuth: false,
    setIsAuth: () => {},
    isLoading: false,
    setIsLoading: () => {},
    user: undefined,
    setUser: () => {},
    token: undefined,
    setToken: () => {},
    logOut: () => {},
    initRoute: 'OnBoardingScreen',
    setInitRoute: () => {},
});

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<User | undefined>(undefined);
    const [token, setToken] = useState<string | undefined>(undefined);
    const [initRoute, setInitRoute] = useState<'LoginScreen' | 'OnBoardingScreen'>('OnBoardingScreen');

    const setAuth = (value: boolean) => {
        setIsAuth(value);
    };

    const setLoading = (value: boolean) => {
        setIsLoading(value);
    };

    const setUserApp = (user_: User) => {
        setUser(user_);
    };

    const logout = () => {
        setIsAuth(false);
        setUser(undefined);
        setToken(undefined);
    };

    return (
        <AuthContext.Provider
            value={{
                isAuth: isAuth,
                setIsAuth: setAuth,
                isLoading: isLoading,
                setIsLoading: setLoading,
                user: user,
                setUser: setUserApp,
                token: token,
                setToken: setToken,
                logOut: logout,
                initRoute: initRoute,
                setInitRoute: setInitRoute,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
