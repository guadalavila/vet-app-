import { useEffect, useState } from 'react';
import { ClientData } from '../../models/Client';
import clientServices from '../services/ClientsServices';

const useClients = () => {
    const [dataClients, setDataClients] = useState<ClientData>({
        total: 0,
        count: 0,
        clients: [],
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getListClients();
    }, []);

    const getListClients = () => {
        setIsLoading(true);
        try {
            clientServices.getClients().then((res) => {
                setDataClients({ ...res });
                setIsLoading(false);
            });
        } catch (error) {
            setIsLoading(false);
        }
    };

    return { dataClients, isLoading };
};

export default useClients;
