import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import useForm from '../hooks/useForm';
import { GlobalStyles } from '~shared/utils/styles';
import FormInput from './FormInput';
import { colors } from '~shared/utils/colors';
import { typography } from '~shared/utils/typography';
import { size } from '~shared/utils/size';
import Button from './Button';

interface ISignUpFormProps {
    onSubmit: (fields: { [fieldName: string]: string }) => void;
}
const SignUpForm = ({ onSubmit }: ISignUpFormProps) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm('SignUp', onSubmit);
    return (
        <View style={GlobalStyles.flex1}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
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
                    value={fields.dni || ''}
                    placeholder='DNI'
                    keyboardType='number-pad'
                    helperText='Solo números'
                    onChangeText={(value) => setFieldValue('dni', value)}
                />
                <View style={styles.marginDefault}>{errors.dni && <Text style={styles.error}>{errors.dni}</Text>}</View>
                <FormInput
                    required
                    value={fields.email || ''}
                    placeholder='Email'
                    autocomplete='email'
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
                <FormInput
                    value={fields.phone || '+54'}
                    placeholder='Teléfono'
                    keyboardType='number-pad'
                    helperText='Código de área sin 0'
                    onChangeText={(value) => setFieldValue('phone', value)}
                />
                <View style={styles.marginDefault}>
                    {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
                </View>
            </ScrollView>
            <View style={styles.bottom}>
                <Button title='Registrarse' onPress={handleSubmit} />
            </View>
        </View>
    );
};

export default SignUpForm;

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 140,
    },
    error: {
        color: colors.light.error,
        fontSize: typography.size.S,
        marginBottom: size.L,
    },
    bottom: {
        // marginTop: 20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    containerInputs: {
        flex: 10,
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
