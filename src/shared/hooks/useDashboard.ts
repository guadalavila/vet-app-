import { useContext, useEffect, useState } from 'react';
import dashboardServices from '~services/DashboardServices';
import { ItemDashboard } from '~models/Dashboard';
import pathologiesServices from '~services/PathologiesServices';
import useAuth from './useAuth';
import { PathologiesContext } from '~contexts/PathologiesContext';
import useError from './useError';
import useRemoteConfig from './useRemoteConfig';

const useDashboard = () => {
    const { user } = useAuth();
    useRemoteConfig();
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
                dashboardServices.getDashboard(user.vetId._id).then((res) => {
                    setCategories(res);
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
        setRefreshing(true);
        try {
            dashboardServices.getInitialData().then((res) => {
                setCategories(res);
                setRefreshing(false);
            });
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
            setRefreshing(false);
        }
    };

    return { getInitialData, categories, errorDashboard, isLoading, refreshDashboard, refreshing };
};

export default useDashboard;
