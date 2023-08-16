import { useEffect, useState } from 'react';
import { Client } from '../../models/Client';
import clientServices from '../../services/ClientsServices';
import useError from './useError';

const useDetailClient = (id: string) => {
    const [client, setClient] = useState<Client>();
    const [isLoading, setIsLoading] = useState(false);
    const { setErrorApp } = useError();

    useEffect(() => {
        getDetailClient();
    }, []);

    const getDetailClient = () => {
        setIsLoading(true);
        try {
            clientServices.getClient(id).then((res) => {
                setClient(res);
                setIsLoading(false);
            });
        } catch (error) {
            setErrorApp({
                isError: true,
                message: String(error) ?? 'Obtener detalle Cliente: Ocurrió un error',
                type: 'error',
            });
            setIsLoading(false);
        }
    };

    return { client, isLoading };
};

export default useDetailClient;
