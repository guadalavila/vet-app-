import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { GlobalStyles } from '../../utils/styles';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import { colors } from '../../utils/colors';
import { typography } from '../../utils/typography';
import { size } from '../../utils/size';
import { Veterinary } from '../../../models/Veterinary';

interface INewVetFormProps {
    onSubmit: (fields: { [fieldName: string]: string | boolean | Date }) => void;
    vet?: Veterinary;
}

const NewVetForm: React.FC<INewVetFormProps> = ({ onSubmit, vet }) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm('NewVet', onSubmit);

    useEffect(() => {
        setInitData();
    }, []);

    const setInitData = () => {
        if (Object.entries(Object(vet)).length > 0) {
            //@ts-ignore
            const { name, address, codePostal, city } = vet;
            name && setFieldValue('name', name);
            address && setFieldValue('address', address);
            city && setFieldValue('city', city);
            codePostal && setFieldValue('codePostal', String(codePostal));
        }
    };

    return (
        <View style={GlobalStyles.flex1}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                <FormInput
                    required
                    value={fields.name || ''}
                    placeholder='Nombre Veterinaria'
                    onChangeText={(value) => setFieldValue('name', value)}
                />
                <View style={styles.marginDefault}>
                    {errors.name && <Text style={styles.error}>{errors.name}</Text>}
                </View>
                <FormInput
                    required
                    value={fields.address || ''}
                    placeholder='Dirección'
                    onChangeText={(value) => setFieldValue('address', value)}
                />
                <View style={styles.marginDefault}>
                    {errors.address && <Text style={styles.error}>{errors.address}</Text>}
                </View>
                <FormInput
                    required
                    value={fields.city || ''}
                    placeholder='Ciudad'
                    onChangeText={(value) => setFieldValue('city', value)}
                />
                <View style={styles.marginDefault}>
                    {errors.city && <Text style={styles.error}>{errors.city}</Text>}
                </View>
                <FormInput
                    required
                    value={fields.codePostal || ''}
                    placeholder='Código Postal'
                    keyboardType='number-pad'
                    helperText='Solo números'
                    onChangeText={(value) => setFieldValue('codePostal', value)}
                />
                <View style={styles.marginDefault}>
                    {errors.codePostal && <Text style={styles.error}>{errors.codePostal}</Text>}
                </View>
            </ScrollView>
            <View style={styles.bottom}>
                <Button title={'Guardar'} onPress={handleSubmit} />
            </View>
        </View>
    );
};

export default NewVetForm;

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
