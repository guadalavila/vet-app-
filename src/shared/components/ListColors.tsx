import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLOR_PET, ColorType } from '~shared/utils/constants';
import { size } from '~shared/utils/size';
import { colors } from '~shared/utils/colors';
import CustomText from './CustomText';
import Icon from 'react-native-vector-icons/Ionicons';

interface IListColorsProps {
    colorPet?: ColorType;
    setColorPet: (item: ColorType) => void;
}

const ListColors = ({ setColorPet, colorPet }: IListColorsProps) => {
    return (
        <View testID='list-colors'>
            <CustomText testID='list-colors--label' style={styles.label}>
                Color: {colorPet?.label}
            </CustomText>
            <View style={styles.container}>
                {COLOR_PET.map((item, index) => (
                    <TouchableOpacity
                        testID={`list-colors--button-${index}`}
                        key={index}
                        activeOpacity={0.7}
                        onPress={() => setColorPet(item)}
                        style={[styles.containerColor, { backgroundColor: item.code }]}>
                        {colorPet?.label === item.label && (
                            <Icon
                                testID='list-colors--icon'
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
        marginHorizontal: size.S,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: size.XXL,
    },
    containerColor: {
        borderRadius: 38,
        width: 38,
        height: 38,
        marginHorizontal: size.L,
        marginBottom: size.XXL,
        borderWidth: 1,
        borderColor: colors.light.black,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: size.XS,
        marginHorizontal: size.XXL,
    },
    icon: {
        alignSelf: 'center',
    },
});
