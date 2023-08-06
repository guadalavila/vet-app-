import { useContext, useEffect, useState } from 'react';
import { Veterinary } from '../../../models/Veterinary';
import vetsServices from '../../../services/VetsServices';
import useError from '../../hooks/useError';
import { VetsContext } from '../../../contexts/VetsContext';

const useVets = () => {
    const [loading, setLoading] = useState(true);
    const [vets, setVets] = useState<Veterinary[]>();
    const { setErrorApp } = useError();
    const [refreshing, setRefreshing] = useState(false);
    const { setVetsApp } = useContext(VetsContext);

    useEffect(() => {
        getVets();
    }, []);

    const getVets = () => {
        try {
            vetsServices.getVets().then((res) => {
                setVets(res);
                setVetsApp(res);
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

    const refreshVets = () => {
        setRefreshing(true);
        try {
            vetsServices.getVets().then((res) => {
                setVets(res);
                setRefreshing(false);
            });
        } catch (error) {
            setErrorApp({
                isError: true,
                message: 'Obtener Veterinarias: Ocurrio un error',
                type: 'error',
            });
            setRefreshing(false);
        }
    };

    return { loading, vets, refreshVets, refreshing };
};

export default useVets;