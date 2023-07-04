import React, { useContext } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { size } from '../utils/size';
import { ThemeContext } from '../../contexts/ThemeContext';
import CustomText from './CustomText';

interface IFormInputProps {
    value: string;
    placeholder: string;
    onlyNumber?: boolean;
    isTextArea?: boolean;
    required?: boolean;
    onChangeText: (value: string) => void;
}

const FormInput: React.FC<IFormInputProps> = ({
    value,
    placeholder,
    onChangeText,
    onlyNumber = false,
    isTextArea = false,
    required = false,
}) => {
    const { themeApp } = useContext(ThemeContext);
    return (
        <View style={styles.container}>
            <CustomText style={styles.label}>
                {placeholder}
                <CustomText>{required ? ' *' : ''}</CustomText>
            </CustomText>
            <TextInput
                autoCorrect={false}
                multiline={isTextArea}
                numberOfLines={isTextArea ? 1 : 4}
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
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: size.L,
        paddingHorizontal: size.XL,
        flex: 1,
    },
    textArea: {
        height: 100,
    },
    inputText: {
        height: 40,
    },
});

export default FormInput;
