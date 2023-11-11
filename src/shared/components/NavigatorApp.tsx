import React, { useContext, useEffect } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import {
    StackNavigatorAdmin,
    StackNavigatorAppMaintenance,
    StackNavigatorLogIn,
    StackNavigatorLogOut,
} from '~navigations/StackNavigator';
import { AuthContext } from '~contexts/AuthContext';
import Toast from './Toast';
import useAuth from '../hooks/useAuth';
import { logScreenView } from '~shared/utils/firebase/analytics';
import useError from '../hooks/useError';
import { RemoteConfigContext } from '~contexts/RemoteConfigContext';
import useRemoteConfig from '~shared/hooks/useRemoteConfig';

const NavigatorApp = () => {
    useRemoteConfig();
    const { isAuth, user } = useContext(AuthContext);
    const navigationRef = useNavigationContainerRef();
    const { restoreUser } = useAuth();
    const { error, removeError } = useError();
    const { appInMaintenance } = useContext(RemoteConfigContext);

    useEffect(() => {
        restoreUser();
    }, []);

    const _onStateChange = () => {
        const currentRouteName = navigationRef.getCurrentRoute()?.name;
        if (currentRouteName) logScreenView(currentRouteName);
    };

    if (appInMaintenance) {
        return (
            <NavigationContainer ref={navigationRef} onStateChange={async (_state) => _onStateChange()}>
                <StackNavigatorAppMaintenance />
            </NavigationContainer>
        );
    }

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
