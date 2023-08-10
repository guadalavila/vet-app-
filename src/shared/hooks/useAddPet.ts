import { useState } from 'react';
import { NewPet, Pet } from '../../models/Pet';
import petsServices from '../../services/PetsServices';
import useError from './useError';

const useAddPet = () => {
    const [loading, setLoading] = useState(false);
    const { setErrorApp } = useError();

    const createPet = (pet: NewPet) => {
        return new Promise<Pet>((resolve, reject) => {
            try {
                setLoading(true);
                petsServices.addPet(pet).then((res) => {
                    resolve(res);
                    setLoading(false);
                });
            } catch (error) {
                setErrorApp({
                    isError: true,
                    message: String(error) ?? 'Crear Mascota: Ocurrio un error',
                    type: 'error',
                });
                setLoading(false);
                reject(error);
            }
        });
    };

    const updatePet = (pet: Pet) => {
        return new Promise<Pet>((resolve, reject) => {
            try {
                setLoading(true);
                petsServices.updatePet(pet).then((res) => {
                    resolve(res);
                    setLoading(false);
                });
            } catch (error) {
                setLoading(false);
                setErrorApp({
                    isError: true,
                    message: String(error) ?? 'Actualizar Mascota: Ocurrio un error',
                    type: 'error',
                });
                reject(error);
            }
        });
    };

    return { createPet, loading, updatePet };
};
export default useAddPet;
