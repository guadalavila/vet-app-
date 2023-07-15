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
    const { createPet, loading, updatePet } = useAddPet();
    const client_ = route.params.client;
    const isUpdate = route.params.isUpdate;
    const pet = route.params.pet;

    return (
        <Container>
            <Header title={isUpdate ? 'Actualizar Mascota' : 'Nueva Mascota'} buttonBack />
            {loading ? (
                <Loading />
            ) : (
                <NewPetForm
                    client={client_}
                    onSubmit={(data) => {
                        if (!isUpdate) {
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
                                sterilized: data.sterilized === undefined ? 'false' : data.sterilized,
                            };
                            createPet(pet_).then((res) => {
                                navigation.replace('PetDetailScreen', { pet: res, refresh: true });
                            });
                        } else {
                            const updPet = { ...pet, ...data };
                            updatePet(updPet).then((res) => {
                                navigation.replace('PetDetailScreen', { pet: res, refresh: true });
                            });
                        }
                    }}
                    isUpdate={isUpdate}
                    initData={pet}
                />
            )}
        </Container>
    );
};

export default AddPetScreen;

const styles = StyleSheet.create({});
