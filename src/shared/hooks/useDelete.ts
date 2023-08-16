import { useState } from 'react';
import petsServices from '../../services/PetsServices';
import useError from './useError';

const useDelete = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { setErrorApp } = useError();

    const deletePet = (idPet: string) => {
        try {
            setIsLoading(true);
            return new Promise((resolve, reject) => {
                petsServices
                    .deletePet(idPet)
                    .then((res) => {
                        setIsLoading(false);
                        resolve(res);
                    })
                    .catch((err) => {
                        setIsLoading(false);
                        reject(err);
                    });
            });
        } catch (error) {
            setErrorApp({
                isError: true,
                message: String(error) ?? 'Eliminar Mascota: Ocurrió un error',
                type: 'error',
            });
            setIsLoading(false);
        }
    };

    return { isLoading, deletePet };
};

export default useDelete;
