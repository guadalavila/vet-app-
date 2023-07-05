import React, { ReactNode, useState } from 'react';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { UserData } from '../models/UserData';

export const AuthContext = React.createContext<{
    isAuth: boolean;
    setIsAuth: React.Dispatch<boolean>;
    setUser: React.Dispatch<FirebaseAuthTypes.UserCredential>;
    currentUser: FirebaseAuthTypes.UserCredential | undefined;
    isLoading: boolean;
    setIsLoading: React.Dispatch<boolean>;
    userData: UserData | undefined;
    setUserData: React.Dispatch<UserData>;
}>({
    isAuth: false,
    setIsAuth: () => {},
    setUser: () => {},
    currentUser: undefined,
    isLoading: false,
    setIsLoading: () => {},
    userData: undefined,
    setUserData: () => {},
});

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState<FirebaseAuthTypes.UserCredential | undefined>(undefined);
    const [userData, setUserData] = useState<UserData | undefined>(undefined);

    const setUserApp = (user: FirebaseAuthTypes.UserCredential) => {
        setCurrentUser(user);
    };

    const setAuth = (value: boolean) => {
        setIsAuth(value);
    };

    const setLoading = (value: boolean) => {
        setIsLoading(value);
    };

    const setUser = (user: UserData) => {
        setUserData(user);
    };

    return (
        <AuthContext.Provider
            value={{
                isAuth: isAuth,
                setUser: setUserApp,
                currentUser: currentUser,
                setIsAuth: setAuth,
                isLoading: isLoading,
                setIsLoading: setLoading,
                userData: userData,
                setUserData: setUser,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
