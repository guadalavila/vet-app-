import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import FormInput from './FormInput';
import useForm from '../hooks/useForm';
import Button from './Button';
import { colors } from '../utils/colors';
import { COLOR_PET, CONDITIONS, GENDER, PetType, SIZE_PET, TYPE_PET } from '../utils/constants';
import Dropdown from './Dropdown';
import DropdownMultiple from './DropdownMultiple';
import Select from './Select';
import { GlobalStyles } from '../utils/styles';
import ListColors from './ListColors';
import ListItemsText from './ListItemsText';
import { ItemList } from '../../models/ItemList';
import ListTypePet from './ListTypePet';

interface INewPetFormProps {
    onSubmit: (fields: { [fieldName: string]: string | boolean | Date }) => void;
}

const NewPetForm: React.FC<INewPetFormProps> = ({ onSubmit }) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm(onSubmit);
    const [gender, setGender] = useState(GENDER);
    const [type, setType] = useState<PetType>({
        ...TYPE_PET[TYPE_PET.length - 1],
    });
    const [size, setSize] = useState(SIZE_PET);
    const [color, setColor] = useState(COLOR_PET);
    const [conditions, setConditions] = useState(CONDITIONS);
    const [sterilized, setSterilized] = useState(false);
    const [colorPet, setColorPet] = useState('');
    const [sizePet, setSizePet] = useState<ItemList>({
        label: '',
        value: '',
        code: '',
    });
    const [genderPet, setGenderPet] = useState<ItemList>({
        label: '',
        value: '',
        code: '',
    });

    useEffect(() => {
        console.log({ colorPet });
    }, [colorPet]);

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
                <ListItemsText items={GENDER} item={genderPet} setItem={setGenderPet} placeholder='Seleccione sexo' />
                <ListTypePet selected={type} setSelected={setType} />
                {/* <Dropdown
                    onSelectItem={(value) => setFieldValue('type', value)}
                    zIndex={1000}
                    items={type}
                    setItems={setType}
                    placeholder='Especie'
                /> */}
                <ListColors colorPet={colorPet} setColorPet={setColorPet} />
                <FormInput
                    required
                    value={fields.race || ''}
                    placeholder='Raza'
                    onChangeText={(value) => setFieldValue('race', value)}
                />
                {errors.race && <Text style={styles.error}>{errors.race}</Text>}
                <ListItemsText items={SIZE_PET} item={sizePet} setItem={setSizePet} placeholder='Seleccione porte' />

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
                <Button title='Agregar Mascota' onPress={handleSubmit} />
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
