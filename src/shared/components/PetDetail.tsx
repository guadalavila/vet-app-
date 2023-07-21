import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pet } from '../../models/Pet';
import { GlobalStyles } from '../utils/styles';
import CardValue from './CardValue';
import { getCodeColor, getPetGender, getPetSize, getPetType } from '../utils/helpers';
import CardCustom from './CardCustom';
import ItemColor from './ItemColor';
import Icon from '../../shared/components/Icon';

interface IPetDetailProps {
    pet: Pet;
}

const PetDetail = ({ pet }: IPetDetailProps) => {
    return (
        <View>
            <View style={[GlobalStyles.rowAround]}>
                <CardValue
                    title='Edad'
                    value={String(pet.age)}
                    valueExtra={pet.age === 1 ? ' año' : ' años'}
                    icon='calendar-outline'
                />
                <CardValue title='Tipo' value={getPetType(pet.type)} icon='paw-outline' />
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
                <CardCustom
                    title='Color'
                    value={pet.color}
                    childExtra={<ItemColor size={22} color={getCodeColor(pet.color)} />}
                />
                <CardValue title='Tamaño' value={getPetSize(pet.size)} icon='trending-up-outline' />
                {/* <CardValue title='Chip' value={pet.chip === '' ? 'Sin chip' : pet.chip} icon='qr-code-outline' /> */}
            </View>
        </View>
    );
};

export default PetDetail;

const styles = StyleSheet.create({});