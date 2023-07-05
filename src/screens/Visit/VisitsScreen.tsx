import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import ItemVisit from '../../shared/components/ItemVisit';
import useVisits from '../../shared/hooks/useVisits';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'VisitsScreen'> {}

const VisitsScreen = ({ route }: Props) => {
    const { visits } = useVisits(route.params.id);

    return (
        <Container>
            <Header title="Historia Clínica" buttonBack />
            <FlatList
                data={visits}
                renderItem={({ item }) => <ItemVisit visit={item} />}
                keyExtractor={(item) => item._id}
            />
        </Container>
    );
};

export default VisitsScreen;
