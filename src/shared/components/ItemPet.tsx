import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Pet } from '~models/Pet';
import { typography } from '~shared/utils/typography';
import { size } from '~shared/utils/size';
import CustomText from './CustomText';
import { TYPE_PET } from '~shared/utils/constants';
import { colors } from '~shared/utils/colors';
import { GlobalStyles } from '~shared/utils/styles';

interface IItemPetProps {
    pet: Pet;
    onPress: () => void;
}

const ItemPet = ({ pet, onPress }: IItemPetProps) => {
    return (
        <TouchableOpacity
            testID='ItemPet'
            style={[styles.containerPet, GlobalStyles.shadowCard]}
            activeOpacity={0.7}
            onPress={onPress}>
            <Image style={styles.image} source={TYPE_PET.find((x) => x.value === pet.type)?.image} />
            <CustomText style={styles.name}>{pet.name.split(' ')[0]}</CustomText>
        </TouchableOpacity>
    );
};

export default ItemPet;

const styles = StyleSheet.create({
    containerPet: {
        backgroundColor: colors.light.primaryLight,
        borderRadius: 10,
        width: 100,
        height: 100,
        marginHorizontal: size.S,
        marginVertical: size.M,
    },
    image: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        marginTop: size.M,
    },
    name: {
        fontSize: typography.size.M,
        textAlign: 'center',
        fontWeight: '600',
        color: colors.light.secondary,
        marginVertical: size.M,
    },
});
