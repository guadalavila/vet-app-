import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import FormInput from './FormInput';
import useForm from '../hooks/useForm';
import Button from './Button';
import Separator from './Separator';
import { colors } from '../utils/colors';

interface INewVisitFormProps {
    onSubmit: (fields: { [fieldName: string]: string | boolean | Date }) => void;
}

const NewVisitForm: React.FC<INewVisitFormProps> = ({ onSubmit }) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm(onSubmit);

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <FormInput
                    required
                    value={fields.weight || ''}
                    placeholder='Peso'
                    onChangeText={(value) => setFieldValue('weight', value)}
                />
                {errors.weight && <Text style={styles.error}>{errors.name}</Text>}
                <FormInput
                    value={fields.temperature || ''}
                    placeholder='Temperatura'
                    onChangeText={(value) => setFieldValue('temperature', value)}
                />
                {errors.temperature && <Text style={styles.error}>{errors.name}</Text>}
                <FormInput
                    isTextArea
                    value={fields.anamnestic || ''}
                    placeholder='Anamnésicos'
                    onChangeText={(value) => setFieldValue('anamnestic', value)}
                />
                {errors.anamnestic && <Text style={styles.error}>{errors.anamnestic}</Text>}
                <FormInput
                    isTextArea
                    value={fields.diagnosis || ''}
                    placeholder='Diagnóstico Diferencial'
                    onChangeText={(value) => setFieldValue('diagnosis', value)}
                />
                {errors.diagnosis && <Text style={styles.error}>{errors.diagnosis}</Text>}
                <FormInput
                    isTextArea
                    value={fields.treatment || ''}
                    placeholder='Tratamiento'
                    onChangeText={(value) => setFieldValue('treatment', value)}
                />
                {errors.treatment && <Text style={styles.error}>{errors.treatment}</Text>}
                <FormInput
                    isTextArea
                    value={fields.hospitalization || ''}
                    placeholder='Hospitalización'
                    onChangeText={(value) => setFieldValue('hospitalization', value)}
                />
                {errors.hospitalization && <Text style={styles.error}>{errors.hospitalization}</Text>}
                <Separator />
            </ScrollView>
            <View style={styles.bottom}>
                <Button title='Agregar Visita' onPress={handleSubmit} />
            </View>
        </>
    );
};

export default NewVisitForm;

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
});
