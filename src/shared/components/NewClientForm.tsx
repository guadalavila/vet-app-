import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FormInput from './FormInput';
import useForm from '../hooks/useForm';
import Button from './Button';
import { colors } from '../utils/colors';
import { GlobalStyles } from '../utils/styles';

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
                {errors.name && <Text style={styles.error}>{errors.name}</Text>}
                <FormInput
                    required
                    value={fields.lastName || ''}
                    placeholder='Apellido'
                    onChangeText={(value) => setFieldValue('lastName', value)}
                />
                {errors.lastName && <Text style={styles.error}>{errors.lastName}</Text>}
                <FormInput
                    required
                    value={fields.dni || ''}
                    placeholder='DNI'
                    helperText='Solo números'
                    onChangeText={(value) => setFieldValue('dni', value)}
                />
                {errors.dni && <Text style={styles.error}>{errors.dni}</Text>}
                <FormInput
                    value={fields.email || ''}
                    placeholder='Email'
                    onChangeText={(value) => setFieldValue('email', value)}
                />
                {errors.email && <Text style={styles.error}>{errors.email}</Text>}
                <FormInput
                    required
                    value={fields.phone || '+54'}
                    placeholder='Teléfono'
                    helperText='Código de área sin 0'
                    onChangeText={(value) => setFieldValue('phone', value)}
                />
                {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
                <FormInput
                    value={fields.adress || ''}
                    placeholder='Dirección'
                    onChangeText={(value) => setFieldValue('adress', value)}
                />
                {errors.adress && <Text style={styles.error}>{errors.adress}</Text>}
                <FormInput
                    isTextArea
                    value={fields.comment || ''}
                    placeholder='Comentario'
                    onChangeText={(value) => setFieldValue('comment', value)}
                />
                {errors.comment && <Text style={styles.error}>{errors.comment}</Text>}
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
    },
    bottom: {
        // marginTop: 20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
});
