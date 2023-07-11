import { useState } from 'react';
import visitsServices from '../../services/VisitsServices';
import { NewVisit } from '../../models/Visit';

const useAddVisit = () => {
    const [loading, setLoading] = useState(false);

    const createVisit = (visit: NewVisit) => {
        return new Promise((resolve, reject) => {
            try {
                setLoading(true);
                visitsServices.addVisit(visit).then((res) => {
                    resolve(res);
                    setLoading(false);
                });
            } catch (error) {
                setLoading(false);
            }
        });
    };

    return { createVisit, loading };
};
export default useAddVisit;
