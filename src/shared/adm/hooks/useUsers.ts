import { useEffect, useState } from 'react';
import useError from '../../hooks/useError';
import { User } from '../../../models/User';
import usersServices from '../../../services/UsersServices';

const useUsers = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<User[]>();
    const { setErrorApp } = useError();
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        try {
            usersServices.getUsers().then((res) => {
                setUsers(res);
                setLoading(false);
            });
        } catch (error) {
            setErrorApp({
                isError: true,
                message: 'Obetener Usuarios: Ocurrio un error',
                type: 'error',
            });
            setLoading(false);
        }
    };

    const refreshUsers = () => {
        setRefreshing(true);
        try {
            usersServices.getUsers().then((res) => {
                setUsers(res);
                setRefreshing(false);
            });
        } catch (error) {
            setErrorApp({
                isError: true,
                message: 'Obtener Usuarios: Ocurrio un error',
                type: 'error',
            });
            setRefreshing(false);
        }
    };

    return { loading, users, refreshUsers, refreshing };
};

export default useUsers;
