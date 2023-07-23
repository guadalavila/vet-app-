import { useContext, useEffect, useState } from 'react';
import dashboardServices from '../../services/DashboardServices';
import { ItemDashboard } from '../../models/Dashboard';
import pathologiesServices from '../../services/PathologiesServices';
import useAuth from './useAuth';
import { PathologiesContext } from '../../contexts/PathologiesContext';

const useDashboard = () => {
    const { user } = useAuth();
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
            setRefreshing(false);
        }
    };

    return { getInitialData, categories, errorDashboard, isLoading, refreshDashboard, refreshing };
};

export default useDashboard;
