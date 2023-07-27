import { useEffect, useState } from 'react';
import petsServices from '../../services/PetsServices';
import { Pet } from '../../models/Pet';

const useGetOnePet = (id: string, getDetail: boolean) => {
    const [loading, setLoading] = useState(true);
    const [detailPet, setDetailPet] = useState<Pet>();

    useEffect(() => {
        getDetailPet();
    }, []);

    const getDetailPet = () => {
        try {
            if (getDetail) {
                petsServices.getDetailPet(id).then((res) => {
                    setDetailPet(res);
                    setLoading(false);
                });
            } else {
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
        }
    };

    return { loading, detailPet };
};
export default useGetOnePet;
