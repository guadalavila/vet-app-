import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigatorLogIn, StackNavigatorLogOut } from './navigations/StackNavigator';
import { ThemeContextProvider } from './contexts/ThemeContext';

const App = () => {
    const [isAuth, setIsAuth] = useState(true);

    return (
        <ThemeContextProvider>
            <NavigationContainer>{isAuth ? <StackNavigatorLogIn /> : <StackNavigatorLogOut />}</NavigationContainer>
        </ThemeContextProvider>
    );
};

export default App;
