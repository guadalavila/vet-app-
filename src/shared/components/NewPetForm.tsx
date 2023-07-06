import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import FormInput from './FormInput';
import useForm from '../hooks/useForm';
import Button from './Button';
import { colors } from '../utils/colors';
import { COLOR_PET, CONDITIONS, GENDER, SIZE_PET, TYPE_PET } from '../utils/constants';
import Dropdown from './Dropdown';
import DropdownMultiple from './DropdownMultiple';
import Select from './Select';
import { GlobalStyles } from '../utils/styles';

interface INewPetFormProps {
    onSubmit: (fields: { [fieldName: string]: string | boolean | Date }) => void;
}

const NewPetForm: React.FC<INewPetFormProps> = ({ onSubmit }) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm(onSubmit);
    const [gender, setGender] = useState(GENDER);
    const [type, setType] = useState(TYPE_PET);
    const [size, setSize] = useState(SIZE_PET);
    const [color, setColor] = useState(COLOR_PET);
    const [conditions, setConditions] = useState(CONDITIONS);
    const [sterilized, setSterilized] = useState(false);

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
                <View style={GlobalStyles.row}>
                    <FormInput
                        width={'43%'}
                        value={fields.age || ''}
                        placeholder='Edad'
                        onChangeText={(value) => setFieldValue('age', value)}
                    />
                    {errors.age && <Text style={styles.error}>{errors.age}</Text>}
                    <FormInput
                        width={'43%'}
                        value={fields.chip || ''}
                        placeholder='Chip'
                        onChangeText={(value) => setFieldValue('chip', value)}
                    />
                    {errors.chip && <Text style={styles.error}>{errors.chip}</Text>}
                </View>
                <Dropdown
                    onSelectItem={(value) => setFieldValue('type', value)}
                    zIndex={1000}
                    items={type}
                    setItems={setType}
                    placeholder='Especie'
                />

                <View style={GlobalStyles.row}>
                    <Dropdown
                        width='43%'
                        onSelectItem={(value) => setFieldValue('size', value)}
                        zIndex={500}
                        items={size}
                        setItems={setSize}
                        placeholder='Porte'
                    />
                    <Dropdown
                        width='43%'
                        onSelectItem={(value) => setFieldValue('gender', value)}
                        zIndex={2000}
                        items={gender}
                        setItems={setGender}
                        placeholder='Sexo'
                    />
                </View>

                <FormInput
                    required
                    value={fields.race || ''}
                    placeholder='Raza'
                    onChangeText={(value) => setFieldValue('race', value)}
                />
                {errors.race && <Text style={styles.error}>{errors.race}</Text>}

                <Dropdown
                    onSelectItem={(value) => setFieldValue('color', value)}
                    zIndex={200}
                    items={color}
                    setItems={setColor}
                    placeholder='Color'
                />
                <DropdownMultiple
                    onSelectItems={(values) => console.log(values)}
                    zIndex={1000}
                    items={conditions}
                    setItems={setConditions}
                    placeholder='Condiciones'
                />
                <Select
                    title='Esterilizado/a'
                    selected={sterilized}
                    onChangeSelect={() => setSterilized(!sterilized)}
                />
            </ScrollView>
            <View style={styles.bottom}>
                <Button title='Agregar Visita' onPress={handleSubmit} />
            </View>
        </View>
    );
};

export default NewPetForm;

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
