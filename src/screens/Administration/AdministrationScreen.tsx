import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { AdminTabStackParamList } from '~navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '~shared/components/Container';
import useAuth from '~shared/hooks/useAuth';
import Header from '~shared/components/Header';
import Separator from '~shared/components/Separator';
import Item from '~shared/components/Item';
import ModalCustom from '~shared/components/ModalCustom';
import Select from '~shared/components/Select';
import { ThemeContext } from '~contexts/ThemeContext';

interface Props extends NativeStackScreenProps<AdminTabStackParamList, 'AdministrationScreen'> {}

const AdministrationScreen = ({ navigation }: Props) => {
    const { logout } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const { setTheme, theme } = useContext(ThemeContext);

    return (
        <Container>
            <Header title='Configuración' />
            <Separator color='transparent' />
            <Item label='Tu perfil' onPress={() => navigation.navigate('ProfileScreen')} />
            <Select title={'Modo Oscuro'} selected={theme === 'dark'} onChangeSelect={setTheme} />

            <Item label='Cerrar Sesión' onPress={() => setShowModal(true)} />
            <ModalCustom
                title='¿Deseas cerrar sesión?'
                visible={showModal}
                confirmButton={'Aceptar'}
                cancelButton='Cancelar'
                onConfirmPressed={logout}
                onCancelPressed={() => setShowModal(false)}
            />
        </Container>
    );
};

export default AdministrationScreen;

const styles = StyleSheet.create({});
