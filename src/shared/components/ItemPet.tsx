import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Pet } from '../../models/Pet';
import { typography } from '../utils/typography';
import { size } from '../utils/size';
import CustomText from './CustomText';

interface IItemPetProps {
    pet: Pet;
}

const ItemPet = ({ pet }: IItemPetProps) => {
    return (
        <TouchableOpacity style={styles.containerPet} activeOpacity={0.7}>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://res.cloudinary.com/deoaxotzs/image/upload/v1631590195/vet-app/pets/feline_ww1mju.png',
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
