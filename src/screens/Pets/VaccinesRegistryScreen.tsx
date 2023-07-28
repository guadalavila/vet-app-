import React from 'react';
import { StyleSheet } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import NoData from '../../shared/components/NoData';
import Fab from '../../shared/components/Fab';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'VaccinesRegistryScreen'> {}

const VaccinesRegistryScreen = ({ navigation, route }: Props) => {
    const { petId } = route.params;
    return (
        <Container>
            <Header buttonBack title='Registro de vacunas' />
            <NoData title='No se registraron vacunas' />
            <Fab bottom={60} onPress={() => navigation.navigate('AddVaccineScreen', { petId: petId })} />
        </Container>
    );
};

export default VaccinesRegistryScreen;

const styles = StyleSheet.create({});
