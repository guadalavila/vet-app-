import { useState } from 'react';
import { User } from '~models/User';
import usersServices from '~services/UsersServices';
import useError from '~shared/hooks/useError';

const useUpdateUser = () => {
    const [loading, setLoading] = useState(false);
    const { setErrorApp } = useError();

    const updateUser = (user: User) => {
        setLoading(true);
        return new Promise<User>((resolve, reject) => {
            try {
                usersServices.updateUser(user).then((res) => {
                    resolve(res);
                    setLoading(false);
                });
            } catch (error) {
                reject(error);
                setLoading(false);
                setErrorApp({
                    isError: true,
                    type: 'error',
                    message: String(error) ?? 'Actualizar Usuario: Ocurrió un error',
                });
            }
        });
    };

    return { updateUser, loading };
};

export default useUpdateUser;
