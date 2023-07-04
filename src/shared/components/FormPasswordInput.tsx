import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { size } from '../utils/size';

interface IFormPasswordInputProps {
    value: string;
    placeholder: string;
    onChangeText: (value: string) => void;
}

const FormPasswordInput: React.FC<IFormPasswordInputProps> = ({ value, placeholder, onChangeText }) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={value}
                placeholder={placeholder}
                secureTextEntry={!showPassword}
                onChangeText={onChangeText}
            />
            <Text style={styles.toggle} onPress={toggleShowPassword}>
                {showPassword ? 'Ocultar' : 'Mostrar'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: colors.light.secondary,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: size.XL,
        paddingHorizontal: size.XL,
        marginHorizontal: size.XXL,
    },
    toggle: {
        color: colors.light.greyDark,
    },
});

export default FormPasswordInput;
