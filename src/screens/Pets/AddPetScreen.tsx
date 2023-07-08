import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import NewPetForm from '../../shared/components/NewPetForm';
import useAddPet from '../../shared/hooks/useAddPet';
import { NewPet, Pet } from '../../models/Pet';
import Loading from '../../shared/components/Loading';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddPetScreen'> {}

const AddPetScreen = ({ navigation }: Props) => {
    const { createPet, loading } = useAddPet();

    return (
        <Container>
            <Header title='Nueva Mascota' buttonBack />
            {loading ? (
                <Loading />
            ) : (
                <NewPetForm
                    onSubmit={(data) => {
                        const pet_: NewPet = {
                            owner: '',
                            name: String(data.name),
                            age: data.age ? Number(data.age) : 0,
                            chip: data.chip ? String(data.chip) : '',
                            gender: String(data.gender),
                            type: String(data.type),
                            color: String(data.color),
                            race: String(data.race),
                            size: String(data.size),
                            conditions: [],
                        };
                        createPet(pet_).then(() => navigation.navigate('DashboardScreen'));
                    }}
                />
            )}
        </Container>
    );
};

export default AddPetScreen;

const styles = StyleSheet.create({});
