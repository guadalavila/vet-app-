import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import ItemVisit from '../../shared/components/ItemVisit';
import { Visit } from '../../models/Visit';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'VisitsScreen'> {}

const VisitsScreen = ({}: Props) => {
    const DATA_MOCK: Visit[] = [
        {
            _id: '649efb72e70ce200082832f8',
            date: '2023-06-30T15:57:00.000Z',
            client: '42706489',
            pet: '649efb38e70ce200082832eb',
            weight: 2.8,
            temperature: 38,
            anamnestic: 'Tiene pelada la oreja',
            diagnosis: 'Dermatofitosis en oreja izquierda ',
            treatment: 'Macril, se desparasita y lleva pipeta',
            hospitalization: '',
            createdAt: '2023-06-30T15:57:38.547Z',
            updatedAt: '2023-06-30T15:57:38.547Z',
        },
    ];
    return (
        <Container>
            <Header title="Historia Clínica" buttonBack />
            <FlatList
                data={DATA_MOCK}
                renderItem={({ item }) => <ItemVisit visit={item} />}
                keyExtractor={(item) => item._id}
            />
        </Container>
    );
};

export default VisitsScreen;
