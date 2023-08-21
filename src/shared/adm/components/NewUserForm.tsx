import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { GlobalStyles } from '~shared/utils/styles';
import FormInput from '~shared/components/FormInput';
import Button from '~shared/components/Button';
import useForm from '~shared/hooks/useForm';
import { colors } from '~shared/utils/colors';
import { typography } from '~shared/utils/typography';
import { size } from '~shared/utils/size';
import { User } from '~models/User';
import { VetsContext } from '~contexts/VetsContext';
import Dropdown from '~shared/components/Dropdown';

interface INewUserFormProps {
    onSubmit: (fields: { [fieldName: string]: string | boolean | Date }) => void;
    user?: User;
}

const NewUserForm: React.FC<INewUserFormProps> = ({ onSubmit, user }) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm('NewUser', onSubmit);
    const { vetsApp } = useContext(VetsContext);

    useEffect(() => {
        setInitData();
    }, []);

    const setInitData = () => {
        if (Object.entries(Object(user)).length > 0) {
            //@ts-ignore
            const { name, lastName, dni, email, phone, role, vetId } = user;
            name && setFieldValue('name', name);
            lastName && setFieldValue('lastName', lastName);
            dni && setFieldValue('dni', dni);
            email && setFieldValue('email', email);
            phone && setFieldValue('phone', phone);
            role && setFieldValue('role', role);
            vetId?._id && setFieldValue('vetId', vetId._id);
        } else {
            setFieldValue('role', 'user');
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
                    required
                    value={fields.email || ''}
                    placeholder='Email'
                    keyboardType='email-address'
                    onChangeText={(value) => setFieldValue('email', value)}
                />
                <View style={styles.marginDefault}>
                    {errors.email && <Text style={styles.error}>{errors.email}</Text>}
                </View>

                <Dropdown
                    placeholder='Seleccionar Veterinaria'
                    items={vetsApp.map((x) => {
                        return { ...x, value: x.name, label: x.name };
                    })}
                    initValue={typeof user?.vetId === 'object' ? user.vetId.name : user?.vetId}
                    onSelectItem={(select) => {
                        setFieldValue('vetId', select._id);
                    }}
                    setItems={() => {}}
                />
                <View style={styles.marginDefault}>
                    {errors.vetId && <Text style={styles.error}>{errors.vetId}</Text>}
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
                <Button title={'Guardar'} onPress={handleSubmit} />
            </View>
        </View>
    );
};

export default NewUserForm;

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
