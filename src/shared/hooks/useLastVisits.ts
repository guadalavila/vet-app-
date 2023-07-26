import { useEffect, useState } from 'react';
import { LastVisit } from '../../models/Visit';
import visitsServices from '../../services/VisitsServices';
import useAuth from './useAuth';

const useLastVisit = () => {
    const [lastVisits, setLastVisits] = useState<LastVisit[]>([]);
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        setLoading(true);
        try {
            const vetId = user?.vetId ? user.vetId._id : '';
            visitsServices.getLastVisit(vetId).then((res) => {
                setLastVisits(res);
                setLoading(false);
            });
        } catch (error) {
            setLoading(false);
        }
    }, []);

    return { lastVisits, loading };
};
export default useLastVisit;
