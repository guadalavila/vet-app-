import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLOR_PET } from '../utils/constants';
import { size } from '../utils/size';
import { colors } from '../utils/colors';
import CustomText from './CustomText';
import Icon from 'react-native-vector-icons/Ionicons';

interface IListColorsProps {
    colorPet: any;
    setColorPet: (item: any) => void;
}

const ListColors = ({ setColorPet, colorPet }: IListColorsProps) => {
    return (
        <View>
            <CustomText style={styles.label}>Seleccione color</CustomText>
            <View style={styles.container}>
                {COLOR_PET.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.7}
                        onPress={() => setColorPet(item)}
                        style={[styles.containerColor, { backgroundColor: item.code }]}>
                        {colorPet?.label === item.label && (
                            <Icon
                                style={styles.icon}
                                name='checkmark-outline'
                                color={item.label !== 'Blanco' ? 'white' : 'black'}
                                size={20}
                            />
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default ListColors;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: size.XXL,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: size.XXL,
    },
    containerColor: {
        borderRadius: 30,
        width: 30,
        height: 30,
        marginHorizontal: size.L,
        marginBottom: size.XXL,
        borderWidth: 1,
        borderColor: colors.light.black,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: size.L,
        marginHorizontal: size.XXL,
    },
    icon: {
        alignSelf: 'center',
    },
});
