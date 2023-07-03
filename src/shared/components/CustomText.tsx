import React, { useContext } from 'react';
import { StyleProp, StyleSheet, Text as TextRN, TextStyle } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';

interface ICustomTextProps {
    children: React.ReactNode;
    style?: StyleProp<TextStyle> | undefined;
    props?: any;
}
const CustomText = ({ children, style = {}, props = {} }: ICustomTextProps) => {
    const { themeApp } = useContext(ThemeContext);

    return (
        <TextRN {...props} style={[{ color: themeApp.colors.text }, style]}>
            {children}
        </TextRN>
    );
};

export default CustomText;

const styles = StyleSheet.create({});
