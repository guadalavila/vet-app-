import React from 'react';
import { FlatList } from 'react-native';
import { RootStackLoginParamList } from '~navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '~shared/components/Container';
import Header from '~shared/components/Header';
import useLastVisit from '~shared/hooks/useLastVisits';
import Skeleton from '~shared/components/Skeleton';
import NoData from '~shared/components/NoData';
import ItemLastVisit from '~shared/components/ItemLastVisit';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'VisitsListScreen'> {}

const VisitsListScreen = ({ navigation }: Props) => {
    const { lastVisits, loading } = useLastVisit();

    if (loading) {
        return (
            <Container>
                <Header title='Últimas Visitas' />
                <Skeleton />
            </Container>
        );
    }

    return (
        <Container>
            <Header title='Últimas Visitas' buttonBack />
            {lastVisits.length > 0 ? (
                <FlatList
                    data={lastVisits}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <ItemLastVisit
                            onPress={() => navigation.navigate('VisitsScreen', { id: item.pet._id })}
                            lastVisit={item}
                        />
                    )}
                />
            ) : (
                <NoData title='No se registraron visitas' />
            )}
        </Container>
    );
};

export default VisitsListScreen;
