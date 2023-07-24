import { useState } from 'react';
import clientServices from '../../services/ClientsServices';
import { Client } from '../../models/Client';
import useAuth from './useAuth';

const useSearchClients = () => {
    const [result, setResult] = useState<Client[] | []>([]);
    const { user } = useAuth();
    const [emptyResult, setEmptyResult] = useState(false);
    const [activeSearching, setActiveSearching] = useState(false);

    const searchClientsByDNI = (dni: string) => {
        setActiveSearching(true);
        setEmptyResult(false);
        try {
            const vetId = user?.vetId ? user?.vetId?._id : '';
            clientServices.searchClients(vetId, dni).then((res) => {
                setResult(res);
                if (res.length === 0) setEmptyResult(true);
            });
        } catch (error) {
            setActiveSearching(false);
        }
    };

    return { result, activeSearching, setActiveSearching, emptyResult, searchClientsByDNI };
};

export default useSearchClients;
