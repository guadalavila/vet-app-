import React from 'react';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { AuthContextProvider } from './contexts/AuthContext';
import NavigatorApp from './shared/components/NavigatorApp';
import { ToastContextProvider } from './contexts/ToastContext';

const App = () => {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>
                <ToastContextProvider>
                    <NavigatorApp />
                </ToastContextProvider>
            </AuthContextProvider>
        </ThemeContextProvider>
    );
};

export default App;
