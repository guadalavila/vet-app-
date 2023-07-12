import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormInput from './FormInput';
import useForm from '../hooks/useForm';
import { colors } from '../utils/colors';
import Button from './Button';
import { GlobalStyles } from '../utils/styles';
import { typography } from '../utils/typography';
import { size } from '../utils/size';

interface ILoginFormProps {
    onSubmit: (fields: { [fieldName: string]: string }) => void;
}

const LoginForm: React.FC<ILoginFormProps> = ({ onSubmit }) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm('Login', onSubmit);
    return (
        <View style={GlobalStyles.flex1}>
            <View style={styles.containerInputs}>
                <FormInput
                    required
                    value={fields.email || ''}
                    placeholder='Email'
                    keyboardType='email-address'
                    onChangeText={(value) => setFieldValue('email', value)}
                />
                <View style={styles.marginDefault}>
                    {errors.email && <Text style={styles.error}>{errors.email}</Text>}
                </View>
                <FormInput
                    secureTextEntry
                    required
                    value={fields.password || ''}
                    placeholder='Contraseña'
                    onChangeText={(value) => setFieldValue('password', value)}
                />
                <View style={styles.marginDefault}>
                    {errors.password && <Text style={styles.error}>{errors.password}</Text>}
                </View>
            </View>
            <View style={[GlobalStyles.flexCenter, styles.containerButton]}>
                <Button title='Ingresar' onPress={handleSubmit} />
            </View>
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    error: {
        color: colors.light.error,
        fontSize: typography.size.S,
        marginBottom: size.L,
    },
    containerInputs: {
        flex: 3,
        justifyContent: 'flex-end',
    },
    containerButton: {
        flex: 2,
    },
    marginDefault: {
        marginHorizontal: size.XXL,
    },
});
