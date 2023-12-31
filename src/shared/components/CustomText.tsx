import React, { useContext } from 'react';
import { StyleProp, StyleSheet, Text as TextRN, TextStyle } from 'react-native';
import { ThemeContext } from '~contexts/ThemeContext';
import { typography } from '~shared/utils/typography';

interface ICustomTextProps {
    children: React.ReactNode;
    style?: StyleProp<TextStyle> | undefined;
    props?: any;
    testID?: string | undefined;
}
const CustomText = ({ children, style = {}, props = {}, testID }: ICustomTextProps) => {
    const { themeApp } = useContext(ThemeContext);

    return (
        <TextRN
            testID={testID}
            {...props}
            style={[{ color: themeApp.colors.text, fontSize: typography.size.S }, style]}>
            {children}
        </TextRN>
    );
};

export default CustomText;

const styles = StyleSheet.create({});
