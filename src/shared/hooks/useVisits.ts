import { useEffect, useState } from 'react';
import visitsServices from '../../services/VisitsServices';
import { Visit } from '../../models/Visit';

const useVisits = (id: string) => {
    const [visits, setVisits] = useState<Visit[] | []>([]);
    const [isLoading, setIsLoading] = useState(true);

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
            setIsLoading(false);
        }
    };

    return { visits, isLoading };
};

export default useVisits;
