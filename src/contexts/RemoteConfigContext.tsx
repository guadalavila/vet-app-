import React, { ReactNode, useState } from 'react';

export const RemoteConfigContext = React.createContext<{
    activeSurgery: boolean;
    setActiveSurgery: React.Dispatch<boolean>;
    activeVaccine: boolean;
    setActiveVaccine: React.Dispatch<boolean>;
    appInMaintenance: boolean;
    setAppInMaintenance: React.Dispatch<boolean>;
    bannerText: string;
    setBannerText: React.Dispatch<string>;
}>({
    activeSurgery: true,
    setActiveSurgery: () => {},
    activeVaccine: true,
    setActiveVaccine: () => {},
    appInMaintenance: false,
    setAppInMaintenance: () => {},
    bannerText: '',
    setBannerText: () => {},
});

interface RemoteConfigContextProviderProps {
    children: ReactNode;
}

export const RemoteConfigContextProvider: React.FC<RemoteConfigContextProviderProps> = ({ children }) => {
    const [activeSurgery, setActiveSurgery] = useState(true);
    const [activeVaccine, setActiveVaccine] = useState(true);
    const [appInMaintenance, setAppInMaintenance] = useState(false);
    const [bannerText, setBannerText] = useState('');

    return (
        <RemoteConfigContext.Provider
            value={{
                activeSurgery: activeSurgery,
                setActiveSurgery: setActiveSurgery,
                activeVaccine: activeVaccine,
                setActiveVaccine: setActiveVaccine,
                appInMaintenance: appInMaintenance,
                setAppInMaintenance: setAppInMaintenance,
                bannerText: bannerText,
                setBannerText: setBannerText,
            }}>
            {children}
        </RemoteConfigContext.Provider>
    );
};
