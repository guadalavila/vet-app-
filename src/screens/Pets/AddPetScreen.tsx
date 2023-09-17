import React from 'react';
import { StyleSheet } from 'react-native';
import { RootStackLoginParamList } from '~navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '~shared/components/Container';
import Header from '~shared/components/Header';
import NewPetForm from '~shared/components/NewPetForm';
import useAddPet from '~shared/hooks/useAddPet';
import { NewPet, Pet } from '~models/Pet';
import Loading from '~shared/components/Loading';
import useAuth from '~shared/hooks/useAuth';

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
                                vetId: typeof user?.vetId === 'object' ? user.vetId._id : user?.vetId ?? '',
                                client: data.client,
                                name: String(data.name),
                                specie: data.specie,
                                gender: data.gender,
                                size: String(data.size),
                                sterilized: data.sterilized === undefined ? 'false' : data.sterilized,
                                ...data,
                            };
                            createPet(newPet).then((res) => {
                                navigation.replace('PetDetailScreen', { pet: res, getDetail: false, refresh: true });
                            });
                        } else {
                            if (pet) {
                                const createdBy =
                                    typeof pet?.createdBy === 'string' ? pet.createdBy : pet?.createdBy._id;
                                const client = typeof pet?.client === 'string' ? pet.client : pet?.client._id;
                                const updPet: Pet = { ...pet, ...data, createdBy: createdBy, client: client };
                                updatePet(updPet).then((res) => {
                                    navigation.replace('PetDetailScreen', {
                                        pet: res,
                                        getDetail: false,
                                        refresh: true,
                                    });
                                });
                            }
                        }
                    }}
                    initData={pet}
                    onCancel={() => navigation.goBack()}
                />
            )}
        </Container>
    );
};

export default AddPetScreen;

const styles = StyleSheet.create({});
