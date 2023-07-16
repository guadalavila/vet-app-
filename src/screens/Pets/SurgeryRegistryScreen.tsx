import React from 'react';
import { StyleSheet } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import NoData from '../../shared/components/NoData';
import Fab from '../../shared/components/Fab';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'SurgeryRegistryScreen'> {}

const SurgeryRegistryScreen = ({ navigation }: Props) => {
    return (
        <Container>
            <Header title='Registro de cirugías' buttonBack />
            <NoData title='No se registraron cirugías' />
            <Fab bottom={60} onPress={() => navigation.navigate('AddSurgeriesScreen')} />
        </Container>
    );
};

export default SurgeryRegistryScreen;

const styles = StyleSheet.create({});
