import { useEffect, useState } from 'react';
import { ClientData } from '../../models/Client';
import clientServices from '../../services/ClientsServices';

const useClients = () => {
    const [dataClients, setDataClients] = useState<ClientData>({
        total: 0,
        count: 0,
        clients: [],
    });
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(0);

    useEffect(() => {
        getListClients();
    }, []);

    const getListClients = () => {
        setPage(page + 1);
        setIsLoading(true);
        try {
            clientServices.getClients(page).then((res) => {
                setDataClients({ ...res });
                setIsLoading(false);
            });
        } catch (error) {
            setIsLoading(false);
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
    return { dataClients, isLoading, getMoreClients };
};

export default useClients;
