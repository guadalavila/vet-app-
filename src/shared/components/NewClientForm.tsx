import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FormInput from './FormInput';
import useForm from '../hooks/useForm';
import Button from './Button';
import { colors } from '../utils/colors';
import { GlobalStyles } from '../utils/styles';
import { typography } from '../utils/typography';
import { size } from '../utils/size';

interface INewClientFormProps {
    onSubmit: (fields: { [fieldName: string]: string | boolean | Date }) => void;
}

const NewClientForm: React.FC<INewClientFormProps> = ({ onSubmit }) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm('NewClient', onSubmit);

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
                    value={fields.email || ''}
                    placeholder='Email'
                    keyboardType='email-address'
                    onChangeText={(value) => setFieldValue('email', value)}
                />
                <FormInput
                    required
                    value={fields.phone || '+54'}
                    placeholder='Teléfono'
                    keyboardType='number-pad'
                    helperText='Código de área sin 0'
                    onChangeText={(value) => setFieldValue('phone', value)}
                />
                <View style={styles.marginDefault}>
                    {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
                </View>
                <FormInput
                    value={fields.adress || ''}
                    placeholder='Dirección'
                    onChangeText={(value) => setFieldValue('adress', value)}
                />
                <FormInput
                    isTextArea
                    value={fields.comment || ''}
                    placeholder='Comentario'
                    onChangeText={(value) => setFieldValue('comment', value)}
                />
            </ScrollView>
            <View style={styles.bottom}>
                <Button title='Agregar Cliente' onPress={handleSubmit} />
            </View>
        </View>
    );
};

export default NewClientForm;

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 100,
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
    marginDefault: {
        marginHorizontal: size.XXL,
    },
});
