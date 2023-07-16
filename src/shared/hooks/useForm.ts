import { useState } from 'react';
import { validateEmail } from '../utils/validations';

interface IFormFields {
    [fieldName: string]: any;
}

interface IFormErrors {
    [fieldName: string]: string;
}

interface IUseFormReturn {
    fields: IFormFields;
    errors: IFormErrors;
    setFieldValue: (fieldName: string, value: any) => void;
    handleSubmit: () => void;
}

const useForm = (
    form: 'NetPet' | 'NewClient' | 'NewVisit' | 'Login' | 'NewSurgeryForm',
    onSubmit: (fields: IFormFields) => void,
): IUseFormReturn => {
    const [fields, setFields] = useState<IFormFields>({});
    const [errors, setErrors] = useState<IFormErrors>({});

    const setFieldValue = (fieldName: string, value: any) => {
        setFields((prevFields) => ({
            ...prevFields,
            [fieldName]: value,
        }));
    };

    const handleSubmit = () => {
        const formErrors: IFormErrors = {};
        // validaciones
        if (form === 'NetPet') {
            validateNewPet();
        } else if (form === 'Login') {
            validateLogin();
        } else if (form === 'NewClient') {
            validateNewClient();
        } else if (form === 'NewVisit') {
            validateNewVisit();
        }
        // setErrors(formErrors);

        // if (Object.keys(formErrors).length === 0) {
        //     console.log('a');
        // } else {
        //     onSubmit(fields);
        // }
    };

    const validateNewPet = () => {
        // if (!fields.dni) {
        //     setErrors({
        //         dni: 'Debes ingresar el DNI',
        //     });
        // } else if (fields.dni && !Number(fields.dni)) {
        //     setErrors({
        //         dni: 'El DNI debe ser un valor numérico',
        //     });
        // } else
        if (!fields.name) {
            setErrors({
                name: 'Debes ingresar el nombre',
            });
        } else if (!fields.age) {
            setErrors({
                age: 'Debes ingresar edad',
            });
        } else if (fields.age && !Number(fields.age)) {
            setErrors({
                age: 'La edad debe ser un valor numérico',
            });
        } else if (!fields.gender) {
            setErrors({
                gender: 'Debes seleccionar un sexo',
            });
        } else if (!fields.type) {
            setErrors({
                type: 'Debes seleccionar una especie',
            });
        } else if (!fields.color) {
            setErrors({
                color: 'Debes seleccionar un color',
            });
        } else if (!fields.size) {
            setErrors({
                size: 'Debes seleccionar un tamaño ',
            });
        } else {
            setErrors({});
            onSubmit(fields);
        }
    };

    const validateLogin = () => {
        if (!fields.email) {
            setErrors({
                email: 'Debes ingresar el email',
            });
        } else if (fields.email && !validateEmail(String(fields.email))) {
            setErrors({
                email: 'El formato del email no es válido',
            });
        } else if (!fields.password) {
            setErrors({
                password: 'Debes ingresar la contraseña',
            });
        } else {
            setErrors({});
            onSubmit(fields);
        }
    };

    const validateNewClient = () => {
        if (!fields.name) {
            setErrors({
                name: 'Debes ingresar el nombre',
            });
        } else if (!fields.lastName) {
            setErrors({
                lastName: 'Debes ingresar un apellido',
            });
        } else if (!fields.dni) {
            setErrors({
                dni: 'Debes ingresar el DNI',
            });
        } else if (fields.dni && !Number(fields.dni)) {
            setErrors({
                dni: 'El DNI debe ser un valor numérico',
            });
        } else if (!fields.phone) {
            setErrors({
                phone: 'Debes ingresar el teléfono',
            });
        } else if (fields.phone && !Number(fields.phone)) {
            setErrors({
                phone: 'El teléfono debe ser un valor numérico',
            });
        } else {
            setErrors({});
            onSubmit(fields);
        }
    };

    const validateNewVisit = () => {
        if (!fields.date) {
            setErrors({
                date: 'Debes ingresar la fecha',
            });
        } else if (!fields.weight) {
            setErrors({
                weight: 'Debes ingresar el peso',
            });
        } else if (fields.weight && !Number(fields.weight)) {
            setErrors({
                weight: 'El peso debe ser un valor numérico',
            });
        } else if (!fields.temperature) {
            setErrors({
                temperature: 'Debes ingresar la temperatura',
            });
        } else if (fields.temperature && !Number(fields.temperature)) {
            setErrors({
                temperature: 'La temperatura debe ser un valor numérico',
            });
        } else if (!fields.anamnestic) {
            setErrors({
                anamnestic: 'Debes ingresar anamnésicos',
            });
        } else {
            setErrors({});
            onSubmit(fields);
        }
    };

    return {
        fields,
        errors,
        setFieldValue,
        handleSubmit,
    };
};

export default useForm;
