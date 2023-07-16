import { useEffect, useState } from 'react';
import { LastVisits } from '../../models/Visit';
import visitsServices from '../../services/VisitsServices';

const useLastVisit = () => {
    const [lastVisits, setLastVisits] = useState<LastVisits[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        try {
            visitsServices.getLastVisit().then((res) => {
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
