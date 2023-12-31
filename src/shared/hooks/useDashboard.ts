import { useContext, useEffect, useState } from 'react';
import dashboardServices from '~services/DashboardServices';
import { ItemDashboard } from '~models/Dashboard';
import pathologiesServices from '~services/PathologiesServices';
import useAuth from './useAuth';
import { PathologiesContext } from '~contexts/PathologiesContext';
import useError from './useError';

const useDashboard = () => {
    const { user } = useAuth();
    const { setErrorApp } = useError();
    const [categories, setCategories] = useState<ItemDashboard[] | []>([]);
    const { setPathologies } = useContext(PathologiesContext);
    const [errorDashboard, setErrorDashboard] = useState({
        error: false,
        message: '',
    });
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getInitialData();
        getPathologiesPet();
    }, []);

    const getInitialData = () => {
        try {
            if (user?.vetId) {
                dashboardServices
                    .getDashboard(user.vetId._id)
                    .then((res) => {
                        setCategories(res);
                        setIsLoading(false);
                    })
                    // eslint-disable-next-line @typescript-eslint/no-shadow
                    .catch((err) => {
                        setErrorDashboard({
                            error: true,
                            message: 'No se pudo obtener datos iniciales.',
                        });
                        setErrorApp({
                            isError: true,
                            message: String(err) ?? 'Obtener Dashboard: Ocurrió un error',
                            type: 'error',
                        });
                        setIsLoading(false);
                    });
            }
        } catch (error) {
            setErrorDashboard({
                error: true,
                message: 'No se pudo obtener datos iniciales.',
            });
            setErrorApp({
                isError: true,
                message: String(error) ?? 'Obtener Dashboard: Ocurrió un error',
                type: 'error',
            });
            setIsLoading(false);
        }
    };

    const getPathologiesPet = () => {
        try {
            if (user?.vetId?._id) {
                pathologiesServices.getPathologies(user.vetId._id).then((res) => {
                    setPathologies(res);
                });
            }
        } catch (error) {
            //TODO review
            setErrorApp({
                isError: true,
                message: String(error) ?? 'Obtener Patologias: Ocurrió un error',
                type: 'error',
            });
            setPathologies([]);
        }
    };

    const refreshDashboard = () => {
        setIsLoading(true);
        getInitialData();
    };

    return { getInitialData, categories, errorDashboard, isLoading, refreshDashboard, refreshing };
};

export default useDashboard;
