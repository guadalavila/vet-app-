import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Title from './Title';
import ItemPetList from './ItemPetList';
import { size } from '~shared/utils/size';
import { Pet } from '~models/Pet';

interface IListPetsProps {
    pets: Pet[];
    onPressPet: (pet: Pet) => void;
}

const ListPets = ({ pets, onPressPet }: IListPetsProps) => {
    return (
        <>
            <Title text={'Mascotas (' + pets.length + ')'} />
            <View style={styles.containerPets}>
                <FlatList
                    style={styles.flatListStyle}
                    data={pets}
                    renderItem={({ item }) => <ItemPetList pet={item} onPress={() => onPressPet(item)} />}
                    keyExtractor={(item) => item._id}
                />
            </View>
        </>
    );
};

export default ListPets;

const styles = StyleSheet.create({
    flatListStyle: {
        marginBottom: size.XXL,
    },
    containerPets: {
        marginHorizontal: size.XXL,
        flex: 1,
    },
});
