import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import Container from '../../shared/components/Container';
import Button from '../../shared/components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackLoginParamList } from '../../navigations/types';
import { ThemeContext } from '../../contexts/ThemeContext';
import Header from '../../shared/components/Header';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'DashboardScreen'> {}

const DashboardScreen = ({ navigation }: Props) => {
    const { setTheme } = useContext(ThemeContext);
    return (
        <Container>
            <Header title='Home' />
            <Button
                title='Ir a Clientes'
                onPress={() => {
                    // navigation.navigate('ClientsScreen');
                    setTheme();
                }}
            />
            <Button title='Ir a Detalle Cliente' onPress={() => navigation.navigate('ClientDetailScreen')} />
            <Button title='Ir a Mascotas' onPress={() => navigation.navigate('PetsScreen')} />
        </Container>
    );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
