import React, { useContext, useEffect } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { StackNavigatorLogIn, StackNavigatorLogOut } from '../../navigations/StackNavigator';
import { AuthContext } from '../../contexts/AuthContext';
import { ToastContext } from '../../contexts/ToastContext';
import Toast from './Toast';
import useAuth from '../hooks/useAuth';
import { logScreenView } from '../utils/firebase/analytics';

const NavigatorApp = () => {
    const { isAuth } = useContext(AuthContext);
    const navigationRef = useNavigationContainerRef();

    const { restoreUser } = useAuth();
    const {
        resetToast,
        toast: { isError, message },
    } = useContext(ToastContext);

    useEffect(() => {
        restoreUser();
    }, []);

    const _onStateChange = () => {
        const currentRouteName = navigationRef.getCurrentRoute()?.name;
        if (currentRouteName) logScreenView(currentRouteName);
    };

    return (
        <>
            <NavigationContainer ref={navigationRef} onStateChange={async (_state) => _onStateChange()}>
                {isAuth ? <StackNavigatorLogIn /> : <StackNavigatorLogOut />}
            </NavigationContainer>
            {isError && <Toast type='error' text={message} callback={resetToast} />}
        </>
    );
};

export default NavigatorApp;
