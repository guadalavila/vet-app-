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
import { Visit } from '../../models/Visit';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'VisitsScreen'> {}

const VisitsScreen = ({ route, navigation }: Props) => {
    const { visits, isLoading } = useVisits(route.params.id);

    const editVisit = (visit: Visit) => {
        navigation.replace('AddVisitScreen', {
            client: visit.client,
            pet: visit.pet,
            visit: visit,
        });
    };

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
                    renderItem={({ item, index }) => (
                        <ItemVisit open={index === 0} visit={item} editVisit={() => editVisit(item)} />
                    )}
                    keyExtractor={(item) => item._id}
                />
            ) : (
                <NoData title='No se registraron visitas' />
            )}
        </Container>
    );
};

export default VisitsScreen;
