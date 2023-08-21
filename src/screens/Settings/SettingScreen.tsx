import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Container from '../../shared/components/Container';
import { RootStackLoginParamList } from '~navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from '~shared/components/Header';
import Select from '~shared/components/Select';
import { ThemeContext } from '~contexts/ThemeContext';
import Item from '~shared/components/Item';
import Separator from '~shared/components/Separator';
import useAuth from '~shared/hooks/useAuth';
import ModalCustom from '~shared/components/ModalCustom';
import CustomText from '~shared/components/CustomText';
import useVersionApp from '~shared/hooks/useVersionApp';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'SettingScreen'> {}

const SettingScreen = ({ navigation }: Props) => {
    const { setTheme, theme } = useContext(ThemeContext);
    const { logout } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const { getVersionApp } = useVersionApp();
    return (
        <Container>
            <Header title='Configuración' />
            <Separator color='transparent' />
            <Item label='Tu perfil' onPress={() => navigation.navigate('ProfileScreen')} />
            <Item label='Patologías preexistentes' onPress={() => navigation.navigate('PathologiesScreen')} />
            <Select title={'Modo Oscuro'} selected={theme === 'dark'} onChangeSelect={setTheme} />
            <Item label='Reportes' onPress={() => navigation.navigate('ReportsScreen')} />
            <Item label='Tutorial' onPress={() => navigation.navigate('OnBoardingScreen')} />
            <Item label='Cerrar Sesión' onPress={() => setShowModal(true)} />
            <View style={styles.containerVersionApp}>
                <CustomText style={styles.versionText}>Versión {getVersionApp()}</CustomText>
            </View>
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

export default SettingScreen;

const styles = StyleSheet.create({
    containerVersionApp: {
        position: 'absolute',
        bottom: 120,
        alignSelf: 'center',
    },
    versionText: {
        fontWeight: '600',
    },
});
