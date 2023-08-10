import { useState } from 'react';
import petsServices from '../../services/PetsServices';
import { Pet } from '../../models/Pet';
import useAuth from './useAuth';
import useError from './useError';

const useSearchPets = () => {
    const [result, setResult] = useState<Pet[] | []>([]);
    const [searching, setSearching] = useState(false);
    const [emptyResult, setEmptyResult] = useState(false);
    const { user } = useAuth();
    const { setErrorApp } = useError();

    const searchPets = (search: string) => {
        setSearching(true);
        setEmptyResult(false);
        try {
            const vetId = user?.vetId ? user.vetId._id : '';
            petsServices.searchPets(vetId, search).then((res) => {
                setResult(res);
                if (res.length === 0) setEmptyResult(true);
            });
        } catch (error) {
            setErrorApp({
                isError: true,
                message: String(error) ?? 'Buscar Mascotas: Ocurrio un error',
                type: 'error',
            });
        }
    };

    return { result, searchPets, searching, setSearching, emptyResult };
};

export default useSearchPets;
