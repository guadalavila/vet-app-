import React from 'react';
import { StyleSheet } from 'react-native';
import { AdminTabStackParamList } from '~navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '~shared/components/Container';
import Header from '~shared/components/Header';
import Loading from '~shared/components/Loading';
import useGetVetDetail from '~shared/adm/hooks/useGetVetDetail';

interface Props extends NativeStackScreenProps<AdminTabStackParamList, 'VetDetailScreen'> {}

const VetDetailScreen = ({ route }: Props) => {
    const vetId = route.params.vetId;
    const { loading, pets, clients } = useGetVetDetail(vetId);

    if (loading) {
        return (
            <Container>
                <Header title='Detalle Veterinaria' />
                <Loading />
            </Container>
        );
    }
    return (
        <Container>
            <Header buttonBack title='Detalle Veterinaria' />
        </Container>
    );
};

export default VetDetailScreen;

const styles = StyleSheet.create({});
