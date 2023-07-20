import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useForm from '../hooks/useForm';
import { GlobalStyles } from '../utils/styles';
import FormInput from './FormInput';
import { colors } from '../utils/colors';
import { typography } from '../utils/typography';
import { size } from '../utils/size';
import Button from './Button';

interface ISignUpFormProps {
    onSubmit: (fields: { [fieldName: string]: string }) => void;
}
const SignUpForm = ({ onSubmit }: ISignUpFormProps) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm('SignUp', onSubmit);

    return (
        <View style={GlobalStyles.flex1}>
            <View style={styles.containerInputs}>
                <FormInput
                    required
                    value={fields.name || ''}
                    placeholder='Nombre'
                    onChangeText={(value) => setFieldValue('name', value)}
                />
                <View style={styles.marginDefault}>
                    {errors.name && <Text style={styles.error}>{errors.name}</Text>}
                </View>
                <FormInput
                    required
                    value={fields.lastName || ''}
                    placeholder='Apellido'
                    onChangeText={(value) => setFieldValue('lastName', value)}
                />
                <View style={styles.marginDefault}>
                    {errors.lastName && <Text style={styles.error}>{errors.lastName}</Text>}
                </View>
                <FormInput
                    required
                    value={fields.email || ''}
                    placeholder='Email'
                    keyboardType='email-address'
                    onChangeText={(value) => setFieldValue('email', value.toLowerCase())}
                />
                <View style={styles.marginDefault}>
                    {errors.email && <Text style={styles.error}>{errors.email}</Text>}
                </View>
                <FormInput
                    secureTextEntry
                    required
                    value={fields.password || ''}
                    placeholder='Contraseña'
                    onChangeText={(value) => setFieldValue('password', value.trim())}
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

export default SignUpForm;

const styles = StyleSheet.create({
    error: {
        color: colors.light.error,
        fontSize: typography.size.S,
        marginBottom: size.L,
    },
    containerInputs: {
        flex: 5,
        justifyContent: 'center',
    },
    containerButton: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    marginDefault: {
        marginHorizontal: size.XXL,
    },
});
