import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigatorLogIn, StackNavigatorLogOut } from '../../navigations/StackNavigator';
import { AuthContext } from '../../contexts/AuthContext';

const NavigatorApp = () => {
    const { isAuth } = useContext(AuthContext);

    return <NavigationContainer>{isAuth ? <StackNavigatorLogIn /> : <StackNavigatorLogOut />}</NavigationContainer>;
};

export default NavigatorApp;
