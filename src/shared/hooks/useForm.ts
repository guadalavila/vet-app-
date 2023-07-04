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

const useForm = (onSubmit: (fields: IFormFields) => void): IUseFormReturn => {
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
        setErrors(formErrors);
        if (Object.keys(formErrors).length === 0) {
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
