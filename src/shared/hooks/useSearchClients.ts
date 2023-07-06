import { useState } from 'react';
import clientServices from '../services/ClientsServices';
import { Client } from '../../models/Client';

const useSearchClients = () => {
    const [result, setResult] = useState<Client[] | []>([]);
    const [searching, setSearching] = useState(false);
    const [emptyResult, setEmptyResult] = useState(false);

    const searchClients = (search: string) => {
        setSearching(true);
        setEmptyResult(false);
        try {
            clientServices.searchClients(search).then((res) => {
                setResult(res);
                if (res.length === 0) setEmptyResult(true);
            });
        } catch (error) {}
    };

    return { result, searchClients, searching, setSearching, emptyResult };
};

export default useSearchClients;
