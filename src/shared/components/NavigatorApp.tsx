import React, { useContext, useEffect } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { StackNavigatorAdmin, StackNavigatorLogIn, StackNavigatorLogOut } from '../../navigations/StackNavigator';
import { AuthContext } from '../../contexts/AuthContext';
import Toast from './Toast';
import useAuth from '../hooks/useAuth';
import { logScreenView } from '../utils/firebase/analytics';
import useError from '../hooks/useError';

const NavigatorApp = () => {
    const { isAuth, user } = useContext(AuthContext);
    const navigationRef = useNavigationContainerRef();
    const { restoreUser } = useAuth();
    const { error, removeError } = useError();

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
                {isAuth ? (
                    user?.role === 'admin' ? (
                        <StackNavigatorAdmin />
                    ) : (
                        <StackNavigatorLogIn />
                    )
                ) : (
                    <StackNavigatorLogOut />
                )}
            </NavigationContainer>
            {error.isError && <Toast type={error.type ?? 'error'} text={error.message} callback={removeError} />}
        </>
    );
};

export default NavigatorApp;
