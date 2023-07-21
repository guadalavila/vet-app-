import React from 'react';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { AuthContextProvider } from './contexts/AuthContext';
import NavigatorApp from './shared/components/NavigatorApp';
import { ToastContextProvider } from './contexts/ToastContext';
import { PathologiesContextProvider } from './contexts/PathologiesContext';

const App = () => {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>
                <ToastContextProvider>
                    <PathologiesContextProvider>
                        <NavigatorApp />
                    </PathologiesContextProvider>
                </ToastContextProvider>
            </AuthContextProvider>
        </ThemeContextProvider>
    );
};

export default App;
