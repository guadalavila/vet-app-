import { useState } from 'react';

interface IFormFields {
    [fieldName: string]: string;
}

interface IFormErrors {
    [fieldName: string]: string;
}

interface IUseFormReturn {
    fields: IFormFields;
    errors: IFormErrors;
    setFieldValue: (fieldName: string, value: string) => void;
    handleSubmit: () => void;
}

const useForm = (
    form: 'NetPet' | 'NewClient' | 'NewVisit' | 'Login',
    onSubmit: (fields: IFormFields) => void,
): IUseFormReturn => {
    const [fields, setFields] = useState<IFormFields>({});
    const [errors, setErrors] = useState<IFormErrors>({});

    const setFieldValue = (fieldName: string, value: string) => {
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
        }
        // setErrors(formErrors);

        // if (Object.keys(formErrors).length === 0) {
        //     console.log('a');
        // } else {
        //     onSubmit(fields);
        // }
    };

    const validateNewPet = () => {
        if (!fields.name) {
            setErrors({
                name: 'Debes ingresar el nombre',
            });
        } else if (!fields.age) {
            setErrors({
                age: 'Debes ingresar edad',
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

    return {
        fields,
        errors,
        setFieldValue,
        handleSubmit,
    };
};

export default useForm;
