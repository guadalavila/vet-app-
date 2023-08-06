import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AdministrationScreen'> {}

const AdministrationScreen = () => {
    return (
        <Container>
            <Text>AdministrationScreen</Text>
        </Container>
    );
};

export default AdministrationScreen;

const styles = StyleSheet.create({});
