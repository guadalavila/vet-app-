import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '~shared/utils/styles';
import CustomText from './CustomText';
import { size } from '~shared/utils/size';
import { typography } from '~shared/utils/typography';

interface IInfoPetProps {
    label: string;
    info: string;
}
const InfoPet = ({ label, info }: IInfoPetProps) => {
    return (
        <View testID='InfoPet' style={[GlobalStyles.rowBetween, styles.container]}>
            <CustomText style={styles.label}>{label}:</CustomText>
            <CustomText>{info}</CustomText>
        </View>
    );
};

export default InfoPet;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: size.XXL,
        marginVertical: size.L,
    },
    label: {
        fontWeight: 'bold',
        fontSize: typography.size.S,
    },
});
