import { useState } from 'react';
import petsServices from '../services/PetsService';
import { Pet } from '../../models/Pet';

const useSearchPets = () => {
    const [result, setResult] = useState<Pet[] | []>([]);
    const [searching, setSearching] = useState(false);
    const [emptyResult, setEmptyResult] = useState(false);

    const searchPets = (search: string) => {
        setSearching(true);
        setEmptyResult(false);
        try {
            petsServices.searchPets(search).then((res) => {
                setResult(res);
                if (res.length === 0) setEmptyResult(true);
            });
        } catch (error) {}
    };

    return { result, searchPets, searching, setSearching, emptyResult };
};

export default useSearchPets;
