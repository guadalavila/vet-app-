import React, { ReactNode, useState } from 'react';

export const RemoteConfigContext = React.createContext<{
    activeSurgery: boolean;
    setActiveSurgery: React.Dispatch<boolean>;
    activeVaccine: boolean;
    setActiveVaccine: React.Dispatch<boolean>;
    appInMaintenance: boolean;
    setAppInMaintenance: React.Dispatch<boolean>;
}>({
    activeSurgery: true,
    setActiveSurgery: () => {},
    activeVaccine: true,
    setActiveVaccine: () => {},
    appInMaintenance: false,
    setAppInMaintenance: () => {},
});

interface RemoteConfigContextProviderProps {
    children: ReactNode;
}

export const RemoteConfigContextProvider: React.FC<RemoteConfigContextProviderProps> = ({ children }) => {
    const [activeSurgery, setActiveSurgery] = useState(true);
    const [activeVaccine, setActiveVaccine] = useState(true);
    const [appInMaintenance, setAppInMaintenance] = useState(false);

    return (
        <RemoteConfigContext.Provider
            value={{
                activeSurgery: activeSurgery,
                setActiveSurgery: setActiveSurgery,
                activeVaccine: activeVaccine,
                setActiveVaccine: setActiveVaccine,
                appInMaintenance: appInMaintenance,
                setAppInMaintenance: setAppInMaintenance,
            }}>
            {children}
        </RemoteConfigContext.Provider>
    );
};
