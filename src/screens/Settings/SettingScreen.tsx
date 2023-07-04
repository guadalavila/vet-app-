import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import Container from '../../shared/components/Container';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from '../../shared/components/Header';
import Select from '../../shared/components/Select';
import { ThemeContext } from '../../contexts/ThemeContext';
import Item from '../../shared/components/Item';
import Separator from '../../shared/components/Separator';
import useAuth from '../../shared/hooks/useAuth';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'SettingScreen'> {}

const SettingScreen = ({}: Props) => {
    const { setTheme, theme } = useContext(ThemeContext);
    const { logout } = useAuth();

    return (
        <Container>
            <Header title="Configuración" buttonBack />
            <Separator />
            <Select title={'Modo Oscuro'} selected={theme === 'dark'} onChangeSelect={setTheme} />
            <Item label="Cambiar contraseña" onPress={() => {}} />
            <Item label="Cerrar Sesión" onPress={logout} />
        </Container>
    );
};

export default SettingScreen;

const styles = StyleSheet.create({});
