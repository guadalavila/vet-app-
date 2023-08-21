import React, { ReactNode, useState } from 'react';

import { Veterinary } from '~models/Veterinary';

export const VetsContext = React.createContext<{
    vetsApp: Veterinary[];
    setVetsApp: React.Dispatch<Veterinary[]>;
}>({
    vetsApp: [],
    setVetsApp: () => {},
});

interface VetsContextProviderProps {
    children: ReactNode;
}

export const VetsContextProvider: React.FC<VetsContextProviderProps> = ({ children }) => {
    const [vetsApp, setVetsApp] = useState<Veterinary[]>([]);

    return <VetsContext.Provider value={{ vetsApp: vetsApp, setVetsApp: setVetsApp }}>{children}</VetsContext.Provider>;
};
