import React from 'react';
import { Platform, StyleSheet, TextInput } from 'react-native';
import { colors } from '~shared/utils/colors';
import { size } from '~shared/utils/size';
import { typography } from '~shared/utils/typography';

interface IInputProps {
    placeholder: string;
    value: any;
    setValue: (value: any) => void;
    secureText?: boolean;
}

const Input = ({ placeholder, value, setValue, secureText = false }: IInputProps) => {
    return (
        <TextInput
            testID='textInput'
            placeholder={placeholder}
            style={styles.input}
            value={value}
            placeholderTextColor={colors.light.secondary}
            secureTextEntry={secureText}
            onChangeText={(text) => setValue(text)}
        />
    );
};
export default Input;

const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.light.secondary,
        borderRadius: 10,
        marginVertical: size.S,
        paddingHorizontal: size.L,
        paddingVertical: Platform.OS === 'ios' ? size.XXL : size.L,
        fontSize: typography.size.S,
        marginHorizontal: size.XXL,
        fontWeight: '600',
    },
});
