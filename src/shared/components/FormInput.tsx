import React, { useContext } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { size } from '../utils/size';
import { ThemeContext } from '../../contexts/ThemeContext';
import CustomText from './CustomText';
import { typography } from '../utils/typography';

interface IFormInputProps {
    value: string;
    placeholder: string;
    helperText?: string;
    onlyNumber?: boolean;
    isTextArea?: boolean;
    required?: boolean;
    onChangeText: (value: string) => void;
}

const FormInput: React.FC<IFormInputProps> = ({
    value,
    placeholder,
    onChangeText,
    helperText,
    onlyNumber = false,
    isTextArea = false,
    required = false,
}) => {
    const { themeApp } = useContext(ThemeContext);
    return (
        <View style={[styles.container, isTextArea ? styles.textArea : styles.inputText]}>
            <CustomText style={styles.label}>
                {placeholder}
                <CustomText>{required ? ' *' : ''}</CustomText>
            </CustomText>
            <TextInput
                autoCorrect={false}
                multiline={isTextArea}
                numberOfLines={isTextArea ? 4 : 2}
                placeholderTextColor={themeApp.colors.border}
                style={[
                    styles.input,
                    isTextArea ? styles.textArea : styles.inputText,
                    { borderColor: themeApp.colors.border, color: themeApp.colors.text },
                ]}
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
            {helperText && (
                <CustomText style={[styles.helperText, { color: themeApp.colors.secondary }]}>{helperText}</CustomText>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: size.XXL,
        marginBottom: size.XL,
    },
    label: {
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        marginTop: size.L,
        paddingHorizontal: size.XL,
        flex: 1,
        paddingVertical: size.XXL,
    },
    textArea: {
        height: 120,
    },
    inputText: {},
    helperText: {
        fontSize: typography.size.XS,
        marginTop: size.S,
    },
});

export default FormInput;
