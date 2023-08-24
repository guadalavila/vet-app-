import { useState } from 'react';
import useError from './useError';
import { NewSurgery, Surgery } from '~models/Surgery';
import surgeryServices from '~services/SurgeryServices';

const useAddSurgery = () => {
    const [loading, setLoading] = useState(false);
    const { setErrorApp } = useError();

    const createSurgery = (surgery: NewSurgery) => {
        return new Promise((resolve, reject) => {
            try {
                setLoading(true);
                surgeryServices.addSurgery(surgery).then((res) => {
                    resolve(res);
                    setLoading(false);
                });
            } catch (error) {
                setErrorApp({
                    isError: true,
                    message: String(error) ?? 'Crear Cirugía: Ocurrió un error',
                    type: 'error',
                });
                setLoading(false);
                reject(error);
            }
        });
    };

    return { loading, createSurgery };
};

export default useAddSurgery;
