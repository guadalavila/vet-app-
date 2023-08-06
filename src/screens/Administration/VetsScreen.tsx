import React, { useCallback } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import Container from '../../shared/components/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AdminTabStackParamList } from '../../navigations/types';
import Header from '../../shared/components/Header';
import ItemVet from '../../shared/adm/components/ItemVet';
import Loading from '../../shared/components/Loading';
import useVets from '../../shared/adm/hooks/useVets';
import Title from '../../shared/components/Title';

interface Props extends NativeStackScreenProps<AdminTabStackParamList, 'VetsScreen'> {}

const VetsScreen = ({}: Props) => {
    const { loading, vets, refreshing, refreshVets } = useVets();

    const onRefresh = useCallback(() => {
        refreshVets();
    }, []);

    if (loading || refreshing) {
        return (
            <Container>
                <Header title='Veterinarias' />
                <Loading />
            </Container>
        );
    }

    return (
        <Container>
            <Header title='Veterinarias' />
            <Title text={'Total: ' + vets?.length + ' vets'} />
            <FlatList
                data={vets}
                renderItem={({ item }) => <ItemVet vet={item} onPress={() => {}} />}
                keyExtractor={(item) => item._id}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
            <View style={styles.bottom} />
        </Container>
    );
};

export default VetsScreen;

const styles = StyleSheet.create({
    bottom: {
        height: 55,
        width: '100%',
    },
});
