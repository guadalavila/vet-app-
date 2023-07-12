import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import ItemVisit from '../../shared/components/ItemVisit';
import useVisits from '../../shared/hooks/useVisits';
import Skeleton from '../../shared/components/Skeleton';
import NoData from '../../shared/components/NoData';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'VisitsScreen'> {}

const VisitsScreen = ({ route }: Props) => {
    const { visits, isLoading } = useVisits(route.params.id);

    if (isLoading) {
        return (
            <Container>
                <Header title='Historial Clínico' />
                <Skeleton />
            </Container>
        );
    }

    return (
        <Container>
            <Header title='Historial Clínico' buttonBack />
            {visits.length > 0 ? (
                <FlatList
                    data={visits}
                    renderItem={({ item, index }) => <ItemVisit open={index === 0} visit={item} />}
                    keyExtractor={(item) => item._id}
                />
            ) : (
                <NoData title='No se registraron visitas' />
            )}
        </Container>
    );
};

export default VisitsScreen;
