import { useState } from 'react';
import { NewPet } from '../../models/Pet';
import petsServices from '../services/PetsService';

const useAddPet = () => {
    const [loading, setLoading] = useState(false);
    const createPet = (pet: NewPet) => {
        return new Promise((resolve, reject) => {
            try {
                setLoading(true);
                petsServices.addPet(pet).then((res) => {
                    resolve(res);
                    setLoading(false);
                });
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        });
    };

    return { createPet, loading };
};
export default useAddPet;
