import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { RootStackLoginParamList } from '~navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '~shared/components/Container';
import Header from '~shared/components/Header';
import NoData from '~shared/components/NoData';
import Fab from '~shared/components/Fab';
import vaccineServices from '~services/VaccineServices';
import { Vaccine } from '~models/Vaccine';
import Loading from '~shared/components/Loading';
import ItemVaccine from '~shared/components/ItemVaccine';
import useError from '~shared/hooks/useError';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'VaccinesRegistryScreen'> {}

const VaccinesRegistryScreen = ({ navigation, route }: Props) => {
    const [loading, setLoading] = useState(true);
    const [vaccines, setVaccines] = useState<Vaccine[]>([]);
    const { petId } = route.params;
    const { setErrorApp } = useError();

    useEffect(() => {
        getVaccines();
    }, []);

    const getVaccines = () => {
        try {
            vaccineServices.getVaccinesByPet(petId).then((res) => {
                setVaccines(res);
                setLoading(false);
            });
        } catch (error) {
            setErrorApp({
                isError: true,
                message: String(error) ?? 'Obtener vacunas: Ocurrió un error',
                type: 'error',
            });
            setLoading(false);
        }
    };

    const handleEdit = (vaccine: Vaccine) => {
        navigation.replace('AddVaccineScreen', { petId: petId, vaccine: vaccine });
    };

    if (loading) {
        return (
            <Container>
                <Header title='Registro de vacunas' />
                <Loading />
            </Container>
        );
    }
    return (
        <Container>
            <Header buttonBack title='Registro de vacunas' />
            {vaccines.length > 0 ? (
                <FlatList
                    data={vaccines}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => <ItemVaccine vaccine={item} onPress={() => handleEdit(item)} />}
                />
            ) : (
                <NoData title='No se registraron vacunas' />
            )}
            <Fab bottom={60} onPress={() => navigation.navigate('AddVaccineScreen', { petId: petId })} />
        </Container>
    );
};

export default VaccinesRegistryScreen;
