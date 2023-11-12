import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { GlobalStyles } from '~shared/utils/styles';
import FormInput from './FormInput';
import useForm from '~shared/hooks/useForm';
import { size } from '~shared/utils/size';
import { colors } from '~shared/utils/colors';
import { typography } from '~shared/utils/typography';
import Button from './Button';

interface INewBugFormProps {
    onSubmit: (fields: { [fieldName: string]: string | boolean | Date }) => void;
}

const NewBugForm: React.FC<INewBugFormProps> = ({ onSubmit }) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm('NewBug', onSubmit);

    return (
        <View style={GlobalStyles.flex1}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                <FormInput
                    isTextArea
                    required
                    value={fields.text || ''}
                    placeholder='Incidencia'
                    onChangeText={(value) => setFieldValue('text', value)}
                />
                <View style={styles.marginDefault}>
                    {errors.text && <Text style={styles.error}>{errors.text}</Text>}
                </View>
            </ScrollView>
            <View style={styles.bottom}>
                <Button title={'Enviar'} onPress={handleSubmit} />
            </View>
        </View>
    );
};

export default NewBugForm;

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 140,
    },
    marginDefault: {
        marginHorizontal: size.XXL,
    },
    bottom: {
        // marginTop: 20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    error: {
        color: colors.light.error,
        fontSize: typography.size.S,
        marginBottom: size.L,
    },
});
