import { FlatList, StyleSheet, Text } from 'react-native';
import React from 'react';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pet } from '../../models/Pet';
import ItemPetList from '../../shared/components/ItemPetList';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'PetsScreen'> {}

const PetsScreen = ({ navigation }: Props) => {
    const DATA_MOCK: Pet[] = [
        {
            conditions: [],
            _id: '649efb38e70ce200082832eb',
            owner: '07878897856995',
            name: 'Princesa',
            chip: '',
            type: 'feline',
            race: 'Común europeo',
            gender: 'female',
            color: 'Negro',
            size: 'small',
            age: 2,
            imageURL: 'https://res.cloudinary.com/deoaxotzs/image/upload/v1631590195/vet-app/pets/feline_ww1mju.png',
            createdAt: '2023-06-30T15:56:40.184Z',
            updatedAt: '2023-06-30T15:56:40.184Z',
        },
    ];

    return (
        <Container>
            <Header title="Mascotas" buttonBack />
            <FlatList
                data={DATA_MOCK}
                renderItem={({ item }) => (
                    <ItemPetList pet={item} onPress={() => navigation.navigate('PetDetailScreen', { pet: item })} />
                )}
                keyExtractor={(item) => item._id}
            />
        </Container>
    );
};

export default PetsScreen;

const styles = StyleSheet.create({});
