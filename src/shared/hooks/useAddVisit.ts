import { useState } from 'react';
import visitsServices from '../../services/VisitsServices';
import { NewVisit, Visit } from '../../models/Visit';

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

    const updateVisit = (visit: any) => {
        return new Promise<Visit>((resolve, reject) => {
            try {
                setLoading(true);
                visitsServices.updateVisit(visit).then((res) => {
                    resolve(res);
                    setLoading(false);
                });
            } catch (error) {
                setLoading(false);
            }
        });
    };

    return { createVisit, loading, updateVisit };
};
export default useAddVisit;
