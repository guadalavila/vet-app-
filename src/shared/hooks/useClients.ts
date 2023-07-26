import { useEffect, useState } from 'react';
import { Client, ClientData } from '../../models/Client';
import clientServices from '../../services/ClientsServices';
import useAuth from './useAuth';

const useClients = () => {
    const [dataClients, setDataClients] = useState<ClientData>({
        total: 0,
        count: 0,
        clients: [],
    });
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(0);
    const { user } = useAuth();
    const [clients, setClients] = useState<Client[]>([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getClientsByVetId();
    }, []);

    const getClientsByVetId = () => {
        setPage(page + 1);
        setIsLoading(true);
        try {
            if (user?.vetId?._id) {
                clientServices.getClientsByVetId(page, user.vetId._id).then((res) => {
                    setClients(res);
                    setIsLoading(false);
                });
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
        }
    };

    const refreshClients = () => {
        setRefreshing(true);
        try {
            const vetId = user?.vetId ? user.vetId._id : '';
            clientServices.getClientsByVetId(1, vetId).then((res) => {
                setClients(res);
                setRefreshing(false);
            });
        } catch (error) {
            setRefreshing(false);
        }
    };

    const getMoreClients = () => {
        //TODO
        //hay un bug cuando hay pocos items
        console.log('getMoreClients');
        // if (page < Math.round(dataClients.total / dataClients.count)) {
        // setPage(page + 1);
        // setIsLoading(true);
        // try {
        //     clientServices.getClients(page).then((res) => {
        //         const data: ClientData = {
        //             total: dataClients.total,
        //             count: dataClients.count,
        //             clients: [...res.clients],
        //         };
        //         setDataClients(data);
        //         setIsLoading(false);
        //     });
        // } catch (error) {
        //     setIsLoading(false);
        // }
        // }
    };
    return { dataClients, isLoading, getMoreClients, clients, refreshClients, refreshing };
};

export default useClients;
