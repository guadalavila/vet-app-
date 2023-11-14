import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
import { RootStackLoginParamList } from '~navigations/types';
import Container from '~shared/components/Container';
import Header from '~shared/components/Header';
import ItemVisit from '~shared/components/ItemVisit';
import useVisits from '~shared/hooks/useVisits';
import Skeleton from '~shared/components/Skeleton';
import NoData from '~shared/components/NoData';
import { Visit } from '~models/Visit';
import { usePdf } from '~shared/hooks/usePdf';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'VisitsScreen'> {}

const VisitsScreen = ({ route, navigation }: Props) => {
    const { visits, isLoading } = useVisits(route.params.id);
    const createAndDownloadPDF = usePdf();

    const editVisit = (visit: Visit) => {
        navigation.replace('AddVisitScreen', {
            pet: visit.pet,
            visit: visit,
        });
    };

    const onPressButtonRight = () => {
        createAndDownloadPDF('Historial Clínico', route.params.name, visits);
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
            <Header
                title='Historial Clínico'
                buttonBack
                buttonRight
                iconRight='download-outline'
                onPressRight={onPressButtonRight}
            />
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
