import React from 'react';
import { StyleSheet } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import NewPetForm from '../../shared/components/NewPetForm';
import useAddPet from '../../shared/hooks/useAddPet';
import { NewPet } from '../../models/Pet';
import Loading from '../../shared/components/Loading';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddPetScreen'> {}

const AddPetScreen = ({ navigation, route }: Props) => {
    const { createPet, loading } = useAddPet();
    const client_ = route.params.client;

    return (
        <Container>
            <Header title='Nueva Mascota' buttonBack />
            {loading ? (
                <Loading />
            ) : (
                <NewPetForm
                    client={client_}
                    onSubmit={(data) => {
                        const pet_: NewPet = {
                            owner: String(data.dni),
                            name: String(data.name),
                            age: data.age ? Number(data.age) : 0,
                            chip: data.chip ? String(data.chip) : '',
                            gender: String(data.gender),
                            type: String(data.type),
                            color: String(data.color),
                            race: data.race ? String(data.race) : 'Otro',
                            size: String(data.size),
                            conditions: data.conditions ? data.conditions : [],
                        };
                        createPet(pet_).then((res) => navigation.navigate('DashboardScreen'));
                    }}
                />
            )}
        </Container>
    );
};

export default AddPetScreen;

const styles = StyleSheet.create({});
