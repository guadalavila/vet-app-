import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import FormInput from './FormInput';
import useForm from '../hooks/useForm';
import { colors } from '../utils/colors';
import Button from './Button';
import { GlobalStyles } from '../utils/styles';

interface ILoginFormProps {
    onSubmit: (fields: { [fieldName: string]: string | boolean | Date }) => void;
}

const LoginForm: React.FC<ILoginFormProps> = ({ onSubmit }) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm(onSubmit);

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
                    required
                    value={fields.password || ''}
                    placeholder='Contraseña'
                    onChangeText={(value) => setFieldValue('password', value)}
                />
                {errors.password && <Text style={styles.error}>{errors.password}</Text>}
            </View>
            <View style={[GlobalStyles.flexCenter, styles.containerButton]}>
                <Button title='Ingresar' onPress={handleSubmit} />
            </View>
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    error: {
        color: colors.light.error,
    },
    bottom: {
        marginTop: 20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    containerInputs: {
        flex: 3,
        justifyContent: 'flex-end',
    },
    containerButton: {
        flex: 2,
    },
});
