import React from 'react';
import { StyleSheet } from 'react-native';
import Container from '~shared/components/Container';
import { AdminTabStackParamList } from '~navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from '~shared/components/Header';
import NewVetForm from '~shared/adm/components/NewVetForm';
import useAddVet from '~shared/adm/hooks/useAddVet';
import Loading from '~shared/components/Loading';
import { NewVeterinary, Veterinary } from '~models/Veterinary';

interface Props extends NativeStackScreenProps<AdminTabStackParamList, 'AddVetScreen'> {}

const AddVetScreen = ({ route, navigation }: Props) => {
    const { loading, addVet, editVet } = useAddVet();
    const vet = route.params.vet;

    return (
        <Container>
            <Header buttonBack title={!vet ? 'Nueva Veterinaria' : 'Editar Veterinaria'} />
            {loading ? (
                <Loading />
            ) : (
                <NewVetForm
                    onSubmit={(data) => {
                        if (!vet) {
                            //@ts-ignore
                            const newVet: NewVeterinary = { ...data, codePostal: Number(data.codePostal) };
                            addVet(newVet).then((res) => {
                                navigation.replace('AddVetScreen', { vet: res });
                            });
                        } else {
                            //@ts-ignore
                            const vet_: Veterinary = { ...vet, ...data, codePostal: Number(data.codePostal) };
                            editVet(vet_).then((res) => {
                                navigation.replace('AddVetScreen', { vet: res });
                            });
                        }
                    }}
                    vet={vet}
                />
            )}
        </Container>
    );
};

export default AddVetScreen;

const styles = StyleSheet.create({});
