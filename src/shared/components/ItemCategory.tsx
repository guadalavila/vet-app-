import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../../contexts/ThemeContext';
import { colors } from '../utils/colors';
import { size } from '../utils/size';
import { GlobalStyles } from '../utils/styles';
import { typography } from '../utils/typography';

interface IItemCategoryProps {
    title: string;
    icon: string;
    onPress: () => void;
}

const ItemCategory = ({ title, onPress, icon }: IItemCategoryProps) => {
    const { themeApp } = useContext(ThemeContext);

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
            <View style={[GlobalStyles.selfCenter, styles.containerIcon]}>
                <Icon name={icon} size={70} color={colors.dark.primary} />
            </View>
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
        marginBottom: size.XL,
    },
    containerIcon: {
        marginBottom: size.L,
    },
});
