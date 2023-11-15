import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FormInput from './FormInput';
import useForm from '../hooks/useForm';
import { colors } from '~shared/utils/colors';
import Button from './Button';
import { GlobalStyles } from '~shared/utils/styles';
import { typography } from '~shared/utils/typography';
import { size } from '~shared/utils/size';
import { ScrollView } from 'react-native';

interface ILoginFormProps {
    onSubmit: (fields: { [fieldName: string]: string }) => void;
}

const LoginForm: React.FC<ILoginFormProps> = ({ onSubmit }) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm('Login', onSubmit);
    return (
        <View style={GlobalStyles.flex1}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                <Image style={styles.image} source={require('../../../assets/images/login.png')} />

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
                <Button title='Ingresar' onPress={handleSubmit} />
            </ScrollView>
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 140,
    },
    bottom: {
        width: '100%',
    },
    error: {
        color: colors.light.error,
        fontSize: typography.size.S,
        marginBottom: size.L,
    },
    marginDefault: {
        marginHorizontal: size.XXL,
    },
    image: {
        width: 160,
        height: 160,
        alignSelf: 'center',
        marginTop: 120,
    },
});
