import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~shared/utils/colors';
import { size } from '~shared/utils/size';

interface IFormCheckboxProps {
    label: string;
    value: boolean;
    onValueChange: (newValue: boolean) => void;
}

const FormCheckbox: React.FC<IFormCheckboxProps> = ({ label, value, onValueChange }) => {
    const handlePress = () => onValueChange(!value);

    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={handlePress}>
            <View style={styles.checkbox}>
                {value && (
                    <View>
                        <Icon color={colors.light.success} name='checkmark' size={22} />
                    </View>
                )}
            </View>
            <CustomText>{label}</CustomText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: size.XXL,
        marginVertical: size.XL,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.light.secondary,
        marginRight: size.XL,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default FormCheckbox;
