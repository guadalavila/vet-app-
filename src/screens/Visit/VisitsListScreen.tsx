import React from 'react';
import { StyleSheet } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'VisitsListScreen'> {}

const VisitsListScreen = ({}: Props) => {
    return (
        <Container>
            <Header title='Visitas' buttonBack />
        </Container>
    );
};

export default VisitsListScreen;

const styles = StyleSheet.create({});
