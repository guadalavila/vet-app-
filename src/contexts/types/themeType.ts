export type ThemeType = {
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
        white: string;
        black: string;
        error: string;
        background: string;
        text: string;
        container: string;
        separator: string;
        border: string;
    };
    typography: {
        size: {
            XXXS: number;
            XXS: number;
            XS: number;
            S: number;
            M: number;
            L: number;
            XL: number;
        };
    };
};