import { Theme } from 'react-native-calendars/src/types';
import { typography } from './typography';

const common = {
    // primary: '#FD9340',
    primary: '#917FB3',

    // secondary: '#2A2F4F',
    // tertiary: '#E5BEEC',
    quaternary: '#FDE2F3',
    white: '#FFFFFF',
    black: '#2F2F2F',
    error: '#E74C3C',
    grey: '#EEEEEE',
    greySecondary: '#f5f5f5',
    greyDark: '#A3A3A3',
    whatsapp: '#25d366',
    success: '#4E9F3D',
    teal: '#73B4B0',
};

const light = {
    ...common,
    background: '#FFFFFF',
    text: '#11100F',
    secondary: '#2A2F4F',
    tertiary: '#E5BEEC',
    container: '#f5f4f6',
    separator: '#F1f1f1',
    border: '#2A2F4F',
    input: '#f2f1f6',
    textInput: '#515151',
    bottomSheet: '#F1f1f1',
    card: '#D6D6D6',
    backgroundInput: '#f6f8fe',
};

const dark = {
    ...common,
    background: '#131313',
    text: '#F1F1F1',
    tertiary: '#2A2F4F',
    secondary: '#E5BEEC',
    container: '#222125',
    separator: '#f0f0f0',
    border: '#E5BEEC',
    input: '#4C4C4C',
    textInput: '#DEDEDE',
    bottomSheet: '#71717C',
    card: '#D6D6D6',
    backgroundInput: '#414141',
};

export const colors = { light, dark };

export const THEME_CUSTOM_CALENDAR: Theme = {
    textSectionTitleColor: colors.light.primary,
    textDayHeaderFontSize: typography.size.M,
    calendarBackground: colors.light.grey,
    todayTextColor: colors.light.black,
    arrowHeight: 50,
    textMonthFontSize: typography.size.S,
    textDayHeaderFontWeight: 'bold',
    arrowColor: colors.light.primary,
    dayTextColor: colors.light.black,
    monthTextColor: colors.light.primary,
    selectedDayTextColor: 'white',
    selectedDayBackgroundColor: colors.light.primary,
    textDisabledColor: colors.light.grey,

    // selectedDayBackgroundColor: '#333248',
};
