import { useContext } from 'react';
import { ErrorContext } from '../../contexts/ErrorContext';
import { ErrorCustom } from '../../models/ErrorCustom';

const useError = () => {
    const { error, setError, removeError } = useContext(ErrorContext);

    const setErrorApp = (error_: ErrorCustom) => {
        setError(error_);
    };

    return { setErrorApp, error, removeError };
};

export default useError;
