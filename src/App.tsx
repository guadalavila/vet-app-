import React from 'react';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { AuthContextProvider } from './contexts/AuthContext';
import NavigatorApp from './shared/components/NavigatorApp';
import { ToastContextProvider } from './contexts/ToastContext';
import { ConditionsContextProvider } from './contexts/ConditionsContext';

const App = () => {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>
                <ToastContextProvider>
                    <ConditionsContextProvider>
                        <NavigatorApp />
                    </ConditionsContextProvider>
                </ToastContextProvider>
            </AuthContextProvider>
        </ThemeContextProvider>
    );
};

export default App;
