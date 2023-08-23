import { useState } from 'react';
import vaccineServices from '~services/VaccineServices';
import { NewVaccine, Vaccine } from '~models/Vaccine';
import useError from './useError';

const useAddVaccine = () => {
    const [loading, setLoading] = useState(false);
    const { setErrorApp } = useError();

    const createVaccine = (vaccine: NewVaccine) => {
        return new Promise((resolve, reject) => {
            try {
                setLoading(true);
                vaccineServices.addVaccine(vaccine).then((res) => {
                    resolve(res);
                    setLoading(false);
                });
            } catch (error) {
                setErrorApp({
                    isError: true,
                    message: String(error) ?? 'Crear Vacuna: Ocurrió un error',
                    type: 'error',
                });
                setLoading(false);
                reject(error);
            }
        });
    };

    const updateVaccine = (vaccine: Vaccine) => {
        return new Promise((resolve, reject) => {
            try {
                setLoading(true);
                vaccineServices.updateVaccine(vaccine).then((res) => {
                    resolve(res);
                    setLoading(false);
                });
            } catch (error) {
                setErrorApp({
                    isError: true,
                    message: String(error) ?? 'Actualizar Vacuna: Ocurrió un error',
                    type: 'error',
                });
                setLoading(false);
                reject(error);
            }
        });
    };

    return { createVaccine, loading, updateVaccine };
};
export default useAddVaccine;
