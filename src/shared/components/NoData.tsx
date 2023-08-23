import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomText from './CustomText';
import { typography } from '~shared/utils/typography';
import { colors } from '~shared/utils/colors';
import { GlobalStyles } from '~shared/utils/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { size } from '~shared/utils/size';

interface INoDataProps {
    title: string;
    subtitle?: string;
    showIcon?: boolean;
    icon?: string;
}

const NoData = ({ title, subtitle, showIcon = true, icon = 'document-text' }: INoDataProps) => {
    return (
        <View style={GlobalStyles.flexCenter}>
            <CustomText style={styles.title}>{title}</CustomText>
            {subtitle && (
                <View style={styles.containerSubtitle}>
                    <CustomText style={styles.subtitle}>{subtitle}</CustomText>
                </View>
            )}
            {showIcon && (
                <View style={styles.icon}>
                    <Icon testID='icon' name={icon} size={80} color={colors.light.greyDark} />
                </View>
            )}
        </View>
    );
};

export default NoData;

const styles = StyleSheet.create({
    title: {
        fontSize: typography.size.L,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
        color: colors.light.greyDark,
        textAlign: 'center',
        marginHorizontal: size.XL,
    },
    subtitle: {
        fontSize: typography.size.S,
        fontWeight: '500',
        justifyContent: 'center',
        alignSelf: 'center',
        color: colors.light.greyDark,
        textAlign: 'center',
        marginVertical: size.XXXL,
        marginHorizontal: size.L,
    },
    icon: {
        alignSelf: 'center',
        marginTop: size.XXL,
    },
    containerSubtitle: {
        marginVertical: size.XL,
    },
});
