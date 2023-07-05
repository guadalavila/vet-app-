import { useEffect, useState } from 'react';
import petsServices from '../services/PetsService';
import { PetData } from '../../models/Pet';

const usePets = () => {
    const [dataPets, setDataPets] = useState<PetData>({
        total: 0,
        count: 0,
        pets: [],
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getListPets();
    }, []);

    const getListPets = () => {
        setIsLoading(true);
        try {
            petsServices.getPets().then((res) => {
                setDataPets({ ...res });
                setIsLoading(false);
            });
        } catch (error) {
            setIsLoading(false);
        }
    };

    return { dataPets, isLoading };
};

export default usePets;
