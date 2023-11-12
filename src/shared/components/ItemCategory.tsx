import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~shared/utils/colors';
import { size } from '~shared/utils/size';
import { GlobalStyles } from '~shared/utils/styles';
import { typography } from '~shared/utils/typography';

interface IItemCategoryProps {
    title: string;
    data: number;
    icon?: string;
    onPress: () => void;
    height?: number;
    backgroundColor?: string;
}

const ItemCategory = ({
    title,
    onPress,
    icon,
    data,
    height = 250,
    backgroundColor = colors.light.secondary,
}: IItemCategoryProps) => {
    return (
        <TouchableOpacity
            testID='ItemCategory'
            style={[
                GlobalStyles.shadowCard,
                styles.container,
                { height: height, backgroundColor: backgroundColor, borderColor: backgroundColor },
            ]}
            activeOpacity={0.7}
            onPress={onPress}>
            {icon && (
                <View style={[GlobalStyles.selfCenter, styles.containerIcon]}>
                    <Icon testID='icon' name={icon} size={38} color={colors.light.primary} />
                </View>
            )}
            <Text style={[styles.count]}>{data}</Text>
            <Text style={[styles.category]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ItemCategory;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 10,
        margin: size.XS,
        marginHorizontal: size.M,
        marginBottom: size.XXL,
        paddingTop: size.XXL,
        padding: size.S,
        flex: 1,
        justifyContent: 'space-around',
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
        fontSize: typography.size.XXXL,
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: size.XL,
        color: colors.light.light,
    },
});
