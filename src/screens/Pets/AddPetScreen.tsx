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
import useAuth from '../../shared/hooks/useAuth';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddPetScreen'> {}

const AddPetScreen = ({ navigation, route }: Props) => {
    const { createPet, loading, updatePet } = useAddPet();
    const client_ = route.params.client;
    const isUpdate = route.params.isUpdate;
    const pet = route.params.pet;
    const { user } = useAuth();

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
                            const newPet: NewPet = {
                                createdBy: user?._id ? user._id : '',
                                vetId: user?.vetId ? user.vetId._id : '',
                                client: data.client,
                                name: String(data.name),
                                specie: data.specie,
                                gender: data.gender,
                                size: String(data.size),
                                sterilized: data.sterilized === undefined ? 'false' : data.sterilized,
                                ...data,
                            };
                            createPet(newPet).then((res) => {
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
