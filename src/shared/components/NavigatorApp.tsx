import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigatorLogIn, StackNavigatorLogOut } from '../../navigations/StackNavigator';
import { AuthContext } from '../../contexts/AuthContext';
import { ToastContext } from '../../contexts/ToastContext';
import Toast from './Toast';

const NavigatorApp = () => {
    const { isAuth } = useContext(AuthContext);
    const {
        resetToast,
        toast: { isError, message },
    } = useContext(ToastContext);

    return (
        <>
            <NavigationContainer>{isAuth ? <StackNavigatorLogIn /> : <StackNavigatorLogOut />}</NavigationContainer>
            {isError && <Toast type='error' text={message} callback={resetToast} />}
        </>
    );
};

export default NavigatorApp;
