import { useEffect, useState } from 'react';
import useError from '../../hooks/useError';
import { User } from '../../../models/User';
import usersServices from '../../../services/UsersServices';

const useUsers = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<User[]>();
    const { setErrorApp } = useError();

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

    return { loading, users };
};

export default useUsers;
