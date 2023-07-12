import React, { useContext } from 'react';
import { TextInput, StyleSheet, View, KeyboardType } from 'react-native';
import { size } from '../utils/size';
import { ThemeContext } from '../../contexts/ThemeContext';
import CustomText from './CustomText';
import { typography } from '../utils/typography';
import { colors } from '../utils/colors';

interface IFormInputProps {
    value: string;
    placeholder: string;
    helperText?: string;
    onlyNumber?: boolean;
    isTextArea?: boolean;
    required?: boolean;
    width?: string;
    onChangeText: (value: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: KeyboardType;
}

const FormInput: React.FC<IFormInputProps> = ({
    value,
    placeholder,
    onChangeText,
    helperText,
    width,
    onlyNumber = false,
    isTextArea = false,
    required = false,
    secureTextEntry = false,
    keyboardType,
}) => {
    const { themeApp } = useContext(ThemeContext);
    return (
        <View style={[styles.container, isTextArea ? styles.textArea : styles.inputText, width && { width: width }]}>
            <CustomText style={[isTextArea ? styles.labelTextArea : styles.label]}>
                {placeholder}
                <CustomText>{required ? ' *' : ''}</CustomText>
            </CustomText>
            <TextInput
                secureTextEntry={secureTextEntry}
                focusable
                editable
                autoCorrect={false}
                keyboardType={keyboardType}
                multiline={isTextArea}
                numberOfLines={isTextArea ? 4 : 2}
                placeholderTextColor={themeApp.colors.textInput}
                style={[
                    styles.input,
                    isTextArea ? styles.textArea : styles.inputText,
                    {
                        borderColor: themeApp.colors.backgroundInput,
                        color: themeApp.colors.textInput,
                        backgroundColor: themeApp.colors.backgroundInput,
                    },
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
        marginVertical: size.M,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: size.L,
        marginHorizontal: size.S,
    },
    labelTextArea: {
        fontWeight: 'bold',
        marginHorizontal: size.S,
        paddingTop: size.XXL,
        marginBottom: size.S,
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        marginTop: size.L,
        paddingHorizontal: size.XL,
        paddingVertical: size.XXL,
        marginVertical: size.XL,
        // backgroundColor: 'red',
    },
    textArea: {
        height: 100,
        marginBottom: 50,
    },
    inputText: {
        // height: 100,
    },
    helperText: {
        fontSize: typography.size.XS,
        marginTop: size.S,
    },
});

export default FormInput;
