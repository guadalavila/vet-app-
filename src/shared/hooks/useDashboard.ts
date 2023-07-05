import { useEffect, useState } from 'react';
import dashboardServices from '../services/DashboardServices';
import { Categorie } from '../../models/Categorie';

const useDashboard = () => {
    const [categories, setCategories] = useState<Categorie[] | []>([]);
    const [errorDashboard, setErrorDashboard] = useState({
        error: false,
        message: '',
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getInitialData();
    }, []);

    const getInitialData = () => {
        try {
            dashboardServices.getInitialData().then((res) => {
                setCategories([
                    { id: 1, name: 'Clientes', page: 'ClientsScreen', icon: 'people-outline', data: res.clients },
                    { id: 2, name: 'Mascotas', page: 'PetsScreen', icon: 'paw-outline', data: res.pets },
                    { id: 3, name: 'Visitas', page: 'PetsScreen', icon: 'document-outline', data: res.visits },
                ]);
            });
            setIsLoading(false);
        } catch (error) {
            setErrorDashboard({
                error: true,
                message: 'No se pudo obtener datos iniciales.',
            });
            setIsLoading(false);
        }
    };

    return { getInitialData, categories, errorDashboard, isLoading };
};

export default useDashboard;
