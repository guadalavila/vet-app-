import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { typography } from '../utils/typography';

interface ISelectProps {
    title: string;
    selected: boolean;
    onChangeSelect: () => void;
}

const Select = ({ title, selected, onChangeSelect }: ISelectProps) => {
    const { themeApp } = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: themeApp.colors.text }]}>{title}</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={onChangeSelect}>
                <Text>kj88k</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Select;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: typography.size.XXXS,
    },
    title: {
        fontSize: typography.size.M,
    },
});
