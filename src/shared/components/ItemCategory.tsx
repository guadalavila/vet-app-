import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/colors';
import { size } from '../utils/size';
import { GlobalStyles } from '../utils/styles';
import { typography } from '../utils/typography';

interface IItemCategoryProps {
    title: string;
    data: number;
    icon: string;
    onPress: () => void;
}

const ItemCategory = ({ title, onPress, icon, data }: IItemCategoryProps) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
            <View style={[GlobalStyles.selfCenter, styles.containerIcon]}>
                <Icon name={icon} size={38} color={colors.light.primary} />
            </View>
            <Text style={[styles.count]}>{data}</Text>
            <Text style={[styles.category]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ItemCategory;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.light.primary,
        borderRadius: 10,
        margin: size.XS,
        marginHorizontal: size.M,
        paddingTop: size.XXL,
        padding: size.S,
        flex: 1,
        backgroundColor: colors.light.primary,
    },
    category: {
        fontSize: typography.size.M,
        textAlign: 'center',
        fontWeight: '600',
        marginBottom: size.XL,
        color: colors.light.white,
    },
    containerIcon: {
        marginBottom: size.L,
        backgroundColor: colors.light.white,
        borderRadius: 30,
        padding: size.L,
    },
    count: {
        fontSize: typography.size.M,
        textAlign: 'center',
        fontWeight: '500',
        marginVertical: size.XL,
        color: colors.light.secondary,
    },
});
