import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'ConditionsScreen'> {}

const ConditionsScreen = ({}: Props) => {
    return (
        <Container>
            <Header title='Condiciones' buttonBack />
        </Container>
    );
};

export default ConditionsScreen;

const styles = StyleSheet.create({});
