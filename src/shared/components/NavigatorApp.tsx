import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigatorLogIn, StackNavigatorLogOut } from '../../navigations/StackNavigator';
import { AuthContext } from '../../contexts/AuthContext';
import { ToastContext } from '../../contexts/ToastContext';
import Toast from './Toast';
import useAuth from '../hooks/useAuth';

const NavigatorApp = () => {
    const { isAuth } = useContext(AuthContext);
    const { restoreUser } = useAuth();
    const {
        resetToast,
        toast: { isError, message },
    } = useContext(ToastContext);

    useEffect(() => {
        restoreUser();
    }, []);

    return (
        <>
            <NavigationContainer>{isAuth ? <StackNavigatorLogIn /> : <StackNavigatorLogOut />}</NavigationContainer>
            {isError && <Toast type='error' text={message} callback={resetToast} />}
        </>
    );
};

export default NavigatorApp;
