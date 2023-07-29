import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackLoginParamList } from '../../navigations/types';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import NewVaccineForm from '../../shared/components/NewVaccineForm';
import useAddVaccine from '../../shared/hooks/useAddVaccine';
import { NewVaccine, Vaccine } from '../../models/Vaccine';
import useAuth from '../../shared/hooks/useAuth';
import Loading from '../../shared/components/Loading';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddVaccineScreen'> {}

const AddVaccineScreen = ({ route, navigation }: Props) => {
    const { petId, vaccine } = route.params;
    const { createVaccine, updateVaccine, loading } = useAddVaccine();
    const { user } = useAuth();

    return (
        <Container>
            <Header buttonBack title={vaccine ? 'Editar Vacuna' : 'Nueva Vacuna'} />
            {loading ? (
                <Loading />
            ) : (
                <NewVaccineForm
                    onSubmit={(data) => {
                        if (!vaccine) {
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
                        } else {
                            const vaccineUpd: Vaccine = {
                                ...vaccine,
                                ...data,
                                date: vaccine?.date,
                            };
                            updateVaccine(vaccineUpd).then(() => {
                                navigation.replace('VaccinesRegistryScreen', { petId: petId });
                            });
                        }
                    }}
                    initData={vaccine}
                />
            )}
        </Container>
    );
};

export default AddVaccineScreen;
