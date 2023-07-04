import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import { size } from '../utils/size';
import { typography } from '../utils/typography';
import { colors } from '../utils/colors';
import { GlobalStyles } from '../utils/styles';
import Icon from 'react-native-vector-icons/Ionicons';

interface IItemProps {
    label: string;
    onPress: () => void;
}

const Item: React.FC<IItemProps> = ({ label, onPress }) => {
    return (
        <TouchableOpacity style={[styles.container, GlobalStyles.rowBetween]} activeOpacity={0.7} onPress={onPress}>
            <CustomText style={styles.title}>{label}</CustomText>
            <Icon name="chevron-forward-outline" color={colors.light.primary} size={22} />
        </TouchableOpacity>
    );
};

export default Item;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: size.XXL,
        marginVertical: size.XL,
        paddingBottom: size.M,
        paddingTop: size.S,
        borderBottomColor: colors.light.primary,
        borderBottomWidth: 1,
        borderRadius: 2,
    },
    title: {
        fontSize: typography.size.S,
        fontWeight: '600',
    },
});
