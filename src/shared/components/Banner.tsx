import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '~shared/utils/colors';
import { size } from '~shared/utils/size';
import CustomText from './CustomText';

interface IBannerProps {
    text: string;
}

const Banner = ({ text }: IBannerProps) => {
    return (
        <View style={styles.containerInformation}>
            <CustomText style={styles.textInformation}>{text}</CustomText>
        </View>
    );
};

export default Banner;

const styles = StyleSheet.create({
    containerInformation: {
        width: '94%',
        backgroundColor: colors.light.primaryLight,
        borderRadius: 10,
        alignSelf: 'center',
        paddingHorizontal: size.XXL,
        paddingVertical: size.XXL,
        borderLeftWidth: 8,
        borderLeftColor: colors.light.primary,
        marginBottom: size.XL,
    },
    textInformation: {
        fontWeight: '600',
        color: colors.light.black,
    },
});
