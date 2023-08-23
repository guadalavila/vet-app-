import { useState } from 'react';
import { validateEmail } from '~shared/utils/validations';

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
    form:
        | 'NetPet'
        | 'NewClient'
        | 'NewVisit'
        | 'Login'
        | 'NewSurgeryForm'
        | 'NewVaccineForm'
        | 'SignUp'
        | 'NewUser'
        | 'NewVet',
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
        } else if (form === 'SignUp') {
            validateSignUp();
        } else if (form === 'NewVaccineForm') {
            validateNewVaccine();
        } else if (form === 'NewUser') {
            validateNewUser();
        } else if (form === 'NewVet') {
            validateVet();
        }
        // setErrors(formErrors);

        // if (Object.keys(formErrors).length === 0) {
        //     console.log('a');
        // } else {
        //     onSubmit(fields);
        // }
    };

    const validateNewPet = () => {
        if (!fields.client) {
            setErrors({
                client: 'Debes seleccionar un cliente',
            });
        } else if (!fields.name) {
            setErrors({
                name: 'Debes ingresar el nombre',
            });
        } else if (fields.age && !Number(fields.age)) {
            setErrors({
                age: 'La edad debe ser un valor numérico',
            });
        } else if (!fields.gender) {
            setErrors({
                gender: 'Debes seleccionar un sexo',
            });
        } else if (!fields.specie) {
            setErrors({
                specie: 'Debes seleccionar una especie',
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

    const validateSignUp = () => {
        if (!fields.name) {
            setErrors({
                name: 'Debes ingresar tu nombre',
            });
        } else if (!fields.lastName) {
            setErrors({
                lastName: 'Debes ingresar tu apellido',
            });
        } else if (!fields.dni) {
            setErrors({
                dni: 'Debes ingresar el DNI',
            });
        } else if (fields.dni && !Number(fields.dni)) {
            setErrors({
                dni: 'El DNI debe ser un valor numérico',
            });
        } else if (!fields.email) {
            setErrors({
                email: 'Debes ingresar tu email',
            });
        } else if (fields.email && !validateEmail(String(fields.email))) {
            setErrors({
                email: 'El formato del email no es válido',
            });
        } else if (!fields.password) {
            setErrors({
                password: 'Debes ingresar la contraseña',
            });
        } else if (fields.password && fields.password.length < 6) {
            setErrors({
                password: 'La contraseña debe tener como mínimo 6 caracteres',
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

    const validateNewVaccine = () => {
        if (!fields.date) {
            setErrors({
                date: 'Debes ingresar la fecha',
            });
        } else if (!fields.type) {
            setErrors({
                type: 'Debes seleccionar el tipo de vacuna',
            });
        } else if (!fields.name) {
            setErrors({
                name: 'Debes ingresar el nombre',
            });
        } else {
            setErrors({});
            onSubmit(fields);
        }
    };

    const validateNewUser = () => {
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
        } else if (!fields.email) {
            setErrors({
                email: 'Debes ingresar el email',
            });
        } else if (fields.email && !validateEmail(String(fields.email))) {
            setErrors({
                email: 'El formato del email no es válido',
            });
        } else if (!fields.vetId) {
            setErrors({
                vetId: 'Debes seleccionar una veterinaria',
            });
        } else {
            setErrors({});
            onSubmit(fields);
        }
    };

    const validateVet = () => {
        if (!fields.name) {
            setErrors({
                name: 'Debes ingresar el nombre',
            });
        } else if (!fields.address) {
            setErrors({
                address: 'Debes ingresar la dirección',
            });
        } else if (!fields.codePostal) {
            setErrors({
                codePostal: 'Debes ingresar el Código Postal',
            });
        } else if (fields.codePostal && !Number(fields.codePostal)) {
            setErrors({
                codePostal: 'El Código Postal debe ser un valor numérico',
            });
        } else if (!fields.city) {
            setErrors({
                city: 'Debes ingresar la ciudad',
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
