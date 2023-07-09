import { useState } from 'react';
import { NewClient } from '../../models/Client';
import clientServices from '../services/ClientsServices';

const useAddClient = () => {
    const [loading, setLoading] = useState(false);

    const createClient = (client: NewClient) => {
        return new Promise((resolve, reject) => {
            try {
                setLoading(true);
                clientServices.addClient(client).then((res) => {
                    resolve(res);
                    setLoading(false);
                });
            } catch (error) {
                setLoading(false);
            }
        });
    };

    return { createClient, loading };
};
export default useAddClient;
