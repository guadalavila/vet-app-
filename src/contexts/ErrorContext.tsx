import React, { ReactNode, useState } from 'react';
import { ErrorCustom } from '../models/ErrorCustom';

const initialState: ErrorCustom = {
    isError: false,
    message: '',
};

export const ErrorContext = React.createContext<{
    error: ErrorCustom,
    setError: React.Dispatch<ErrorCustom>,
    removeError: React.Dispatch<void>,
}>({
    error: initialState,
    setError: () => {},
    removeError: () => {},
});

interface ErrorContextProviderProps {
    children: ReactNode;
}

export const ErrorContextProvider: React.FC<ErrorContextProviderProps> = ({ children }) => {
    const [error, setError] = useState<ErrorCustom>(initialState);

    const removeError = () => {
        setError(initialState);
    };

    return (
        <ErrorContext.Provider value={{ setError: setError, error: error, removeError: removeError }}>
            {children}
        </ErrorContext.Provider>
    );
};
