import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { colors } from '../utils/colors';
import { size } from '../utils/size';
import { typography } from '../utils/typography';

interface IItemCategoryProps {
    title: string;
    onPress: () => void;
}

const ItemCategory = ({ title, onPress }: IItemCategoryProps) => {
    const { themeApp } = useContext(ThemeContext);

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
            <Text style={[styles.category, { color: themeApp.colors.text }]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ItemCategory;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.light.primary,
        borderRadius: 6,
        margin: size.XS,
        marginHorizontal: size.M,
        padding: size.S,
        flex: 1,
    },
    category: {
        fontSize: typography.size.M,
        textAlign: 'center',
        fontWeight: '600',
    },
});
