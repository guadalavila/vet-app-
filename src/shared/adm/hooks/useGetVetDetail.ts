import { useEffect, useState } from 'react';
import { Pet } from '~models/Pet';
import clientServices from '~services/ClientsServices';
import { Client } from '~models/Client';
import useError from '~shared/hooks/useError';
import petsServices from '~services/PetsServices';

const useGetVetDetail = (vetId: string) => {
    const [loading, setLoading] = useState(true);
    const [pets, setPets] = useState<Pet[]>([]);
    const [clients, setClients] = useState<Client[]>([]);
    const { setErrorApp } = useError();

    useEffect(() => {
        getPets();
        getClients();
    }, []);

    const getPets = () => {
        try {
            petsServices.getAllPetsByVetId(vetId).then((res) => {
                setPets(res);
                setLoading(false);
            });
        } catch (error) {
            setErrorApp({
                isError: true,
                message: String(error) ?? 'Obtener  mascotas: Ocurrió un error',
                type: 'error',
            });
            setLoading(false);
        }
    };
    const getClients = () => {
        try {
            clientServices.getAllClientsByVetId(vetId).then((res) => {
                setClients(res);
                setLoading(false);
            });
        } catch (error) {
            setErrorApp({
                isError: true,
                message: String(error) ?? 'Obtener  clientes: Ocurrió un error',
                type: 'error',
            });
            setLoading(false);
        }
    };

    return { loading, pets, clients };
};

export default useGetVetDetail;
