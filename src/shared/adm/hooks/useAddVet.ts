import { useState } from 'react';
import { NewVeterinary, Veterinary } from '../../../models/Veterinary';
import vetsServices from '../../../services/VetsServices';
import useError from '../../hooks/useError';

const useAddVet = () => {
    const [loading, setLoading] = useState(false);
    const { setErrorApp } = useError();

    const addVet = (vet: NewVeterinary) => {
        return new Promise<Veterinary>((resolve, reject) => {
            try {
                setLoading(true);
                vetsServices.addVet(vet).then((res) => {
                    setLoading(false);
                    resolve(res);
                });
            } catch (error) {
                reject(error);
                setLoading(false);
                setErrorApp({
                    isError: true,
                    message: 'Agregar Veterinaria: Ocurrió un error',
                    type: 'error',
                });
            }
        });
    };

    const editVet = (vet: Veterinary) => {
        return new Promise<Veterinary>((resolve, reject) => {
            try {
                setLoading(true);
                vetsServices.editVet(vet).then((res) => {
                    setLoading(false);
                    resolve(res);
                });
            } catch (error) {
                reject(error);
                setLoading(false);
                setErrorApp({
                    isError: true,
                    message: 'Editar Veterinaria: Ocurrió un error',
                    type: 'error',
                });
            }
        });
    };

    return { addVet, loading, editVet };
};

export default useAddVet;
