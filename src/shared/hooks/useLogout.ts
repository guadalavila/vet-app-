import { useEffect } from 'react';
import { appEventsHandler } from '~App';
import useAuth from './useAuth';

const useLogout = () => {
    const { logout } = useAuth();
    useEffect(() => appEventsHandler.listen('logoutUser', () => logout()), []);
};
export default useLogout;
