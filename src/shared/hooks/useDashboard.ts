import { useEffect, useState } from 'react';
import dashboardServices from '../../services/DashboardServices';
import { Categorie } from '../../models/Categorie';
import { CATEGORIES_DASHBOARD } from '../utils/constants';

const useDashboard = () => {
    const [categories, setCategories] = useState<Categorie[] | []>([]);
    const [errorDashboard, setErrorDashboard] = useState({
        error: false,
        message: '',
    });
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getInitialData();
    }, []);

    const getInitialData = () => {
        try {
            dashboardServices.getInitialData().then((res) => {
                setCategories([
                    { ...CATEGORIES_DASHBOARD[0], data: res.clients },
                    { ...CATEGORIES_DASHBOARD[1], data: res.pets },
                    {
                        ...CATEGORIES_DASHBOARD[2],
                        data: res.visits,
                    },
                ]);
                setIsLoading(false);
            });
        } catch (error) {
            setErrorDashboard({
                error: true,
                message: 'No se pudo obtener datos iniciales.',
            });
            setIsLoading(false);
        }
    };

    const refreshDashboard = () => {
        setRefreshing(true);
        try {
            dashboardServices.getInitialData().then((res) => {
                setCategories([
                    { ...CATEGORIES_DASHBOARD[0], data: res.clients },
                    { ...CATEGORIES_DASHBOARD[1], data: res.pets },
                    {
                        ...CATEGORIES_DASHBOARD[2],
                        data: res.visits,
                    },
                ]);
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
