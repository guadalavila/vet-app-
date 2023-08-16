import { useEffect, useState } from 'react';
import visitsServices from '../../services/VisitsServices';
import { Visit } from '../../models/Visit';
import useError from './useError';

const useVisits = (id: string) => {
    const [visits, setVisits] = useState<Visit[] | []>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { setErrorApp } = useError();

    useEffect(() => {
        getVisitsPet();
    }, []);

    const getVisitsPet = () => {
        setIsLoading(true);
        try {
            visitsServices.getVisitsPet(id).then((res) => {
                setVisits(res);
                setIsLoading(false);
            });
        } catch (error) {
            setErrorApp({
                isError: true,
                message: String(error) ?? 'Obtener visitas: Ocurrió un error',
                type: 'error',
            });
            setIsLoading(false);
        }
    };

    return { visits, isLoading };
};

export default useVisits;
