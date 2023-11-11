import remoteConfig from '@react-native-firebase/remote-config';
import { useContext, useEffect } from 'react';
import { RemoteConfigContext } from '~contexts/RemoteConfigContext';

const useRemoteConfig = () => {
    const { setActiveSurgery, setActiveVaccine, setAppInMaintenance, setBannerText } = useContext(RemoteConfigContext);
    useEffect(() => {
        remoteConfig()
            .setConfigSettings({
                minimumFetchIntervalMillis: 100,
            })
            .then(() => remoteConfig().fetchAndActivate())
            .then((fetchedRemotely) => {
                if (fetchedRemotely) {
                    const parameters = remoteConfig().getAll();
                    setActiveSurgery(parameters.active_surgery.asBoolean());
                    setActiveVaccine(parameters.active_vaccine.asBoolean());
                    setAppInMaintenance(parameters.app_in_maintenance.asBoolean());
                    setBannerText(parameters.banner_text.asString());
                } else {
                    console.log(
                        'No configs were fetched from the backend, and the local configs were already activated',
                    );
                }
            });
    }, []);
};

export default useRemoteConfig;
