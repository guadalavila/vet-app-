import React, { ReactNode, useState } from 'react';
import { colors } from '~shared/utils/colors';
import { typography } from '~shared/utils/typography';
import { ThemeType } from './types/themeType';
import { STORAGE_KEYS } from '~shared/utils/storage/keys';
import { getData, setData } from '~shared/utils/storage/asyncStorage';

export const ThemeContext = React.createContext<{
    theme: 'dark' | 'light';
    setTheme: React.Dispatch<void>;
    themeApp: ThemeType;
    restoreThemeApp: React.Dispatch<void>;
}>({
    theme: 'dark',
    setTheme: () => {},
    themeApp: { colors: colors.light, typography: typography },
    restoreThemeApp: () => {},
});

interface ThemeContextProviderProps {
    children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    const setThemeApp = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        setData(STORAGE_KEYS.THEME, theme === 'dark' ? 'light' : 'dark');
    };

    const restoreThemeApp = () => {
        getData(STORAGE_KEYS.THEME).then((value) => {
            value && setTheme(value);
        });
    };

    const themeApp = {
        colors: theme === 'light' ? colors.light : colors.dark,
        typography,
    };

    return (
        <ThemeContext.Provider
            value={{ theme: theme, setTheme: setThemeApp, themeApp: themeApp, restoreThemeApp: restoreThemeApp }}>
            {children}
        </ThemeContext.Provider>
    );
};
