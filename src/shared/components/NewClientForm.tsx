import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FormInput from './FormInput';
import useForm from '../hooks/useForm';
import Button from './Button';
import { colors } from '~shared/utils/colors';
import { GlobalStyles } from '~shared/utils/styles';
import { typography } from '~shared/utils/typography';
import { size } from '~shared/utils/size';

interface INewClientFormProps {
    onSubmit: (fields: { [fieldName: string]: string | boolean | Date }) => void;
    initData?: { [fieldName: string]: string | boolean | Date };
    onCancel: () => void;
}

const NewClientForm: React.FC<INewClientFormProps> = ({ onSubmit, initData, onCancel }) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm('NewClient', onSubmit);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        setInitData();
    }, []);

    const setInitData = () => {
        if (Object.entries(Object(initData)).length > 0) {
            setIsUpdate(true);
            //@ts-ignore
            const { name, lastName, dni, email, phone, address, comment } = initData;
            name && setFieldValue('name', name);
            lastName && setFieldValue('lastName', lastName);
            dni && setFieldValue('dni', dni);
            email && setFieldValue('email', email);
            phone && setFieldValue('phone', phone);
            address && setFieldValue('address', address);
            comment && setFieldValue('comment', comment);
        }
    };

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
                <View style={styles.marginDefault}>
                    {errors.email && <Text style={styles.error}>{errors.email}</Text>}
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
                <FormInput
                    value={fields.address || ''}
                    placeholder='Dirección'
                    onChangeText={(value) => setFieldValue('address', value)}
                />
                <FormInput
                    isTextArea
                    value={fields.comment || ''}
                    placeholder='Comentario'
                    onChangeText={(value) => setFieldValue('comment', value)}
                />
            </ScrollView>
            <View style={styles.bottom}>
                <Button title={'Guardar'} onPress={handleSubmit} />
                {isUpdate && <Button secondary title={'Cancelar'} onPress={onCancel} />}
            </View>
        </View>
    );
};

export default NewClientForm;

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
    marginDefault: {
        marginHorizontal: size.XXL,
    },
});
