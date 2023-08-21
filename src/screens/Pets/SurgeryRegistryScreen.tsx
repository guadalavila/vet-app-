import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { RootStackLoginParamList } from '~navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '~shared/components/Container';
import Header from '~shared/components/Header';
import NoData from '~shared/components/NoData';
import Fab from '~shared/components/Fab';
import Loading from '~shared/components/Loading';
import surgeryServices from '~services/SurgeryServices';
import { Surgery } from '~models/Surgery';
import CustomText from '~shared/components/CustomText';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'SurgeryRegistryScreen'> {}

const SurgeryRegistryScreen = ({ navigation, route }: Props) => {
    const [loading, setLoading] = useState(true);
    const [surgeries, setSurgeries] = useState<Surgery[]>([]);

    const { petId } = route.params;

    useEffect(() => {
        getSurgeries();
    }, []);

    const getSurgeries = () => {
        try {
            surgeryServices.getSurgeriesByPet(petId).then((res) => {
                setSurgeries(res);
                setLoading(false);
            });
        } catch (error) {
            setLoading(false);
        }
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
            <Header title='Registro de cirugías' buttonBack />
            {surgeries.length > 0 ? (
                <FlatList
                    data={surgeries}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => <CustomText>sad</CustomText>}
                />
            ) : (
                <NoData title='No se registraron cirugías' />
            )}
            <Fab bottom={60} onPress={() => navigation.navigate('AddSurgeriesScreen', { petId: petId })} />
        </Container>
    );
};

export default SurgeryRegistryScreen;

const styles = StyleSheet.create({});
