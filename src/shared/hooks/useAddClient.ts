import { useState } from 'react';
import { Client } from '~models/Client';
import clientServices from '~services/ClientsServices';
import useError from './useError';

const useAddClient = () => {
    const [loading, setLoading] = useState(false);
    const { setErrorApp } = useError();

    const createClient = (client: any) => {
        return new Promise<Client>((resolve, reject) => {
            try {
                setLoading(true);
                clientServices.addClient(client).then((res) => {
                    resolve(res);
                    setLoading(false);
                });
            } catch (error) {
                setErrorApp({
                    isError: true,
                    message: String(error) ?? 'Crear Cliente: Ocurrió un error',
                    type: 'error',
                });
                setLoading(false);
                reject(error);
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
                setErrorApp({
                    isError: true,
                    message: String(error) ?? 'Actualizar Cliente: Ocurrió un error',
                    type: 'error',
                });
                reject(error);
                setLoading(false);
            }
        });
    };

    return { createClient, loading, updateClient };
};
export default useAddClient;
