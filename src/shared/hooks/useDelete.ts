import { useState } from 'react';
import petsServices from '../../services/PetsServices';

const useDelete = () => {
    const [isLoading, setIsLoading] = useState(false);

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
            setIsLoading(false);
        }
    };

    return { isLoading, deletePet };
};

export default useDelete;
