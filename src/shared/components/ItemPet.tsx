import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Pet } from '../../models/Pet';
import { typography } from '../utils/typography';
import { size } from '../utils/size';
import CustomText from './CustomText';

interface IItemPetProps {
    pet: Pet;
    onPress: () => void;
}

const ItemPet = ({ pet, onPress }: IItemPetProps) => {
    return (
        <TouchableOpacity style={styles.containerPet} activeOpacity={0.7} onPress={onPress}>
            <Image
                style={styles.image}
                source={{
                    uri: pet.imageURL,
                }}
            />
            <CustomText style={styles.name}>{pet.name}</CustomText>
        </TouchableOpacity>
    );
};

export default ItemPet;

const styles = StyleSheet.create({
    containerPet: {
        borderRadius: 8,
        width: '50%',
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    name: {
        fontSize: typography.size.M,
        textAlign: 'center',
        fontWeight: '600',
        marginVertical: size.M,
    },
});
