import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import Container from '../../shared/components/Container';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from '../../shared/components/Header';
import Select from '../../shared/components/Select';
import { ThemeContext } from '../../contexts/ThemeContext';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'SettingScreen'> {}

const SettingScreen = ({}: Props) => {
    const { setTheme, theme } = useContext(ThemeContext);

    return (
        <Container>
            <Header title='Configuración' buttonBack />
            <Select title={'Modo Oscuro'} selected={theme === 'dark'} onChangeSelect={setTheme} />
        </Container>
    );
};

export default SettingScreen;

const styles = StyleSheet.create({});
