import React, { ReactNode, useState } from 'react';
import { Pathology } from '../models/Pathology';

export const PathologiesContext = React.createContext<{
    pathologies: Pathology[],
    setPathologies: React.Dispatch<Pathology[]>,
}>({
    pathologies: [],
    setPathologies: () => {},
});

interface PathologiesContextProviderProps {
    children: ReactNode;
}

export const PathologiesContextProvider: React.FC<PathologiesContextProviderProps> = ({ children }) => {
    const [pathologies, setPathologies] = useState<Pathology[]>([]);

    return (
        <PathologiesContext.Provider value={{ pathologies: pathologies, setPathologies: setPathologies }}>
            {children}
        </PathologiesContext.Provider>
    );
};
