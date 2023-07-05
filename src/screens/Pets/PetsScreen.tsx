import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ItemPetList from '../../shared/components/ItemPetList';
import usePets from '../../shared/hooks/usePets';
import Skeleton from '../../shared/components/Skeleton';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'PetsScreen'> {}

const PetsScreen = ({ navigation }: Props) => {
    const {
        isLoading,
        dataPets: { pets, count, total },
    } = usePets();

    if (isLoading) {
        return (
            <Container>
                <Header title='Mascotas' />
                <Skeleton />
            </Container>
        );
    }

    return (
        <Container>
            <Header title="Mascotas" buttonBack />
            <FlatList
                data={pets}
                renderItem={({ item }) => (
                    <ItemPetList pet={item} onPress={() => navigation.navigate('PetDetailScreen', { pet: item })} />
                )}
                keyExtractor={(item) => item._id}
            />
        </Container>
    );
};

export default PetsScreen;

const styles = StyleSheet.create({});
