import { useState } from 'react';
import clientServices from '~services/ClientsServices';
import { Client } from '~models/Client';
import useAuth from './useAuth';
import useError from './useError';

const useSearchClients = () => {
    const [result, setResult] = useState<Client[] | []>([]);
    const { user } = useAuth();
    const [emptyResult, setEmptyResult] = useState(false);
    const [activeSearching, setActiveSearching] = useState(false);
    const { setErrorApp } = useError();

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
            setErrorApp({
                isError: true,
                message: String(error) ?? 'Buscar Clientes: Ocurrió un error',
                type: 'error',
            });
            setActiveSearching(false);
        }
    };

    return { result, activeSearching, setActiveSearching, emptyResult, searchClientsByDNI };
};

export default useSearchClients;
