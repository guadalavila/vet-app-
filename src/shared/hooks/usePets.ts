import { useEffect, useState } from 'react';
import petsServices from '../../services/PetsService';
import { PetData } from '../../models/Pet';

const usePets = () => {
    const [dataPets, setDataPets] = useState<PetData>({
        total: 0,
        count: 0,
        pets: [],
    });
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getListPets();
    }, []);

    const getListPets = () => {
        setPage(page + 1);
        setIsLoading(true);
        try {
            petsServices.getPets(page).then((res) => {
                setDataPets(res);
                setIsLoading(false);
            });
        } catch (error) {
            setIsLoading(false);
        }
    };

    const getMorePets = () => {
        if (page <= Math.round(dataPets.total / dataPets.count)) {
            setPage(page + 1);
            setIsLoading(true);
            try {
                petsServices.getPets(page).then((res) => {
                    const data: PetData = {
                        total: dataPets.total,
                        count: dataPets.count,
                        pets: [...res.pets],
                    };
                    setDataPets(data);
                    setIsLoading(false);
                });
            } catch (error) {
                setIsLoading(false);
            }
        }
    };

    const refreshPets = () => {
        setRefreshing(true);
        try {
            petsServices.getPets(0).then((res) => {
                setDataPets(res);
                setRefreshing(false);
            });
        } catch (error) {
            setRefreshing(false);
        }
    };

    return { dataPets, isLoading, getListPets, getMorePets, refreshPets, refreshing };
};

export default usePets;
