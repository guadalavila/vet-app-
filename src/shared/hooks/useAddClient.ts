import { useState } from 'react';
import { Client, NewClient } from '../../models/Client';
import clientServices from '../../services/ClientsServices';

const useAddClient = () => {
    const [loading, setLoading] = useState(false);

    const createClient = (client: NewClient) => {
        return new Promise<Client>((resolve, reject) => {
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

    const updateClient = (client: any) => {
        return new Promise<Client>((resolve, reject) => {
            try {
                setLoading(true);
                clientServices.updateClient(client).then((res) => {
                    resolve(res);
                    setLoading(false);
                });
            } catch (error) {
                reject(error);
                setLoading(false);
            }
        });
    };

    return { createClient, loading, updateClient };
};
export default useAddClient;
