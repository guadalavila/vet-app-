import { useEffect, useState } from 'react';
import { Veterinary } from '../../../models/Veterinary';
import vetsServices from '../../../services/VetsServices';
import useError from '../../hooks/useError';

const useVets = () => {
    const [loading, setLoading] = useState(true);
    const [vets, setVets] = useState<Veterinary[]>();
    const { setErrorApp } = useError();

    useEffect(() => {
        getVets();
    }, []);

    const getVets = () => {
        try {
            vetsServices.getVets().then((res) => {
                setVets(res);
                setLoading(false);
            });
        } catch (error) {
            setErrorApp({
                isError: true,
                message: 'Obetener Veterinarias: Ocurrio un error',
                type: 'error',
            });
            setLoading(false);
        }
    };

    return { loading, vets };
};

export default useVets;
