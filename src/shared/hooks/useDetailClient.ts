import { useEffect, useState } from 'react';
import { Client } from '../../models/Client';
import clientServices from '../../services/ClientsServices';

const useDetailClient = (id: string) => {
    const [client, setClient] = useState<Client>();
    const [isLoading, setIsLoading] = useState(false);

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
            setIsLoading(false);
        }
    };

    return { client, isLoading };
};

export default useDetailClient;
