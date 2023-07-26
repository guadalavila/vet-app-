import { useEffect, useState } from 'react';
import petsServices from '../../services/PetsServices';
import { Pet, PetData } from '../../models/Pet';
import useAuth from './useAuth';

const usePets = () => {
    const [pets, setPets] = useState<Pet[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [refreshing, setRefreshing] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        getListPets();
    }, []);

    const getListPets = () => {
        setPage(page + 1);
        setIsLoading(true);
        try {
            if (user?.vetId?._id) {
                petsServices.getPetsByVetId(user.vetId?._id, page).then((res) => {
                    setPets(res);
                    setIsLoading(false);
                });
            }
        } catch (error) {
            setIsLoading(false);
        }
    };

    const getMorePets = () => {
        // if (page <= Math.round(dataPets.total / dataPets.count)) {
        //     setPage(page + 1);
        //     setIsLoading(true);
        //     try {
        //         petsServices.getPets(page).then((res) => {
        //             const data: PetData = {
        //                 total: dataPets.total,
        //                 count: dataPets.count,
        //                 pets: [...res.pets],
        //             };
        //             setDataPets(data);
        //             setIsLoading(false);
        //         });
        //     } catch (error) {
        //         setIsLoading(false);
        //     }
        // }
    };

    const refreshPets = () => {
        setRefreshing(true);
        try {
            const vetId = user?.vetId ? user.vetId._id : '';
            petsServices.getPetsByVetId(vetId, 1).then((res) => {
                setPets(res);
                setRefreshing(false);
            });
        } catch (error) {
            setRefreshing(false);
        }
    };

    return { pets, isLoading, getListPets, getMorePets, refreshPets, refreshing };
};

export default usePets;
