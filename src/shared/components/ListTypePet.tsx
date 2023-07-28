import React, { useContext } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomText from './CustomText';
import { colors } from '../utils/colors';
import { PetType, TYPE_PET } from '../utils/constants';
import { size } from '../utils/size';
import { ThemeContext } from '../../contexts/ThemeContext';
import { GlobalStyles } from '../utils/styles';

interface IListTypePetProps {
    selected: PetType;
    setSelected: (type: PetType) => void;
}

const ListTypePet = ({ selected, setSelected }: IListTypePetProps) => {
    const { themeApp } = useContext(ThemeContext);
    return (
        <View>
            <CustomText style={styles.label}>
                Especie
                {selected.value !== 'unknown' && <CustomText>: {selected.label}</CustomText>}
            </CustomText>
            <View style={styles.container}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={TYPE_PET}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={0.7}
                            onPress={() => setSelected(item)}
                            style={[
                                {
                                    backgroundColor:
                                        selected.value === item.value
                                            ? themeApp.colors.primaryLight
                                            : themeApp.colors.backgroundContainer,
                                },
                                styles.containerColor,
                                selected.value === item.value ? styles.containerSelected : {},
                            ]}>
                            <Image style={styles.image} source={item.image} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.value}
                />
            </View>
        </View>
    );
};

export default ListTypePet;

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        marginHorizontal: size.XXL,
    },
    container: {
        marginHorizontal: size.XXL,
        marginVertical: size.XXL,
    },
    containerColor: {
        // backgroundColor: colors.light.input,
        marginHorizontal: size.M,
        marginVertical: size.M,
        borderRadius: 20,
        padding: size.M,
    },
    image: {
        width: 30,
        height: 30,
        alignSelf: 'center',
    },
    containerSelected: {
        borderWidth: 1.5,
        borderColor: colors.light.primary,
    },
});
