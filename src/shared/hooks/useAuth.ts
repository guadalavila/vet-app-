import { useContext } from 'react';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../../contexts/AuthContext';
import authServices from '../services/AuthServices';

const useAuth = () => {
    const { setIsAuth, setUser, setIsLoading, isLoading, setUserData } = useContext(AuthContext);

    const loginWithEmailAndPass = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            const user = await auth().signInWithEmailAndPassword(email, password);
            const data = await authServices.login(email.toLowerCase(), password);
            setIsAuth(true);
            setUser(user);
            setUserData(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    const logout = () => {
        setIsAuth(false);
    };

    return { loginWithEmailAndPass, isLoading, logout };
};
export default useAuth;
