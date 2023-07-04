import { useContext } from 'react';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../../contexts/AuthContext';

const useAuth = () => {
    const { setIsAuth, setUser, setIsLoading, isLoading } = useContext(AuthContext);

    const loginWithEmailAndPass = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            const user = await auth().signInWithEmailAndPassword(email, password);
            setIsAuth(true);
            setUser(user);
            console.log(user);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };
    return { loginWithEmailAndPass, isLoading };
};
export default useAuth;
