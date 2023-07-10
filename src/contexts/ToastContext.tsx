import React, { ReactNode, useState } from 'react';

type ToastProps = {
    isError: boolean,
    message: string,
    type: 'success' | 'warning' | 'error' | 'default',
};

export const ToastContext = React.createContext<{
    setToast: React.Dispatch<ToastProps>,
    resetToast: React.Dispatch<void>,
    toast: ToastProps,
}>({
    setToast: () => {},
    resetToast: () => {},
    toast: {
        isError: false,
        message: '',
        type: 'default',
    },
});

interface ToastContextProviderProps {
    children: ReactNode;
}

export const ToastContextProvider: React.FC<ToastContextProviderProps> = ({ children }) => {
    const [toast, setToast] = useState<ToastProps>({
        isError: false,
        message: '',
        type: 'default',
    });

    const resetState = () => {
        setToast({
            isError: false,
            message: '',
            type: 'default',
        });
    };
    return (
        <ToastContext.Provider value={{ setToast: setToast, toast: toast, resetToast: resetState }}>
            {children}
        </ToastContext.Provider>
    );
};
