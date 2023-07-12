import React, { ReactNode, useState } from 'react';
import { Condition } from '../models/Condition';

export const ConditionsContext = React.createContext<{
    conditionsApp: Condition[],
    setConditionsApp: React.Dispatch<Condition[]>,
}>({
    conditionsApp: [],
    setConditionsApp: () => {},
});

interface ConditionsContextProviderProps {
    children: ReactNode;
}

export const ConditionsContextProvider: React.FC<ConditionsContextProviderProps> = ({ children }) => {
    const [conditionsApp, setConditionsApp] = useState<Condition[]>([]);

    return (
        <ConditionsContext.Provider value={{ conditionsApp: conditionsApp, setConditionsApp: setConditionsApp }}>
            {children}
        </ConditionsContext.Provider>
    );
};
