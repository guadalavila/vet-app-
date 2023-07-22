import { useState } from 'react';
import { NewPet, Pet } from '../../models/Pet';
import petsServices from '../../services/PetsService';

const useAddPet = () => {
    const [loading, setLoading] = useState(false);

    const createPet = (pet: NewPet) => {
        return new Promise<Pet>((resolve, reject) => {
            try {
                setLoading(true);
                petsServices.addPet(pet).then((res) => {
                    resolve(res);
                    setLoading(false);
                });
            } catch (error) {
                setLoading(false);
                reject(error);
            }
        });
    };

    const updatePet = (pet: any) => {
        return new Promise<Pet>((resolve, reject) => {
            try {
                setLoading(true);
                petsServices.updatePet(pet).then((res) => {
                    resolve(res);
                    setLoading(false);
                });
            } catch (error) {
                setLoading(false);
            }
        });
    };

    return { createPet, loading, updatePet };
};
export default useAddPet;
