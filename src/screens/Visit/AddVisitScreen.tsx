import React from 'react';
import { StyleSheet } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddVisitScreen'> {}

const AddVisitScreen = ({}: Props) => {
    return (
        <Container>
            <Header title="Nueva Visita" buttonBack />
        </Container>
    );
};

export default AddVisitScreen;

const styles = StyleSheet.create({});
