import React, { ReactNode, useState } from 'react';
import { colors } from '../shared/utils/colors';
import { typography } from '../shared/utils/typography';
import { ThemeType } from './types/themeType';

export const ThemeContext = React.createContext<{
    theme: 'dark' | 'light';
    setTheme: React.Dispatch<void>;
    themeApp: ThemeType;
}>({
    theme: 'light',
    setTheme: () => {},
    themeApp: { colors: colors.light, typography: typography },
});

interface ThemeContextProviderProps {
    children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<'dark' | 'light'>('light');

    const setThemeApp = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const themeApp = {
        colors: theme === 'light' ? colors.light : colors.dark,
        typography,
    };

    return (
        <ThemeContext.Provider value={{ theme: theme, setTheme: setThemeApp, themeApp: themeApp }}>
            {children}
        </ThemeContext.Provider>
    );
};
