import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { size } from '../utils/size';
import { ThemeContext } from '../../contexts/ThemeContext';

interface ISeparatorProps {
    color?: string;
}

const Separator = ({ color }: ISeparatorProps) => {
    const { themeApp } = useContext(ThemeContext);
    return <View style={[styles.separator, { borderColor: color ?? themeApp.colors.separator }]} />;
};

export default Separator;

const styles = StyleSheet.create({
    separator: {
        borderWidth: 0.4,
        marginVertical: size.M,
    },
});
