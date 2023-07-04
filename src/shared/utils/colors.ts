const common = {
    primary: '#917FB3',
    // secondary: '#2A2F4F',
    // tertiary: '#E5BEEC',
    quaternary: '#FDE2F3',
    white: '#FFFFFF',
    black: '#000000',
    error: '#E74C3C',
    grey: '#EEEEEE',
    greySecondary: '#f5f5f5',
    greyDark: '#A3A3A3',
    whatsapp: '#25d366',
    success: '#4E9F3D',
};

const light = {
    ...common,
    background: '#f0f0f0',
    text: '#11100F',
    secondary: '#2A2F4F',
    tertiary: '#E5BEEC',
    container: '#f5f4f6',
    separator: '#F1f1f1',
    border: '#2A2F4F',
};

const dark = {
    ...common,
    background: '#2c2c31',
    text: '#F1F1F1',
    tertiary: '#2A2F4F',
    secondary: '#E5BEEC',
    container: '#222125',
    separator: '#f0f0f0',
    border: '#E5BEEC',
};

export const colors = { light, dark };
