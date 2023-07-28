import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackLoginParamList } from '../../navigations/types';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import NewVaccineForm from '../../shared/components/NewVaccineForm';
import useAddVaccine from '../../shared/hooks/useAddVaccine';
import { NewVaccine } from '../../models/Vaccine';
import useAuth from '../../shared/hooks/useAuth';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddVaccineScreen'> {}

const AddVaccineScreen = ({ route, navigation }: Props) => {
    const { petId } = route.params;
    const { createVaccine } = useAddVaccine();
    const { user } = useAuth();

    return (
        <Container>
            <Header buttonBack title='Nueva Vacuna' />
            <NewVaccineForm
                onSubmit={(data) => {
                    const newVaccine: NewVaccine = {
                        //@ts-ignore
                        date: data.date,
                        createdBy: user?._id ? user._id : '',
                        vetId: user?.vetId ? user.vetId._id : '',
                        pet: petId,
                        name: String(data.name),
                        type: String(data.type),
                        ...data,
                    };
                    createVaccine(newVaccine).then(() =>
                        navigation.replace('VaccinesRegistryScreen', { petId: petId }),
                    );
                }}
            />
        </Container>
    );
};

export default AddVaccineScreen;
