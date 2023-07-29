import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'ReportsScreen'> {}

const ReportsScreen = ({}: Props) => {
    return (
        <Container>
            <Header buttonBack title='Reportes' />
            <Text>ReportScreen</Text>
        </Container>
    );
};

export default ReportsScreen;

const styles = StyleSheet.create({});
