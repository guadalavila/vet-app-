import { useState } from 'react';
import visitsServices from '../../services/VisitsServices';
import { NewVisit, Visit } from '../../models/Visit';
import useError from './useError';

const useAddVisit = () => {
    const [loading, setLoading] = useState(false);
    const { setErrorApp } = useError();

    const createVisit = (visit: NewVisit) => {
        return new Promise((resolve, reject) => {
            try {
                setLoading(true);
                visitsServices.addVisit(visit).then((res) => {
                    resolve(res);
                    setLoading(false);
                });
            } catch (error) {
                setErrorApp({
                    isError: true,
                    message: 'Crear Visita: Ocurrio un error',
                    type: 'error',
                });
                setLoading(false);
            }
        });
    };

    const updateVisit = (visit: Visit) => {
        return new Promise<Visit>((resolve, reject) => {
            try {
                setLoading(true);
                visitsServices.updateVisit(visit).then((res) => {
                    resolve(res);
                    setLoading(false);
                });
            } catch (error) {
                setErrorApp({
                    isError: true,
                    message: 'Actualizar Visita: Ocurrio un error',
                    type: 'error',
                });
                setLoading(false);
            }
        });
    };

    return { createVisit, loading, updateVisit };
};
export default useAddVisit;
