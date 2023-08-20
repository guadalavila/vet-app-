import { NewVaccine, Vaccine } from '../models/Vaccine';
import { API_PATHS } from '../shared/utils/apiPaths';
import networkManager from '../shared/utils/axios/NetworkManager';
import { logCrash } from '../shared/utils/firebase/crashlytics';

class VaccineServices {
    constructor() {}

    addVaccine(vaccine: NewVaccine): Promise<Vaccine> {
        return new Promise((resolve, reject) => {
            networkManager
                .post<Vaccine>(API_PATHS.VACCINE, vaccine)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    logCrash(error, 'VaccineServices => addVaccine()', 'POST');
                    reject(error);
                });
        });
    }

    updateVaccine(vaccine: Vaccine): Promise<Vaccine> {
        return new Promise((resolve, reject) => {
            networkManager
                .patch<Vaccine>(API_PATHS.VACCINE, vaccine)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    logCrash(error, 'VaccineServices => updateVaccine()', 'PATCH');
                    reject(error);
                });
        });
    }

    getVaccinesByPet(petId: string): Promise<Vaccine[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<Vaccine[]>(API_PATHS.VACCINE_BY_PET.concat(petId))
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    logCrash(error, `VaccineServices => getVaccinesByPet() with petId: ${petId}}`, 'GET');
                    reject(error);
                });
        });
    }
}
const vaccineServices = new VaccineServices();
export default vaccineServices;
