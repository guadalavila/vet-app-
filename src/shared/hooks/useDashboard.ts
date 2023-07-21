import { useContext, useEffect, useState } from 'react';
import dashboardServices from '../../services/DashboardServices';
import conditionsServices from '../../services/ConditionsServices';
import { ConditionsContext } from '../../contexts/ConditionsContext';
import { ItemDashboard } from '../../models/Dashboard';

const useDashboard = () => {
    const [categories, setCategories] = useState<ItemDashboard[] | []>([]);
    const { setConditionsApp } = useContext(ConditionsContext);
    const [errorDashboard, setErrorDashboard] = useState({
        error: false,
        message: '',
    });
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getInitialData();
        getConditionsPet();
    }, []);

    const getInitialData = () => {
        try {
            dashboardServices.getInitialData().then((res) => {
                setCategories(res);
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

    const getConditionsPet = () => {
        try {
            conditionsServices.getConditions().then((res) => {
                setConditionsApp(res);
            });
        } catch (error) {
            setConditionsApp([]);
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
