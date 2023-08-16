import { useEffect, useState } from 'react';
import { LastVisit } from '../../models/Visit';
import visitsServices from '../../services/VisitsServices';
import useAuth from './useAuth';
import useError from './useError';

const useLastVisit = () => {
    const [lastVisits, setLastVisits] = useState<LastVisit[]>([]);
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    const { setErrorApp } = useError();

    useEffect(() => {
        setLoading(true);
        try {
            const vetId = user?.vetId ? user.vetId._id : '';
            visitsServices.getLastVisit(vetId).then((res) => {
                setLastVisits(res);
                setLoading(false);
            });
        } catch (error) {
            setErrorApp({
                isError: true,
                message: String(error) ?? 'Obtener últimas visitas: Ocurrió un error',
                type: 'error',
            });
            setLoading(false);
        }
    }, []);

    return { lastVisits, loading };
};
export default useLastVisit;
