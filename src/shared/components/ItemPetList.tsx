import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Pet } from '../../models/Pet';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomText from './CustomText';
import { size } from '../utils/size';
import { typography } from '../utils/typography';
import { colors } from '../utils/colors';
import { GlobalStyles } from '../utils/styles';
import { getSpeciePet } from '../utils/helpers';

interface IItemPetListProps {
    pet: Pet;
    onPress: () => void;
}

const ItemPetList = ({ pet, onPress }: IItemPetListProps) => {
    return (
        <TouchableOpacity style={[styles.container, GlobalStyles.row]} activeOpacity={0.7} onPress={onPress}>
            <View style={styles.containerIcon}>
                <Icon name='paw-outline' size={30} color={colors.light.white} />
            </View>
            <View>
                <CustomText style={[styles.nameAndLastName]}>{pet.name}</CustomText>
                <CustomText style={[styles.dni]}>{getSpeciePet(pet.specie)}</CustomText>
            </View>
        </TouchableOpacity>
    );
};

export default ItemPetList;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: size.XL,
        paddingVertical: size.M,
        borderBottomColor: colors.light.secondary,
        borderBottomWidth: 1,
    },
    nameAndLastName: {
        fontSize: typography.size.S,
        fontWeight: '600',
    },
    dni: {
        marginVertical: size.M,
    },
    containerIcon: {
        backgroundColor: colors.light.primary,
        borderRadius: 30,
        alignSelf: 'center',
        marginRight: size.XXL,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
