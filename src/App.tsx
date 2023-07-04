import React from 'react';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { AuthContextProvider } from './contexts/AuthContext';
import NavigatorApp from './shared/components/NavigatorApp';

const App = () => {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>
                <NavigatorApp />
            </AuthContextProvider>
        </ThemeContextProvider>
    );
};

export default App;
