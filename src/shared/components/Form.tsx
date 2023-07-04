import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormInput from './FormInput';
import FormPasswordInput from './FormPasswordInput';
import FormCheckbox from './FormCheckbox';
import useForm from '../hooks/useForm';
import Button from './Button';

interface IFormProps {
    onSubmit: (fields: { [fieldName: string]: string | boolean | Date }) => void;
}

const Form = ({ onSubmit }: IFormProps) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm(onSubmit);

    return (
        <View>
            <FormInput
                value={fields.name || ''}
                placeholder='Nombre'
                onChangeText={(value) => setFieldValue('name', value)}
            />
            {errors.name && <Text style={styles.error}>{errors.name}</Text>}
            <FormInput
                value={fields.email || ''}
                placeholder='Correo electrónico'
                onChangeText={(value) => setFieldValue('email', value)}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <FormPasswordInput
                value={fields.password || ''}
                placeholder='Contraseña'
                onChangeText={(value) => setFieldValue('password', value)}
            />
            {errors.password && <Text style={styles.error}>{errors.password}</Text>}
            <FormCheckbox
                label='Acepto los términos y condiciones'
                value={fields.acceptTerms || false}
                onValueChange={(value) => setFieldValue('acceptTerms', value)}
            />
            {errors.acceptTerms && <Text style={styles.error}>{errors.acceptTerms}</Text>}

            <Button title='Enviar' onPress={handleSubmit} />
        </View>
    );
};

export default Form;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    error: {
        color: 'red',
    },
});
