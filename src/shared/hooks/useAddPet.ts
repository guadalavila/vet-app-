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
            }
        });
    };

    return { createPet, loading };
};
export default useAddPet;
