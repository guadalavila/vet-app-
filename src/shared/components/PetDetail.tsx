import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Pet } from '~models/Pet';
import { GlobalStyles } from '~shared/utils/styles';
import CardValue from './CardValue';
import { getCodeColor, getPetGender, getPetSize, getSpeciePet } from '~shared/utils/helpers';
import CardCustom from './CardCustom';
import ItemColor from './ItemColor';
import Icon from './Icon';

interface IPetDetailProps {
    pet: Pet;
}

const PetDetail = ({ pet }: IPetDetailProps) => {
    const normalizeAge = (age: number): number => {
        let value = 0;
        age < 1 ? (value = Number(String(age).split('.')[1])) : (value = age);
        return value;
    };

    const normalizeExtra = (age: number): string => {
        let value = '';
        if (age > 0) {
            if (age < 1) {
                const months = Number(String(age).split('.')[1]);
                value = `${months === 1 ? ' mes' : ' meses'}`;
            } else {
                age === 1 ? (value = ' año') : (value = ' años');
            }
        } else {
            value = '-';
        }
        return value;
    };

    return (
        <View>
            <View style={[GlobalStyles.rowAround]}>
                {pet.age ? (
                    <CardValue
                        title='Edad'
                        value={normalizeAge(pet.age)}
                        valueExtra={normalizeExtra(pet.age)}
                        icon='calendar-outline'
                    />
                ) : (
                    <CardValue title='Edad' value={'-'} icon='calendar-outline' />
                )}
                <CardValue title='Especie' value={getSpeciePet(pet.specie)} icon='paw-outline' />
                <CardCustom
                    title='Sexo'
                    value={getPetGender(pet.gender)}
                    childExtra={
                        <Icon
                            type='MaterialCommunityIcons'
                            name={pet.gender === 'male' ? 'gender-male' : 'gender-female'}
                            color='white'
                        />
                    }
                />
            </View>
            <View style={[GlobalStyles.rowAround]}>
                <CardValue title='¿Está Castrado?' value={pet.sterilized ? 'Si' : 'No'} icon='bandage-outline' />
                {pet.color && (
                    <CardCustom
                        title='Color'
                        value={pet.color}
                        childExtra={<ItemColor size={22} color={getCodeColor(pet.color)} />}
                    />
                )}
                <CardValue title='Tamaño' value={getPetSize(pet.size)} icon='trending-up-outline' />
                {/* <CardValue title='Chip' value={pet.chip === '' ? 'Sin chip' : pet.chip} icon='qr-code-outline' /> */}
            </View>
        </View>
    );
};

export default PetDetail;

const styles = StyleSheet.create({});
