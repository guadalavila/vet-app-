import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import FormInput from './FormInput';
import useForm from '../hooks/useForm';
import { colors } from '../utils/colors';
import Button from './Button';
import { GlobalStyles } from '../utils/styles';

interface ILoginFormProps {
    onSubmit: (fields: { [fieldName: string]: string }) => void;
}

const LoginForm: React.FC<ILoginFormProps> = ({ onSubmit }) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm(onSubmit);
    const [validateForm, setValidateForm] = useState(false);

    useEffect(() => {
        if (fields.email === '' || fields.password === '' || (fields.password && fields.password.length >= 6)) {
            setValidateForm(true);
        } else {
            setValidateForm(false);
        }
    }, [fields]);

    return (
        <View style={GlobalStyles.flex1}>
            <View style={styles.containerInputs}>
                <FormInput
                    required
                    value={fields.email || ''}
                    placeholder='Email'
                    onChangeText={(value) => setFieldValue('email', value)}
                />
                {errors.email && <Text style={styles.error}>{errors.email}</Text>}
                <FormInput
                    secureTextEntry
                    required
                    value={fields.password || ''}
                    placeholder='Contraseña'
                    onChangeText={(value) => setFieldValue('password', value)}
                />
                {errors.password && <Text style={styles.error}>{errors.password}</Text>}
            </View>
            <View style={[GlobalStyles.flexCenter, styles.containerButton]}>
                <Button diabled={!validateForm} title='Ingresar' onPress={handleSubmit} />
            </View>
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    error: {
        color: colors.light.error,
    },

    containerInputs: {
        flex: 3,
        justifyContent: 'flex-end',
    },
    containerButton: {
        flex: 2,
    },
});
